"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntity = exports.createEntityTypesafe = exports.TypedComponent = void 0;
class Component {
    properties;
}
function TypedComponent(properties) {
    const typedClass = class TypedComponent extends Component {
    };
    typedClass.properties = { ...properties };
    return typedClass;
}
exports.TypedComponent = TypedComponent;
function createEntityTypesafe(definition) { }
exports.createEntityTypesafe = createEntityTypesafe;
function createEntity(definition) { }
exports.createEntity = createEntity;
