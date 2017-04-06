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
    "113",
"522",
"1011",
"711",
"222",
"811",
"421",
"311",
"621",
"1113",
"912",
"1213",
"622",
"913",
"712",
"813",
"1111",
"221",
"423",
"112",
"523",
"1211",
"313",
"1013",
"713",
"1212",
"911",
"521",
"422",
"623",
"312",
"1012",
"223",
"1112",
"812",
"111",
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
    ["113", "Form", { html: {include: "113.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["222", "Form", { html: {include: "222.html"}}],
["811", "Form", { html: {include: "811.html"}}],
["421", "Form", { html: {include: "421.html"}}],
["311", "Form", { html: {include: "311.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["712", "Form", { html: {include: "712.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["221", "Form", { html: {include: "221.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["112", "Form", { html: {include: "112.html"}}],
["523", "Form", { html: {include: "523.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["713", "Form", { html: {include: "713.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["521", "Form", { html: {include: "521.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["623", "Form", { html: {include: "623.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["812", "Form", { html: {include: "812.html"}}],
["111", "Form", { html: {include: "111.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];