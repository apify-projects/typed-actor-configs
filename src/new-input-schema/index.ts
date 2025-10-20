import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import stringEnumProperty, {
    type StringEnumProperty,
    type InferEnumProperty,
    type StringEnumDependencies,
} from './json-schemas/string-enum-property.ts';
import stringProperty, {
    type InferStringProperty,
    type StringProperty,
    type StringPropertyDependencies,
} from './json-schemas/string-property.ts';
import integerProperty, {
    type InferIntegerProperty,
    type IntegerProperty,
    type IntegerPropertyDependencies,
} from './json-schemas/integer-property.ts';
import numberProperty, {
    type InferNumberProperty,
    type NumberProperty,
    type NumberPropertyDependencies,
} from './json-schemas/number-property.ts';
import booleanProperty, {
    type InferBooleanProperty,
    type BooleanProperty,
    type BooleanPropertyDependencies,
} from './json-schemas/boolean-property.ts';
import resourceProperty, {
    type InferResourceProperty,
    type ResourceProperty,
    type ResourcePropertyDependencies,
} from './json-schemas/resource-property.ts';
import resourceArrayProperty, {
    type InferResourceArrayProperty,
    type ResourceArrayProperty,
    type ResourceArrayPropertyDependencies,
} from './json-schemas/resource-array-property.ts';
import objectProperty, {
    type InferObjectProperty,
    type ObjectProperty,
    type ObjectPropertyDependencies,
} from './json-schemas/object-property.ts';
import arrayProperty, {
    type InferArrayProperty,
    type ArrayProperty,
    type ArrayPropertyDependencies,
} from './json-schemas/array-property.ts';
import { DefaultedFields, RequiredKeys, Resolve, TrimTitleAndDescription } from './json-schemas/types.ts';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { diffConfigurations } from '../versioning/config-diff/index.ts';
import { greenBG, yellowBG } from '../text-coloring/index.ts';

type InputSchema = {
    title: string;
    schemaVersion: 1;
    description?: string;
    type: 'object';
    properties: {
        [x: string]:
            | StringEnumProperty
            | StringProperty
            | IntegerProperty
            | NumberProperty
            | BooleanProperty
            | ResourceProperty
            | ResourceArrayProperty
            | ObjectProperty
            | ArrayProperty;
    };
    required?: string[];
};

type MinimalInputSchema = TrimTitleAndDescription<InputSchema>;
type requiredKeys<T extends MinimalInputSchema> = T extends { required: (infer R)[] } ? R : '';

export type InferInput<T extends MinimalInputSchema> = Resolve<
    {
        -readonly [Key in keyof T['properties'] & (requiredKeys<T> | DefaultedFields<T>)]: inferProperty<
            T['properties'][Key]
        >;
    } & {
        -readonly [Key in Exclude<keyof T['properties'], requiredKeys<T> | DefaultedFields<T>>]?: inferProperty<
            T['properties'][Key]
        >;
    }
>;

type inferProperty<T extends MinimalInputSchema['properties'][string]> = T extends StringEnumProperty
    ? InferEnumProperty<T>
    : T extends IntegerProperty
    ? InferIntegerProperty<T>
    : T extends NumberProperty
    ? InferNumberProperty<T>
    : T extends BooleanProperty
    ? InferBooleanProperty<T>
    : T extends ResourceProperty
    ? InferResourceProperty<T>
    : T extends ResourceArrayProperty
    ? InferResourceArrayProperty<T>
    : T extends ArrayProperty
    ? InferArrayProperty<T>
    : T extends StringProperty // last so it doesn't override other string types
    ? InferStringProperty<T>
    : T extends ObjectProperty
    ? InferObjectProperty<T>
    : never;

const testInputSchema = {
    title: 'Input schema for the youtube-search-scraper actor',
    description:
        "Scrape YouTube search results using a search term, or directly input a video, channel, or results page URL. Feel free to try it out with our default settings by hitting &#9655;<b> Start</b>. If you need any help, have a read through <a href='https://blog.apify.com/how-to-scrape-youtube/' target='_blank' rel='noopener'>this tutorial</a>.",
    type: 'object',
    schemaVersion: 1,
    properties: {
        searchQueries: {
            title: 'Search terms',
            type: 'array',
            editor: 'stringList',
            description: "Enter search terms just like you would enter it in YouTube's search bar.",
            prefill: ['Crawlee'],
            nullable: false,
        },
        maxResults: {
            title: 'Maximum videos per search term',
            type: 'integer',
            description:
                'Limit the number of videos you want to crawl. If you scrape a channel, acts as a limit for regular videos.',
            minimum: 0,
            default: 0,
            maximum: 999999,
            prefill: 10,
            unit: 'Videos',
        },
        maxResultsShorts: {
            title: 'Maximum shorts per search term',
            type: 'integer',
            description: 'Limit the number of Shorts videos you want to crawl.',
            minimum: 0,
            maximum: 999999,
            default: 0,
            prefill: 0,
            unit: 'Videos',
        },
        maxResultStreams: {
            title: 'Maximum streams per search term',
            type: 'integer',
            description: 'Limit the number of Stream videos you want to crawl.',
            minimum: 0,
            maximum: 999999,
            default: 0,
            prefill: 0,
            unit: 'Videos',
        },
        startUrls: {
            title: 'Direct URLs',
            type: 'array',
            description:
                "Enter a link to a <a href='https://www.youtube.com/watch?v=xObhZ0Ga7EQ' target='_blank' rel='noopener'>YouTube video</a>, <a href='https://www.youtube.com/c/Apify' target='_blank' rel='noopener'>channel</a>, <a href='https://www.youtube.com/playlist?list=PLObrtcm1Kw6PmbXg8bmfJN-o2Hgx8sidf' target='_blank' rel='noopener'>playlist</a>, <a href='https://www.youtube.com/hashtag/apify' target='_blank' rel='noopener'>hashtag</a> or <a href='https://www.youtube.com/results?search_query=crawlee' target='_blank' rel='noopener'>search results page</a>. You can also import a CSV file or Google Sheet with a list of URLs.<br><b>Note:</b> Input from <i>Search term</i> will be ignored when using this option. If you only want to scrape shorts/streams, set Maximum search results to 0, otherwise they represented number of regular videos requested",
            default: [],
            editor: 'requestListSources',
            sectionCaption: '🔗 Direct URLs',
        },
        downloadSubtitles: {
            title: 'Download subtitles',
            type: 'boolean',
            description:
                'If set to true, the scraper will download subtitles for the video and convert them to .srt format.',
            sectionCaption: '🖹 Download YouTube transcript',
        },
        saveSubsToKVS: {
            title: 'Save subtitles to key-value store',
            type: 'boolean',
            description:
                'If set to true, the scraper will save the downloaded subtitles to the key-value store. <br><b>Note:</b> <i>Download subtitles</i> must be turned on for this option to work.',
        },
        subtitlesLanguage: {
            title: 'Subtitle language',
            type: 'string',
            description:
                'Language to download subtitles in.<br><b>Note:</b> <i>Download subtitles</i> must be turned on for this option to work.',
            editor: 'select',
            default: 'en',
            enum: ['any', 'en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'nl', 'pt', 'ru'],
            enumTitles: [
                'Any',
                'English',
                'German',
                'Spanish',
                'French',
                'Italian',
                'Japanese',
                'Korean',
                'Holland',
                'Portuguese',
                'Russian',
            ],
        },
        preferAutoGeneratedSubtitles: {
            title: 'Prefer automatically generated subtitles.',
            description:
                'If set to true, automatically generated subtitles are preferred to user subtitles.<b>Note:</b> A subtitle language must be selected for this option to work.',
            type: 'boolean',
        },
        subtitlesFormat: {
            title: 'Subtitle format',
            type: 'string',
            description: 'Select in what format you want to download subtitles',
            editor: 'select',
            default: 'srt',
            enum: ['srt', 'vtt', 'xml', 'plaintext'],
            enumTitles: ['SRT', 'WEBVTT', 'XML', 'plaintext'],
        },
        sortingOrder: {
            title: 'Sorting order',
            type: 'string',
            description: 'Select Youtube sorting parameter for search',
            sectionCaption: '✅ Add filters',
            sectionDescription:
                "Specify the parameters you want to sort/filter videos by. They will be applied as if you manually did so on Youtube's search page. Only works if you provide search term, not for the direct URLs.\n \n ⚠️ Using YouTube filters may mix Shorts with regular videos. This is a limitation on YouTube's side. We recommend checking it manually.",
            editor: 'select',
            enum: ['relevance', 'rating', 'date', 'views'],
            enumTitles: ['Relevance', 'Rating', 'Upload date', 'View count'],
            nullable: true,
        },
        dateFilter: {
            title: 'Date filter',
            type: 'string',
            description: 'Select Youtube upload date filter for search',
            editor: 'select',
            enum: ['hour', 'today', 'week', 'month', 'year'],
            enumTitles: ['Last hour', 'Today', 'This week', 'This month', 'This year'],
            nullable: true,
        },
        videoType: {
            title: 'Video type filter',
            type: 'string',
            description: 'Select Youtube video type filter for search',
            editor: 'select',
            enum: ['video', 'movie'],
            enumTitles: ['Video', 'Film'],
            nullable: true,
        },
        lengthFilter: {
            title: 'Length filter',
            type: 'string',
            description: 'Select Youtube video length filter for search',
            editor: 'select',
            enum: ['under4', 'between420', 'plus20'],
            enumTitles: ['Under 4 minutes', '4-20 minutes', 'Over 20 minutes'],
            nullable: true,
        },
        isHD: {
            title: 'HD',
            type: 'boolean',
            description: 'Will apply the HD filter for search',
            editor: 'checkbox',
            groupCaption: 'Features',
            groupDescription:
                'What you could select under the Features section of the Filtering&Sorting menu on Youtube',
            nullable: true,
        },
        hasSubtitles: {
            title: 'Subtitles/CC',
            type: 'boolean',
            description: 'Will apply the Subtitles/CC filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        hasCC: {
            title: 'Creative Commons',
            type: 'boolean',
            description: 'Will apply the Creative Commons filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        is3D: {
            title: '3D',
            type: 'boolean',
            description: 'Will apply the 3D filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        isLive: {
            title: 'Live',
            type: 'boolean',
            description: 'Will apply the Live filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        isBought: {
            title: 'Purchased',
            type: 'boolean',
            description: 'Will apply the Purchased filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        is4K: {
            title: '4K',
            type: 'boolean',
            description: 'Will apply the 4K filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        is360: {
            title: '360 degrees',
            type: 'boolean',
            description: 'Will apply the 360 degrees filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        hasLocation: {
            title: 'Location',
            type: 'boolean',
            description: 'Will apply the Location filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        isHDR: {
            title: 'HDR',
            type: 'boolean',
            description: 'Will apply the HDR filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        isVR180: {
            title: 'VR180',
            type: 'boolean',
            description: 'Will apply the VR180 filter for search',
            editor: 'checkbox',
            nullable: true,
        },
        oldestPostDate: {
            title: 'Scrape videos published after [date]',
            type: 'string',
            editor: 'datepicker',
            dateType: 'absoluteOrRelative',
            pattern:
                '^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])(T[0-2]\\d:[0-5]\\d(:[0-5]\\d)?(\\.\\d+)?Z?)?$|^(\\d+)\\s*(minute|hour|day|week|month|year)s?$',
            description:
                "Only posts uploaded after or on this date will be scraped. Alternatively, specify how old the scraped videos should be in days. Putting <code>1 day</code> will get you only today's posts, <code>2 days</code> - yesterday's and today's, and so on. Note, that if you select this, sorting parameter will be auto-reset to NEWEST",
            sectionCaption: '📅 Date range (applicable only to scraping by channels URL)',
        },
        sortVideosBy: {
            title: 'Sort by',
            type: 'string',
            editor: 'select',
            enum: ['NEWEST', 'POPULAR', 'OLDEST'],
            description: "Maps to the sorting buttons on the top of the channel's 'Videos', 'Shorts' and 'Live' pages.",
            enumTitles: ['Newest', 'Popular', 'Oldest'],
        },
    },
    required: [],
} as const satisfies InputSchema;

type myTestInput = InferInput<typeof testInputSchema>;

const testInputSchema2 = {
    title: 'Input schema for the youtube-search-scraper actor',
    description:
        "Scrape YouTube search results using a search term, or directly input a video, channel, or results page URL. Feel free to try it out with our default settings by hitting &#9655;<b> Start</b>. If you need any help, have a read through <a href='https://blog.apify.com/how-to-scrape-youtube/' target='_blank' rel='noopener'>this tutorial</a>.",
    type: 'object',
    schemaVersion: 1,
    properties: {
        startUrls: {
            title: 'Direct URLs',
            type: 'array',
            description:
                "Enter a link to a <a href='https://www.youtube.com/c/Apify' target='_blank' rel='noopener'>channel</a>. You can also import a CSV file or Google Sheet with a list of URLs.<br>",
            prefill: [
                {
                    url: 'https://www.youtube.com/@Apify',
                },
            ],
            editor: 'requestListSources',
        },
        maxResults: {
            title: 'Maximum videos per search term',
            type: 'integer',
            description:
                'Limit the number of regular videos (not streams, not shorts) you want to get from one channel. If you use several urls on the input you will get this number for each channel.',
            minimum: 0,
            maximum: 999999,
            default: 0,
            prefill: 10,
            unit: 'Videos',
        },
        maxResultsShorts: {
            title: 'Maximum shorts per search term',
            type: 'integer',
            description: 'Limit the number of Shorts videos you want to get from the channel.',
            minimum: 0,
            maximum: 999999,
            default: 0,
            prefill: 0,
            unit: 'Videos',
        },
        maxResultStreams: {
            title: 'Maximum streams per search term',
            type: 'integer',
            description: 'Limit the number of Stream videos you want to get from the channel.',
            minimum: 0,
            maximum: 999999,
            default: 0,
            prefill: 0,
            unit: 'Videos',
        },
        oldestPostDate: {
            title: 'Scrape videos published after [date]',
            type: 'string',
            editor: 'datepicker',
            dateType: 'absoluteOrRelative',
            pattern:
                '^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])(T[0-2]\\d:[0-5]\\d(:[0-5]\\d)?(\\.\\d+)?Z?)?$|^(\\d+)\\s*(minute|hour|day|week|month|year)s?$',
            description:
                "Only posts uploaded after or on this date will be scraped. Alternatively, specify how old the scraped videos should be in days. Putting <code>1 day</code> will get you only today's posts, <code>2 days</code> - yesterday's and today's, and so on. Note, that if you select this, sorting parameter will be auto-reset to NEWEST",
            sectionCaption: 'Channel sorting/filtering',
            sectionDescription:
                "Date filtering works only partially, it's based on the date labels like under video thumbnails. It doesn't work for YouTube shorts, only regular videos. If you want exact date filtering or to filter shorts, check out <a href='https://apify.com/streamers/youtube-scraper' target='_blank' rel='noopener'>this scraper</a>.",
        },
        sortVideosBy: {
            title: 'Sort by',
            type: 'string',
            editor: 'select',
            description: "Maps to the sorting buttons on the top of the channel's 'Videos', 'Shorts' and 'Live' pages.",
            enum: ['NEWEST', 'POPULAR', 'OLDEST'],
            enumTitles: ['Newest', 'Popular', 'Oldest'],
        },
    },
    required: ['startUrls'],
} as const satisfies InputSchema;

type inferredTestInput = InferInput<typeof testInputSchema2>;

export function defineActorInput<InputConfiguration extends InputSchema>(
    path: `${string}/input_schema.json`,
    inputSchema: InputConfiguration
): InputConfiguration {
    const configExists = existsSync(path);
    if (!configExists) {
        console.log('No input schema found, nothing to check integrity against');
        process.exit(1);
    }
    const previousConfig = JSON.parse(readFileSync(path, 'utf-8'));
    const diff = diffConfigurations(previousConfig, inputSchema);
    if (diff) {
        console.log(`\n${yellowBG('MODIFIED')}: Type-critical fields dont match, check changes`);
        writeFileSync(path, JSON.stringify(inputSchema, null, 4));
        process.exit(1);
    }
    console.log(`\n${greenBG('PASSED')}: No differences found on type-critical fields`);
    return inputSchema;
}
