import {type Block} from './portableText'

export type SanityHome =
{
    _type: 'home';
    modules: SanityModule[];
    seo: SanitySEO;
}

export type SanityPage =
{
    _type: 'page';
    slug?: string;
    title: string;
    sections: PageSection[];
    seo: SanitySEO;
}

export type PageSection =
{
    anchorId?: string;
    body: (SanityModule | Block)[];
    paddingTop?: boolean;
}

export type SanitySettings =
{
    _type: 'settings';
    seo: SanitySEO;
    menu: {links: SanityLink[]};
    notFoundPage: SanityNotFoundPage;
}

export type SanityLink = SanityLinkExternal | SanityLinkInternal;

export type SanityLinkExternal =
{
    _key: string;
    _type: 'linkExternal';
    targetBlank?: boolean;
    url: string;
    title: string;
}

export type SanityLinkInternal =
{
    _key: string;
    _type: 'linkInternal';
    documentType: string;
    slug?: string;
    title: string;
}

export type SanityLinkAnchor =
{
    _key: string;
    _type: 'linkCta';
    title?: string;
    anchorId?: string;
}

export type SanityNotFoundPage =
{
    body?: Block[];
    title: string;
}

export type SanitySEO =
{
    _type: 'seo';
    title?: string;
    description?: string;
}

export type SanityModule =
{
    _key?: string;
    _type: string;
}

export type SanityModuleAccordion = {
    groups: {
        _key: string;
        title: string;
        body: any[];
    }[]
} & SanityModule

export type SanityModuleArticle = {
    groups: {
        _key: string;
        title: string;
        slug: string;
        body: Block[];
    }[]
} & SanityModule

export type SanityModuleForm = {
    form: {
        formDropFormId: string;
        turnstileSiteKey: string;
        prevLabel: string;
        nextLabel: string;
        submitLabel: string;
        loadingLabel: string;
        successMessage: string;
        errorMessage: string;
        // steps:  
        // fields: 
    }
} & SanityModule

export type FormCheckbox = {
    _type: 'form.checkbox';
    name: string;
    label: string;
    required?: boolean;
    values: [string, string];
}

export type FormInput = {
    _type: 'form.input';
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
    _type: 'form.radio';
    name: string;
    required?: boolean;
    values: {
       value: string;
       label: string; 
    }[]
}

export type Image = WithAlt<{
    asset: Record<string, any>;
    hotspot?: Record<string, any>;
}>;

type WithAlt<T> = {alt?: string} & T;