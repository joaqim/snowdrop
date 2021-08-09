"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleClass = void 0;
const tslib_1 = require("tslib");
const primed_model_1 = require("@joaqim/primed-model");
let ExampleClass = class ExampleClass extends primed_model_1.Base {
    dummy;
    engine;
};
ExampleClass = tslib_1.__decorate([
    primed_model_1.Model
], ExampleClass);
exports.ExampleClass = ExampleClass;
