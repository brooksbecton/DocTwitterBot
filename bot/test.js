var assert = require("chai").assert;

const DocBot = require("./");

describe("DocBot", function() {
  let docBot;
  beforeEach(() => (docBot = new DocBot()));

  describe("combineProverbs()", function() {
    it(" returns a string", function() {
      assert.typeOf(docBot.combineProverbs(), "string");
    });
  });

  describe("getMatchingProverb()", function() {
    it(" finds proverb with same conjuction", function() {
      assert.notEqual(docBot.getMatchingProverb("and").search(" and "), -1);
      assert.notEqual(
        docBot.getMatchingProverb("because").search(" because "),
        -1
      );
      assert.notEqual(docBot.getMatchingProverb("but").search(" but "), -1);
      assert.notEqual(docBot.getMatchingProverb("for").search(" for "), -1);
      assert.notEqual(docBot.getMatchingProverb("if").search(" if "), -1);
      assert.notEqual(docBot.getMatchingProverb("or").search(" or "), -1);
      assert.notEqual(docBot.getMatchingProverb("when").search(" when "), -1);
    });
  });

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
      assert.typeOf(docBot.getRandomProverb(), "string");
    });
  });
});
