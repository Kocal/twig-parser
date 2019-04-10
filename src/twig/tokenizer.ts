import { TwingEnvironment, TwingSource, TwingTokenStream } from "twing";

export class TwigTokenizer {
  protected env: TwingEnvironment;

  public constructor(env: TwingEnvironment) {
    this.env = env;
  }

  public tokenize(source: TwingSource): TwingTokenStream {
    return this.env.tokenize(source);
  }
}
