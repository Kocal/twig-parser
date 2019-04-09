const { TwigNode } = require("../../../dist");

describe("TwigNode", () => {
  test("Default constructor values", () => {
    const node = new TwigNode();

    expect(node.getNodes()).toEqual(new Map());
    expect(node.getAttributes()).toEqual(new Map());
    expect(node.getLine()).toBe(0);
    expect(node.getColumn()).toBe(0);
    expect(node.getTag()).toBeNull();
  });

  describe("Testing Nodes", () => {
    const fooNode = new TwigNode();
    const nodes = new Map([["foo", fooNode]]);
    const node = new TwigNode(nodes);

    test("getNodes()", () => {
      expect(node.getNodes()).toEqual(new Map([["foo", fooNode]]));
    });

    test("hasNode()", () => {
      expect(node.hasNode("foo")).toBeTruthy();
      expect(node.hasNode("bar")).toBeFalsy();
    });

    test("getNode()", () => {
      expect(node.getNode("foo")).toBe(fooNode);

      expect(() => {
        node.getNode("bar");
      }).toThrow(`The node "bar" from "TwigNode" does not exist.`);
    });

    test("setNode()", () => {
      const barNode = new TwigNode();
      node.setNode("bar", barNode);
      expect(node.getNode("bar")).toBe(barNode);
    });
  });

  describe("Testing attributes", () => {
    const nodes = new Map();
    const attrs = new Map([["attr", "value"]]);
    const node = new TwigNode(nodes, attrs);

    test("getAttributes()", () => {
      expect(node.getAttributes()).toEqual(new Map([["attr", "value"]]));
    });

    test("hasAttribute()", () => {
      expect(node.hasAttribute("attr")).toBeTruthy();
      expect(node.hasAttribute("bar")).toBeFalsy();
    });

    test("getAttribute()", () => {
      expect(node.getAttribute("attr")).toBe("value");

      expect(() => {
        node.getAttribute("bar");
      }).toThrow(`The attribute "bar" from "TwigNode" does not exist.`);
    });

    test("setAttribute()", () => {
      node.setAttribute("bar", "bar value");
      expect(node.getAttribute("bar")).toBe("bar value");
    });
  });
});
