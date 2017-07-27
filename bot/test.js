const assert = require("assert");
const DocBot = require("./");
describe("DocBot", function() {
  let docBot;
  beforeEach(() => (docBot = new DocBot()));

  describe("getPivot()", function() {
    it("return pivot string", function() {
      const testProverb = "The duck is yellow";
      assert.equal(docBot.getPivot(testProverb), "is");
    });
  });
});
