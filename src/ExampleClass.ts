import { useEffect } from "react";
import { Base, Model } from "@joaqim/primed-model";
import { IEngine } from "@joaqim/ecs";

@Model
export class ExampleClass extends Base<ExampleClass> {
  dummy!: string;
  engine: IEngine;
}
