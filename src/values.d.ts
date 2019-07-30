export type Arrayish<T> = { length: number; [x: number]: T };

export declare function values(value: any[] | object): Arrayish<any>;
