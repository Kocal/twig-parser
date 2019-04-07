import { TwingLoaderInterface, TwingSource } from "twing";

export class TwingNullLoader implements TwingLoaderInterface {
  public TwingLoaderInterfaceImpl: TwingLoaderInterface;

  public getSourceContext(name: string): TwingSource {
    return new TwingSource(null, name);
  }

  public exists(name: string): boolean {
    return false;
  }

  public getCacheKey(name: string): string {
    return name;
  }

  public isFresh(name: string, time: number): boolean {
    return true;
  }

  public resolve(name: string): string {
    return name;
  }
}
