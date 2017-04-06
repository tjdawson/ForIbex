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
    "1211",
"423",
"911",
"613",
"1113",
"322",
"112",
"823",
"713",
"1013",
"221",
"511",
"821",
"223",
"113",
"512",
"323",
"1111",
"612",
"1011",
"712",
"912",
"1212",
"422",
"1213",
"611",
"111",
"321",
"421",
"711",
"513",
"822",
"1012",
"222",
"1112",
"913",
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
    ["1211", "Form", { html: {include: "1211.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["613", "Form", { html: {include: "613.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["112", "Form", { html: {include: "112.html"}}],
["823", "Form", { html: {include: "823.html"}}],
["713", "Form", { html: {include: "713.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["221", "Form", { html: {include: "221.html"}}],
["511", "Form", { html: {include: "511.html"}}],
["821", "Form", { html: {include: "821.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["113", "Form", { html: {include: "113.html"}}],
["512", "Form", { html: {include: "512.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
["612", "Form", { html: {include: "612.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["712", "Form", { html: {include: "712.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["611", "Form", { html: {include: "611.html"}}],
["111", "Form", { html: {include: "111.html"}}],
["321", "Form", { html: {include: "321.html"}}],
["421", "Form", { html: {include: "421.html"}}],
["711", "Form", { html: {include: "711.html"}}],
["513", "Form", { html: {include: "513.html"}}],
["822", "Form", { html: {include: "822.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["222", "Form", { html: {include: "222.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["913", "Form", { html: {include: "913.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];