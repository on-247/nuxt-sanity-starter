export type TypeValue<T> = {
    value: T;
}

export type Block<
    K = string,
    T = 'span',
    M = any[],
    S = string
> = { 
    _type: 'block';
    children: {
        _key: K;
        _type: T;
        marks?: M;
        style: S;
    }[];
}