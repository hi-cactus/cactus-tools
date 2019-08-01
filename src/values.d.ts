export interface Arrayish<T> {
    length: number;
    [x: number]: T;
}
export interface Objectish<T> {
    [x: string]: T;
}

export declare function values(value: any[] | object): any[];
