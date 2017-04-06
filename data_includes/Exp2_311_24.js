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
    "1012",
"722",
"1112",
"323",
"122",
"912",
"1212",
"513",
"811",
"413",
"213",
"623",
"121",
"721",
"1211",
"622",
"1113",
"211",
"321",
"511",
"411",
"1013",
"813",
"913",
"812",
"723",
"212",
"512",
"1011",
"322",
"1213",
"621",
"123",
"412",
"911",
"1111",
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
    ["1012", "Form", { html: {include: "1012.html"}}],
["722", "Form", { html: {include: "722.html"}}],
["1112", "Form", { html: {include: "1112.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["1212", "Form", { html: {include: "1212.html"}}],
["513", "Form", { html: {include: "513.html"}}],
["811", "Form", { html: {include: "811.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["623", "Form", { html: {include: "623.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["721", "Form", { html: {include: "721.html"}}],
["1211", "Form", { html: {include: "1211.html"}}],
["622", "Form", { html: {include: "622.html"}}],
["1113", "Form", { html: {include: "1113.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["321", "Form", { html: {include: "321.html"}}],
["511", "Form", { html: {include: "511.html"}}],
["411", "Form", { html: {include: "411.html"}}],
["1013", "Form", { html: {include: "1013.html"}}],
["813", "Form", { html: {include: "813.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["812", "Form", { html: {include: "812.html"}}],
["723", "Form", { html: {include: "723.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["512", "Form", { html: {include: "512.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["1213", "Form", { html: {include: "1213.html"}}],
["621", "Form", { html: {include: "621.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["1111", "Form", { html: {include: "1111.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];