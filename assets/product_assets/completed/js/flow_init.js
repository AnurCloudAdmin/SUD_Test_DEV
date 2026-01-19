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
                "sprite": "plain_bg",
                "x": 0,
                "y": 0,
                "loop": false,
                "timing": 0,
                "delay": 0,
                "toTopObj": 0,
                "anchor": [0, 0],
                "scale": 1,
            },


        ],

        "text_animations": [

            {
                "text": [{
                    "content": "PLVC Link is Completed"
                }],
                "sx": 540,
                "sy": 960,
                "x": 540,
                "y": 960,
                "size": 60,
                "weight": "bold",
                "color": "#000000",
                "tween_type": "Elastic.easeOut",
                "timing": 500,
                "delay": 0,
                "anchor": [0.5, 0.5],
                "align": "center",
                "alpha": 1,
                "wordWrapWidth":800

            },  

        ],

        "functions": [{
                "fn": "init()",
                "delay": 0
            },

            
        ],

        "name": "Start",
        "timing": -1,
        "index": 0
    },

   

];

for (var i = 0; i < window.common_screens.length; i++) {
    window.stage.screens.push(window.common_screens[i]);
}




