export declare function createActionPayload<TypeAction, TypePayload>(actionType: TypeAction): (payload: TypePayload) => ActionsWithPayload<TypeAction, TypePayload>;
export declare function createAction<TypeAction>(actionType: TypeAction): () => ActionsWithoutPayload<TypeAction>;
export interface ActionsWithPayload<TypeAction, TypePayload> {
    type: TypeAction;
    payload: TypePayload;
}
export interface ActionsWithoutPayload<TypeAction> {
    type: TypeAction;
}
interface ActionCreatorsMapObject {
    [key: string]: (...args: any[]) => ActionsWithPayload<any, any> | ActionsWithoutPayload<any>;
}
export declare type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export {};
