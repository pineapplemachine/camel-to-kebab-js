// Cross-platform equivalent of this bash command:
//   echo \"$(head -4 dist/camel-to-kebab.js)\n$(cat dist/camel-to-kebab.min.js)\" > dist/camel-to-kebab.min.js

console.log("Adding important comments to the top of the uglified source.");

const fs = require("fs");

const sourcePath = __dirname + "/../src/camel-to-kebab.js";
const uglyPath = __dirname + "/../dist/camel-to-kebab.min.js";

console.log("Reading normal source file.");
const source = fs.readFileSync(sourcePath, "utf8");

console.log("Reading uglified source file.");
const ugly = fs.readFileSync(uglyPath, "utf8");

console.log("Writing updated uglified source file.");
const header = source.split("\n").slice(0, 3).join("\n");
fs.writeFileSync(uglyPath, header + "\n" + ugly + "\n");

console.log("Finished adding important comments to uglified source.");
