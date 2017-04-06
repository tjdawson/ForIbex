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
    "1013",
"213",
"322",
"413",
"113",
"921",
"311",
"913",
"1021",
"221",
"123",
"411",
"1022",
"412",
"912",
"111",
"212",
"313",
"1023",
"911",
"312",
"121",
"422",
"211",
"1012",
"922",
"122",
"223",
"321",
"423",
"1011",
"222",
"323",
"923",
"112",
"421",
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
    ["1013", "Form", { html: {include: "1013.html"}}],
["213", "Form", { html: {include: "213.html"}}],
["322", "Form", { html: {include: "322.html"}}],
["413", "Form", { html: {include: "413.html"}}],
["113", "Form", { html: {include: "113.html"}}],
["921", "Form", { html: {include: "921.html"}}],
["311", "Form", { html: {include: "311.html"}}],
["913", "Form", { html: {include: "913.html"}}],
["1021", "Form", { html: {include: "1021.html"}}],
["221", "Form", { html: {include: "221.html"}}],
["123", "Form", { html: {include: "123.html"}}],
["411", "Form", { html: {include: "411.html"}}],
["1022", "Form", { html: {include: "1022.html"}}],
["412", "Form", { html: {include: "412.html"}}],
["912", "Form", { html: {include: "912.html"}}],
["111", "Form", { html: {include: "111.html"}}],
["212", "Form", { html: {include: "212.html"}}],
["313", "Form", { html: {include: "313.html"}}],
["1023", "Form", { html: {include: "1023.html"}}],
["911", "Form", { html: {include: "911.html"}}],
["312", "Form", { html: {include: "312.html"}}],
["121", "Form", { html: {include: "121.html"}}],
["422", "Form", { html: {include: "422.html"}}],
["211", "Form", { html: {include: "211.html"}}],
["1012", "Form", { html: {include: "1012.html"}}],
["922", "Form", { html: {include: "922.html"}}],
["122", "Form", { html: {include: "122.html"}}],
["223", "Form", { html: {include: "223.html"}}],
["321", "Form", { html: {include: "321.html"}}],
["423", "Form", { html: {include: "423.html"}}],
["1011", "Form", { html: {include: "1011.html"}}],
["222", "Form", { html: {include: "222.html"}}],
["323", "Form", { html: {include: "323.html"}}],
["923", "Form", { html: {include: "923.html"}}],
["112", "Form", { html: {include: "112.html"}}],
["421", "Form", { html: {include: "421.html"}}],
 // this is for formatting with python's .format method

["end", "Form", {
        html: {include: "end.html"},
        hideProgressBar: true,
        countsForProgressBar: false,
        continueMessage: null

    }]
];