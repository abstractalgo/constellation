import { Shape } from "./shape";

export class Renderer {
  shapes: Shape<unknown>[];
  gl: WebGL2RenderingContext;

  constructor({ gl }: { gl: WebGL2RenderingContext }) {
    this.gl = gl;
    this.shapes = [];
  }

  render() {
    for (const shape of this.shapes) {
      shape.render();
    }
  }
}
