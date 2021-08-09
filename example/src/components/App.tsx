import React, { useEffect } from "react";
import { ExampleClass } from "@joaqim/tslib-starter";
import { Engine } from "@joaqim/ecs";
import { Base, Model } from "@joaqim/primed-model";

@Model
class Comp extends Base<Comp> {}

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  let example = new ExampleClass({ dummy: "dummy value" });
  example.engine = new Engine({});
  console.log(example.engine);
  useEffect(() => {
    console.log(example.dummy);
  }, [example]);

  return (
    <div>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <h1>Hello React Typescript!</h1>
          Value from ExampleClass.dummy: {example.dummy}
        </div>
      </div>
    </div>
  );

  // return (<div style="text-align:center;"><div>ExampleClass.dummy: {example.dummy}</div><>);
}
