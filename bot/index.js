const config = require("./../config.js");
const proverbs = require("./../proverbs/");
const twit = require("twit");

class DocBot {
  constructor() {
    this.proverbs = new proverbs();
    this.twitter = new twit(config);
  }

  /**
   * Driver for generating the doc proverbs
   * @return {string}
   */
  generateProverb() {
    const proverb = pickRandomProverb();
    const pivot = pickPivot(proverb);
    const matchingProverb = getMatchingProverb(pivot);
    const docProverb = combineProverbs(proverb, matchingProverb, pivot);

    return docProverb;
  }
  /**
 * Takes in two proverbs combines them on the pivot
 * @param {string} matchingProverb 
 * @param {string} pivot 
 * @param {string} proverb 
 * @return {string}
 */
  combineProverbs(proverb, matchingProverb, pivot) {}

  /**
   * Takes a pivot and finds another proverb with a similar pivot
   * @param {string} pivot 
   * @return {string}
   */
  getMatchingProverb(pivot) {}

  /**
   * Takes in a sentence and pulls out 
   * pivot word such as 'and', 'is', or a verb
   * @param {string} proverb 
   * @return {string}
   */
  getPivot(proverb) {}

  putTweet() {
    twitter.post("statuses/update", { status: "hello world!" }, function(
      err,
      data,
      response
    ) {
      console.log(data);
    });
  }
}

module.exports = DocBot;
