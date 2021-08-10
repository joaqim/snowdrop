import { IEngine } from "@joaqim/ecs";
import { ActionsUnion, createActionPayload } from "@joaqim/snowdrop";

interface GameState {
  elements: any;
}

export const ACTION_UPDATE = "ACTION_UPDATE";

export const GameActions = {
  update: createActionPayload<
    typeof ACTION_UPDATE,
    { engine: IEngine; delta: number }
  >(ACTION_UPDATE),
};
export type AcceptedActions = ActionsUnion<typeof GameActions>;

export function gameUpdate(
  state: GameState,
  action: AcceptedActions
): GameState {
  switch (action.type) {
    case ACTION_UPDATE:
      const { engine, delta } = action.payload;
      return {
        ...state,
        elements: engine.update(delta),
      };
  }
}
