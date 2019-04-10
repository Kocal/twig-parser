import { TwingEnvironment, TwingTokenStream } from "twing";
import { TwigNode } from "./node";

export class TwigParser {
  protected env: TwingEnvironment;

  public constructor(env: TwingEnvironment) {
    this.env = env;
  }

  public parse(stream: TwingTokenStream): TwigNode {
    return new TwigNode();
  }
}
