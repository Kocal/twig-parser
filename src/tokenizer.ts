import { TwingSource, TwingTokenStream } from "twing";
import { twing } from "./twing";

export const tokenize = (code: string): TwingTokenStream => {
  const source = new TwingSource(code, "code.twig");

  return twing.tokenize(source);
};
