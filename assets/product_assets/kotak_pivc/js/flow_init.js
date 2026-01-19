/*
 Animation Flow
 PageByPage
 */

window.stage = {
    "screens": []
};

window.common_screens = [

    {
        "sprite_animations": [

            {
                "sprite": "start_btn", //"english_btn",
                "x": 540,
                "y": 1380,
                "loop": false,
                "timing": 0,
                "delay": 0,
                "toTopObj": 2,
                "anchor": [0.5, 0.5],
                "scale": 1,
                "alpha": 0,
                "onClickFn": "loading_language_flow()"

                // "onClickFn": "loadLangFlow('eng','normal',14)" //network()"
                // "onClickFn":"loading_language_flow()" //game.js
                //"onClickFn": "randomproposalnumber(1)" 
                //"onClickFn": "loading_language()"  

            },
        ],

        "text_animations": [
            {
                "text": [{
                    "content": window.p_proposal_number
                }],
                "sx": 650,
                "sy": 580,
                "x": 650,
                "y": 580,
                "size": 46,
                "weight": "bold",
                "color": "#ffffff",
                "tween_type": "Elastic.easeOut",
                "timing": 500,
                "fontFamily": "Roboto-Regular",
                "delay": 0,
                "anchor": [0, 0.5],
                "align": "justify",
                "alpha": 1,
                "wordWrap": true,
                //"wordWrapWidth": 540
            },
            {
                "text": [{
                    "content": "PROPOSAL_NO"
                }],
                "sx": 200,
                "sy": 580,
                "x": 200,
                "y": 580,
                "size": 44,
                "weight": "normal",
                "color": "#ffffff",
                "tween_type": "Elastic.easeOut",
                "timing": 500,
                "fontFamily": "Roboto-Regular",
                "delay": 0,
                "anchor": [0, 0.5],
                "align": "justify",
                "alpha": 1,
                "wordWrap": true,
                //"wordWrapWidth": 540
            },

            {
                "text": [{
                    "content": "LANG_START_TEXT"
                }],
                "sx": 540,
                "sy": 1100,
                "x": 540,
                "y": 1100,
                "size": 40,
                "weight": "bold",
                "color": "#ffffff",
                "tween_type": "Elastic.easeOut",
                "timing": 500,
                "fontFamily": "Roboto-Regular",
                "delay": 0,
                "anchor": [0.5, 0.5],
                "align": "justify",
                "alpha": 1,
                // "wordWrap": true,
                "wordWrapWidth": 940
            },
            {
                "text": [{
                    "content": "CONTENT_1"
                }],
                "sx": 540,
                "sy": 850,
                "x": 540,
                "y": 850,
                "size": 44,
                "weight": "normal",
                "color": "#ffffff",
                "tween_type": "Elastic.easeOut",
                "timing": 500,
                "fontFamily": "Roboto-Regular",
                "delay": 0,
                "anchor": [0.5, 0.5],
                "align": "center",
                "alpha": 1,
                // "wordWrap": true,
                "wordWrapWidth": 940
            },
            {
                "text": [{
                    "content": "CONTENT_2"
                }],
                "sx": 540,
                "sy": 1600,
                "x": 540,
                "y": 1600,
                "size": 44,
                "weight": "normal",
                "color": "#ffffff",
                "tween_type": "Elastic.easeOut",
                "timing": 500,
                "fontFamily": "Roboto-Regular",
                "delay": 0,
                "anchor": [0.5, 0.5],
                "align": "center",
                "alpha": 1,
                // "wordWrap": true,
                "wordWrapWidth": 940
            },
            {
                "text": [{
                    "content": "START_BTN"
                }],
                "sx": 540,
                "sy": 1380,
                "x": 540,
                "y": 1380,
                "size": 44,
                "weight": "bold",
                "color": "#e8190aff",
                "tween_type": "Elastic.easeOut",
                "timing": 500,
                "fontFamily": "Roboto-Regular",
                "delay": 0,
                "anchor": [0.5, 0.5],
                "align": "center",
                "alpha": 0,
                // "wordWrap": true,
                "wordWrapWidth": 540
            },


        ],

        "functions": [
            {
                "fn": "init()",
                "delay": 0
            },
            {
                "fn": "SetBGTile('start_bg')",
                "delay": 0
            },
            {
                "fn": "language_dropdown()",
                "delay": 0
            },
            // {
            //     "fn": "load_start_screen()",
            //     "delay": 0
            // },

        ],

        "name": "Language Screen",
        "timing": -1,
        "index": 0
    },

    {
        "sprite_animations": [
        ],

        "text_animations": [
        ],

        "functions": [
        ],

        "name": "Dummy Screen",
        "timing": -1,
        "index": 1
    },

];

for (var i = 0; i < window.common_screens.length; i++) {
    window.stage.screens.push(window.common_screens[i]);
}


