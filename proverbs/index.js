const firebase = require("./../firebase").firebase;
const proverbsJson = require("./assets/proverbs.json");

module.exports = class Proverbs {
  constructor() {
    this.proverbs = proverbsJson;
  }

  /**
   * Gets all availible proverbs
   * @return {Array}
   */
  get() {
    return this.proverbs;
  }

  initProverbs() {
    proverbs.map(proverb => {
      writeProverb(proverb);
    });
  }

  putProverb(text) {
    firebase.database().ref("proverbs/").push(text);
  }
};
