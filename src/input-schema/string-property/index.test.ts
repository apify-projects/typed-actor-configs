import { expectTypeOf, test } from 'vitest';
import { stringPropertySchema } from './index.ts';
import z from 'zod';
import { Satisfies } from '../../utility-types/satisfies.ts';

type BaseStringPropertyInput = {
    type: 'string';
    title: string;
    description: string;
    nullable?: boolean;
    editor: 'textfield' | 'javascript' | 'python' | 'textarea' | 'datepicker' | 'hidden' | 'fileupload';
    isSecret?: false;
    sectionCaption?: string;
    sectionDescription?: string;
};

type NonSecretStringPropertyInput = {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    isSecret?: false;
} & (DatePickerStringPropertyInput | NonDatePickerStringPropertyInput);

type DatePickerStringPropertyInput = {
    editor: 'datepicker';
    dateType?: 'absolute' | 'relative' | 'absoluteOrRelative';
};
type NonDatePickerStringPropertyInput = {
    editor: 'javascript' | 'python' | 'textfield' | 'textarea' | 'hidden' | 'fileupload';
};

type SecretAdditionalProperties = {
    prefill?: string;
    example?: string;
    editor: 'textfield' | 'textarea' | 'hidden';
    isSecret: true;
};

type StringPropertyInputType = BaseStringPropertyInput & (NonSecretStringPropertyInput | SecretAdditionalProperties);

test('stringPropertySchema', () => {
    type actual = z.infer<typeof stringPropertySchema>;
    type expected = StringPropertyInputType;

    // expectTypeOf<expected>().toExtend<actual>();
});

test('stringPropertySchema.nullable', () => {
    const appliedSchema = {
        title: 'ID',
        type: 'string' as const,
        description: 'ID code of the container, Bill of lading, or booking number to track.',
        editor: 'textfield' as const,
        nullable: true as const,
    };
    type actual = z.infer<typeof stringPropertySchema>;
    type expected = typeof appliedSchema;
    type test = Satisfies<typeof appliedSchema, actual>;
});
