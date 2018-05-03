// This file contains test cases for verifying package behavior
// after uglification

console.log("Testing uglified source.");

// Import package
const camelToKebabCase = require("../dist/camel-to-kebab.min.js");

// Test it
if(camelToKebabCase("testUglifyJS") !== "test-uglify-js"){
    console.log("Incorrect module behavior.");
    process.exit(1);
}

// All done!
console.log("Uglified code test completed successfully.");
