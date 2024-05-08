import { Color } from "../color";
import { Shape } from "../shape";

const LINE_DEFAULT_VALUES = {
  color: "black",
  thickness: 1,
} satisfies Required<LineStyle>;

type LineStyle = {
  thickness?: number;
  color?: Color;
};

export class LineShape extends Shape<
  LineStyle &
    (
      | {
          // horizontal
          y: number;
          x0: number;
          x1: number;
        }
      | {
          // vertical
          x: number;
          y0: number;
          y1: number;
        }
      | {
          // other
          x0: number;
          y0: number;
          x1: number;
          y1: number;
        }
    )
> {}
