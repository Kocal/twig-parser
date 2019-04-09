type TwigNodeName = string | number;
type TwigNodes = Map<TwigNodeName, TwigNode>;

type AttrName = string;
type AttrValue = any;
type Attrs = Map<AttrName, AttrValue>;

export class TwigNode {
  protected nodes: TwigNodes;
  protected attributes: Attrs;
  protected lineno: number;
  protected columnno: number;
  protected tag: string;
  protected type: string | null = null;

  public constructor(
    nodes: TwigNodes = new Map(),
    attributes: Attrs = new Map(),
    lineno: number = 0,
    columnno: number = 0,
    tag: string = null
  ) {
    this.nodes = nodes;
    this.attributes = attributes;
    this.lineno = lineno;
    this.columnno = columnno;
    this.tag = tag;
  }

  public getNodes(): TwigNodes {
    return this.nodes;
  }

  public getNode(name: TwigNodeName): TwigNode {
    if (!this.hasNode(name)) {
      throw new Error(
        `The node "${name}" from "${this.constructor.name}" does not exist.`
      );
    }

    return this.nodes.get(name);
  }

  public setNode(name: TwigNodeName, node: TwigNode): void {
    this.nodes.set(name, node);
  }

  public hasNode(name: TwigNodeName): boolean {
    return this.nodes.has(name);
  }

  public getAttributes(): Attrs {
    return this.attributes;
  }

  public getAttribute(name: AttrName): AttrValue {
    if (!this.hasAttribute(name)) {
      throw new Error(
        `The attribute "${name}" from "${
          this.constructor.name
        }" does not exist.`
      );
    }

    return this.attributes.get(name);
  }

  public setAttribute(name: AttrName, value: AttrValue): void {
    this.attributes.set(name, value);
  }

  public hasAttribute(name: AttrName): boolean {
    return this.attributes.has(name);
  }

  public getLine(): number {
    return this.lineno;
  }

  public getColumn(): number {
    return this.columnno;
  }

  public getTag(): string | null {
    return this.tag;
  }
}
