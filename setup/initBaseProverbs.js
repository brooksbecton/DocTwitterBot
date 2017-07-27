const firebase = require("./../firebase").firebase;
const proverbs = require("./assets/proverbs.json");

function writeProverb(text) {
  firebase.database().ref("proverbs/").push(text);
}

function driver() {
  console.log("Loading Proverbs into database");
  proverbs.map(proverb => {
    writeProverb(proverb);
  });
  console.log("Done");
}
driver();
