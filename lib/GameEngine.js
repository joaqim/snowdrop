"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
const tslib_1 = require("tslib");
const ecs_1 = require("@joaqim/ecs");
const react_1 = tslib_1.__importDefault(require("react"));
const dist_1 = require("../../primed-model/dist");
let Position = class Position extends dist_1.Base {
    x;
    y;
};
Position = tslib_1.__decorate([
    dist_1.Model
], Position);
exports.Position = Position;
class RenderSystem extends ecs_1.System {
    update(engine, delta) {
        let elements = {};
        for (let entity of this.signature.entities) {
            elements = { ...elements, [entity.id]: react_1.default.createElement("div", null, entity.id) };
        }
        return elements;
    }
    static render(elements) {
        return Object.entries(elements).map(([key, value]) => {
            console.log(key);
            return react_1.default.createElement("div", { key: key }, key);
        });
    }
    signature;
    onAttach(engine) {
        super.onAttach(engine);
        this.signature = new ecs_1.SignatureBuilder(engine).include(Position).build();
    }
}
class GameEngine {
    engine = new ecs_1.Engine({
        entityMap: {
            entities: [
                new ecs_1.Entity({
                    id: "Entity 1",
                    components: {
                        Position: new Position({ x: 100, y: 100 }),
                        classes: { Position },
                    },
                }),
            ],
        },
        systems: [new RenderSystem()],
    }).awake();
    update(delta) {
        return this.engine.update(delta);
    }
}
exports.default = GameEngine;
