declare class Component<TProperties extends {} = {}> {
    properties: TProperties;
}
declare type Constructor<T> = {
    new (...args: any[]): T;
};
declare type TypedComponentConfigVal<T> = T extends Component<infer TProperties> ? {
    type: Constructor<T>;
    id?: string;
    entity?: string;
} & TProperties : never;
declare type TypedEntityConfig<TComponents extends {
    readonly [K in keyof object]: any;
}> = {
    id?: string;
    tags?: string[];
    c: {
        [K in keyof TComponents]: TypedComponentConfigVal<TComponents[K]>;
    };
};
export declare function TypedComponent<TProperties extends {}>(properties?: TProperties): Constructor<Component<TProperties>> & Constructor<Component & TProperties>;
export declare function createEntityTypesafe<T extends {
    readonly [K in keyof object]: any;
}>(definition: TypedEntityConfig<T>): void;
export declare function createEntity<T extends {
    readonly [K in keyof object]: any;
}>(definition: TypedEntityConfig<T>): void;
export {};
