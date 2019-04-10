import { TwingTokenStream } from "twing";
import { TwigNode } from "./twig/node";
import { TwigParser } from "./twig/parser";
import { twing } from "./twing/index";

export const parse = (stream: TwingTokenStream): TwigNode => {
  const parser = new TwigParser(twing);

  return parser.parse(stream);
};
