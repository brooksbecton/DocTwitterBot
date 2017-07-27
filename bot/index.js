const twitter = require("./../twitter.js");
const proverbs = require("./../proverbs/");

class DocBot {
  constructor() {
    this.proverbs = new proverbs();
  }

  /**
   * Driver for generating the doc proverbs
   * @return {string}
   */
  generateProverb() {
    const proverb = getRandomProverb();
    const pivot = getPivot(proverb);
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
  combineProverbs(proverb, matchingProverb, pivot) {
    return " ";
  }

  /**
   * Takes a pivot and finds another proverb with a similar pivot
   * @param {string} pivot 
   * @return {string}
   */
  getMatchingProverb(pivot) {
    const allProverbs = this.proverbs.get();
    let proverb;
    allProverbs.map(current => {
      if (current.search(" " + pivot + " ") != -1) {
        proverb = current;
      }
    });
    return proverb;
  }

  /**
   * Takes in a sentence and pulls out 
   * pivot word such as 'and', 'is', or a verb
   * @param {string} proverb 
   * @return {string}
   */
  getPivot(proverb) {
    proverb = proverb.toLocaleLowerCase();
    const conjunctions = ["and", "because", "but", "for", "if", "or", "when"];
    let conjunction = "";

    conjunctions.map((current, i) => {
      const targetIndex = proverb.search(" " + current + " ");
      if (targetIndex != -1) {
        //Assigning lower case version
        conjunction = current.toLocaleLowerCase();
      }
    });

    return conjunction;
  }

  /**
   * Returns random proverb from all proverbs
   * @return {string}
   */
  getRandomProverb() {
    //Array holding all proverb strings
    const allProverbs = this.proverbs.get();
    const randomInt = Math.floor(Math.random() * allProverbs.length);
    return allProverbs[randomInt];
  }

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
