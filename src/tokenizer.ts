import { TwingSource, TwingTokenStream } from "twing";
import { TwigTokenizer } from "./twig/tokenizer";
import { twing } from "./twing/index";

export const tokenize = (code: string): TwingTokenStream => {
  const tokenizer = new TwigTokenizer(twing);
  const source = new TwingSource(code, "code.twig");

  return tokenizer.tokenize(source);
};
