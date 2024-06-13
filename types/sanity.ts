import {type Block} from './portableText'

export type SanityHome =
{
    _type?: string;
    modules: SanityModule[];
    seo: SanitySEO;
}

export type SanityPage =
{
    _type?: string;
    slug?: string;
    title: string;
    sections: PageSection[];
    seo: SanitySEO;
}

export type PageSection =
{
    _key?: string;
    _type?: string;
    anchorId?: string;
    body: (SanityModule | Block)[];
    color?: boolean;
    paddingTop?: boolean;
}

export type SanitySettings =
{
    _type?: string;
    seo: SanitySEO;
    menu: {links: SanityLink[]};
    notFoundPage: SanityNotFoundPage;
}

export type SanityLink = SanityLinkExternal | SanityLinkInternal | SanityLinkAnchor;

export type SanityLinkExternal =
{
    _key?: string;
    _type?: string;
    targetBlank?: boolean;
    url: string;
    title: string;
    underline?: boolean;
    icon?: string;
    iconTrailing?: boolean;
}

export type SanityLinkInternal =
{
    _key?: string;
    _type?: string;
    documentType: string;
    slug?: string;
    title: string;
    underline?: boolean;
    icon?: string;
    iconTrailing?: boolean;
}

export type SanityLinkAnchor =
{
    _key?: string;
    _type?: string;
    title?: string;
    anchorId?: string;
    underline?: boolean;
    icon?: string;
    iconTrailing?: boolean;
}

export type SanityNotFoundPage =
{
    body?: Block[];
    title: string;
}

export type SanitySEO =
{
    _type?: string;
    title?: string;
    description?: string;
}

export type SanityModule =
{
    _key?: string;
    _type?: string;
}

export type SanityModuleAccordion = {
    groups: {
        _key?: string;
        title: string;
        body: any[];
    }[]
} & SanityModule

export type SanityModuleArticle = {
    groups: {
        _key?: string;
        title: string;
        slug: string;
        body: Block[];
    }[]
} & SanityModule

export type SanityModuleForm = {
    body: Block[],
    form: {
        formDropFormId: string;
        turnstileSiteKey: string;
        prevLabel: string;
        nextLabel: string;
        submitLabel: string;
        loadingLabel: string;
        successMessage: string;
        errorMessage: string;
        fields: FormField[];
    }
} & SanityModule

type FormField =
    | FormCheckbox
    | FormInput
    | FormRadio

export type FormCheckbox = {
    _key?: string;
    _type?: string;
    name: string;
    label: string;
    required?: boolean;
    values: {
        value: string;
        label: string;
    }[];
}

export type FormInput = {
    _key?: string;
    _type?: string;
    name: string;
    label: string;
    required?: boolean;
    variant: 'input' | 'textarea';
    type: (
        | 'text'
        | 'number'
        | 'email'
        | 'tel'
        | 'date'
        | 'password'
    );
    floatingLabel?: boolean;
    min?: number;
    max?: number;
}

export type FormRadio = {
    _key?: string;
    _type?: string;
    name: string;
    required?: boolean;
    values: {
       value: string;
       label: string; 
    }[];
    multiple?: boolean;
}

export type Image = WithAlt<{
    _type?: string;
    asset: Record<string, any>;
    hotspot?: Record<string, any>;
}>;

type WithAlt<T> = {alt?: string} & T;