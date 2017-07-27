var assert = require("chai").assert;

require("dotenv").config({ path: "./../" });

const DocBot = require("./");

describe("DocBot", function() {
  let docBot;
  beforeEach(() => (docBot = new DocBot()));

  describe("getPivot()", function() {
    describe("conjunctions", function() {
      it("convert capitalized conjuctions to lower case ", function() {
        const singleConjuction = "Anger AND hate hinder good counsel.";
        assert.equal(docBot.getPivot(singleConjuction), "and");
      });
      it("find single conjuction", function() {
        const singleConjuction = "Anger and hate hinder good counsel.";
        assert.equal(docBot.getPivot(singleConjuction), "and");
      });
      it("return the last occurence of a conjuction", function() {
        const doubleConjuction = "If you lose your temper, don't look for it.";
        assert.equal(docBot.getPivot(doubleConjuction), "for");
      });
    });
  });

  describe("getRandomProverb()", function() {
    it(" returns a string", function() {
      const singleConjuction = "Anger AND hate hinder good counsel.";
      assert.typeOf(docBot.getRandomProverb(), "string");
    });
  });
});
