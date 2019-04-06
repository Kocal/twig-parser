import { TwingEnvironment, TwingSource, TwingTokenStream } from "twing";
import { TwingNullLoader } from "./twing/loader/TwingNullLoader";

export const tokenize = (code: string): TwingTokenStream => {
  const loader = new TwingNullLoader();
  const twing = new TwingEnvironment(loader);
  const source = new TwingSource(code, "code.twig");

  return twing.tokenize(source);
};
