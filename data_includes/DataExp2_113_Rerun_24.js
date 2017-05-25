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
    "1213",
"313",
"123",
"823",
"1012",
"212",
"911",
"621",
"1111",
"711",
"513",
"422",
"1013",
"622",
"511",
"213",
"3_311",
"3_1212",
"3_822",
"3_1113",
"3_713",
"3_421",
"3_913",
"3_121",
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
    ["1213", "Form", { html: {include: "1213.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["513", "Form", { html: {include: "513.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["511", "Form", { html: {include: "511.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["3_311", "Form", { html: {include: "3_311.html"}}],
["3_1212", "Form", { html: {include: "3_1212.html"}}],
["3_822", "Form", { html: {include: "3_822.html"}}],
["3_1113", "Form", { html: {include: "3_1113.html"}}],
["3_713", "Form", { html: {include: "3_713.html"}}],
["3_421", "Form", { html: {include: "3_421.html"}}],
["3_913", "Form", { html: {include: "3_913.html"}}],
["3_121", "Form", { html: {include: "3_121.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];