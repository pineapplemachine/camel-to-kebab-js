// This file contains test cases for verifying package behavior

// Import package
const camelToKebabCase = require("../src/camel-to-kebab");

// Node's native assertion library
const assert = require("assert").strict;

// Import canary and create an isolated testing scope
const canary = new require("canary-test").Group("camelToKebabCase");

// Here be tests
canary.test("blank input", function(){
    assert.equal(camelToKebabCase(""), "");
});

canary.test("non-string inputs", function(){
    assert(camelToKebabCase(0) === "0");
    assert(camelToKebabCase(123) === "123");
    assert(camelToKebabCase(null) === null);
    assert(camelToKebabCase(undefined) === undefined);
});

canary.test("one-word input", function(){
    assert.equal(camelToKebabCase("test"), "test");
    assert.equal(camelToKebabCase("abc"), "abc");
});

canary.test("all numeric input", function(){
    assert.equal(camelToKebabCase("1"), "1");
    assert.equal(camelToKebabCase("0123456789"), "0123456789");
});

canary.test("all-caps input", function(){
    assert.equal(camelToKebabCase("TEST"), "test");
    assert.equal(camelToKebabCase("ABC"), "abc");
});

canary.test("first letter of input capitalized", function(){
    assert.equal(camelToKebabCase("Test"), "test");
    assert.equal(camelToKebabCase("Hello"), "hello");
});
    
canary.test("normal multi-word inputs", function(){
    assert.equal(camelToKebabCase("helloWorld"), "hello-world");
    assert.equal(camelToKebabCase("testCase"), "test-case");
    assert.equal(camelToKebabCase("thisIsALongerTestInput"), "this-is-a-longer-test-input");
});

canary.test("name of library as input", function(){ // :D
    assert.equal(camelToKebabCase("camelToKebabCase"), "camel-to-kebab-case");
});

canary.test("mixed letters and numbers", function(){
    assert.equal(camelToKebabCase("helloWorld123"), "hello-world-123");
    assert.equal(camelToKebabCase("1337testCase"), "1337-test-case");
    assert.equal(camelToKebabCase("100CapCase"), "100-cap-case");
    assert.equal(camelToKebabCase("one2three4Five"), "one-2-three-4-five");
});

canary.test("non-alphanumeric symbols in input", function(){
    assert.equal(camelToKebabCase("@"), "@");
    assert.equal(camelToKebabCase("te$tCase"), "te$t-case");
    assert.equal(camelToKebabCase("already-kebabs"), "already-kebabs");
    assert.equal(camelToKebabCase("extra--hyphens"), "extra--hyphens");
});

canary.test("whitespace in input", function(){
    assert.equal(camelToKebabCase("abc def"), "abc def");
    assert.equal(camelToKebabCase("helloWorld testCase"), "hello-world test-case");
    assert.equal(camelToKebabCase("PascalCase SpaceTest"), "pascal-case space-test");
    assert.equal(camelToKebabCase("PascalCase\tTabTest"), "pascal-case\ttab-test");
    assert.equal(camelToKebabCase("PascalCase\rReturnTest"), "pascal-case\rreturn-test");
    assert.equal(camelToKebabCase("PascalCase\nLineTest"), "pascal-case\nline-test");
});

canary.test("consecutive caps in input", function(){
    assert.equal(camelToKebabCase("innerHTML"), "inner-html");
    assert.equal(camelToKebabCase("metaXMLFile"), "meta-xml-file");
});

canary.test("non-ascii caps in input", function(){
    assert.equal(camelToKebabCase("abcdËfg"), "abcd-ëfg");
});

canary.test("emoji in input", function(){
    assert.equal(camelToKebabCase("😶"), "😶");
    assert.equal(camelToKebabCase("test😶test"), "test😶test");
    assert.equal(camelToKebabCase("hell😶W😶rld"), "hell😶-w😶rld");
});

canary.test("object input with toString override", function(){
    const obj = {toString: function(){return "testObject";}};
    assert(camelToKebabCase(obj) === "test-object");
});

canary.test("pascal case inputs", function(){
    assert.equal(camelToKebabCase("Test"), "test");
    assert.equal(camelToKebabCase("PascalCase"), "pascal-case");
    assert.equal(camelToKebabCase("PascalInnerHTML"), "pascal-inner-html");
    assert.equal(camelToKebabCase("Pascal123"), "pascal-123");
    assert.equal(camelToKebabCase("PascalWithEmoji😶"), "pascal-with-emoji😶");
});

canary.test("readme example cases", function(){
    assert.equal(camelToKebabCase("helloWorld"), "hello-world");
    assert.equal(camelToKebabCase("camelToKebabCase"), "camel-to-kebab-case");
    assert.equal(camelToKebabCase("testing123"), "testing-123");
    assert.equal(camelToKebabCase("innerHTML"), "inner-html");
    assert.equal(camelToKebabCase("borderTopLeftRadius"), "border-top-left-radius");
});

// Run tests, report results, and quit process with the appropriate status code
canary.doReport();
