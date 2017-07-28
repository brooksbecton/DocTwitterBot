const DocBot = require("./bot");

const docBot = new DocBot();

for (var i = 0; i < 100; i++) {
  const docProverb = docBot.generateProverb();
  console.log(docProverb);
}
