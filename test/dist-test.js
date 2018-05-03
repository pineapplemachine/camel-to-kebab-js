// This file contains test cases for verifying package behavior
// after copying src/camel-to-kebab.js to dist/camel-to-kebab.js

console.log("Testing uncompressed source copied to dist directory");

// Import package
const camelToKebabCase = require("../dist/camel-to-kebab.js");

// Test it
if(camelToKebabCase("testDistJS") !== "test-dist-js"){
    console.log("Incorrect module behavior.");
    process.exit(1);
}

// All done!
console.log("dist code test completed successfully.");
