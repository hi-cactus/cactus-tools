export type FUZZY_OPTIONS = {
    key: string;
    keys?: string[];
};

export declare function fuzzy(
    text: string,
    parents: { [key: string]: any }[],
    options: FUZZY_OPTIONS
): { [key: string]: any }[];
