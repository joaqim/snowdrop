import { IEngine } from "@joaqim/ecs";
import { Base } from "../../primed-model/dist";
export declare class Position extends Base<Position> {
    x: number;
    y: number;
}
declare class GameEngine {
    engine: IEngine;
    update(delta: number): any;
}
export default GameEngine;
