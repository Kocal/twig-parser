import { TwingEnvironment } from "twing";
import { TwingNullLoader } from "./loader/TwingNullLoader";

const loader = new TwingNullLoader();
const twing = new TwingEnvironment(loader);

export { twing };
