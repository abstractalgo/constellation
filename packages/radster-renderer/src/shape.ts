import { AABB } from "radster-math";

export type ShapePosition = {
  x: number;
  y: number;
};

export abstract class Shape<Attr> {
  // type: Type
  attributes: Attr;

  constructor(attr: Attr) {
    this.attributes = attr;
    // this.type = Type
  }

  render(): void {
    throw new Error(`Method render() not implented for ${typeof this}.`);
  }
  getAABB(): AABB {
    throw new Error(`Method getAABB() not implented for ${typeof this}.`);
  }
  destroy(): void {}
}

// class ShapeManager<S extends Shape<unknown>> {
//   shapes: S[]

//   constructor() {
//     this.shapes = []
//   }

//   new(): ShapeManager<S> {
//     const newShape = S()
//     return this
//   }
// }
