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
    const proverb = this.getRandomProverb();
    const pivot = this.getPivot(proverb);
    let docProverb;

    const matchingProverb = this.getMatchingProverb(pivot);
    if (!matchingProverb) {
      //Re-picking proverb
      docProverb = this.generateProverb();
    } else {
      docProverb = this.combineProverbs(proverb, matchingProverb, pivot);
    }
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
    let combinedProverb = "";

    const pivotIndex = proverb.search(pivot);
    combinedProverb += proverb.slice(0, pivotIndex + pivot.length);

    const matchPivotIndex = matchingProverb.search(pivot);
    combinedProverb += matchingProverb.slice(
      matchPivotIndex + pivot.length,
      matchingProverb.length
    );

    return combinedProverb;
  }

  /**
   * Takes a pivot and finds another proverb with a similar pivot
   * @param {string} pivot 
   * @return {string}
   */
  getMatchingProverb(pivot) {
    const allProverbs = this.shuffle(this.proverbs.get());
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

  /**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
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
