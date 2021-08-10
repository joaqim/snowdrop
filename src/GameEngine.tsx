import { Engine, Entity, IEngine, SignatureBuilder, System } from "@joaqim/ecs";
import React, { useEffect, useReducer } from "react";
import { Base, Model } from "../../primed-model/dist";
import { ActionsUnion, createActionPayload } from "./Actions";

@Model
export class Position extends Base<Position> {
  x!: number;
  y!: number;
}

class RenderSystem extends System {
  update(engine: IEngine, delta: number): any {
    let elements = {};
    for (let entity of this.signature.entities) {
      elements = { ...elements, [entity.id]: <div>{entity.id}</div> };
      //elements.push(<div key={entity.id}>{entity.id}</div>);
      // elements = {
      //   ...elements,
      //   [entity.id]: { value: entity.id },
      // };
    }
    return elements;
    //return { RenderSystem: { elements, render: RenderSystem.render } };
  }

  static render(elements: any) {
    return Object.entries(elements).map(([key, value]) => {
      console.log(key);
      return <div key={key}>{key}</div>;
    });
  }

  signature: any;
  onAttach(engine: Engine) {
    super.onAttach(engine);
    this.signature = new SignatureBuilder(engine).include(Position).build();
  }
}

class GameEngine {
  engine = new Engine({
    entityMap: {
      entities: [
        new Entity({
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

  update(delta: number) {
    return this.engine.update(delta);
  }
}

export default GameEngine;
