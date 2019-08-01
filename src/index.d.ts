declare namespace utility {
    interface Arrayish<T> {
        length: number;
        [key: number]: T;
    }
    interface Objectish<T> {
        [x: string]: T;
    }

    interface FUZZY_OPTIONS {
        key: string;
        keys?: string[];
    }

    function pick(parent: Objectish<any>, props?: string[]): Objectish<any>;
    function isString(value: any): value is string;
    function fuzzy(
        text: string,
        parents: Objectish<any>[],
        options: FUZZY_OPTIONS
    ): Objectish<any>[];
}

export = utility;
