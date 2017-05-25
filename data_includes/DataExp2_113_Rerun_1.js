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
    "121",
"312",
"1012",
"712",
"621",
"1113",
"411",
"821",
"522",
"211",
"1211",
"911",
"1213",
"413",
"213",
"822",
"3_1112",
"3_713",
"3_123",
"3_623",
"3_912",
"3_1011",
"3_313",
"3_523",
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
    ["121", "Form", { html: {include: "121.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["712", "Form", { html: {include: "712.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["411", "Form", { html: {include: "411.html"}}],
["821", "Form", { html: {include: "821.html"}}],
["522", "Form", { html: {include: "522.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["822", "Form", { html: {include: "822.html"}}],
["3_1112", "Form", { html: {include: "3_1112.html"}}],
["3_713", "Form", { html: {include: "3_713.html"}}],
["3_123", "Form", { html: {include: "3_123.html"}}],
["3_623", "Form", { html: {include: "3_623.html"}}],
["3_912", "Form", { html: {include: "3_912.html"}}],
["3_1011", "Form", { html: {include: "3_1011.html"}}],
["3_313", "Form", { html: {include: "3_313.html"}}],
["3_523", "Form", { html: {include: "3_523.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];