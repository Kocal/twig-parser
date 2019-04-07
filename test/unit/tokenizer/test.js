const {
  TwingTokenStream,
  TwingToken,
  TwingSource,
  TwingErrorSyntax
} = require("twing");

const { tokenize } = require("../../../dist");

describe("Tokenizer", () => {
  it("should tokenize", () => {
    const code = `{% set foo = [1, 2, 3] %}`;
    const tokens = tokenize(code);

    expect(tokens).toEqual(
      new TwingTokenStream(
        [
          new TwingToken(1, null, 1, 1),
          new TwingToken(5, "set", 1, 4),
          new TwingToken(5, "foo", 1, 8),
          new TwingToken(8, "=", 1, 12),
          new TwingToken(9, "[", 1, 14),
          new TwingToken(6, 1, 1, 15),
          new TwingToken(9, ",", 1, 16),
          new TwingToken(6, 2, 1, 18),
          new TwingToken(9, ",", 1, 19),
          new TwingToken(6, 3, 1, 21),
          new TwingToken(9, "]", 1, 22),
          new TwingToken(3, null, 1, 23),
          new TwingToken(-1, null, 1, 26)
        ],
        new TwingSource(`{% set foo = [1, 2, 3] %}`, `code.twig`)
      )
    );
  });

  it("should throw an error", () => {
    const code = `{% set foo = [`;

    expect(() => {
      tokenize(code);
    }).toThrowError(
      new TwingErrorSyntax('Unclosed "[" in "code.twig" at line 1.')
    );
  });
});
