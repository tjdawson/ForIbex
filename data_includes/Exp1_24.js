// A template for the experimental 'data' file for an Ibex experiment
// NOTE: All the curly braces required for Javascript have been doubled -- this is to ensure compatibility
// with Python's string.format() method; and so this code will NOT run as is. It is meant to be used
// within the context of a script that will pass values to replace the pairs of single-brace curly bracket formatting placeholders;
// which are noted wherever they appear with an in-line comment.

// set send results to manual
var manualSendResults = true;

var shuffleSequence = seq(
"intro1", "intro2",
    // The item sequence goes here
    "712",
"212",
"421",
"122",
"521",
"1013",
"913",
"313",
"1113",
"613",
"1211",
"821",
"522",
"1011",
"911",
"121",
"823",
"311",
"1212",
"213",
"1111",
"713",
"422",
"612",
"1112",
"211",
"423",
"611",
"1213",
"523",
"822",
"912",
"711",
"123",
"312",
"1012",
 // this is for formatting with python's .format method
"sr",
"end"
);

var defaults = [
    "Separator", {
        transfer: "keypress",
        normalMessage: "Please look up at the display on the wall and watch the video. When it's finished, press any key to start guessing.",
        errorMessage: "Please wait for the video to finish. Then, press any key to start guessing."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: false
    }
];

var items = [

    //

    ["sr", "__SendResults__", {}],

    //

    ["sep", "Separator", { }],

    //

    ["intro", "Form", {
        html: {include: "intro.html"},
        hideProgressBar: true,
        countsForProgressBar: false

    }],

    //

    ["intro1", "Form", {
        html: {include: "intro1.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
         validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }

    }],

    //

    ["intro2", "Form", {
        html: {include: "intro2.html"},
        hideProgressBar: true,
        countsForProgressBar: false

    }],

    //

    ["intro3", "Form", {
        html: { include: "intro3.html" },
        hideProgressBar: true,
        countsForProgressBar: false
    } ],

    // Here we enter each item as a Form controller pointing to a html file, e.g.:
    //     ["image_1", "Form", { html: {include: "image_1.html"}}],
    //     ["image_2", "Form", { html: {include: "image_2.html"}}],
    //     ...
    ["712", "Form", { html: {include: "712.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["421", "Form", { html: {include: "421.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["521", "Form", { html: {include: "521.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["821", "Form", { html: {include: "821.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["311", "Form", { html: {include: "311.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["713", "Form", { html: {include: "713.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["611", "Form", { html: {include: "611.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["523", "Form", { html: {include: "523.html"}}],
["822", "Form", { html: {include: "822.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];