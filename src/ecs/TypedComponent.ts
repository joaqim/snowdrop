class Component<TProperties extends {} = {}> {
  properties: TProperties;
}

type Constructor<T> = { new (...args: any[]): T };
export type TypedComponentConfigVal<T> = T extends Component<infer TProperties>
  ? { type: Constructor<T>; id?: string; entity?: string } & TProperties
  : never;
export type TypedEntityConfig<
  TComponents extends { readonly [K in keyof object]: any }
> = {
  id?: string;
  tags?: string[];
  c: {
    [K in keyof TComponents]: TypedComponentConfigVal<TComponents[K]>;
  };
};

export function TypedComponent<TProperties extends {}>(
  properties?: TProperties
): Constructor<Component<TProperties>> & Constructor<Component & TProperties> {
  // @ts-ignore
  const typedClass = class TypedComponent extends Component {};
  // @ts-ignore
  typedClass.properties = { ...properties };
  // @ts-ignore
  return typedClass;
}

export function createEntityTypesafe<
  T extends { readonly [K in keyof object]: any }
>(_definition: TypedEntityConfig<T>): void {}

export function createEntity<T extends { readonly [K in keyof object]: any }>(
  definition: TypedEntityConfig<T>
): void {}
