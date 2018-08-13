// This file contains test cases for verifying package behavior

// Import package
const camelToKebabCase = require("../src/camel-to-kebab");

// Node's native assertion library
const assert = require("assert");

// Import canary and create an isolated testing scope
const canary = new require("canary-test").Group("camelToKebabCase");

// Here be tests
canary.test("blank input", function(){
    assert(camelToKebabCase("") === "");
});

canary.test("non-string inputs", function(){
    assert(camelToKebabCase(0) === "0");
    assert(camelToKebabCase(123) === "123");
    assert(camelToKebabCase(null) === null);
    assert(camelToKebabCase(undefined) === undefined);
});

canary.test("one-word input", function(){
    assert(camelToKebabCase("test") === "test");
    assert(camelToKebabCase("abc") === "abc");
});

canary.test("all numeric input", function(){
    assert(camelToKebabCase("1") === "1");
    assert(camelToKebabCase("0123456789") === "0123456789");
});

canary.test("all-caps input", function(){
    assert(camelToKebabCase("TEST") === "test");
    assert(camelToKebabCase("ABC") === "abc");
});

canary.test("first letter of input capitalized", function(){
    assert(camelToKebabCase("Test") === "test");
    assert(camelToKebabCase("Hello") === "hello");
});
    
canary.test("normal multi-word inputs", function(){
    assert(camelToKebabCase("helloWorld") === "hello-world");
    assert(camelToKebabCase("testCase") === "test-case");
    assert(camelToKebabCase("thisIsALongerTestInput") === "this-is-a-longer-test-input");
});

canary.test("name of library as input", function(){ // :D
    assert(camelToKebabCase("camelToKebabCase") === "camel-to-kebab-case");
});

canary.test("mixed letters and numbers", function(){
    assert(camelToKebabCase("helloWorld123") === "hello-world-123");
    assert(camelToKebabCase("1337testCase") === "1337-test-case");
    assert(camelToKebabCase("100CapCase") === "100-cap-case");
    assert(camelToKebabCase("one2three4Five") === "one-2-three-4-five");
});

canary.test("non-alphanumeric symbols in input", function(){
    assert(camelToKebabCase("@") === "@");
    assert(camelToKebabCase("te$tCase") === "te$t-case");
    assert(camelToKebabCase("already-kebabs") === "already-kebabs");
    assert(camelToKebabCase("extra--hyphens") === "extra--hyphens");
});

canary.test("consecutive caps in input", function(){
    assert(camelToKebabCase("innerHTML") === "inner-html");
    assert(camelToKebabCase("metaXMLFile") === "meta-xml-file");
});

canary.test("non-ascii caps in input", function(){
    assert(camelToKebabCase("abcdËfg") === "abcd-ëfg");
});

canary.test("emoji in input", function(){
    assert(camelToKebabCase("😶") === "😶");
    assert(camelToKebabCase("test😶test") === "test😶test");
    assert(camelToKebabCase("hell😶W😶rld") === "hell😶-w😶rld");
});

canary.test("object input with toString override", function(){
    const obj = {toString: function(){return "testObject";}};
    assert(camelToKebabCase(obj) === "test-object");
});

canary.test("pascal case inputs", function(){
    assert(camelToKebabCase("Test") === "test");
    assert(camelToKebabCase("PascalCase") === "pascal-case");
    assert(camelToKebabCase("PascalInnerHTML") === "pascal-inner-html");
    assert(camelToKebabCase("Pascal123") === "pascal-123");
    assert(camelToKebabCase("PascalWithEmoji😶") === "pascal-with-emoji😶");
});

canary.test("readme example cases", function(){
    assert(camelToKebabCase("helloWorld") === "hello-world");
    assert(camelToKebabCase("camelToKebabCase") === "camel-to-kebab-case");
    assert(camelToKebabCase("testing123") === "testing-123");
    assert(camelToKebabCase("innerHTML") === "inner-html");
    assert(camelToKebabCase("borderTopLeftRadius") === "border-top-left-radius");
});

// Run tests, report results, and quit process with the appropriate status code
canary.doReport();
