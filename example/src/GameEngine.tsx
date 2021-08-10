import { Engine, Entity, IEngine, SignatureBuilder, System } from "@joaqim/ecs";
import React, { useEffect, useMemo, useReducer } from "react";
import { ActionsUnion, createAction, createActionPayload } from "./Actions";
import { Base, Model } from "@joaqim/primed-model";
import { GameEngine as Game, Position } from "@joaqim/snowdrop";

interface GameState {
  elements: any;
}

export const ACTION_UPDATE = "ACTION_UPDATE";

export const GameActions = {
  update: createActionPayload<
    typeof ACTION_UPDATE,
    { game: any; delta: number }
  >(ACTION_UPDATE),
};
export type AcceptedActions = ActionsUnion<typeof GameActions>;

export function gameUpdate(
  state: GameState,
  action: AcceptedActions
): GameState {
  switch (action.type) {
    case ACTION_UPDATE:
      const { game, delta } = action.payload;
      return {
        ...state,
        // elements: game.update(delta),
        //elements: [...game.update(delta), ...state.elements],
        // elements: { game.update(delta), ...state.elements },
        // elements: game.update(delta),
      };
  }
}

const GameEngine: React.FC = () => {
  let game = new Game();

  let [state, dispatch] = useReducer(gameUpdate, { elements: {} });

  useEffect(() => {
    //engine.awake();
    console.log(state.elements);
    console.log(...game.engine.listEntities());
  }, [state]);

  const updateHandler = (delta: number) => {
    const args = { game, delta };
    dispatch(GameActions.update(args));
  };

  return (
    <div>
      <button
        onClick={() =>
          game.engine.addEntity(
            new Entity({
              id: "Entity 2",
              components: {
                Position: new Position({ x: 50, y: 50 }),
                classes: { Position },
              },
            })
          )
        }
      >
        Add Entity
      </button>
      <button onClick={() => updateHandler(0)}>Update</button>Game Engine,
      {Object.entries(state.elements).map(([_key, system]) => {
        console.log({ _key, system });
        return Object.entries(system).map(([key, value]) => {
          {
            console.log({ key, value });
            return value;
          }
        });
      })}
    </div>
  );
};

export default GameEngine;
