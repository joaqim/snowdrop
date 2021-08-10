import {
  createEntityTypesafe,
  TypedComponent,
  TypedEntityConfig,
  TypedComponentConfigVal,
} from "./TypedComponent";

class Velocity extends TypedComponent({ dx: 0, dy: 0 }) {}
class Circle extends TypedComponent({ x: 0, y: 0, r: 0 }) {}
class Flag extends TypedComponent() {}

interface IEntity {
  id?: string;
  tags?: string[];
  c: {
    [key: string]: any;
  };
}

function createEntity<T extends { readonly [K in keyof object]: any }>(
  definition: TypedEntityConfig<T>
): TypedEntityConfig<T> {
  return definition;
}

describe(">>> TypedComponent", () => {
  //let entity: IEntity;
  let entity: TypedEntityConfig<{
    flag: Flag;
    velocity: Velocity;
    circle: Circle;
  }>;

  it("", () => {
    entity = createEntity({
      id: "asd",
      c: {
        flag: { type: Flag },
        velocity: {
          type: Velocity,
          dx: 0,
          dy: 0,
        },
        circle: {
          type: Circle,
          x: 1,
          y: 1,
          r: 0,
        },
      },
    });
    console.log({ entity });
    expect(entity.c.circle.r).toEqual(0);
    const { flag, velocity } = entity.c;
    expect(flag.type).toBe(Flag);
    expect(velocity.dx).toBe(0);
  });
});
