var content = "After the end of the policy term i.e at the end of year" + " " + window.policy_term_in_years + "." + "Compulsory pension (annuity) has to be purchased.";

var premium_paying_term = window.res_params.PREMIUM_PAYING_TERM + ' Years';
var policy_term = window.res_params.POLICY_TERM + ' Years';
var premium_amount = window.res_params.PREMIUM_AMOUNT;
var sum_assured = window.res_params.SUM_ASSURED;

var mobile_number = window.res_params.MOBILE_NUMBER;

var video_upload_text_eng = 'Please Wait Your Video is uploading';

//window.speech_script = ' I hereby agree that the policy and personal details mentioned in the video for 12354655 are correct. I authorize Kotak Life insurance to issue my life insurance policy'
//var speechtoText_value = "I Ankur Dhavan , hereby confirm that I have understood the details of the ABSLI Nishchit Aayush plan and agree to the Terms and Conditions explained to me.\n\nI Agree to pay premium of INR" +" "+ window.res_params.PREMIUM_AMOUNT + " " + "along with applicable taxes for" + " " + window.res_params.POLICY_TERM + " "+ "years on annually basis \n\nI am aware of the policy benefits explained to me. \n\nI hereby agree to process my Application. \nMy Mobile Number is"+" "+ window.res_params.MOBILE_NUMBER +" ";



window.stage.screens = [];

for (var i = 0; i < window.common_screens.length; i++) {
    window.stage.screens.push(window.common_screens[i]);
}

var bb_red = '#fe0005';

var screens_eng = [{

    "functions": [{
        "fn": "SetBGTile('plain_bg')",
        "delay": 0
    },
    {
        "fn": "langAssetsRest()",
        "delay": 0
    },
    {
        "fn": "webCamCreate()",
        "delay": 0
    },
    {
        "fn": "inputFieldVisibility(false)",
        "delay": 0
    },
    {
        "fn": "begin_anurone_st()",
        "delay": 0
    }


    ],
    "name": "Assets Loading",
    "timing": -1,
    "index": 2
},

{
    "sprite_animations": [

        {
            "sprite": "framebox",
            "x": 540,
            "y": 800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "upload_icon",
            "x": 200,
            "y": 400,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,

        },

        {
            "sprite": "upload_btn",
            "x": 300,
            "y": 1600,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },

        {
            "sprite": "cancel_btn",
            "x": 800,
            "y": 1600,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "deleteImage()"
        },
        {
            "sprite": "cancel_btn_disable",
            "x": 800,
            "y": 1600,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "upload_idcardproceed()"
        },

    ],

    "text_animations": [
        {
            "text": [{
                "content": "PROPOSAL_NUMBER"
            },],
            "sx": 420,
            "sy": 260,
            "x": 420,
            "y": 260,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 920,
            "sy": 110,
            "x": 920,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "UPLOAD_TXT"
            },],
            "sx": 300,//520
            "sy": 1600,
            "x": 300,
            "y": 1600,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "DELETE_TXT"
            },],
            "sx": 800,
            "sy": 1600,
            "x": 800,
            "y": 1600,
            "size": 40,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "CONTENT"
            }],
            "sx": 600,
            "sy": 410,
            "x": 600,
            "y": 410,
            "size": 48,
            "weight": "bold",
            "color": "#1E4679",
            "fontFamily": "Roboto",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 600,
            "sy": 260,
            "x": 540,
            "y": 600,
            "size": 46,
            "weight": "bold",
            "color": "#1E4679",
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
                "content": 'download_speed'
            }],
            "sx": 190,
            "sy": 120,
            "x": 190,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 190,
            "sy": 140,
            "x": 190,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "PROOF_TXT"
            }],
            "sx": 540,
            "sy": 520,
            "x": 540,
            "y": 520,
            "size": 36,
            "weight": "bold",
            "color": "#1E4679",
            "fontFamily": "Roboto",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrapWidth": 870,
            "align": "center",
            "alpha": 1
        },
        {
            "text": [{
                "content": "EXTENTION_TXT"
            }],
            "sx": 540,
            "sy": 1180,
            "x": 540,
            "y": 1180,
            "size": 36,
            "weight": "bold",
            "color": "#1E4679",
            "fontFamily": "Roboto",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrapWidth": 800,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "MSG_TXT_1"
            },],
            "sx": 540,
            "sy": 1100,
            "x": 540,
            "y": 1100,
            "size": 42,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "MSG_TXT_2"
            },],
            "sx": 540,
            "sy": 1000,
            "x": 540,
            "y": 1000,
            "size": 42,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "ERROR_TXT_1"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 42,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "ERROR_TXT_2"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 36,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "ERROR_TXT_3"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 36,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "ERROR_TXT_4"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 36,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "ERROR_TXT_5"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 36,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },

        {
            "text": [{
                "content": "ERROR_TXT_6"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 42,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "ERROR_TXT_7"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 42,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "ERROR_TXT_8"
            },],
            "sx": 540,
            "sy": 1140,
            "x": 540,
            "y": 1140,
            "size": 42,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },


    ],

    "input_animations": [

    ],

    "functions": [

        {
            "fn": "SetBGTile('id_card_bg')",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },

        {
            "fn": "uploadCard()",
            "delay": 0
        },
        {
            "fn": "dropdown_document()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
        {
            "fn": "load_upload_screen()",
            "delay": 0
        }
    ],

    "sound_list": [{
        "sound": ["idcard_screen_audio"]
    }],

    "name": "ID card Upload Screen",
    "timing": -1,
    "index": 3
},

{
    "sprite_animations": [

        {
            "sprite": "multi_face_detected",
            "x": 550,
            "y": 800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "light_error",
            "x": 550,
            "y": 800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.8,
            "alpha": 0,
        },

        {
            "sprite": "no_face_detected",
            "x": 550,
            "y": 800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },

        {
            "sprite": "selfie_icon",
            "x": 400,
            "y": 380,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,

        },
        {
            "sprite": "take_photo",
            "x": 540,
            "y": 1240,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "start_photo_detections()"
        },

        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "goToPage(5)"  // "pleasWait_1()" 
        },
        {
            "sprite": "score_popup",
            "x": 540,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "reupload_document()" //game.js
        },
        {
            "sprite": "ticks",
            "x": 900,
            "y": 1440,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },


    ],

    "text_animations": [


        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PROPOSAL_NUMBER"
            },],
            "sx": 470,
            "sy": 260,
            "x": 470,
            "y": 260,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 700,
            "sy": 260,
            "x": 700,
            "y": 600,
            "size": 46,
            "weight": "bold",
            "color": "#1E4679",
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
                "content": "download_speed"
            }],
            "sx": 190,
            "sy": 120,
            "x": 190,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 190,
            "sy": 140,
            "x": 190,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "upload_speed"
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "SELFIE_TXT"
            },],
            "sx": 610,
            "sy": 380,
            "x": 610,
            "y": 380,
            "size": 46,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "COME_CLOSER_TXT"
            },],
            "sx": 540,
            "sy": 600,
            "x": 540,
            "y": 600,
            "size": 72,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "FACE_DETECTION"
            },],
            "sx": 520,
            "sy": 1240,
            "x": 520,
            "y": 1240,
            "size": 46,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "SCORE_TEXT"
            },],
            "sx": 540,
            "sy": 1440,
            "x": 540,
            "y": 1440,
            "size": 55,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "COMPUTING"
            },],
            "sx": 540,
            "sy": 1440,
            "x": 540,
            "y": 1440,
            "size": 55,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "TAKE_PIC_TXT"
            },],
            "sx": 500,
            "sy": 1240,
            "x": 500,
            "y": 1240,
            "size": 35,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "FACE_MATCH_TXT"
            },],
            "sx": 260,
            "sy": 980,
            "x": 260,
            "y": 980,
            "size": 40,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "TRY_AGAIN_TXT"
            },],
            "sx": 460,
            "sy": 1160,
            "x": 460,
            "y": 1160,
            "size": 45,
            "weight": "bold",
            "color": "#f7f7f7ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrap": true,
        },



    ],

    "input_animations": [

    ],

    "functions": [

        {
            "fn": "SetBGTile('photo_consent')",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },
        {
            "fn": "initCamOnly()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
        {
            "fn": "load_photo_consent_screen()",
            "delay": 0
        }
    ],

    "sound_list": [{
        "sound": ["photo_consent_audio"]
    }],

    "name": "Photo Consent Screen",
    "timing": -1,
    "index": 4
},

{


    "sprite_animations": [

        {
            "sprite": "face_detected",
            "x": 885,
            "y": 510,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },
        {
            "sprite": "personaldetails_fields",
            "x": 530,
            "y": 1190,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },
        {
            "sprite": "gray_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "start_photo_detections_1()" //,personal_details()" //"agree_status()"
        },

        {
            "sprite": "tick3",
            "x": 748,
            "y": 500,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.2,
            "alpha": 0,
        },

        {
            "sprite": "multi_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "light_error",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.8,
            "alpha": 0,
        },

        {
            "sprite": "no_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "popup_facescore",
            "x": 540,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_name_agree",
            "x": 800,
            "y": 685,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_sl_name_disagree",
            "x": 940,
            "y": 685,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_usl_name_agree",
            "x": 800,
            "y": 685,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','name')"

        },
        {
            "sprite": "btn_usl_name_disagree",
            "x": 940,
            "y": 685,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','name')"
        },

        {
            "sprite": "btn_sl_dob_agree",
            "x": 800,
            "y": 860,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_sl_dob_disagree",
            "x": 940,
            "y": 860,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_usl_dob_agree",
            "x": 800,
            "y": 860,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','dob')"

        },
        {
            "sprite": "btn_usl_dob_disagree",
            "x": 940,
            "y": 860,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','dob')"

        },
        {
            "sprite": "btn_sl_number_agree",
            "x": 800,
            "y": 1030,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_sl_number_disagree",
            "x": 940,
            "y": 1030,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_usl_number_agree",
            "x": 800,
            "y": 1030,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','number')"

        },
        {
            "sprite": "btn_usl_number_disagree",
            "x": 940,
            "y": 1030,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','number')"

        },
        {
            "sprite": "btn_sl_mail_agree",
            "x": 800,
            "y": 1200,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_sl_mail_disagree",
            "x": 940,
            "y": 1200,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_usl_mail_agree",
            "x": 800,
            "y": 1200,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','mail')"

        },
        {
            "sprite": "btn_usl_mail_disagree",
            "x": 940,
            "y": 1200,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','mail')"

        },
        {
            "sprite": "btn_sl_address_agree",
            "x": 800,
            "y": 1380,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_sl_address_disagree",
            "x": 940,
            "y": 1380,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "btn_usl_address_agree",
            "x": 800,
            "y": 1380,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','address')"

        },
        {
            "sprite": "btn_usl_address_disagree",
            "x": 940,
            "y": 1380,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','address')"

        },



    ],

    "text_animations": [

        {
            "text": [{
                "content": "PROPOSAL_NO"
            }],
            "sx": 50,
            "sy": 260,
            "x": 50,
            "y": 260,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PRODUCT_NAME"
            }],
            "sx": 50,
            "sy": 380,
            "x": 50,
            "y": 380,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": "download_speed"
            }],
            "sx": 200,
            "sy": 120,
            "x": 200,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 200,
            "sy": 140,
            "x": 200,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "upload_speed"
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "MESSAGE_TEXT_1"
            }],
            "sx": 540,
            "sy": 1700,
            "x": 540,
            "y": 1700,
            "size": 40,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "MESSAGE_TEXT_2"
            }],
            "sx": 540,
            "sy": 1700,
            "x": 540,
            "y": 1700,
            "size": 40,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 50,
            "sy": 310,
            "x": 50,
            "y": 310,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 1
        },

        {
            "text": [{
                "content": "CUSTOMER_NAME"
            }],
            "sx": 50,
            "sy": 680,
            "x": 50,
            "y": 680,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.p_customer_name
            }],
            "sx": 180,
            "sy": 770,
            "x": 180,
            "y": 770,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_dob
            }],
            "sx": 180,
            "sy": 950,
            "x": 180,
            "y": 950,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "DOB"
            }],
            "sx": 50,
            "sy": 860,
            "x": 50,
            "y": 860,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": "MOBILE_NO"
            }],
            "sx": 50,
            "sy": 1030,
            "x": 50,
            "y": 1030,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_mobile_number
            }],
            "sx": 180,
            "sy": 1120,
            "x": 180,
            "y": 1120,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "EMAIL"
            }],
            "sx": 50,
            "sy": 1200,
            "x": 50,
            "y": 1200,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_email
            }],
            "sx": 180,
            "sy": 1290,
            "x": 180,
            "y": 1290,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            // "charaterwrap":
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "ADDRESS"
            }],
            "sx": 50,
            "sy": 1360,
            "x": 50,
            "y": 1360,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0],
            "align": "left",
            "wordwrap": true,
            "wordWrapWidth": 750,
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_address
            }],
            "sx": 180,
            "sy": 1450,
            "x": 180,
            "y": 1450,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0],
            "align": "left",
            "wordwrap": true,
            "wordWrapWidth": 750,
            "alpha": 1
        },
        {
            "text": [{
                "content": "FACE_MATCH_TXT"
            },],
            "sx": 240,
            "sy": 1050,
            "x": 240,
            "y": 1050,
            "size": 46,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },



    ],
    "functions": [

        {
            "fn": "SetBGTile('personal_details_bg')",
            "delay": 0
        },
        {
            "fn": "miniCam()",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },
        {
            "fn": "beginFaceDetect(false, \'tick3\', '', null)",
            "delay": 0
        },
        {
            "fn": "delete_overlay()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
        {
            "fn": "load_personal_screen()",
            "delay": 0
        }


    ],

    "sound_list": [{
        "sound": ["personal_details_agree_audio"],

    }],

    "name": "Personal Details",
    "timing": -1,
    "index": 5
},

{


    "sprite_animations": [

        {
            "sprite": "face_detected",
            "x": 885,
            "y": 510,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "personaldetails_fields",
            "x": 530,
            "y": 1190,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "saveandproceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "personal_details_disagree_proceed()" //"loadLangFlow(\"eng\",\"normal\",2)"
        },

        {
            "sprite": "disagree_popup",
            "x": 530,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "disagreepopup()"
        },

        {
            "sprite": "email_popup",
            "x": 530,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "clear_mail_popup()"
        },

        {
            "sprite": "age_popup",
            "x": 530,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "clear_age_popup()"
        },

        {
            "sprite": "name_popup",
            "x": 530,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "clear_name_popup()"
        },

        {
            "sprite": "valid_dob_popup",
            "x": 530,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "clear_valid_dob_popup()"
        },

        {
            "sprite": "tick3",
            "x": 748,
            "y": 500,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.2,
            "alpha": 0,
        },

        {
            "sprite": "multi_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },


        {
            "sprite": "no_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },

    ],

    "text_animations": [
        {
            "text": [{
                "content": "Personal Details Disagree"
            },],
            "sx": 820,
            "sy": 110,
            "x": 820,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 50,
            "sy": 330,
            "x": 50,
            "y": 330,
            "size": 30,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 190,
            "sy": 120,
            "x": 190,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 190,
            "sy": 140,
            "x": 190,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": window.p_product_name
            }],
            "sx": 50,
            "sy": 470,
            "x": 50,
            "y": 470,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 1
        },


        {
            "text": [{
                "content": "Customer's Complete Name"
            }],
            "sx": 160,
            "sy": 700,
            "x": 160,
            "y": 700,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": "Date Of Birth"
            }],
            "sx": 160,
            "sy": 880,
            "x": 160,
            "y": 880,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "Registered Contact Number"
            }],
            "sx": 160,
            "sy": 1050,
            "x": 160,
            "y": 1050,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "Registered Email Address"
            }],
            "sx": 160,
            "sy": 1220,
            "x": 160,
            "y": 1220,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "Complete Address"
            }],
            "sx": 160,
            "sy": 1380,
            "x": 160,
            "y": 1380,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0],
            "align": "left",
            "wordwrap": true,
            "wordWrapWidth": 750,
            "alpha": 1
        },

    ],

    "input_animations": [

        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_name",
            "sx": -1000,
            "sy": 795,
            "x": 165,
            "y": 795,
            "size": 40,
            "height": 95,
            "width": 850,
            "weight": "bold",
            "backgroundColor": "#364473",
            "fill": "#fff",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "align": "left",
            "delay": 0,
            "anchor": [0, 0.5]
        },
        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_dob",
            "sx": -1000,
            "sy": 970,
            "x": 165,
            "y": 970,
            "size": 40,
            "height": 95,
            "width": 850,
            "weight": "bold",
            "backgroundColor": "#364473",
            "fill": "#fff",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "align": "left",
            "delay": 1,
            "anchor": [0, 0.5],
            "type": "date"
        },

        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_mobile",
            "sx": -1000,
            "sy": 1145,
            "x": 165,
            "y": 1145,
            "size": 40,
            "height": 95,
            "width": 850,
            "weight": "bold",
            "backgroundColor": "#364473",
            "fill": "#fff",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "delay": 0,
            "align": "left",
            "maxLength": 10,
            "anchor": [0, 0.5],
            "type": "number"
        },

        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_mail",
            "sx": -1000,
            "sy": 1320,
            "x": 165,
            "y": 1320,
            "size": 40,
            "height": 95,
            "width": 850,
            "weight": "bold",
            "backgroundColor": "#364473",
            "fill": "#fff",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "align": "left",
            "delay": 0,
            "anchor": [0, 0.5],
        },

        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_address",
            "sx": -1000,
            "sy": 1565,
            "x": 165,
            "y": 1565,
            "size": 40,
            "height": 240,
            "width": 850,
            "weight": "bold",
            "backgroundColor": "#364473",
            "fill": "#fff",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "align": "left",
            "type": "textarea",
            "padding": 56,
            "wordwrap": true,
            "wordWrapWidth": 750,
            "delay": 0,
            "anchor": [0, 0.5],
        },
    ],

    "functions": [

        {

            "fn": "SetBGTile('personal_details_disagree_bg')",
            "delay": 0
        },

        {
            "fn": "miniCam()",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },

        {
            "fn": "load_personal_details_disagree_screen()",
            "delay": 0
        },

        {
            "fn": "beginFaceDetect(false, \'tick3\', false, null)",
            "delay": 0
        },

        {
            "fn": "mobilenumbervalidation()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        }
    ],

    "sound_list": [{
        "sound": ['personal_details_disagree_audio']
    }],


    "name": "Personal Details - DisAgree",
    "timing": -1,
    "index": 6
},

{


    "sprite_animations": [
        {
            "sprite": "face_detected",
            "x": 885,
            "y": 510,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },
        {
            "sprite": "multi_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "light_error",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.8,
            "alpha": 0,
        },
        {
            "sprite": "tick3",
            "x": 748,
            "y": 500,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.2,
            "alpha": 0,
        },
        {
            "sprite": "next_icon",
            "x": 700,
            "y": 1730,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "nextPolicy()"

        },

        {
            "sprite": "back_icon",
            "x": 400,
            "y": 1730,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "prevPolicy()"
        },
        // {
        //     "sprite": "policy_field",
        //     "x": 530,
        //     "y": 1200,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 1,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 1,
        // },
        {
            "sprite": "popup_facescore",
            "x": 540,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "no_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "gray_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "start_photo_detections_1()"
        },
    ],

    "text_animations": [


        {
            "text": [{
                "content": "PROPOSAL_NO"
            }],
            "sx": 50,
            "sy": 260,
            "x": 50,
            "y": 260,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PRODUCT_NAME"
            }],
            "sx": 50,
            "sy": 380,
            "x": 50,
            "y": 380,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 50,
            "sy": 310,
            "x": 50,
            "y": 310,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name_2
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_3
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_4
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_5
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_6
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },

        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 200,
            "sy": 120,
            "x": 200,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 200,
            "sy": 140,
            "x": 200,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "FACE_MATCH_TXT"
            },],
            "sx": 240,
            "sy": 1050,
            "x": 240,
            "y": 1050,
            "size": 46,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "FIRST_POLICY"
            }],
            "sx": 280,
            "sy": 1580,
            "x": 280,
            "y": 1580,
            "size": 30,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "LAST_POLICY"
            }],
            "sx": 280,
            "sy": 1580,
            "x": 280,
            "y": 1580,
            "size": 30,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "SINGLE_PLAN"

            }],
            "sx": 540,
            "sy": 1640,
            "x": 540,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": "COMBO_PLAN_1"

            }],
            "sx": 460,
            "sy": 1640,
            "x": 460,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": window.res_params.plan_count + ' '

            }],
            "sx": 760,
            "sy": 1640,
            "x": 760,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": "COMBO_PLAN_2"

            }],
            "sx": 840,
            "sy": 1640,
            "x": 840,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },

        {
            "text": [{
                "content": "1"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "2"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "3"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "4"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "5"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "6"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": " / " + totalCount

            }],
            "sx": 560,
            "sy": 1730,
            "x": 560,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },



    ],

    "input_animations": [

        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_disagreement",
            "sx": -1000,
            "sy": 1430,
            "x": 130,
            "y": 1430,
            "size": 40,
            "height": 140,
            "width": 830,
            "weight": "bold",
            "backgroundColor": "#ffffff",
            "fill": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "delay": 2,
            "alpha": 0,
            "align": "left",
            "type": "textarea",
            "anchor": [0, 0],
        },

    ],

    "functions": [

        {

            "fn": "SetBGTile('policy_bg')",
            "delay": 0
        },

        {
            "fn": "miniCam()",
            "delay": 0
        },

        {
            "fn": "beginFaceDetect(false, \'tick3\', false, null)",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
        {
            "fn": "load_policy_screen()",
            "delay": 0
        },
        {
            "fn": "policy_scrollercall()",
            "delay": 0
        },
        {
            "fn": "countCheck()",
            "delay": 0
        },
        {
            "fn": "updatePlanTextAlpha()",
            "delay": 0
        },

    ],

    "sound_list": [{
        "sound": ["product_kotak",
            // "premium_of", "$var.currency_window.res_params.PREMIUM_AMOUNT",
            // "payment_frequency", "for", "$var.years_window.res_params.PREMIUM_PAYING_TERM",
            // "policy_term", "$var.years_window.res_params.POLICY_TERM",
            // "sum_assured", '$var.currency_window.res_params.SUM_ASSURED'
        ]
    }],

    "name": "Policy Screen",
    "timing": -1,
    "index": 7
},

{


    "sprite_animations": [

        {
            "sprite": "face_detected",
            "x": 885,
            "y": 510,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },
        {
            "sprite": "multi_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "light_error",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.8,
            "alpha": 0,
        },
        {
            "sprite": "tick3",
            "x": 748,
            "y": 500,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.2,
            "alpha": 0,
        },

        // {
        //     "sprite": "rider_details_field",
        //     "x": 550,
        //     "y": 1200,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 1,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 1,
        // },
        {
            "sprite": "popup_facescore",
            "x": 540,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "no_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "gray_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "next_icon",
            "x": 700,
            "y": 1730,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "nextPolicy_Rider()"

        },

        {
            "sprite": "back_icon",
            "x": 400,
            "y": 1730,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "prevPolicy_Rider()"
        },
        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "start_photo_detections_1()"  //rider_screen_agree(),
        },
        {
            "sprite": "policy_details_disagree",
            "x": 540,
            "y": 970,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
    ],

    "text_animations": [


        {
            "text": [{
                "content": "PROPOSAL_NO"
            }],
            "sx": 50,
            "sy": 260,
            "x": 50,
            "y": 260,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PRODUCT_NAME"
            }],
            "sx": 50,
            "sy": 380,
            "x": 50,
            "y": 380,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },


        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 50,
            "sy": 310,
            "x": 50,
            "y": 310,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name_2
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_3
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_4
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_5
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_6
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 200,
            "sy": 120,
            "x": 200,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 200,
            "sy": 140,
            "x": 200,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "FACE_MATCH_TXT"
            },],
            "sx": 240,
            "sy": 1050,
            "x": 240,
            "y": 1050,
            "size": 46,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "FIRST_POLICY"
            }],
            "sx": 280,
            "sy": 1580,
            "x": 280,
            "y": 1580,
            "size": 30,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "LAST_POLICY"
            }],
            "sx": 280,
            "sy": 1580,
            "x": 280,
            "y": 1580,
            "size": 30,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "SINGLE_PLAN"

            }],
            "sx": 540,
            "sy": 1640,
            "x": 540,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": "COMBO_PLAN_1"

            }],
            "sx": 460,
            "sy": 1640,
            "x": 460,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": window.res_params.plan_count + ' '

            }],
            "sx": 760,
            "sy": 1640,
            "x": 760,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": "COMBO_PLAN_2"

            }],
            "sx": 840,
            "sy": 1640,
            "x": 840,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": "1"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "2"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "3"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "4"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "5"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "6"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": " / " + totalCount

            }],
            "sx": 560,
            "sy": 1730,
            "x": 560,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },


    ],

    "input_animations": [

        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_rider_disagreement",
            "sx": -1000,
            "sy": 1430,
            "x": 130,
            "y": 1430,
            "size": 40,
            "height": 140,
            "width": 830,
            "weight": "bold",
            "backgroundColor": "#ffffff",
            "fill": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "delay": 0,
            "alpha": 0,
            "align": "left",
            "type": "textarea",
            "anchor": [0, 0],
        },

    ],

    "functions": [

        {

            "fn": "SetBGTile('rider_details_bg')",
            "delay": 0
        },

        {
            "fn": "miniCam()",
            "delay": 0
        },

        {
            "fn": "beginFaceDetect(false, \'tick3\', '', null)",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },

        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },

        {
            "fn": "load_rider_screen()",
            "delay": 0
        },
        {
            "fn": "Rider_scroller()",
            "delay": 0
        },
        {
            "fn": "countCheck()",
            "delay": 0
        },
        {
            "fn": "updatePlanTextAlpha_Rider()",
            "delay": 0
        }
    ],

    "sound_list": [{
        "sound": ["rider_details_audio"]
    }],

    "name": "Rider Details Screen",
    "timing": -1,
    "index": 8
},

{


    "sprite_animations": [
        {
            "sprite": "face_detected",
            "x": 885,
            "y": 510,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "multi_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "light_error",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.8,
            "alpha": 0,
        },
        {
            "sprite": "tick3",
            "x": 748,
            "y": 500,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.2,
            "alpha": 0,
        },
        {
            "sprite": "next_icon",
            "x": 700,
            "y": 1730,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "nextPolicy_Declaration()"

        },

        {
            "sprite": "back_icon",
            "x": 400,
            "y": 1730,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "prevPolicy_Declaration()"
        },

        {
            "sprite": "popup_facescore",
            "x": 540,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "no_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "gray_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "start_photo_detections_1()" //declaration_screen_agree(),
        },
    ],

    "text_animations": [


        {
            "text": [{
                "content": "PROPOSAL_NO"
            }],
            "sx": 50,
            "sy": 260,
            "x": 50,
            "y": 260,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PRODUCT_NAME"
            }],
            "sx": 50,
            "sy": 380,
            "x": 50,
            "y": 380,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 50,
            "sy": 310,
            "x": 50,
            "y": 310,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name_2
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_3
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_4
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_5
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": window.p_product_name_6
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 0
        },
        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 200,
            "sy": 120,
            "x": 200,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 200,
            "sy": 140,
            "x": 200,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "FACE_MATCH_TXT"
            },],
            "sx": 240,
            "sy": 1050,
            "x": 240,
            "y": 1050,
            "size": 46,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "FIRST_POLICY"
            }],
            "sx": 280,
            "sy": 1580,
            "x": 280,
            "y": 1580,
            "size": 30,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "LAST_POLICY"
            }],
            "sx": 280,
            "sy": 1580,
            "x": 280,
            "y": 1580,
            "size": 30,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "SINGLE_PLAN"

            }],
            "sx": 540,
            "sy": 1640,
            "x": 540,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": "COMBO_PLAN_1"

            }],
            "sx": 460,
            "sy": 1640,
            "x": 460,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": window.res_params.plan_count + ' '

            }],
            "sx": 760,
            "sy": 1640,
            "x": 760,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },
        {
            "text": [{
                "content": "COMBO_PLAN_2"

            }],
            "sx": 840,
            "sy": 1640,
            "x": 840,
            "y": 1640,
            "size": 40,
            "weight": "normal",
            "color": "#e1c916ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 940
        },

        {
            "text": [{
                "content": "1"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "2"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "3"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "4"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "5"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "6"

            }],
            "sx": 500,
            "sy": 1730,
            "x": 500,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": " / " + totalCount

            }],
            "sx": 560,
            "sy": 1730,
            "x": 560,
            "y": 1730,
            "size": 40,
            "weight": "normal",
            "color": "#101010ff",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            // "wordWrap": true,
            "wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },




    ],

    "input_animations": [

    ],

    "functions": [

        {

            "fn": "SetBGTile('disclaimer_bg')",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },
        {
            "fn": "miniCam()",
            "delay": 0
        },
        {
            "fn": "delete_overlay()",
            "delay": 0
        },
        {
            "fn": "beginFaceDetect(false, \'tick3\', false, null)",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
        {
            "fn": "load_declaration_screen()",
            "delay": 0
        },
        {
            "fn": "declaration_scroller()",
            "delay": 0
        },
        {
            "fn": "countCheck()",
            "delay": 0
        },
        {
            "fn": "updatePlanTextAlpha_declaration()",
            "delay": 0
        }
    ],

    "sound_list": [{
        "sound": ["disclaimer_audio"]
    }],

    "name": "Disclaimer Screen",
    "timing": -1,
    "index": 9
},

{


    "sprite_animations": [
        {
            "sprite": "stop",
            "x": 520,
            "y": 1870,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "Videostop()" //,stop_anurone_st()"
        },
        {
            "sprite": "speech_popup",
            "x": 540,
            "y": 800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "goToPage(10)"
        },
        {
            "sprite": "popup_facescore",
            "x": 540,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "camera_icon",
            "x": 520,
            "y": 1800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 0.8,
            "alpha": 0,
            "onClickFn": "BeginRecording()" //"start_photo_detections_1()"    
        },
        {
            "sprite": "position_box",
            "x": 540,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1
        },
        {
            "sprite": "liveness_check",
            "x": 540,
            "y": 1400,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            // "onClickFn": "start_detections()"   //"start_photo_detections_1()"   //"checkFaceStatus()"
        },
        {
            "sprite": "green_box",
            "x": 540,
            "y": 610,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "red_box",
            "x": 540,
            "y": 610,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "green_box_tick",
            "x": 300,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "red_box_cancel",
            "x": 300,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "face_match",
            "x": 540,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "no_face_detected",
            "x": 540,
            "y": 580,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "multi_face",
            "x": 540,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "Video_recording_box",
            "x": 540,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },

        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "goToPage(12)"
        },

    ],

    "text_animations": [
        {
            "text": [{
                "content": "PROPOSAL_NO"
            },],
            "sx": 400,
            "sy": 200,
            "x": 400,
            "y": 200,
            "size": 36,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.p_proposal_number
            },],
            "sx": 600,
            "sy": 200,
            "x": 600,
            "y": 200,
            "size": 36,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 200,
            "sy": 120,
            "x": 200,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 200,
            "sy": 140,
            "x": 200,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "DETECTION_TEXT"
            },],
            "sx": 540,
            "sy": 580,
            "x": 540,
            "y": 580,
            "size": 40,
            "weight": "bold",
            "color": "black",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "LIVENESS_ERROR_TEXT"
            },],
            "sx": 540,
            "sy": 580,
            "x": 540,
            "y": 580,
            "size": 40,
            "weight": "bold",
            "color": "black",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "SMILE_ERROR_TEXT"
            },],
            "sx": 540,
            "sy": 800,
            "x": 540,
            "y": 800,
            "size": 75,
            "weight": "bold",
            "color": "#39FF14",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },

        {
            "text": [{
                "content": "COME_CLOSER_TXT"
            },],
            "sx": 540,
            "sy": 800,
            "x": 540,
            "y": 800,
            "size": 75,
            "weight": "bold",
            "color": "#39FF14",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "MESSAGE_TEXT"
            },],
            "sx": 520,
            "sy": 1670,
            "x": 520,
            "y": 1670,
            "size": 34,
            "weight": "bold",
            "color": "#C33745",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },


        // please wait 

        {
            "text": [{
                "content": video_upload_text_eng
            },],
            "sx": 500,
            "sy": 1270,
            "x": 500,
            "y": 1270,
            "size": 38,
            "weight": "bold",
            "color": "#ff0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "center",
            "alpha": 0
        },

        {
            "text": [{
                "content": "RECORDING_START_TEXT"
            },],
            "sx": 500,
            "sy": 1610,
            "x": 500,
            "y": 1610,
            "size": 42,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordworpwidth": 800,
            "align": "center",
            "alpha": 0
        },

        {
            "text": [{
                "content": "Please read the Script displayed."
            },],
            "sx": 500,
            "sy": 1270,
            "x": 500,
            "y": 1270,
            "size": 38,
            "weight": "bold",
            "color": "#ff0000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "POPUP_TEXT"
            }],
            "sx": 230,
            "sy": 700,
            "x": 230,
            "y": 700,
            "size": 40,
            "weight": "bold",
            "color": "#C33745",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrapWidth": 700
        },
        {
            "text": [{
                "content": "TRY_AGAIN_TXT"
            },],
            "sx": 460,
            "sy": 920,
            "x": 460,
            "y": 920,
            "size": 45,
            "weight": "bold",
            "color": "#f7f7f7ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "POSITION_TEXT"
            },],
            "sx": 180,
            "sy": 1160,
            "x": 180,
            "y": 1160,
            "size": 38,
            "weight": "bold",
            "color": "#cb1515ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordworpwidth": 800,
            "align": "justify",
            "alpha": 1
        },
        {
            "text": [{
                "content": "LIVENESS_CHECK"
            },],
            "sx": 400,
            "sy": 1400,
            "x": 400,
            "y": 1400,
            "size": 38,
            "weight": "bold",
            "color": "#fcfcfcff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordworpwidth": 800,
            "align": "justify",
            "alpha": 1
        },
        {
            "text": [{
                "content": "LIVENESS_CHECKED"
            },],
            "sx": 400,
            "sy": 1160,
            "x": 400,
            "y": 1160,
            "size": 38,
            "weight": "bold",
            "color": "#308939ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordworpwidth": 800,
            "align": "justify",
            "alpha": 0
        },
        {
            "text": [{
                "content": "MULTI_FACE_DETECTED"
            },],
            "sx": 400,
            "sy": 1160,
            "x": 400,
            "y": 1160,
            "size": 40,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "PROCEED_TO_RECORD"
            },],
            "sx": 200,
            "sy": 1400,
            "x": 200,
            "y": 1400,
            "size": 46,
            "weight": "bold",
            "color": "#308939ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordworpwidth": 800,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "RECORDING_IS_COMPLETE"
            },],
            "sx": 400,
            "sy": 1160,
            "x": 400,
            "y": 1160,
            "size": 50,
            "weight": "bold",
            "color": "#308939ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordworpwidth": 800,
            "align": "justify",
            "alpha": 0
        },
        {
            "text": [{
                "content": "FACE_MATCH_TXT"
            },],
            "sx": 280,
            "sy": 980,
            "x": 280,
            "y": 980,
            "size": 40,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
    ],

    "functions": [

        {
            "fn": "SetBGTile('video_consent_bg')",
            "delay": 0
        },

        {
            "fn": "initCamOnly()",
            "delay": 0
        },
        {
            "fn": "start_detections()",
            "delay": 2
        },
        {
            "fn": "pageHightlight()",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
        {
            "fn": "load_video_consent_screen()",
            "delay": 0
        }
    ],

    "sound_list": [{
        "sound": ['video_consent_audio']
    }],

    "name": "Video Consent Screen",
    "timing": -1,
    "index": 10
},

{


    "sprite_animations": [

        //Question1           
        {
            "sprite": "ques1_1_us",
            "x": 135,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question1_selective(\'unselect\',\'1\')"
        },

        {
            "sprite": "ques1_1_sl",
            "x": 135,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question1_selective(\'select\',\'1\')"
        },

        {
            "sprite": "ques1_2_us",
            "x": 320,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question1_selective(\'unselect\',\'2\')"
        },

        {
            "sprite": "ques1_2_sl",
            "x": 320,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question1_selective(\'select\',\'2\')"
        },

        {
            "sprite": "ques1_3_us",
            "x": 505,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question1_selective(\'unselect\',\'3\')"
        },

        {
            "sprite": "ques1_3_sl",
            "x": 505,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question1_selective(\'select\',\'3\')"
        },

        {
            "sprite": "ques1_4_us",
            "x": 690,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question1_selective(\'unselect\',\'4\')"
        },

        {
            "sprite": "ques1_4_sl",
            "x": 690,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question1_selective(\'select\',\'4\')"
        },

        {
            "sprite": "ques1_5_us",
            "x": 875,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question1_selective(\'unselect\',\'5\')"
        },

        {
            "sprite": "ques1_5_sl",
            "x": 875,
            "y": 540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question1_selective(\'select\',\'5\')"
        },

        //Question 2
        {
            "sprite": "ques2_1_us",
            "x": 135,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question2_selective(\'unselect\',\'1\')"
        },

        {
            "sprite": "ques2_1_sl",
            "x": 135,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question2_selective(\'select\',\'1\')"
        },

        {
            "sprite": "ques2_2_us",
            "x": 320,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question2_selective(\'unselect\',\'2\')"
        },

        {
            "sprite": "ques2_2_sl",
            "x": 320,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question2_selective(\'select\',\'2\')"
        },

        {
            "sprite": "ques2_3_us",
            "x": 505,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question2_selective(\'unselect\',\'3\')"
        },

        {
            "sprite": "ques2_3_sl",
            "x": 505,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question2_selective(\'select\',\'3\')"
        },

        {
            "sprite": "ques2_4_us",
            "x": 690,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question2_selective(\'unselect\',\'4\')"
        },

        {
            "sprite": "ques2_4_sl",
            "x": 690,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question2_selective(\'select\',\'4\')"
        },

        {
            "sprite": "ques2_5_us",
            "x": 875,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question2_selective(\'unselect\',\'5\')"
        },

        {
            "sprite": "ques2_5_sl",
            "x": 875,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question2_selective(\'select\',\'5\')"
        },

        //Question 3
        {
            "sprite": "ques3_1_us",
            "x": 135,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question3_selective(\'unselect\',\'1\')"
        },

        {
            "sprite": "ques3_1_sl",
            "x": 135,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question3_selective(\'select\',\'1\')"
        },

        {
            "sprite": "ques3_2_us",
            "x": 320,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question3_selective(\'unselect\',\'2\')"
        },

        {
            "sprite": "ques3_2_sl",
            "x": 320,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question3_selective(\'select\',\'2\')"
        },

        {
            "sprite": "ques3_3_us",
            "x": 505,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question3_selective(\'unselect\',\'3\')"
        },

        {
            "sprite": "ques3_3_sl",
            "x": 505,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question3_selective(\'select\',\'3\')"
        },

        {
            "sprite": "ques3_4_us",
            "x": 690,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question3_selective(\'unselect\',\'4\')"
        },

        {
            "sprite": "ques3_4_sl",
            "x": 690,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question3_selective(\'select\',\'4\')"
        },

        {
            "sprite": "ques3_5_us",
            "x": 875,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question3_selective(\'unselect\',\'5\')"
        },

        {
            "sprite": "ques3_5_sl",
            "x": 875,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question3_selective(\'select\',\'5\')"
        },

        //Question 4
        {
            "sprite": "ques4_1_us",
            "x": 135,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question4_selective(\'unselect\',\'1\')"
        },

        {
            "sprite": "ques4_1_sl",
            "x": 135,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question4_selective(\'select\',\'1\')"
        },

        {
            "sprite": "ques4_2_us",
            "x": 320,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question4_selective(\'unselect\',\'2\')"
        },

        {
            "sprite": "ques4_2_sl",
            "x": 320,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question4_selective(\'select\',\'2\')"
        },

        {
            "sprite": "ques4_3_us",
            "x": 505,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question4_selective(\'unselect\',\'3\')"
        },

        {
            "sprite": "ques4_3_sl",
            "x": 505,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question4_selective(\'select\',\'3\')"
        },

        {
            "sprite": "ques4_4_us",
            "x": 690,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question4_selective(\'unselect\',\'4\')"
        },

        {
            "sprite": "ques4_4_sl",
            "x": 690,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question4_selective(\'select\',\'4\')"
        },

        {
            "sprite": "ques4_5_us",
            "x": 875,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question4_selective(\'unselect\',\'5\')"
        },

        {
            "sprite": "ques4_5_sl",
            "x": 875,
            "y": 1470,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question4_selective(\'select\',\'5\')"
        },

        //Question 5
        {
            "sprite": "ques5_1_us",
            "x": 135,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question5_selective(\'unselect\',\'1\')"
        },

        {
            "sprite": "ques5_1_sl",
            "x": 135,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question5_selective(\'select\',\'1\')"
        },

        {
            "sprite": "ques5_2_us",
            "x": 320,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question5_selective(\'unselect\',\'2\')"
        },

        {
            "sprite": "ques5_2_sl",
            "x": 320,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question5_selective(\'select\',\'2\')"
        },

        {
            "sprite": "ques5_3_us",
            "x": 505,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question5_selective(\'unselect\',\'3\')"
        },

        {
            "sprite": "ques5_3_sl",
            "x": 505,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question5_selective(\'select\',\'3\')"
        },

        {
            "sprite": "ques5_4_us",
            "x": 690,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question5_selective(\'unselect\',\'4\')"
        },

        {
            "sprite": "ques5_4_sl",
            "x": 690,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question5_selective(\'select\',\'4\')"
        },

        {
            "sprite": "ques5_5_us",
            "x": 875,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "question5_selective(\'unselect\',\'5\')"
        },

        {
            "sprite": "ques5_5_sl",
            "x": 875,
            "y": 1790,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "question5_selective(\'select\',\'5\')"
        },

        //Line
        {
            "sprite": "line1",
            "x": 70,
            "y": 610,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "line2",
            "x": 70,
            "y": 910,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "line3",
            "x": 70,
            "y": 1210,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "line4",
            "x": 70,
            "y": 1540,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0.5],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "feedback_popup",
            "x": 0,
            "y": 152,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "close_error_feedback_popup()"
        },

    ],

    "text_animations": [

        {
            "text": [{
                "content": "Feedback"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 190,
            "sy": 120,
            "x": 190,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 190,
            "sy": 140,
            "x": 190,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "1. How easy was this process for you?"
            },],
            "sx": 60,
            "sy": 380,
            "x": 60,
            "y": 380,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": "Scale 1 to 5: 1 = Very Complex  5 = Very Simple"
            },],
            "sx": 100,
            "sy": 450,
            "x": 100,
            "y": 450,
            "size": 34,
            "weight": "normal",
            "color": "#808080",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": "2. How did you find the pace/speed of this process?"
            },],
            "sx": 60,
            "sy": 660,
            "x": 600,
            "y": 660,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": "Scale 1 to 5: 1 =Too slow, 3 =Ideal, 5 = Too Fast"
            },],
            "sx": 100,
            "sy": 740,
            "x": 100,
            "y": 740,
            "size": 34,
            "weight": "normal",
            "color": "#808080",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": "3. How would you rate the user interface\n(design, font, colors & overall feel)"
            },],
            "sx": 60,
            "sy": 980,
            "x": 600,
            "y": 980,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": "Scale 1 to 5: 1 = Bad, 5 = Excellent"
            },],
            "sx": 100,
            "sy": 1060,
            "x": 100,
            "y": 1060,
            "size": 34,
            "weight": "normal",
            "color": "#808080",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": "4. Was the automated voice & instructions provided\n    clear & easy to understand?"
            },],
            "sx": 60,
            "sy": 1290,
            "x": 600,
            "y": 1290,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordWrapWidth": 1050,
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": "Scale 1 to 5: 1 = Hard to understand, 5 = Easy to understand"
            },],
            "sx": 100,
            "sy": 1380,
            "x": 100,
            "y": 1380,
            "size": 34,
            "weight": "normal",
            "color": "#808080",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        {
            "text": [{
                "content": "5. How fast was the overall loading time & waiting    time experience?"
            },],
            "sx": 60,
            "sy": 1620,
            "x": 600,
            "y": 1620,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "wordWrapWidth": 1050,
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": "Scale 1 to 5: 1 = Bad, 5 = Excellent"
            },],
            "sx": 100,
            "sy": 1710,
            "x": 100,
            "y": 1710,
            "size": 34,
            "weight": "normal",
            "color": "#808080",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

        /* {
            "text": [{
                "content": "Name should not be empty"
            }, ],
            "sx": 280,
            "sy": 1880,
            "x": 280,
            "y": 1880,
            "size": 34,
            "weight": "bold",
            "color": "#ff0000",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha":0
        }, */
        {
            "text": [{
                "content": "Comments"
            }],
            "sx": 10,
            "sy": 220,
            "x": 10,
            "y": 220,
            "size": 36,
            "weight": "bold",
            "color": "#1E4679",
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

    ],

    "input_animations": [
        {
            "text": [{
                "content": ""
            }],
            "placeHolder": "Additional comments, if you wish to add",
            "key": "in_comment",
            "sx": -1000,
            "sy": 180,
            "x": 200,
            "y": 180,
            "size": 40,
            "height": 100,
            "width": 770,
            "weight": "bold",
            "backgroundColor": "transparent",
            "fill": "#000000",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "alpha": 1,
            "align": "left",
            "type": "textarea",
            "anchor": [0, 0],
        },

        //  {
        //     "text": [{
        //         "content": ""
        //     }],
        //     "placeHolder": "Enter Your Name",
        //     "key": "in_name",
        //     "sx": -1000,
        //     "sy": 180,
        //     "x": 200,
        //     "y": 180,
        //     "size": 40,
        //     "height": 75,
        //     "width": 770,
        //     "weight": "bold",
        //     "backgroundColor": "transparent",
        //     "fill": "#000000",
        //     "tween_type": "Elastic.easeOut",
        //     "fontFamily": "Roboto-Regular",
        //     "timing": 200,
        //     "delay": 0,
        //     "alpha": 1,
        //     "align": "left",
        //     "type": "textarea",
        //     "anchor": [0, 0],
        // },
    ],

    "functions": [

        {
            "fn": "SetBGTile('feedback_bg')",
            "delay": 0
        },
        {
            "fn": "add_comment()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        }
    ],

    "sound_list": [{
        "sound": ["feedback_screen_audio"]
    }],

    "name": "Feedback Screen",
    "timing": -1,
    "index": 11
},

{
    "sprite_animations": [

        // {
        //     "sprite": "pdf",
        //     "x": 530,
        //     "y": 900,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 4,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 1,
        //     "onClickFn": "openpdf()"
        // },

        // {
        //     "sprite": "call",
        //     "x": 540,
        //     "y": 1380,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 4,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 1,
        //     "onClickFn": "phone_callback('93210 03007')"
        // },

        // {
        //     "sprite": "mail",
        //     "x": 540,
        //     "y": 1585,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 4,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 1,
        //     "onClickFn": "mail_callback('\customersupport@kotaklife\')"
        // },

        // {
        //     "sprite": "web",
        //     "x": 540,
        //     "y": 1790,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 4,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 1,
        //     "onClickFn": "open_url('\https://www.kotaklife.com/\')"
        // },

        // {
        //     "sprite": "submit_btn",
        //     "x": 530,
        //     "y": 510,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 4,
        //     "anchor": [0.5, 0.5],
        //     "scale": 0.8,
        //     "alpha": 1,
        //     "onClickFn": "thankyou_response()"
        // },

        // {
        //     "sprite": "thankyou_popup",
        //     "x": 570,
        //     "y": 820,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 1,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 0,
        //     "onClickFn": "clickSubmit()"
        // },

    ],

    "text_animations": [
        {
            "text": [{
                "content": "ERROR_MSG"
            },],
            "sx": 530,
            "sy": 1100,
            "x": 530,
            "y": 1100,
            "size": 46,
            "weight": "bold",
            "color": "#C33745",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 0
        },
        {
            "text": [{
                "content": "CONTENT"
            },],
            "sx": 530,
            "sy": 1300,
            "x": 530,
            "y": 1300,
            "size": 44,
            "weight": "bold",
            "color": "#C33745",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "align": "center",
            "alpha": 1
        },

    ],

    "input_animations": [
        // {
        //     "text": [{
        //         "content": ""
        //     }],
        //     "placeHolder": "Additional comments, if you wish to add",
        //     "key": "in_comment",
        //     "sx": -1000,
        //     "sy": 210,
        //     "x": 75,
        //     "y": 210,
        //     "size": 40,
        //     "height": 260,
        //     "width": 930,
        //     "weight": "bold",
        //     "backgroundColor": "transparent",
        //     "fill": "#000000",
        //     "tween_type": "Elastic.easeOut",
        //      "fontFamily": "Roboto-Regular",
        //     "timing": 200,
        //     "delay": 0,
        //     "alpha": 1,
        //     "align": "justify",
        //     "type": "textarea",
        //     "anchor": [0, 0],
        // },
    ],

    "functions": [

        {
            "fn": "SetBGTile('thank_you_bg')",
            "delay": 0
        },
        {
            "fn": "stop_anurone_st()",
            "delay": 0
        },
        {
            "fn": "check_disagree()",
            "delay": 0
        },
        {
            "fn": "call_UPDATE_COMPLETE_STATUS()",
            "delay": 0
        },
        {
            "fn": "redirect_url()",
            "delay": 6
        },
        {
            "fn": "load_thank_screen()",
            "delay": 0
        },

    ],

    "sound_list": [{
        "sound": ['thankyou_screen_audio']
    }],

    "name": "ThankYou Screen",
    "timing": -1,
    "index": 12
},



// new page 

{
    "sprite_animations": [

        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
            "onClickFn": "pagecomplete()"
        },



    ],

    "text_animations": [

    ],

    "functions": [

        {
            "fn": "SetBGTile('response_bg')",
            "delay": 0

        },
        {
            "fn": "pageText()",
            "delay": 0

        },

    ],

    "sound_list": [{
        "sound": []
    }],

    "name": "thankyou-response",
    "timing": -1,
    "index": 13
},

{
    "sprite_animations": [


        {
            "sprite": "cam_access",
            "x": 40,
            "y": 560,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0],
            "scale": 1,
            "alpha": 1,
        },
        {
            "sprite": "location_access",
            "x": 40,
            "y": 1130,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0],
            "scale": 1,
            "alpha": 1,
        },

        {
            "sprite": "allow_access_camera",
            "x": 100,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "getPermission()"
        },
        {
            "sprite": "allow_access_location",
            "x": 100,
            "y": 1380,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0, 0],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "getLocationPermission()"
        },
        {
            "sprite": "allow_access_camera_gray",
            "x": 100,
            "y": 830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 2,
            "anchor": [0, 0],
            "scale": 1,
            "alpha": 0,
            // "onClickFn": "getPermission()"
        },
        {
            "sprite": "allow_access_location_gray",
            "x": 100,
            "y": 1380,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 2,
            "anchor": [0, 0],
            "scale": 1,
            "alpha": 0,
            // "onClickFn": "getLocationPermission()"
        },
        {
            "sprite": "tick_camera",
            "x": 430,
            "y": 800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0, 0],
            "scale": 0.25,
            "alpha": 0
        },
        {
            "sprite": "tick_location",
            "x": 430,
            "y": 1360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 3,
            "anchor": [0, 0],
            "scale": 0.25,
            "alpha": 0
        },

        {
            "sprite": "proceed_permission_screen_btn",
            "x": 540,
            "y": 1800,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "permission_screen_proceed()"
        },


    ],

    "text_animations": [

        {
            "text": [{
                "content": "PERMISSION_CONTENT"
            }],
            "sx": 550,
            "sy": 400,
            "x": 550,
            "y": 400,
            "size": 44,
            "weight": "normal",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": "CAMERA_TEXT"
            }],
            "sx": 390,
            "sy": 700,
            "x": 390,
            "y": 700,
            "size": 44,
            "weight": "normal",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },
        {

            "text": [{
                "content": "CAM_ERROR"
            }],
            "sx": 550,
            "sy": 1035,
            "x": 550,
            "y": 1035,
            "size": 36,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },


        {
            "text": [{
                "content": "LOCATION_TEXT"
            }],
            "sx": 390,
            "sy": 1250,
            "x": 390,
            "y": 1250,
            "size": 44,
            "weight": "normal",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },

        {

            "text": [{
                "content": "LOC_ERROR"
            }],
            "sx": 550,
            "sy": 1580,
            "x": 550,
            "y": 1580,
            "size": 36,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 0,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "ALLOW_ACCESS_CAM"
            }],
            "sx": 280,
            "sy": 880,
            "x": 280,
            "y": 880,
            "size": 36,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },
        {
            "text": [{
                "content": "ALLOW_ACCESS_LOC"
            }],
            "sx": 280,
            "sy": 1430,
            "x": 280,
            "y": 1430,
            "size": 36,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },

        {
            "text": [{
                "content": "PROCEED"
            }],
            "sx": 540,
            "sy": 1800,
            "x": 540,
            "y": 1800,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },

    ],

    "functions": [

        {
            "fn": "SetBGTile('permission_bg')",
            "delay": 0
        },
        {
            "fn": "animateSprite(765,800,\'permission_screen_animation\',0.9,1,7,6,2)",
            "delay": 0
        },

        {
            "fn": "animateSprite(745,1370,\'permission_screen_animation\',0.9,1,7,6,-1)",
            "delay": 0
        },
        {
            "fn": "load_permission_screen()",
            "delay": 0
        },




    ],

    "sound_list": [{
        "sound": ["permission_screen_audio"]
    }],

    "name": "Permission Screen",
    "timing": -1,
    "index": 14
},

{
    "sprite_animations": [

        {
            "sprite": "Video_recording_box",
            "x": 540,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1
        },

        {
            "sprite": "video_consent_tick",
            "x": 240,
            "y": 1160,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1
        },

        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "goToPage(12)"
        },

    ],

    "text_animations": [
        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 190,
            "sy": 120,
            "x": 190,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 190,
            "sy": 140,
            "x": 190,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "RECORDING_IS_COMPLETE"
            },],
            "sx": 400,
            "sy": 1160,
            "x": 400,
            "y": 1160,
            "size": 50,
            "weight": "bold",
            "color": "#308939ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0, 0.5],
            "wordworpwidth": 800,
            "align": "justify",
            "alpha": 1
        },
        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },

    ],

    "functions": [
        {
            "fn": "SetBGTile('video_consent_bg')",
            "delay": 0
        },
        {
            "fn": "initCamOnly()",
            "delay": 0
        },
        {
            "fn": "load_video_consent_screen()",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },
        {
            "fn": "delete_overlay()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
    ],

    "sound_list": [{
        "sound": []
    }],

    "name": "video_consent_1",
    "timing": -1,
    "index": 15
},
{


    "sprite_animations": [
        {
            "sprite": "face_detected",
            "x": 885,
            "y": 510,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },
        {
            "sprite": "multi_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "light_error",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.8,
            "alpha": 0,
        },
        {
            "sprite": "tick3",
            "x": 748,
            "y": 500,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 0.2,
            "alpha": 0,
        },
        {
            "sprite": "policy_field",
            "x": 530,
            "y": 1200,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
        },
        {
            "sprite": "popup_facescore",
            "x": 540,
            "y": 1040,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 5,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "no_face_detected",
            "x": 860,
            "y": 360,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "gray_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },
        {
            "sprite": "proceed_btn",
            "x": 520,
            "y": 1830,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 1,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "start_photo_detections_1()"
        },

        {
            "sprite": "policy_details_disagree",
            "x": 540,
            "y": 970,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0,
        },

        // {
        //     "sprite": "saveandproceed_btn",
        //     "x": 520,
        //     "y": 1830,
        //     "loop": false,
        //     "timing": 0,
        //     "delay": 0,
        //     "toTopObj": 4,
        //     "anchor": [0.5, 0.5],
        //     "scale": 1,
        //     "alpha": 0,
        //     "onClickFn": "product_intro_disagree_save()"
        // },
        {
            "sprite": "btn_sl_plan_name_agree",
            "x": 800,
            "y": 610,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_plan_name_disagree",
            "x": 940,
            "y": 610,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_usl_plan_name_agree",
            "x": 800,
            "y": 610,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','plan_name')"
        },
        {
            "sprite": "btn_usl_plan_name_disagree",
            "x": 940,
            "y": 610,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','plan_name')"
        },
        {
            "sprite": "btn_sl_sum_assured_agree",
            "x": 800,
            "y": 775,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_sum_assured_disagree",
            "x": 940,
            "y": 775,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_usl_sum_assured_agree",
            "x": 800,
            "y": 775,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','sum_assured')"
        },
        {
            "sprite": "btn_usl_sum_assured_disagree",
            "x": 940,
            "y": 775,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','sum_assured')"
        },
        {
            "sprite": "btn_sl_insured_name_agree",
            "x": 800,
            "y": 940,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_insured_name_disagree",
            "x": 940,
            "y": 940,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_usl_insured_name_agree",
            "x": 800,
            "y": 940,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','insured_name')"
        },
        {
            "sprite": "btn_usl_insured_name_disagree",
            "x": 940,
            "y": 940,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','insured_name')"
        },
        {
            "sprite": "btn_sl_pre_amount_agree",
            "x": 800,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_pre_amount_disagree",
            "x": 940,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_usl_pre_amount_agree",
            "x": 800,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','pre_amount')"
        },
        {
            "sprite": "btn_usl_pre_amount_disagree",
            "x": 940,
            "y": 1140,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','pre_amount')"
        },
        {
            "sprite": "btn_sl_paying_term_agree",
            "x": 800,
            "y": 1300,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_paying_term_disagree",
            "x": 940,
            "y": 1300,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_usl_paying_term_agree",
            "x": 800,
            "y": 1300,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','paying_term')"
        },
        {
            "sprite": "btn_usl_paying_term_disagree",
            "x": 940,
            "y": 1300,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','paying_term')"
        },
        {
            "sprite": "btn_sl_policy_term_agree",
            "x": 800,
            "y": 1460,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_policy_term_disagree",
            "x": 940,
            "y": 1460,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_usl_policy_term_agree",
            "x": 800,
            "y": 1460,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','policy_term')"
        },
        {
            "sprite": "btn_usl_policy_term_disagree",
            "x": 940,
            "y": 1460,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','policy_term')"
        },
        {
            "sprite": "btn_sl_pre_paying_agree",
            "x": 800,
            "y": 1625,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_sl_pre_paying_disagree",
            "x": 940,
            "y": 1625,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 0
        },
        {
            "sprite": "btn_usl_pre_paying_agree",
            "x": 800,
            "y": 1625,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('agree','pre_paying')"
        },
        {
            "sprite": "btn_usl_pre_paying_disagree",
            "x": 940,
            "y": 1625,
            "loop": false,
            "timing": 0,
            "delay": 0,
            "toTopObj": 4,
            "anchor": [0.5, 0.5],
            "scale": 1,
            "alpha": 1,
            "onClickFn": "action_agree_disagree('disagree','pre_paying')"
        }
    ],

    "text_animations": [


        {
            "text": [{
                "content": "PROPOSAL_NO"
            }],
            "sx": 50,
            "sy": 260,
            "x": 50,
            "y": 260,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SCREEN_NAME"
            },],
            "sx": 900,
            "sy": 110,
            "x": 900,
            "y": 110,
            "size": 44,
            "weight": "bold",
            "color": "#4A4A4A",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 800,
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PRODUCT_NAME"
            }],
            "sx": 50,
            "sy": 380,
            "x": 50,
            "y": 380,
            "size": 42,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.p_proposal_number
            }],
            "sx": 50,
            "sy": 310,
            "x": 50,
            "y": 310,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name
            }],
            "sx": 50,
            "sy": 450,
            "x": 50,
            "y": 450,
            "size": 40,
            "weight": "bold",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 1
        },
        {
            "text": [{
                "content": 'download_speed'
            }],
            "sx": 200,
            "sy": 120,
            "x": 200,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 200,
            "sy": 140,
            "x": 200,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": 'upload_speed'
            }],
            "sx": 65,
            "sy": 120,
            "x": 65,
            "y": 120,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "mb/s"
            }],
            "sx": 65,
            "sy": 140,
            "x": 65,
            "y": 140,
            "size": 22,
            "weight": "normal",
            "color": "#1E4679",
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
                "content": "PLAN_NAME"
            }],
            "sx": 50,
            "sy": 610,
            "x": 50,
            "y": 610,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "SUM_ASSURED"
            }],
            "sx": 50,
            "sy": 780,
            "x": 50,
            "y": 780,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "LIFE_INSURED_NAME"
            }],
            "sx": 50,
            "sy": 940,
            "x": 50,
            "y": 940,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PREMIUM_AMOUNT"
            }],
            "sx": 50,
            "sy": 1140,
            "x": 50,
            "y": 1140,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },
        {
            "text": [{
                "content": "PREMIUM_PAYING_TERM"
            }],
            "sx": 50,
            "sy": 1280,
            "x": 50,
            "y": 1280,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0],
            "align": "left",
            "wordwrap": true,
            "wordWrapWidth": 750,
            "alpha": 1
        },
        {
            "text": [{
                "content": "POLICY_TERM"
            }],
            "sx": 50,
            "sy": 1440,
            "x": 50,
            "y": 1440,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0],
            "align": "left",
            "wordwrap": true,
            "wordWrapWidth": 750,
            "alpha": 1
        },
        {
            "text": [{
                "content": "FREQUENCY" //"Premium Paying"
            }],
            "sx": 50,
            "sy": 1600,
            "x": 50,
            "y": 1600,
            "size": 40,
            "weight": "normal",
            "color": "#1E4679",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0],
            "align": "left",
            "wordwrap": true,
            "wordWrapWidth": 750,
            "alpha": 1
        },
        {
            "text": [{
                "content": window.p_product_name
            }],
            "sx": 180,
            "sy": 700,
            "x": 180,
            "y": 700,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "wordWrapWidth": 540,
            "alpha": 1
        },

        {
            "text": [{
                "content": window.sum_assured
            }],
            "sx": 180,
            "sy": 860,
            "x": 180,
            "y": 860,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.res_params.life_insured_name
            }],
            "sx": 180,
            "sy": 1040,
            "x": 180,
            "y": 1040,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.premium_amount
            }],
            "sx": 180,
            "sy": 1220,
            "x": 180,
            "y": 1220,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.premium_paying_term
            }],
            "sx": 180,
            "sy": 1380,
            "x": 180,
            "y": 1380,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.policy_term
            }],
            "sx": 180,
            "sy": 1540,
            "x": 180,
            "y": 1540,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": window.p_frequency
            }],
            "sx": 180,
            "sy": 1710,
            "x": 180,
            "y": 1710,
            "size": 30,
            "weight": "bold",
            "color": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0, 0.5],
            "align": "left",
            "alpha": 1
        },

        {
            "text": [{
                "content": "MESSAGE_TEXT_1"
            }],
            "sx": 540,
            "sy": 1700,
            "x": 540,
            "y": 1700,
            "size": 40,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "MESSAGE_TEXT_2"
            }],
            "sx": 540,
            "sy": 1700,
            "x": 540,
            "y": 1700,
            "size": 40,
            "weight": "bold",
            "color": "#FF0000",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "FACE_MATCH_TXT"
            },],
            "sx": 540,
            "sy": 1050,
            "x": 540,
            "y": 1050,
            "size": 46,
            "weight": "bold",
            "color": "#eb1313ff",
            "tween_type": "Elastic.easeOut",
            "fontFamily": "Roboto-Regular",
            "timing": 200,
            "delay": 0,
            "anchor": [0.5, 0.5],
            "wordWrap": true,
            "wordworpwidth": 450,
            "align": "left",
            "alpha": 0
        },
        {
            "text": [{
                "content": "NEXT_BTN"
            }],
            "sx": 540,
            "sy": 1830,
            "x": 540,
            "y": 1830,
            "size": 50,
            "weight": "bold",
            "color": "#FFFFFF",
            "tween_type": "Elastic.easeOut",
            "timing": 500,
            "fontFamily": "Roboto-Regular",
            "delay": 0,
            "anchor": [0.5, 0.5],
            "align": "justify",
            "alpha": 1,
            "wordWrap": true,
            //"wordWrapWidth": 540
        },



    ],

    "input_animations": [

        {
            "text": [{
                "content": ""
            }],
            "placeHolder": " ",
            "key": "in_disagreement",
            "sx": -1000,
            "sy": 1430,
            "x": 130,
            "y": 1430,
            "size": 40,
            "height": 140,
            "width": 830,
            "weight": "bold",
            "backgroundColor": "#ffffff",
            "fill": "#000000",
            "tween_type": "Elastic.easeOut",
            "timing": 200,
            "delay": 2,
            "alpha": 0,
            "align": "left",
            "type": "textarea",
            "anchor": [0, 0],
        },

    ],

    "functions": [

        {

            "fn": "SetBGTile('policy_bg')",
            "delay": 0
        },

        {
            "fn": "miniCam()",
            "delay": 0
        },

        {
            "fn": "beginFaceDetect(false, \'tick3\', false, null)",
            "delay": 0
        },
        {
            "fn": "start_anurone_st()",
            "delay": 0
        },
        {
            "fn": "begin_anurone_st()",
            "delay": 0
        },
        {
            "fn": "load_policy_screen()",
            "delay": 0
        }

    ],

    "sound_list": [{
        "sound": ["product_kotak",
            "premium_of", "$var.currency_window.res_params.PREMIUM_AMOUNT",
            "payment_frequency", "for", "$var.years_window.res_params.PREMIUM_PAYING_TERM",
            "policy_term", "$var.years_window.res_params.POLICY_TERM",
            "sum_assured", '$var.currency_window.res_params.SUM_ASSURED']
    }],

    "name": "Policy Screen",
    "timing": -1,
    "index": 16
},

];

for (var i = 0; i < screens_eng.length; i++) {
    window.stage.screens.push(screens_eng[i]);
}

