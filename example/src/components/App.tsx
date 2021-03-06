import React, { useEffect } from "react";
import { Engine } from "@joaqim/ecs";
import { Base, Model } from "@joaqim/primed-model";
//import GameEngine from "./GameEngine";
import { GameEngine } from "@joaqim/snowdrop";

@Model
class Comp extends Base<Comp> {}

export interface IAppProps {}

// export default function IApp(props: IAppProps) {
const IApp: React.FC<IAppProps> = () => {
  let game = new GameEngine();
  return (
    <div>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ textAlign: "center" }}></div>
      </div>
    </div>
  );

  // return (<div style="text-align:center;"><div>ExampleClass.dummy: {example.dummy}</div><>);
};

export default IApp;
