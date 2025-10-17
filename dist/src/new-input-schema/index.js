const input_schema = {
    $id: 'https://apify.com/schemas/v1/input.json',
    title: 'JSON schema of Apify Actor input',
    type: 'object',
    properties: {
        $schema: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        schemaVersion: {
            type: 'integer',
            minimum: 1,
            maximum: 1,
        },
        description: {
            type: 'string',
        },
        type: {
            enum: ['object'],
        },
        required: {
            type: 'array',
            minItems: 0,
            items: { type: 'string' },
            uniqueItems: true,
        },
        additionalProperties: {
            type: 'boolean',
        },
        properties: {
            type: 'object',
            patternProperties: {
                '^': {
                    type: 'string',
                    // oneOf: [
                    //     { $ref: stringEnumProperty.schema.$id },
                    //     { $ref: stringProperty.schema.$id },
                    //     { $ref: integerProperty.schema.$id },
                    //     { $ref: numberProperty.schema.$id },
                    //     { $ref: booleanProperty.schema.$id },
                    //     { $ref: resourceProperty.schema.$id },
                    //     { $ref: resourceArrayProperty.schema.$id },
                    //     { $ref: objectProperty.schema.$id },
                    //     // { $ref: arrayProperty.schema.$id },
                    // ],
                },
            },
        },
    },
    additionalProperties: false,
    required: ['title', 'type', 'properties', 'schemaVersion'],
};
const testInputSchema = {
    type: 'object',
    title: 'Test input schema',
    schemaVersion: 1,
    description: 'This is a test input schema',
    properties: {
        enumProperty: {
            type: 'string',
            title: 'Enum property',
            description: 'This is an enum property',
            editor: 'select',
            enum: ['a', 'b', 'c'],
        },
        anotherEnumProperty: {
            type: 'string',
            title: 'Another enum property',
            description: 'This is another enum property',
            editor: 'select',
            enum: ['d', 'e', 'f'],
        },
        stringProperty: {
            type: 'string',
            title: 'String property',
            description: 'This is a string property',
            editor: 'textfield',
        },
        integerProperty: {
            type: 'integer',
            title: 'Integer property',
            description: 'This is an integer property',
            editor: 'number',
        },
        numberProperty: {
            type: 'number',
            title: 'Number property',
            description: 'This is a number property',
            editor: 'number',
        },
        booleanProperty: {
            type: 'boolean',
            title: 'Boolean property',
            description: 'This is a boolean property',
            editor: 'checkbox',
        },
        resourceProperty: {
            type: 'string',
            title: 'Resource property',
            description: 'This is a resource property',
            editor: 'resourcePicker',
            resourceType: 'dataset',
            resourcePermissions: ['READ', 'WRITE'],
        },
        resourceArrayProperty: {
            type: 'array',
            title: 'Resource array property',
            description: 'This is a resource array property',
            editor: 'resourcePicker',
            resourceType: 'dataset',
            resourcePermissions: ['READ', 'WRITE'],
        },
        objectProperty: {
            type: 'object',
            title: 'Object property',
            description: 'This is an object property',
            editor: 'json',
            properties: {
                meme: {
                    type: 'string',
                    title: 'Meme',
                    description: 'This is a meme',
                    editor: 'select',
                    enum: ['a', 'b', 'c'],
                },
                requiredProp: {
                    type: 'string',
                    title: 'Required prop',
                    description: 'This is a required prop',
                    editor: 'textfield',
                },
                nullableProp: {
                    type: 'integer',
                    title: 'Defaulted prop',
                    description: 'This is a defaulted prop',
                    nullable: true,
                },
            },
            required: ['requiredProp', 'nullableProp'],
        },
    },
};
const testInputSchema2 = {
    title: 'Input schema for the youtube-search-scraper actor',
    description: "Scrape YouTube search results using a search term, or directly input a video, channel, or results page URL. Feel free to try it out with our default settings by hitting &#9655;<b> Start</b>. If you need any help, have a read through <a href='https://blog.apify.com/how-to-scrape-youtube/' target='_blank' rel='noopener'>this tutorial</a>.",
    type: 'object',
    schemaVersion: 1,
    properties: {
        startUrls: {
            title: 'Direct URLs',
            type: 'array',
            description: "Enter a link to a <a href='https://www.youtube.com/c/Apify' target='_blank' rel='noopener'>channel</a>. You can also import a CSV file or Google Sheet with a list of URLs.<br>",
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
            description: 'Limit the number of regular videos (not streams, not shorts) you want to get from one channel. If you use several urls on the input you will get this number for each channel.',
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
            pattern: '^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])(T[0-2]\\d:[0-5]\\d(:[0-5]\\d)?(\\.\\d+)?Z?)?$|^(\\d+)\\s*(minute|hour|day|week|month|year)s?$',
            description: "Only posts uploaded after or on this date will be scraped. Alternatively, specify how old the scraped videos should be in days. Putting <code>1 day</code> will get you only today's posts, <code>2 days</code> - yesterday's and today's, and so on. Note, that if you select this, sorting parameter will be auto-reset to NEWEST",
            sectionCaption: 'Channel sorting/filtering',
            sectionDescription: "Date filtering works only partially, it's based on the date labels like under video thumbnails. It doesn't work for YouTube shorts, only regular videos. If you want exact date filtering or to filter shorts, check out <a href='https://apify.com/streamers/youtube-scraper' target='_blank' rel='noopener'>this scraper</a>.",
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
};
export {};
//# sourceMappingURL=index.js.map