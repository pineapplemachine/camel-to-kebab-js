// Make sure that the module can be imported as an ES module
import camelToKebabCase from "../src/camel-to-kebab.js";

// Make sure the import works
if(!camelToKebabCase || !(camelToKebabCase instanceof Function)){
    console.log("Module import error.");
    process.exit(1);
}

// Make sure the function works
if(camelToKebabCase("esModuleTest") !== "es-module-test"){
    console.log("Module usage error.");
    process.exit(1);
}

// All done; everything went through ok
console.log("ES module test ran successfully.");
