/*
 Main KFD Controller
 */

// Environment
var PROD_ENV = true;
var LOADER_SCREEN = true;

var w1, w2, w3, w4, w5, s1, a1;
var divId = "outer_div";

// var useraction = 'https://plvc.anurcloud.com/portal/';
var useraction = 'https://plvcuat.anurcloud.com/portal/';

// Phaser Initialize
var XRes = 1080,
    YRes = 1920;
var game_canvas_id = "phaser-canvas";
var StartX = -1000,
    count = 0,
    SfxIndex = 0,
    offset = 0,
    sfx_offset = 0,
    cur_scr = 0,
    currentTween, currentSound, currentTimer, loaderText;

var game_scale = Phaser.Scale.FIT;

if (window.isMobile) {
    game_scale = Phaser.Scale.FIT   //ENVELOP;
} else {
    game_scale = Phaser.Scale.FIT;
}

var config = {
    parent: divId,
    dom: {
        createContainer: true
    },
    type: Phaser.CANVAS,
    width: XRes,
    height: YRes,
    resolution: 2,  // Force same DPI everywhere
    scale: {
        mode: game_scale,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [start_scene, second_scene],
    audio: {
        disableWebAudio: false
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
};

var game = new Phaser.Game(config);

var obj_list = new Array();
var obj_but_list = new Array();
var obj_text_list = new Array();
var obj_input_list = new Array();
var text_group, input_group, cust_group, top_group1, top_group2, top_group3, top_group4, top_group5, red_dot_group;
var screen_list = [];
var cur_sfx_list = new Array();
var events_list = [];
var lang = 'eng';
var sysLang = "eng";
var sysFlow = "normal";
var START_SCREEN = 0;
var load_scrn = START_SCREEN;

var translitLangArr = {
    "eng": "english",
    "tam": "tamil",
    "hin": "hindi",
    "tel": "telugu",
    "mal": "malayalam",
    "kan": "kannada",
    "ben": "bengali",
    "mar": "marathi",
    "guj": "gujarati",
    "pun": "punjabi",
    "ori": "oriya",
    "maw": "marwari",
    "ass": "assamese",
    "miz": "mizo"
};
var fontFamilyLangArr = {
    // "eng": "Uniform",
    "eng": "Roboto-Regular",  //[Roboto-Black,Roboto-BlackItalic,Roboto-Bold,Roboto-BoldItalic,Roboto-Italic,Roboto-Light,Roboto-LightItalic,Roboto-Medium,Roboto-MediumItalic,Roboto-Regular,Roboto-Thin,Roboto-ThinItalic]",
    "tam": "Tamil",
    "hin": "Hind",
    "tel": "Telugu",
    "mal": "malayalam",
    "kan": "kannada",
    "ben": "bengali",
    "mar": "marathi",
    "guj": "gujarati",
    "pun": "punjabi",
    "ori": "oriya",
    "maw": "marwari",
    "ass": "assamese",
    "miz": "Calibri",
    "ind": "Glacial Indifference"
};
var numberSystemLangArr = {
    "eng": "common",
    "tam": "Hind",
    "hin": "Hind",
    "tel": "Hind",
    "mal": "Hind",
    "kan": "Hind",
    "ben": "Hind",
    "mar": "Hind",
    "guj": "Hind",
    "pun": "Hind",
    "ori": "Hind",
    "maw": "common",
    "ass": "common",
    "miz": "common"
};
var choosenLangArr = {
    "eng": "English",
    "tam": "Tamil",
    "hin": "Hindi",
    "tel": "Telugu",
    "mal": "Malayalam",
    "kan": "Kannada",
    "ben": "bengali",
    "mar": "marathi",
    "guj": "gujarati",
    "pun": "punjabi",
    "oriya": "ori",
    "marwari": "maw",
    "assamese": "ass",
    "mizo": "miz"
};

// Default for camera
var webcamtext;
var camera_record_status = false;

// Default for SMS OTP
var smsOTPText;
var smsOTP_btn_status = false;
var smsOTPCur = 'M@yjo$';
var smsOTPOk = false;
var smsOTPValidTxt;
var smsOTPValid_btn_status = false;

// Default for rest load
var restLoadText;
var restLoadStatus = false;
var restLoadString;

// Default Face Detect
var intervalFaceDetectCam;
var faceDetectStatus = false;
var faceDetectText;
var faceDStr = '',
    faceDNStr = '';
var camera_btn_status = false;

// Input Null Check
var inputNullStr = '';
var inputNullTxt;
var inputNullTxt1;

var edit_btn_status = false;

// Default Light Sensor
var lightcamtext;

// Personal Details - Check Box
var check_status = {
    'name': true,
    'email_id': true,
    'address': true,
    'dob': true,
    'phone_no': true
};

// Repeatedly Captured Photo Image
var cap_photo_img_append = false;
var cap_consent_img_append = false;
var cap_captured_img_append = false;
var cap_screen_img_append = false;

// Screen Name
var cur_screen_name;

// AutoLoad Screen
var auto_load_enable = true;
var auto_load_scrn_no = 3;

// Camera Error
var cameraErrorPageStatus = true;
var cameraErrorPageNo = 5;
var videoLoadPageNo = 20;

// Photo Load
var imgLoadPageNo = 0;
var imgLoadEnable = false;
var imgRequest = 0;
var intervalImgRequest;
var intervalImgCount = 0;

// Disagreement Variables
var disagreement_status = false;
var thankDisPageNo = 0;
var thankNorPageNo = 0;

// Default Font Values
var dbg_color = '#ffffff';
var df_color = '#000000';
var df_size = 27;
var df_weight = 'normal';
var df_align = 'center';
var df_family = 'Glacial Indifference';
var df_boundsAlignH = 'left';
var df_wordWrap = false;
var df_wordWrapWidth = 1000;

// Default Input Field Values
var di_size = 14;
var di_fill = '#3b3a3a';
var di_weight = 'normal';
var di_width = 150;
var di_height = 90;
var di_padding = 0;
var di_placeHolder = 'Enter value ...';
var di_backgroundColor = '#ffffff';
var di_placeHolderColor = '#3b3a3a';
var di_cursorColor = '#3b3a3a';

//alert(window.res_params.flow_data.Application_Number);
var facedetect_1, facedetect_2, facedetect_3, ques_text, y, n;

var connection;
var type, nettype, netrtt, netdown;

window.q1 = "";
window.q2 = "";
window.q3 = "";
window.q4 = "";
window.q5 = "";
window.q6 = "";
window.q7 = "";
window.q8 = "";
window.q9 = "";

// Initially Pre-load All Assets
function loadAssets() {
    (typeof commonAssets === 'function') ? commonAssets() : '';
    (typeof customAssets === 'function') ? customAssets() : '';
}

/*
    Loader Module
 */

function loaderScreenInit() {
    game.cameras.main.backgroundColor = dbg_color;

    loaderText = game.add.text(game.cameras.main.centerX, game.cameras.main.centerY, '', {
        fill: df_color
    });

    //////console.log(loaderText);
    loaderText.setOrigin(0.5, 0.5);
    text_group.add(loaderText);

    loadAssets();
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();

    game.load.on('progress', loadStart);

    game.load.on('fileprogress', fileComplete);

    game.load.on('complete', loadComplete);

    game.load.start();
}

/*
Load Rest Assets
 */

function loadRestAssetStart() {
    restLoadStatus = true;
    if (sysLang == "eng") {
        restLoadString = "Loading assets...";
    } else if (sysLang == "ind") {
        restLoadString = "memuat aset ...";
    }

    restLoadString = transliterateText(restLoadString, translitLangArr[sysLang]);

    //  restLoadText = game.add.text(XRes/2, YRes/2, restLoadString, {
    //     font: fontFamilyLangArr[sysLang],
    //     fontSize: "70px",
    //     fontWeight: "bold",
    //     fill: "#FFFFFF",
    //     align: "center"
    // });

    restLoadText.setOrigin(0.5, 0.5);

    restLoadText = addTextToGame(restLoadString, XRes / 2, YRes / 2, fontFamilyLangArr[sysLang], "70px", "#FFFFFF", "center", 1080, 0.5, 0.5, false);
    //////console.log(restLoadText);

    restLoadText.alpha = 0;
    game.add.tween(restLoadText).to({
        alpha: 1
    }, 500, Phaser.Easing.Linear.None, true, 0, 250, true);

    obj_list.push(restLoadText);
    obj_text_list.push(restLoadText);
}

function loadRestAssetProgress(lprec) {
    if (lprec === undefined) {
        lprec = 0;
    }
    var restLoadProgressString = restLoadString + " " + lprec + " % ";
    restLoadText.setText(restLoadProgressString);
}

function loadRestAssetComplete() {
    // restLoadStatus = false;
    // restLoadText.setText("");

    if (auto_load_enable) {
        goToPage(auto_load_scrn_no);
    }
}

function resetValues() {
    cap_photo_img_append = false;
    cap_screen_img_append = false;
    cap_consent_img_append = false;
    smsOTPCur = 'M@yjo$';
    smsOTPOk = false;
    cap_captured_img_append = false;
    disagreement_status = false;
    imgLoadEnable = false;
    imgRequest = 0;
    intervalImgCount = 0;
}

function loadStart() {
    $('#' + game_canvas_id).css('pointer-events', 'none');
    loaderText.text = "Loading...";

    //////console.log("LOAD START");

    if (cur_scr == 2) {
        loadRestAssetStart();
    }
}

function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    loaderText.text = "Loading... " + progress + "%";
    if (cur_scr == 2) {
        loadRestAssetProgress(progress);
    }
}

function loadComplete() {
    $('#' + game_canvas_id).css('pointer-events', 'auto');

    if (loaderText)
        loaderText.visible = false;

    if (cur_scr == 0) {
        resetValues();
    }
    if (cur_scr == 2) {
        loadRestAssetComplete();
    }

    if ((load_scrn == 0) || (load_scrn == 2) && ((cur_scr == 0) || (cur_scr == 1))) {
        goScreen(load_scrn);
    }
}





// setscale function 

// function scalePage10(){ 

//     goToPage(10)

//     let text = this.add.text(550, 1640, 'helllo hariharan welcome to my page thankyou', { fontSize: '24px', color: '#ffffff' });

// // To zoom the text
// text.setScale(1.5);
// }




function scene_preloader(scene_type, scene) {

    //browser_text();
    ////console.log('SCENE_PRELOADER :' + scene_type);
    // Groups
    game = scene;
    text_group = game.add.group();
    input_group = game.add.group();
    top_group1 = game.add.group();
    top_group2 = game.add.group();
    top_group3 = game.add.group();
    top_group4 = game.add.group();
    top_group5 = game.add.group();
    red_dot_group = game.add.group();


    if (scene_type == 'START') {
        game.load.plugin('rexinputtextplugin', './assets/js/common/plugins/rex/rexinputtextplugin.min.js', true);
        game.load.plugin('rexscaleplugin', './assets/js/common/plugins/rex/rexscaleplugin.min.js', true);
        game.load.plugin('rexflashplugin', './assets/js/common/plugins/rex/rexflashplugin.min.js', true);
        game.load.plugin('rexmovetoplugin', './assets/js/common/plugins/rex/rexmovetoplugin.min.js', true);
        game.load.plugin('rexshakepositionplugin', './assets/js/common/plugins/rex/rexshakepositionplugin.min.js', true);
        game.load.plugin('rexcanvasplugin', './assets/js/common/plugins/rex/rexcanvasplugin.min.js', true);
        game.load.plugin('rexbbcodetextplugin', './assets/js/common/plugins/rex/rexbbcodetextplugin.min.js', true);
        game.load.plugin('rexfilechooserplugin', './assets/js/common/plugins/rex/rexfilechooserplugin.min.js', true);
        game.load.plugin('rextexttypingplugin', './assets/js/common/plugins/rex/rextexttypingplugin.min.js', true);
    }
    game.load.scenePlugin('rexuiplugin', './assets/js/common/plugins/rex/rexuiplugin.min.js', 'rexUI', 'rexUI', true);


    if (scene_type == 'START')
        loadAssets();

}

var create_interval;

function scene_creator(SCREEN_NUMBER, scene) {

    game = scene;

    game.game.canvas.id = game_canvas_id;
    game.cameras.main.backgroundColor = dbg_color;

    game.events.on('pause', onGamePause);
    game.events.on('resume', onGameResume);
    this.game.scale.refresh();

    if (SCREEN_NUMBER == 2) {
        ////console.log("SCREEN_NUMBER 2");
        create_interval = setInterval(function () {
            ////console.log("lang_assets_loaded = ", lang_assets_loaded);
            if (lang_assets_loaded) {
                goScreen(SCREEN_NUMBER);
                clearInterval(create_interval);
            }

        }, 1000);
    } else
        goScreen(SCREEN_NUMBER);
}

function scene_updater() {
    setDepth(top_group1, 1);
    setDepth(top_group2, 2);
    setDepth(top_group3, 4);
    setDepth(top_group4, 4);
    setDepth(top_group5, 5);
    setDepth(text_group, 6);

    updateVideoFrame();
}

function onGamePause() {
    if (currentTween != null) currentTween.pause();
    if (currentSound != null) currentSound.pause();
    if (currentTimer != null) currentTimer.pause();
}

function onGameResume() {
    if (currentTween != null) currentTween.resume();
    if (currentSound != null) currentSound.resume();
    if (currentTimer != null) currentTimer.resume();
}

// Disable canvas inputs
function canvasInputDisable() {
    //  //////console.log("Fn : canvasInputDisable ");
    $('#' + game_canvas_id).css('pointer-events', 'none');
}

// Enable canvas inputs
function canvasInputEnable() {
    //  //////console.log("Fn : canvasInputEnable ");
    $('#' + game_canvas_id).css('pointer-events', 'auto');
}


function gameCanvasDisable() {
    game.input.enabled = false;
    // console.log("fn call : gameCanvasDisable()");
}

function gameCanvasEnable() {
    game.input.enabled = true;
    // console.log("fn call : gameCanvasEnable()");
}
// Text styling
function SetupText(obj, txt) {
    var font_family = (obj.fontFamily) ? obj.fontFamily : fontFamilyLangArr[sysLang];
    var font_size = obj.size || df_size;
    var align = obj.align || df_align;
    var weight = obj.weight || df_weight;
    var color = obj.color || df_color;
    var boundsAlign = obj.boundsAlignH || df_boundsAlignH;
    var wordWrap = obj.wordWrap || df_wordWrap;
    var wordWrapWidth = obj.wordWrapWidth || df_wordWrapWidth;
    var fontStyle = obj.fontStyle || 'normal';

    var strokeThickness = 0;
    if (weight == 'bold')
        strokeThickness = 2;

    var font_obj = game.add.text(obj.sx, obj.sy, txt, {
        fontFamily: font_family,
        fontSize: font_size,
        fontStyle: fontStyle,
        color: color,
        align: align,
        stroke: color,
        strokeThickness: strokeThickness,
        wordWrap: {
            width: wordWrapWidth,
            callback: null,
            callbackScope: null,
            useAdvancedWrap: false
        },
    });

    //////console.log("FONT OBJ = ", font_obj);

    if (obj.lineSpacing) {
        font_obj.lineSpacing = obj.lineSpacing;
    }
    if (obj.padding) {
        font_obj.padding.set(obj.padding[0], obj.padding[1]);
    }
    // font_obj.setTextBounds(0, 0, XRes,YRes);
    //font_obj.setTextBounds(0,0,game.width, game.height);
    font_obj.setOrigin(0.5, 0.5);
    font_obj.inputEnabled = false;

    if (obj.alpha == 0) {
        font_obj.alpha = 0;
    }

    text_group.add(font_obj);

    return font_obj;
}

function addTextToGame(txt, xPos, yPos, font_family, font_size, color, align, wordWrapWidth, anchorX, anchorY, inputEnabled) {

    var font_obj = game.add.text(xPos, yPos, txt, {
        fontFamily: font_family,
        fontSize: font_size,
        color: color,
        align: align,
        stroke: color,
        strokeThickness: 1,
        wordWrap: {
            width: wordWrapWidth,
            callback: null,
            callbackScope: null,
            useAdvancedWrap: false
        },
    });

    //////console.log("ADDING FONT OBJ = ", font_obj);

    font_obj.setOrigin(anchorX, anchorY);
    font_obj.inputEnabled = false;

    text_group.add(font_obj);
    obj_list.push(font_obj);
    obj_text_list.push(font_obj);

    return font_obj;
}

// var text = game.add.text(x, y, 'Hello, Phaser!', { fontSize: 24, fill: '#ffffff' });

// // Function to zoom in
// function zoomIn() {
//     text.scale.x += 0.1;
//     text.scale.y += 0.1;
// }

// // Function to zoom out
// function zoomOut() {
//     text.scale.x -= 0.1;
//     text.scale.y -= 0.1;
// } 



// function ram(){

//     zoomIn() // Call this to zoom in
// zoomOut()
// }

// // Example of calling the zoom functions
// // You can call these functions in response to user input or events
// zoomIn(); // Call this to zoom in
// zoomOut()

// Text styling
// function SetupText(obj, txt) {
//     var font_family = (obj.fontFamily) ? obj.fontFamily : fontFamilyLangArr[sysLang];
//     var font_size = obj.size || df_size;
//     var align = obj.align || df_align;
//     var weight = obj.weight || df_weight;
//     var color = obj.color || df_color;
//     var boundsAlign = obj.boundsAlignH || df_boundsAlignH;
//     var wordWrap = obj.wordWrap || df_wordWrap;
//     var wordWrapWidth = obj.wordWrapWidth || df_wordWrapWidth;
//     var padding = obj.padding || di_padding;
//     // var lineSpacing = obj.lineSpacing || di_lineSpacing;

//     var txt_direction = (obj.direction) ? obj.direction : false;

//     var strokeThickness = 0;
//     if (weight == 'bold')
//         strokeThickness = 1;

//     var font_obj = game.add.text(obj.sx, obj.sy, txt, {
//         fontFamily: font_family,
//         fontSize: font_size,
//         color: color,
//         align: align,
//         stroke: color,
//         strokeThickness: strokeThickness,
//         padding: padding,
//         // lineSpacing: lineSpacing,
//         // padding: {
//         //       left :15,
//         //       right :15,
//         //       top :15,
//         //       bottom :15,
//         // }, 
//         wordWrap: {
//             width: wordWrapWidth,
//             callback: null,
//             callbackScope: null,
//             useAdvancedWrap: false
//         },
//         rtl: txt_direction,
//         resolution: 2 // Higher resolution for sharper rendering
//     });

//     if (sysLang == "eng") {
//         // font_obj.lineSpacing = 6;
//     }
//     else {
//         // font_obj.setLineSpacing(6);
//         // font_obj.setPadding(0, 0, 20, 20);
//     }

//     //console.log("FONT OBJ = ", font_obj);

//     // if(sysLang == 'hin')
//     // {

//     //   padding: 15;

//     // }

//     // if(sysLang == 'hin')
//     // {

//     //   lineSpacing: 0;

//     // }
//     // if (obj.lineSpacing) {
//     //     font_obj.lineSpacing = obj.lineSpacing;
//     // }
//     // if (obj.padding) {
//     //     font_obj.padding.set(obj.padding[0], obj.padding[1]);
//     // }



//     // font_obj.setTextBounds(0, 0, XRes,YRes);
//     //font_obj.setTextBounds(0,0,game.width, game.height);
//     font_obj.setOrigin(0.5, 0.5);
//     font_obj.inputEnabled = false;

//     if (obj.alpha == 0) {
//         font_obj.alpha = 0;
//     }

//     text_group.add(font_obj);

//     if (obj.toTopObj == 8) {
//         text_group1.add(font_obj);
//     }

//     return font_obj;
// }


// window.noOfLines = 0;

// function addTextToGame(txt, xPos, yPos, font_family, font_size, color, align, wordWrapWidth, anchorX, anchorY, inputEnabled) {

//     var font_obj = game.add.text(xPos, yPos, txt, {
//         fontFamily: font_family,
//         fontSize: font_size,
//         color: color,
//         align: align,
//         stroke: color,
//         strokeThickness: 0,
//         wordWrap: {
//             width: wordWrapWidth,
//             callback: null,
//             callbackScope: null,
//             useAdvancedWrap: false
//         },
//         resolution: 2 // Higher resolution for sharper rendering

//     });

//     //console.log("ADDING FONT OBJ = ", font_obj);

//     font_obj.setOrigin(anchorX, anchorY);
//     font_obj.inputEnabled = false;

//     text_group.add(font_obj);
//     if (font_obj.toTopObj == 8) {
//         text_group1.add(font_obj);
//     }
//     obj_list.push(font_obj);
//     obj_text_list.push(font_obj);

//     return font_obj;
// }

function addTextToGameH(txt, xPos, yPos, font_family, font_size, color, align, wordWrapWidth, anchorX, anchorY, inputEnabled) {

    var font_obj = game.add.rexBBCodeText(xPos, yPos, txt, {
        fontFamily: font_family,
        fontSize: font_size,
        color: color,
        align: align,
        stroke: color,
        strokeThickness: 0,
        wrap: {
            mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
            width: 950
        },

    });

    // game.add.rexBBCodeText(70, 1530, '\nਅਸੀਂ ਤੁਹਾਨੂੰ ਇਹ ਵੀ ਬੇਨਤੀ ਕਰਾਂਗੇ ਕਿ ਤੁਹਾਡੀ PNB MetLife ਪਾਲਿਸੀ ਨੂੰ ਸਮਰਪਣ ਕਰਨ ਜਾਂ ਪਾਲਿਸੀ ਬੋਨਸ ਜਾਰੀ ਕਰਨ ਲਈ KYC ਦਸਤਾਵੇਜ਼ ਜਮ੍ਹਾ ਕਰਨ ਲਈ IRDAI ਜਾਂ ਸਰਕਾਰੀ ਅਧਿਕਾਰੀਆਂ ਵਜੋਂ ਦਾਅਵਾ ਕਰਨ ਵਾਲੇ ਕਿਸੇ ਵੀ ਵਿਅਕਤੀ ਦੀ ਕਾਲ ਦਾ ਜਵਾਬ ਨਾ ਦਿਓ।\n', {
    //     fontFamily: fontFamilyLangArr[sysLang],
    //     fontSize: '38px',
    //     color: dBLUE,
    //     align: 'left',
    //     stroke: dBLUE,
    //     strokeThickness: 0,
    //     wrap: {
    //         mode: 'word', // 0|'none'|1|'word'|2|'char'|'character'
    //         width: 950
    //     },

    //     lineSpacing: 8,
    // });

    //console.log("ADDING FONT OBJ = ", font_obj);

    font_obj.setOrigin(anchorX, anchorY);
    font_obj.alpha = 0;    //changes
    font_obj.inputEnabled = false;

    text_group.add(font_obj);
    obj_list.push(font_obj);
    obj_text_list.push(font_obj);

    return font_obj;
}

// Input Field styling // Modified for Phaser 3
function SetupInputField(obj, txt) {
    var font_family = (obj.fontFamily) ? obj.fontFamily : fontFamilyLangArr[sysLang];
    var font_size = obj.size + "px";
    var font = font_size + "px " + font_family;
    var fill = obj.fill || di_fill;
    var fontWeight = obj.fontWeight || di_weight;
    var width = obj.width || di_width;
    var height = obj.height || di_height;
    var padding = obj.padding || di_padding;
    var placeHolder = obj.placeHolder || di_placeHolder;
    var backgroundColor = obj.backgroundColor || di_backgroundColor;
    var placeHolderColor = obj.placeHolderColor || di_placeHolderColor;
    var cursorColor = obj.cursorColor || di_cursorColor;

    var input_obj = addInputField(obj.key, obj.x, obj.y, width, height, obj.type, txt, placeHolder, font_size, backgroundColor, font_family, fill, obj.align, obj.maxLength);

    if (txt) {
        input_obj.setText(txt);
    } else {
        input_obj.setText('');
    }
    if (obj.key) {
        input_obj.key = obj.key;
    }
    input_obj.setOrigin(0.5, 0.5);

    if (obj.onBlur != '') {
        input_obj.on('blur',
            function (inputText, e) {

                var nextInput = getInputObject(obj.onBlur);

                if (nextInput != null) {
                    nextInput.setFocus();
                }

            });
    }

    if (obj.alpha == 0) {
        input_obj.alpha = 0;
    }

    input_group.add(input_obj);
    return input_obj;
}

function addInputField(ip_id, x, y, width, height, ip_type, ip_text, ip_placeholder, ip_fontsize, ip_bgcolor, ip_fontfamily, ip_fontcolor, ip_align, ip_maxLength, ip_bordercolor) {

    var inputText = game.add.rexInputText(x, y, width, height, {
        id: ip_id,
        type: ip_type, //text | textarea | password | number | color
        text: ip_text,
        placeholder: ip_placeholder,
        fontSize: ip_fontsize,
        backgroundColor: ip_bgcolor,
        borderColor: ip_bordercolor,
        fontFamily: ip_fontfamily,
        color: ip_fontcolor,
        align: ip_align,
        maxLength: ip_maxLength
    });

    //////console.log(inputText);

    obj_list.push(inputText);
    obj_input_list.push(inputText);

    inputText.on('textchange',
        function (inputText, e) {

            if (inputText.text.length >= ip_maxLength) {
                inputText.setText(inputText.text.substring(0, ip_maxLength));
                inputText.setBlur();
            }

        });

    return inputText;

}

function getInputObject(key) {
    for (var i = 0; i < input_group.children.entries.length; i++) {
        if (input_group.children.entries[i].key == key) {
            return input_group.children.entries[i];
        }
    }

    return null;
}

function getTextObject(text) {
    for (var i = 0; i < text_group.children.entries.length; i++) {
        if (text_group.children.entries[i].text == text) {
            return text_group.children.entries[i];
        }
    }

    return null;
}

function getSpriteObject(key) {

    //////console.log(obj_list);
    for (var i = 0; i < obj_list.length; i++) {
        if (obj_list[i].type == "Sprite") {
            if (obj_list[i].texture.key == key) {
                return obj_list[i];
            }
        }
    }

    return null;
}

function LoadAnimation(obj, params) {
    var anim_name = "default";
    var sprite_name = params.sprite;
    var x = params.x;
    var y = params.y;
    if (!obj) {
        obj = game.add.sprite(0, 0, sprite_name);
        obj.setOrigin(0.5);
    }
    obj.x = x;
    obj.y = y;
    obj.inputEnabled = true;

    if (params.toTopObj) {
        groupToTop(obj, params.toTopObj);
    }

    return obj;
}

function AddEvent(ev) {
    events_list[events_list.length] = ev;
}

function PlaySpriteAnim(anim) {
    //////console.log('SPRITE = ', anim);
    var timer = game.time.addEvent({
        delay: 1000 * anim.delay, // ms
        callback: function () {

            var temp = LoadAnimation(temp, anim); //.x, anim.y, anim.sprite);

            temp.id = anim.id;
            temp.fn_type = anim.fn_type;
            temp.fn_param = anim.fn_param;

            if (anim.fn_type)
                temp.setInteractive({
                    useHandCursor: true
                });

            //temp.play('default', anim.timing, anim.loop);
            if (anim.scale)
                temp.scale = anim.scale;

            if (anim.alpha == 0)
                temp.alpha = 0;

            if (anim.anchor != null) {
                temp.setOrigin(anim.anchor[0], anim.anchor[1]);
            } else {
                temp.setOrigin(0.5);
            }

            var params = anim.params;

            if (anim.fadeout) {
                var timer = game.time.addEvent({
                    delay: 1000 * anim.fadeout,
                    callback: function () {

                        fadeout(anim.sprite, 500);

                    },
                    callbackScope: this,
                    loop: false
                });

                AddEvent(timer);
            }

            if (params) {
                var type = anim.anim_type;
                var x1 = anim.x,
                    y1 = anim.y,
                    x2 = params[0],
                    y2 = params[1];

                //     //////console.log(type," ",x1," ",y1," ",x2," ",y2);

                // Move Type
                temp.setOrigin(0.5, 0.5);
                if (anim.anim_type == "move") {
                    game.add.tween(temp).to({
                        x: x2,
                        y: y2
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * anim.delay);
                    if (anim.disappear) {
                        AddEvent(game.time.events.add(Phaser.Timer.SECOND * anim.disappear, function () {
                            game.add.tween(temp.scale).to({
                                x: 0,
                                y: 0
                            }, 200, anim.tween_type, true, Phaser.Timer.SECOND * anim.disappear);
                        }, this));
                    }
                } else if (anim.anim_type == "ms0xy") // Scale & Move to a specific position & scale value from 0 - x.
                {
                    var scale_params = anim.scale_params;
                    var scale_x = scale_params[0] ? scale_params[0] : 1;
                    var scale_y = scale_params[1] ? scale_params[1] : 1;

                    temp.scale = 0;
                    game.add.tween(temp.scale).to({
                        x: scale_x,
                        y: scale_y
                    }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true, Phaser.Timer.SECOND * anim.delay);

                    // Move event
                    AddEvent(game.time.events.add(Phaser.Timer.SECOND, function () {

                        game.add.tween(temp).to({
                            x: x2,
                            y: y2
                        }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true, Phaser.Timer.SECOND * anim.delay);

                    }, this));

                } else if (anim.anim_type == "scale") {
                    //   //////console.log("In Scale");
                    temp.scale = x2;
                    game.add.tween(temp.scale).to({
                        x: y2,
                        y: y2
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * 2);
                } else if (anim.anim_type == "alpha") {
                    temp.alpha = x2;
                    game.add.tween(temp).to({
                        alpha: y2
                    }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true);

                } else if (anim.anim_type == "spin") {
                    var tween = game.add.tween(temp).to({
                        angle: x2
                    }, Phaser.Timer.SECOND * anim.timing, anim.tween_type, true);
                    if (anim.loop) {
                        tween.loop(true);
                        tween.yoyo(true, Phaser.Timer.SECOND * y2);
                    }
                } else if (anim.anim_type == "zoominout") {
                    //     //////console.log("In Zoom In Out");
                    temp.scale = 1;

                    game.add.tween(temp.scale).to({
                        x: 1.2,
                        y: 1.2
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * 2);

                    game.add.tween(temp.scale).to({
                        x: 1,
                        y: 1
                    }, Phaser.Timer.SECOND * anim.timing, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * 2);
                }
            }
            if (anim.fade) {
                //     //////console.log("Inside Fade "+anim.fade);
                game.add.tween(temp).to({
                    alpha: 0
                }, 145, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * anim.fade);
            } else if (anim.disappear)
                game.add.tween(temp.scale).to({
                    x: 0,
                    y: 0
                }, 200, anim.tween_type, true, Phaser.Timer.SECOND * anim.disappear);
            else if (anim.fade)
                game.add.tween(temp).to({
                    alpha: 0
                }, 145, Phaser.Easing.Linear.None, true, Phaser.Timer.SECOND * anim.fade);

            if (anim.onClickFn) {
                temp.inputEnabled = true;

                temp.setInteractive({
                    useHandCursor: true
                });

                temp.on('pointerdown', function (pointer) {
                    callFunctionString(anim.onClickFn);
                });

                //temp.events.onInputDown.add(function () { callFunctionString(anim.onClickFn) }, this);
            }

            obj_list.push(temp);
            schedule_tween(temp);

        },
        callbackScope: this,
        loop: false
    });

    AddEvent(timer);

}

function checkObjList(name) {
    for (var i = 0; i < obj_list.length; i++) {
        if (obj_list[i].key == name) {
            //////console.log('Found ', name);
            obj_list[i].destroy();
        }

    }
}

function schedule_tween(obj) {
    if (!window.stage.screens[cur_scr].tweens) return;
    for (var i = 0; i < window.stage.screens[cur_scr].tweens.length; i++) {
        var tween = window.stage.screens[cur_scr].tweens[i];
        if (tween.obj.startsWith(obj.key)) {
            game.add.tween(obj).to({
                x: tween.x,
                y: tween.y
            }, tween.timing, tween.tween_type, true, Phaser.Timer.SECOND * tween.delay);
            break;
        }
    }
}

function PlayTextAnim(anim) {
    //////console.log('TEXT = ', anim);

    var text_toDisplay = "";

    var orgStr = anim.text[0].content;
    text_toDisplay = orgStr;

    var tween_type = anim.tween_type.toLowerCase();
    var txt = SetupText(anim, text_toDisplay);

    //////console.log('INDEX = ', game.children);

    txt.id = anim.id;

    if (anim.anchor != null) {
        if (typeof anim.anchor[1] !== undefined) {
            txt.setOrigin(anim.anchor[0], anim.anchor[1]);
        } else {
            txt.setOrigin(anim.anchor[0], 0);
        }

    }

    //Has to Be Modified for Phaser 3
    //  if (tween_type.startsWith("typewrite")) {
    // txt.text = "";
    // AddEvent(game.time.events.add(Phaser.Timer.SECOND * anim.delay, function() {
    //     txt = typeWriter(txt, text_toDisplay, anim.timing);
    //     obj_list.push(txt);
    //     obj_text_list.push(txt);
    // }, this));
    // }

    if (tween_type.startsWith("typewrite")) {

        //alert();
        var timer = game.time.addEvent({
            delay: 1000 * anim.delay,
            callback: function () {

                typewriter(txt);

            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);
        obj_list.push(txt);
        obj_text_list.push(txt);
    }

    //Has to Be Modified for Phaser 3
    else if (tween_type.startsWith("fadein")) {
        txt.alpha = 0;
        //     //////console.log("Inside Fade "+anim.fade);

        game.add.tween(txt).to({
            alpha: 1
        }, anim.timing, "Linear", true, Phaser.Timer.SECOND * anim.delay);

        obj_list.push(txt);
        obj_text_list.push(txt);

        if (anim.disappear)
            game.add.tween(txt).to({
                alpha: 0
            }, anim.timing * 2, "Linear", true, Phaser.Timer.SECOND * anim.disappear);

        obj_list.push(txt);
        obj_text_list.push(txt);

    } else if (anim.disappear) {
        var timer = game.time.addEvent({
            delay: 1000 * anim.delay,
            callback: function () {

                txt.alpha = 1;

                obj_list.push(txt);
                obj_text_list.push(txt);
            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);

        var timer2 = game.time.addEvent({
            delay: 1000 * anim.disappear,
            callback: function () {

                txt.alpha = 0;

            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer2);
    } else {

        if (anim.delay > 0) {
            var timer = game.time.addEvent({
                delay: 1000 * anim.delay,
                callback: function () {

                    txt.alpha = 1;

                    obj_list.push(txt);
                    obj_text_list.push(txt);
                },
                callbackScope: this,
                loop: false
            });

            AddEvent(timer);
        }


        if (anim.disappear) {
            var timer = game.time.addEvent({
                delay: 1000 * anim.disappear,
                callback: function () {

                    txt.alpha = 0;

                },
                callbackScope: this,
                loop: false
            });

            AddEvent(timer);
        }
    }

    if (anim.onClickFn) {
        txt.inputEnabled = true;

        txt.setInteractive({
            useHandCursor: true
        });

        txt.on('pointerdown', function (pointer) {
            callFunctionString(anim.onClickFn);
        });

        //temp.events.onInputDown.add(function () { callFunctionString(anim.onClickFn) }, this);
    }


    obj_list.push(txt);
    obj_text_list.push(txt);
    ////console.log("TXT = ", txt);
    return txt;
}

// Text typewriting animation
function typeWriter(obj, txt, interval, n, cb) {
    n = n || 0;
    cb = cb || null;
    if (n == 0) obj.text = "";
    if (n < txt.length) {
        obj.text += txt.charAt(n);
        n++;
        setTimeout(function () {
            typeWriter(obj, txt, interval, n, cb);
            game.world.bringToTop(text_group);
        }, interval);
    } else
        if (cb != null) cb.call(this);
    return obj;
}

function typewriter(text) {

    var typing = game.plugins.get('rextexttypingplugin').add(text, {
        speed: 90, //90, // typing speed in ms
        typeMode: 0, //0|'left-to-right'|1|'right-to-left'|2|'middle-to-sides'|3|'sides-to-middle'
    });

    typing.start(text.text);
    text.alpha = 1;
    typing.on('complete', function (typing, txt) {

        var timer = game.time.addEvent({
            delay: 3000, //3000
            callback: function () {

                txt.alpha = 1;   //0

            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);

    });
}

function typewriterMizo(text) {

    var typing = game.plugins.get('rextexttypingplugin').add(text, {
        speed: 90, //90, // typing speed in ms
        typeMode: 0, //0|'left-to-right'|1|'right-to-left'|2|'middle-to-sides'|3|'sides-to-middle'
    });

    typing.start(text.text);
    text.alpha = 1;
    typing.on('complete', function (typing, txt) {

        var timer = game.time.addEvent({
            delay: 6000, //3000
            callback: function () {

                txt.alpha = 0;

            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);

    });
}

function PlayInputAnim(anim) {
    var text_toDisplay = "";
    for (var i = 0; i < anim.text.length; i++) {
        if (anim.text[i].content.startsWith("$var.")) {
            var str1 = anim.text[i].content.slice(5);

            if (str1.startsWith("number_")) {
                var orgStr = evaluateExpression(str1.slice(7));
                if (anim.text[i].enableNumericType) {
                    orgStr = formatNumber(orgStr);
                }

                if (anim.text[i].defaultDecimalPart) {
                    orgStr = validateDecimalPart(orgStr);
                }

                var str_in_words = numberInWords(orgStr, numberSystemLangArr[sysLang]);
                sfx_offset += str_in_words.length * 0.5;

                text_toDisplay += orgStr;
            } else if (str1.startsWith("alphanumeric_")) {
                var orgStr = evaluateExpression(str1.slice(13));
                var str_in_words = strInLetter(orgStr);

                sfx_offset += str_in_words.length * 0.5;
                text_toDisplay += orgStr;
            } else {
                var orgStr = evaluateExpression(str1);
                if (anim.text[i].transliterate) {
                    if (['hindi', 'tamil', 'telugu'].indexOf(anim.text[i].transliterate) >= 0) {
                        var text_arr = orgStr.split(" ");
                        var transliterate = anim.text[i].transliterate;

                        if (text_arr.length > 0) {
                            var transliterate_result = "";
                            for (var j = 0; j < text_arr.length; j++) {
                                if (isNaN(text_arr[j])) {
                                    transliterate_result += transliterateText(text_arr[j], transliterate);
                                } else {
                                    transliterate_result += text_arr[j];
                                }

                                transliterate_result += " ";
                            }
                            text_toDisplay += transliterate_result;
                        }
                    }
                } else {
                    text_toDisplay += orgStr;
                }
            }
        } else {
            var orgStr = anim.text[i].content;
            if (anim.text[i].transliterate) {
                if (['hindi', 'tamil', 'telugu'].indexOf(anim.text[i].transliterate) >= 0) {
                    var text_arr = orgStr.split(" ");
                    var transliterate = anim.text[i].transliterate;

                    if (text_arr.length > 0) {
                        var transliterate_result = "";
                        for (var j = 0; j < text_arr.length; j++) {
                            if (isNaN(text_arr[j])) {
                                transliterate_result += transliterateText(text_arr[j], transliterate);
                            } else {
                                transliterate_result += text_arr[j];
                            }

                            transliterate_result += " ";
                        }
                        text_toDisplay += transliterate_result;
                    }
                }
            } else {
                text_toDisplay += orgStr;
            }
        }
    }

    var tween_type = anim.tween_type.toLowerCase();
    var inputField = SetupInputField(anim, text_toDisplay);
    inputField.id = anim.id;

    if (anim.anchor != null) {
        if (typeof anim.anchor[1] !== undefined) {
            inputField.setOrigin(anim.anchor[0], anim.anchor[1]);
        } else {
            inputField.setOrigin(anim.anchor[0], 0);
        }

    }

    return inputField;
}

function OnStopCB(v) {
    return function () {
        if (cur_sfx_list[v + 1]) {
            currentSound = cur_sfx_list[v + 1].play();
        }
    };
}


function onSoundStop() {
    ////////console.log("Fn : onSoundStop");
    //canvasInputEnable();
}

function onSoundPlay() {
    ////////console.log("Fn : onSoundPlay");
    //
    //  InputDisable();
}

function PlaySound(anim) {
    cur_sfx_list.length = 0;
    for (var i = 0; i < anim.sound.length; i++) {
        if (anim.sound[i].startsWith("$var.")) {
            var str1 = anim.sound[i].slice(5);

            if (str1.startsWith("number_")) {
                var str2 = str1.slice(7);
                var res = numberInWords(evaluateExpression(str2), numberSystemLangArr[sysLang]);
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])) : '';
                }
            } else if (str1.startsWith("currency_")) {
                var str2 = str1.slice(9);
                var res = currencyInWords(evaluateExpression(str2), numberSystemLangArr[sysLang]);
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])) : '';
                }
            } else if (str1.startsWith("alphanumeric_")) {
                //////console.log("Str Sound : alphanumeric_");
                var str2 = str1.slice(13);
                var strValue = (str2.startsWith("window.")) ? evaluateExpression(str2) : str2;
                var res = strInLetter(strValue);
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])) : '';
                }
            } else if (str1.startsWith("dateStr_")) {
                var str2 = str1.slice(8);
                str2 = new Date(evaluateExpression(str2));
                //////console.log(str2);

                var res = strInDate(evaluateExpression(str2));

                ////console.log(res);
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])) : '';
                }
            } else if (str1.startsWith("dateMonthStr_")) {
                var str2 = str1.slice(13);
                var res = strInDateMonth(evaluateExpression(str2));
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])) : '';
                }
            }
            else if (str1.startsWith("years_")) {
                var str2 = str1.slice(6);
                var res = numberInWords(evaluateExpression(str2), numberSystemLangArr[sysLang]);
                for (var j = 0; j < res.length; j++) {
                    (res[j]) ? cur_sfx_list.push(game.sound.add(res[j])) : '';
                }
                cur_sfx_list.push(game.sound.add('years'));

            } else {
                var audioName = evaluateExpression(str1);
                cur_sfx_list.push(game.sound.add(audioName));
            }
        } else {
            cur_sfx_list.push(game.sound.add(anim.sound[i]));
        }
    }

    //   //////console.log("cur_sfx_list.length ",cur_sfx_list.length);
    if (cur_sfx_list.length == 0) return;
    var v = 0;

    for (var i = 0; i <= cur_sfx_list.length - 1; i++) {
        //      //////console.log("cur_sfx_list for : ",i);
        v = i;

        if (cur_scr > 0) {
            cur_sfx_list[i].on("play", onSoundPlay);
            cur_sfx_list[i].on("complete", onSoundStop);
        }
        cur_sfx_list[i].on("complete", OnStopCB(i));
    }
    if (cur_sfx_list.length > 0) {

        //console.log("CURRENT AUDIO = ", cur_sfx_list.length);
        currentSound = cur_sfx_list[0];
        cur_sfx_list[0].play();

        ////console.log("CURRENT AUDIO IS PLAYING? ", cur_sfx_list[0].isPlaying);
    }
}

// If need to play a specific screen directly
function actionOnClick(scr_no) {
    CleanUp();
    StartPage(scr_no);
    ShowScreen();
}

function actionOnClickDelay(scr_no, delay) {
    checkObjList('Button_Agree');
    game.add.sprite(280, 1810, 'Agree_New_selected');
    canvasInputDisable();
    if (cur_scr === 0) {
        cur_sfx_list[0].play();
    }
    setTimeout(function () {
        canvasInputEnable();
        goToPage(scr_no);
    }, 1000 * delay);
}

function goToPage(scr_no) {

    //console.log('go to page');
    CleanUp();
    StartPage(scr_no);
    //console.log('Cur Scr = ', cur_scr);
    ShowScreen();
}

function nullify(obj) {
    if (obj != null)
        obj.destroy();
}

function goToPageBack(scr_no) {
    CleanUp();
    StartPage(scr_no);
    ShowScreen();
    screenBackBtn = true;
}

function ShowScreen() {
    //////console.log('Show Screen Begun');

    sfx_offset = 0;
    game.sound.stopAll();
    if (window.stage.screens.count <= 0)
        return;
    if (window.stage.screens[cur_scr].condition != null) {
        var cond = evaluateExpression(window.stage.screens[cur_scr].condition);
        if (evaluateExpression(window.stage.screens[cur_scr].condition) == false) {
            TransitScreen();
            return;
        }
    }

    // Sound
    if (window.stage.screens[cur_scr].sound_list != null)
        for (var i = 0; i < window.stage.screens[cur_scr].sound_list.length; i++)
            PlaySound(window.stage.screens[cur_scr].sound_list[i]);


    // Videos
    if (window.stage.screens[cur_scr].video != null)
        for (var i = 0; i < window.stage.screens[cur_scr].video.length; i++)
            PlayVideo(window.stage.screens[cur_scr].video[i]);

    // Buttons
    if (window.stage.screens[cur_scr].buttons != null)
        for (var i = 0; i < window.stage.screens[cur_scr].buttons.length; i++)
            ShowButton(window.stage.screens[cur_scr].buttons[i]);

    // Sprite Animations
    if (window.stage.screens[cur_scr].sprite_animations != null)
        for (var i = 0; i < window.stage.screens[cur_scr].sprite_animations.length; i++)
            PlaySpriteAnim(window.stage.screens[cur_scr].sprite_animations[i]);

    // Text Animations
    if (window.stage.screens[cur_scr].text_animations != null)
        for (var i = 0; i < window.stage.screens[cur_scr].text_animations.length; i++)
            PlayTextAnim(window.stage.screens[cur_scr].text_animations[i]);

    // Input Field Animations
    if (window.stage.screens[cur_scr].input_animations != null)
        for (var i = 0; i < window.stage.screens[cur_scr].input_animations.length; i++)
            PlayInputAnim(window.stage.screens[cur_scr].input_animations[i]);


    // Functions
    if (window.stage.screens[cur_scr].functions != null)
        for (var i = 0; i < window.stage.screens[cur_scr].functions.length; i++)
            call_fn(window.stage.screens[cur_scr].functions[i]);

    // Screen Names
    if (window.stage.screens[cur_scr].name != null)
        cur_screen_name = window.stage.screens[cur_scr].name;

    if (window.stage.screens[cur_scr].timing >= 0) {
        // game.time.events.add(Phaser.Timer.SECOND * (window.stage.screens[cur_scr].timing + sfx_offset), TransitScreen, this);

        var timer = game.time.addEvent({
            delay: 1000 * (window.stage.screens[cur_scr].timing + sfx_offset),
            callback: function () {

                TransitScreen();

            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);
    }

    //////console.log('Show Screen Complete');
}

function CleanUp() {
    //////console.log('Clean Up Started ', text_group);

    stopCameraFeed();
    clearOverlayCanvas();


    for (var i = 0; i < obj_but_list.length; i++) {
        obj_but_list[i].x = -game.width * 2;
        obj_but_list[i] = null;
    }
    for (var i = 0; i < obj_text_list.length; i++) {

        if (obj_text_list[i]) {
            obj_text_list[i].x = -game.width * 2;
            obj_text_list[i].destroy();
            obj_text_list[i] = null;
        }

    }
    for (var i = 0; i < obj_input_list.length; i++) {

        if (obj_input_list[i]) {
            obj_input_list[i].x = -game.width * 2;
            obj_input_list[i] = null;
        }

    }
    for (var i = 0; i < obj_list.length; i++) {

        if (obj_list[i]) {
            obj_list[i].x = -game.width * 2;
            obj_list[i].destroy();
            obj_list[i] = null;
        }

    }
    for (var i = 0; i < text_group.children.size; i++) {
        //////console.log('Text Group');
        text_group.children.entries[i].destroy();

    }

    //Updated on 29-03-2023
    text_group.children.entries.forEach((child) => {
        child.destroy();
    });
    text_group.clear();


    for (var i = 0; i < events_list.length; i++) {
        game.time.removeAllEvents();
    }

    obj_but_list = obj_but_list.filter(function (el) {
        return el != null;
    });

    obj_text_list = obj_text_list.filter(function (el) {
        return el != null;
    });

    obj_input_list = obj_input_list.filter(function (el) {
        return el != null;
    });

    obj_list = obj_list.filter(function (el) {
        return el != null;
    });

    cur_sfx_list.length = 0;

    screenBackBtn = false;

    //////console.log('Clean Up Done');
}

function TransitScreen() {
    CleanUp();
    cur_scr = ++cur_scr % window.stage.screens.length;
    ShowScreen();
}

function ReloadScreen() {
    CleanUp();
    ShowScreen();
}

function prevScreen() {
    CleanUp();
    cur_scr = cur_scr - 1;
    if (cur_scr < 0) {
        cur_scr = 0;
        return;
    }
    ShowScreen();
}

function goScreen(scr_no) {
    CleanUp();

    if (scr_no > 0) {
        if ((scr_no + 1) <= window.stage.screens.length) {
            cur_scr = scr_no;
            ShowScreen();
        } else {
            cur_scr = 0;
            ShowScreen();
        }
    } else {
        cur_scr = 0;
        ShowScreen();
    }
}

function nextScreen() {
    CleanUp();
    cur_scr = ++cur_scr % window.stage.screens.length;
    ShowScreen();
}

function goFull() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen();
    } else {
        game.scale.startFullScreen(false);
    }
}

// Custom group to Top
function groupToTop(obj, i) {
    ////////console.log('GROUP TO TOP = ',obj,',DEPTH = ',i);
    if (i == 1) {
        top_group1.add(obj);
        //game.children.bringToTop(top_group1);

        setDepth(top_group1, 1);

    } else if (i == 2) {
        top_group2.add(obj);
        //game.children.bringToTop(top_group2);

        setDepth(top_group2, 2);

    } else if (i == 3) {
        top_group3.add(obj);
        //game.children.bringToTop(top_group3);

        setDepth(top_group3, 3);

    } else if (i == 4) {
        top_group4.add(obj);
        //game.children.bringToTop(top_group4);

        setDepth(top_group4, 4);

    } else if (i == 5) {
        top_group5.add(obj);
        //game.children.bringToTop(top_group5);

        setDepth(top_group5, 5);

    } else if (i == 6) {
        text_group.add(obj);
        //game.children.bringToTop(top_group5);

        setDepth(text_group, 6);

    }
}

function setDepth(group, depth) {
    ////////console.log("GROUP = ",group);

    var list = group.children.entries;

    for (var i = 0; i < list.length; i++) {
        list[i].setDepth(depth);
    }
}

function buttonVisibility(status) {
    if (status == true) {
        for (var i = 0; i < obj_but_list.length; i++) {
            obj_but_list[i].alpha = 1;
        }
    } else if (status == false) {
        for (var i = 0; i < obj_but_list.length; i++) {
            obj_but_list[i].alpha = 0;
        }
    }

}

function textVisibility(status) {
    if (status == true) {
        for (var i = 0; i < obj_text_list.length; i++) {
            obj_text_list[i].alpha = 1;
        }
    } else if (status == false) {
        for (var i = 0; i < obj_text_list.length; i++) {
            obj_text_list[i].alpha = 0;
        }
    }

}

function inputFieldVisibility(status) {
    if (status == true) {
        for (var i = 0; i < obj_input_list.length; i++) {
            obj_input_list[i].alpha = 1;
        }
    } else if (status == false) {
        for (var i = 0; i < obj_input_list.length; i++) {
            obj_input_list[i].alpha = 0;
        }
    }

}

function transliterateText(str, transLang) {
    var transLangStatus = true;
    var transStrResult = '';
    if (transLang == 'hindi') {
        pramukhIME.addKeyboard(PramukhIndic, 'hindi');
    } else if (transLang == 'tamil') {
        pramukhIME.addKeyboard(PramukhIndic, 'tamil');
    } else if (transLang == 'telugu') {
        pramukhIME.addKeyboard(PramukhIndic, 'telugu');
    } else if (transLang == 'malayalam') {
        pramukhIME.addKeyboard(PramukhIndic, 'malayalam');
    } else if (transLang == 'kannada') {
        pramukhIME.addKeyboard(PramukhIndic, 'kannada');
    } else if (transLang == 'bengali') {
        pramukhIME.addKeyboard(PramukhIndic, 'bengali');
    } else if (transLang == 'marathi') {
        pramukhIME.addKeyboard(PramukhIndic, 'marathi');
    } else if (transLang == 'gujarati') {
        pramukhIME.addKeyboard(PramukhIndic, 'gujarati');
    } else if (transLang == 'punjabi') {
        pramukhIME.addKeyboard(PramukhIndic, 'punjabi');
    } else {
        transLangStatus = false;
    }

    if (transLangStatus) {
        str = (str) ? str.toLowerCase() : '';
        transStrResult = pramukhIME.convert(str);
    } else {
        transStrResult = str;
    }

    //   //////console.log("transStrResult - fn -: ",transStrResult," == ",transLang);

    return transStrResult;
}

function init() {
    setProductParams();
}

function call_fn(func) {

    var timer = game.time.addEvent({
        delay: 1000 * func.delay, // ms
        callback: function () {
            callFunctionString(func.fn)
        },
        callbackScope: this,
        loop: false
    });

    AddEvent(timer);

}

function SetBGColor(color) {
    game.stage.backgroundColor = color;
}

function SetBGTile(bg_sprite) {
    var bg_tile = game.add.tileSprite(XRes / 2, YRes / 2, XRes, YRes, bg_sprite);
    obj_list.push(bg_tile);
    //bg_tile.setOrigin(0.5,0.5);
}

function StartPage(num) {
    cur_scr = num;
}
String.prototype.startsWith = function (str) {
    return this.indexOf(str) == 0;
};

function find(str, sub) {
    if (str.indexOf(sub) == -1) {
        return false;
    } else {
        return true;
    }
}

/*
 Debug Modules
 */

function render() {
    if (!PROD_ENV) {
        // Input debug info
        game.debug.inputInfo(32, 32);
        //game.debug.spriteInputInfo(sprite, 32, 130);
        game.debug.pointer(game.input.activePointer);
    }
}

function download_local_file(file) {
    //var file="PROHLT010039075_04 _Policy document.pdf";
    var furl = "assets/files/download/" + file;
    //  //////console.log(furl);
    var ext = file.substr(file.lastIndexOf('.') + 1);
    if ((ext !== undefined) && (ext !== '')) {
        ext = ext.toLowerCase();
        var allowed_ext = {
            "pdf": "application/pdf",
            "doc": "application/msword",
            "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "vcf": "vcf"
        };

        if (allowed_ext[ext] !== undefined) {
            var x = new XMLHttpRequest();
            x.open("GET", furl, true);
            x.responseType = 'blob';
            x.onload = function (e) {
                download(x.response, file, allowed_ext[ext]);
            };
            x.send();

        } else {
            return false;
        }

    } else {
        return false;
    }
}


function download_pdf_url(furl) {
    if (furl) {
        furl = (furl.startsWith("window.")) ? evaluateExpression(furl) : furl;
    }

    if (furl) {
        var file_name = window.product_slug + ".pdf";
        var x = new XMLHttpRequest();
        x.open("GET", furl, true);
        x.responseType = 'blob';
        x.onload = function (e) {
            download(x.response, file_name, "application/pdf");
        };
        x.send();
    }
}

function open_url(url_link) {
    if ((url_link !== undefined) && (url_link !== '')) {
        window.open(url_link, '_blank');
    } else {
        return false;
    }
}

function open_url_self(url_link) {
    if ((url_link !== undefined) && (url_link !== '')) {
        window.open(url_link, '_self');
    } else {
        return false;
    }
}


/*
    Lang Related functions
 */

function loadLangFlow(setLang, setFlow, setScreen) {

    init();

    sysLang = (setLang) ? setLang : sysLang;
    sysFlow = (setFlow) ? setFlow : sysFlow;

    load_scrn = (setScreen) ? setScreen : 2;

    var lang_assets_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_assets_' + sysLang + '_' + sysFlow + '.js?v=1';

    var lang_flow_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_' + sysLang + '_' + sysFlow + '.js?v=1';

    // loadScript(lang_assets_fpath, function () {

    //     loadScript(lang_flow_fpath, function () {
    game.scene.start("second_scene");
    //     });

    // });


}

/*
Product Related Custom functions
 */
// let fdata;
function setProductParams() {


}

function getGeoLocation() {
    //var lat;
    //////console.log("Location Finished : fn ");
    if (navigator.geolocation) {
        //////console.log("Location Finished : geolocation ");
        var lat = navigator.geolocation.getCurrentPosition(function (pos) {
            //////console.log("Location Finished : geolocation - pos" + pos.coords.latitude);
            //lat = pos.coords.latitude;
            latitude_value = pos.coords.latitude;
            longitude_value = pos.coords.longitude;
            //return pos.coords.latitude;
        });
    }
}
//var x1;
var latitude_value, longitude_value;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        //////console.log(latitude_value, longitude_value);
    } else {

    }
}

function showPosition(position) {
    latitude_value = position.coords.latitude + "";
    longitude_value = position.coords.longitude + "";
    //return position.coords.latitude+","+position.coords.longitude;
    ////////console.log("POSITION = ",position.coords.latitude,position.coords.longitude);
    //////console.log("POSITION = ", latitude_value, longitude_value);
}

function productInit() {
    getGeoLocation();
}

function downloadImageJPG(furl, fname) {
    var x = new XMLHttpRequest();
    x.open("GET", furl, true);
    x.responseType = 'blob';
    x.onload = function (e) {
        download(x.response, fname, "image/jpeg");
    };
    x.send();
}

function open_video(file_name) {

    window.open(file_name, '_blank');
}

function open_screenshot(file_name) {

    window.open(file_name, '_blank');
}

function getScreenImgDataURL() {
    var phaserCanvas = document.getElementById(game_canvas_id);
    return (phaserCanvas.toDataURL('image/jpeg', 0.4)) ? phaserCanvas.toDataURL('image/jpeg', 0.4) : null;
}

// Custom Text Type
function typeCustomText(txt_anim_str) {
    let anim = JSON.parse(txt_anim_str);
    PlayTextAnim(anim);
}

// Reload Page
function reloadPage() {
    window.location.reload(true);
}

// Camera Error
function cameraAccessError() {
    let cameraStatus = camAccessStatus();

    if (!cameraStatus) {
        if (cameraErrorPageStatus) {
            setTimeout(function () {
                CleanUp();
                StartPage(cameraErrorPageNo);
                ShowScreen();
            }, 0);

        }
    }
}

var latitude_value, longitude_value;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        //////console.log(latitude_value, longitude_value);
    } else {

    }
}

function showPosition(position) {
    latitude_value = position.coords.latitude + "";
    longitude_value = position.coords.longitude + "";

    //////console.log("POSITION = ", latitude_value, longitude_value);
}

function click(x, y) {
    var ev = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
    });

    var el = document.elementFromPoint(x, y);

    el.dispatchEvent(ev);
}

function soundInit() {
    //////console.log("fn : soundInit");
}

function audioReplay() {
    //////console.log("fn : audioReplay");
    if (cur_sfx_list.length > 0) {
        currentSound = cur_sfx_list[0].play();
    }
}

//network type

function connectionType() {
    //////console.log('CONNECTION TYPE');

    try {
        connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        //////console.log(connection);

        type = connection.effectiveType;
        nettype = connection.effectiveType;
        netrtt = connection.rtt;
        netdown = connection.downlink;

        connection.addEventListener('change', updateConnectionStatus);
    } catch (e) {
        //////console.log('Exception in connection type ', e);
    }
}


function network() {
    if (navigator.connection) {
        // alert();
        const connection = navigator.connection;
        window.new_down_link = connection.downlink + " mb/s"
        // alert(window.new_down_link);
        connection.addEventListener('change', () => {
            // console.log("Connection changed:");
            window.new_effectivetype = connection.effectiveType
            window.new_down_link = connection.downlink + " mb/s"
            // alert("window.new_down_link"+ new_down_link);
        });
    }
}


function uploadCard() {
    addFileUploadPlugin('upload_btn', 550, 600, 855, 500, 'ID');
}

function addFileUploadPlugin(sprite_id, x_pos, y_pos, w, h, type) {
    var width = w;
    var height = h;
    var x = x_pos;
    var y = y_pos;
    var fileChooser = game.add.rexFileChooser({
        accept: 'image/*',
        multiple: false
    });
    obj_list.push(fileChooser);

    var canvas = game.add.rexCanvas(x, y, width, height);
    window.uploadCanvas = canvas;  //changes 17.6.25
    //canvas.fill("#FF0000");
    canvas.setOrigin(0.5, 0);
    canvas.fitTo = (function (parent) {
        //var newSize = FitTo(this, parent, true);
        this.setDisplaySize(width, height);
    }).bind(canvas);
    obj_list.push(canvas);

    var button = game.add.rectangle(x, y, width, height, "#FFFFFF").setStrokeStyle(2, "#FFFFFF");
    button.setOrigin(0.5, 0.5);
    button.alpha = 0;
    obj_list.push(button);

    // console.log(getSpriteObject(sprite_id));
    fileChooser
        .syncTo(getSpriteObject(sprite_id))
        .on('change', async function (gameObject) {
            // alert('File Upload');
            getSpriteObject('upload_btn').alpha = 1;
            getTextObject(window.product_language_data.upload_screen.upload_txt).alpha = 1;
            getSpriteObject('cancel_btn').alpha = 1;
            getSpriteObject('cancel_btn_disable').alpha = 0;
            getSpriteObject('framebox').alpha = 0;
            getTextObject(window.product_language_data.upload_screen.msg_txt_1).alpha = 0;
            getTextObject(window.product_language_data.upload_screen.msg_txt_2).alpha = 0;

            var files = gameObject.files;
            window.upload_Image = '';

            if (files.length === 0) {
                return;
            }

            var file = files[0];
            var fileName = file.name;
            var extension = fileName.split('.').pop();
            extension = extension.toLowerCase();
            if (extension == "jpeg" || extension == "png" || extension == "jpg" || extension == "bmp") {
                getSpriteObject('proceed_btn').alpha = 1;
                getTextObject(window.product_language_data.upload_screen.next_btn).alpha = 1;
            }
            else {
                setTimeout(function () { resetIDCardUpload() }, 1000);
            }

            var url = URL.createObjectURL(files[0]);
            canvas.loadFromURLPromise(url)
                .then(function () {
                    URL.revokeObjectURL(url);
                    canvas.fitTo(button);
                    window.upload_Image = canvas.getDataURL('image/jpeg');
                    // console.log("imagepassed", window.upload_Image);

                    if (type == 'ID') {
                        checkFaceDetected(canvas.getDataURL('image/jpeg'));
                    }
                    else {
                        //uploadPhoto(canvas.getDataURL('image/jpeg'), type);
                    }

                });
        });
}

function resetIDCardUpload() {

    if (window.uploadCanvas && typeof window.uploadCanvas.clear === 'function') {
        window.uploadCanvas.clear();
    }

    window.upload_Image = '';

    getSpriteObject('framebox').alpha = 1;
    getTextObject(window.product_language_data.upload_screen.extention_txt).alpha = 1;
    getTextObject(window.product_language_data.upload_screen.next_btn).alpha = 0;
    getSpriteObject('proceed_btn').alpha = 0;
}

function deleteImage() {
    getSpriteObject('cancel_btn').setInteractive().on('pointerdown', resetIDCardUpload);
}

async function upload_idcardproceed() {

    if (window.upload_Image === '' || window.upload_Image == null) {
        getTextObject(window.product_language_data.upload_screen.msg_txt_1).alpha = 1;
    } else {
        getSpriteObject('proceed_btn').setTexture('gray_btn').disableInteractive();
        window.img_type = doc_select.value;

        var result = await call_ID_CARD(window.upload_Image, window.img_type);
        var result_status = result.Status;
        var result_message = result.Message;

        if (result_status == false) {
            // if (result_message == window.product_language_data.upload_screen.error_txt_1 || result_message == window.product_language_data.upload_screen.error_txt_2 || result_message == window.product_language_data.upload_screen.error_txt_3 || result_message == window.product_language_data.upload_screen.error_txt_4 || result_message == window.product_language_data.upload_screen.error_txt_5 || result_message == window.product_language_data.upload_screen.error_txt_6 || result_message == window.product_language_data.upload_screen.error_txt_7 || result_message == window.product_language_data.upload_screen.error_txt_8) {
            //     getTextObject(result_message).alpha = 1;
            // }
            if (result_message == 'Please upload the document selected in the dropdown') {
                getTextObject(window.product_language_data.upload_screen.error_txt_1).alpha = 1;
            } else if (result_message == 'Name & DOB mismatch detected.Please upload a document with the correct Name & DOB as per the proposal form') {
                getTextObject(window.product_language_data.upload_screen.error_txt_2).alpha = 1;
            } else if (result_message == 'DOB mismatch detected.Please upload a document with the correct DOB as per the proposal form') {
                getTextObject(window.product_language_data.upload_screen.error_txt_3).alpha = 1;
            } else if (result_message == 'Name mismatch detected.Please upload a document with the correct Name as per the proposal form') {
                getTextObject(window.product_language_data.upload_screen.error_txt_4).alpha = 1;
            } else if (result_message == 'Upload Clear Document') {
                getTextObject(window.product_language_data.upload_screen.error_txt_5).alpha = 1;
            } else if (result_message == 'Error occurred while creating the image!') {
                getTextObject(window.product_language_data.upload_screen.error_txt_6).alpha = 1;
            } else if (result_message == 'Upload Supported Document') {
                getTextObject(window.product_language_data.upload_screen.error_txt_7).alpha = 1;
            } else if (result_message == 'Invalid ID Card,please try again') {
                getTextObject(window.product_language_data.upload_screen.error_txt_8).alpha = 1;
            } else {
                console.warn("Unhandled result_message: ", result_message);
            }
            // getSpriteObject('proceed_btn').setInteractive(); //setTexture('gray_btn').

            getSpriteObject('gray_btn').setTexture('proceed_btn').setInteractive();

            // let proceedBtn = getSpriteObject('gray_btn');
            // if (proceedBtn) {
            //     proceedBtn.setTexture('proceed_btn').setInteractive();
            // }

            setTimeout(() => {
                goToPage(3);

            }, 4000);
        } else {
            goToPage(4);
        }
    }
}

function pleasWait() {   //new
    // alert();
    display_loader();
    getSpriteObject('proceed_btn').alpha = 0;
    getSpriteObject('gray_btn').alpha = 1;
    // getSpriteObject('proceed_btn').setTexture('gray_btn');
}

function pleasWait_1() {   //new
    // alert();
    hide_loader();
    getSpriteObject('proceed_btn').alpha = 1;
    getSpriteObject('gray_btn').alpha = 0;
}

function reupload_document() {
    face_capture_flag = true;
    goToPage(3);
}

function checkFaceDetected(image_val) {
    const options_tiny = new faceapi.SsdMobilenetv1Options({
        inputSize: 128,
        scoreThreshold: 0.3
    });

    var face_image = new Image();

    face_image.onload = function () {
        faceapi.detectSingleFace(face_image, options_tiny).then(
            function (faces) {
                try {
                    console.log(faces.box);
                    //uploadPhoto(image_val, 'ID');
                } catch (e) {

                }
            },
            function (err) {

            }
        );
    };
    face_image.src = image_val;
}

function updateConnectionStatus() {

    type = connection.effectiveType;
    nettype = connection.effectiveType;
    netrtt = connection.rtt;
    netdown = connection.downlink;
}

function playAudio(audio) {
    if (cur_sfx_list.length > 0) {
        cur_sfx_list[0].stop();
        cur_sfx_list.length = 0;
    }
    cur_sfx_list.push(game.sound.add(audio));
    cur_sfx_list[0].play();
}

function showInputField(ip_id) {
    getInputObject(ip_id).alpha = 1;
}

function addImageFromUrl(url, xpos, ypos, width, height) {
    var img_canvas = game.add.rexCanvas(xpos, ypos, width, height);

    img_canvas.fill("#FFFFFF");

    var context = img_canvas.getContext();

    var img = new Image();
    img.addEventListener('load', function () {

        context.drawImage(img, 0, 0, width, height);

    }, false);
    img.crossOrigin = "anonymous";
    img.src = url; // Set source path
}

function addImageToScroll(url) {
    ////console.log(url);
    var width = 1080;
    var height = 550;

    var img_canvas = game.add.rexCanvas(0, 0, width, height);

    img_canvas.fill("#FFFFFF");

    var context = img_canvas.getContext();

    var img = new Image();
    img.addEventListener('load', function () {

        context.drawImage(img, 0, 0, width, height);

    }, false);
    img.crossOrigin = "anonymous";
    img.src = url; // Set source path

    return img_canvas;
}

function popup_photoconsent(text, duration) {
    var gameObject = getTextObject(text);
    gameObject.alpha = 1;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function closepopup_photoconsent(text, duration) {
    var gameObject = getTextObject(text);
    gameObject.alpha = 0;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}


function popup_feedback(sprite, duration) {
    textVisibility(false);
    inputFieldVisibility(false);
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 1;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function closepopup_feedback(sprite, duration) {
    textVisibility(true);
    inputFieldVisibility(true);
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 0;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function popup_matchscore(sprite, duration) {
    textVisibility(false);
    inputFieldVisibility(false);
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 1;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function closepopup_matchscore(sprite, duration) {
    textVisibility(true);
    inputFieldVisibility(true);
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 0;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function popup_thankyou(sprite, duration) {
    getSpriteObject('pdf').alpha = 0;
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 1;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function closepopup_thankyou(sprite, duration) {
    getSpriteObject('pdf').alpha = 1;
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 0;
    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function popup(sprite, duration) {

    inputFieldVisibility(false);
    textVisibility(false);
    if (getSpriteObject('agree')) {
        getSpriteObject('agree').alpha = 0;
    }
    if (getSpriteObject('disagree')) {
        getSpriteObject('disagree').alpha = 0;
    }
    if (getSpriteObject('tick3')) {
        getSpriteObject('tick3').alpha = 0;
    }
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 1;

    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function closepopup(sprite, duration) {

    inputFieldVisibility(true);
    if (getSpriteObject('tick3')) {
        getSpriteObject('tick3').alpha = 1;
    }
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 0;

    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function popup_text(text, duration) {
    if (cur_scr == 6 || cur_scr == 7 || cur_scr == 8) {
        inputFieldVisibility(true);
        textVisibility(false);
        if (getTextObject('Enter your disagreement on the box provided above and click Save and Proceed')) {
            getTextObject('Enter your disagreement on the box provided above and click Save and Proceed').alpha = 1;
        }

    } else {
        inputFieldVisibility(false);
    }

    var gameObject = getTextObject(text);
    gameObject.alpha = 1;
    //var duration=3000;

    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x');
}

function popup_box(sprite, duration) {
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 1;
    //var duration=3000;

    game.plugins.get('rexscaleplugin').popup(gameObject, duration, 'x', 'Back');
}

function flash(gameObject) {

    if (cur_screen_name == 'Welcome Screen' || cur_screen_name == 'Important Points' || cur_screen_name == 'High Risk Video Consent') {
        var gameObject = getSpriteObject(gameObject);
        gameObject.alpha = 1;

        var flash = game.plugins.get('rexflashplugin').add(gameObject, {
            duration: 500,
            repeat: 2
        });

        flash.flash();
    }
}

function shake(gameObject) {
    var gameObject = getSpriteObject(gameObject);
    gameObject.alpha = 1;

    var shake = game.plugins.get('rexshakepositionplugin').add(gameObject, {
        mode: 1, // 0|'effect'|1|'behavior'
        duration: 500,
        magnitude: 10,
        magnitudeMode: 1, // 0|'constant'|1|'decay'
    });

    shake.shake();
}

var bg_music;

function playBG(file) {
    bg_music = game.sound.add(file);
    bg_music.play();
    bg_music.setVolume(0.2);
}


function phone_callback(phone) {
    window.open("tel:" + phone, '_self');
}

function mail_callback(email) //mail@ebrm.com
{
    window.open("mailto:" + email, '_self');
}

function animateSprite(x, y, sprite_name, scale, frame_start, frame_end, frame_rate, repeat, disappear) {
    ////console.log('idle');
    var animation = game.physics.add.sprite(x, y, sprite_name);
    animation.setScale(scale);

    ////console.log(animation);

    game.anims.create({
        key: sprite_name,
        frames: game.anims.generateFrameNumbers(sprite_name, {
            start: frame_start,
            end: frame_end
        }),
        frameRate: frame_rate,
        repeat: repeat
    });

    animation.anims.play(sprite_name, true);
    animation.setDepth(10);

    obj_list.push(animation);

    if (disappear != -1) {
        var timer = game.time.addEvent({
            delay: 1000 * disappear,
            callback: function () {
                animation.alpha = 0;

            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);
    }
    return animation;
}


function typewriter(text) {

    var typing = game.plugins.get('rextexttypingplugin').add(text, {
        speed: 70, //90, // typing speed in ms
        typeMode: 0, //0|'left-to-right'|1|'right-to-left'|2|'middle-to-sides'|3|'sides-to-middle'
    });

    typing.start(text.text);
    text.alpha = 1;
    typing.on('complete', function (typing, txt) {

        var timer = game.time.addEvent({
            delay: 3000, //3000
            callback: function () {

                txt.alpha = 1; //0

            },
            callbackScope: this,
            loop: false
        });

        AddEvent(timer);

    });
}

function moveTo(gameObject, x, y, speed) {

    var sprite = getSpriteObject(gameObject);

    var origin_x = sprite.x;
    var origin_y = sprite.y;

    sprite.moveTo = game.plugins.get('rexmovetoplugin').add(sprite, {

        speed: speed,
        rotateToTarget: false

    })
    sprite.moveTo.moveTo(x, y);

    sprite.moveTo.on('complete', function (moveTo, gameObject) {
        //gameObject.x = origin_x;
        //gameObject.y = origin_y;

        sprite.setX(origin_x);
        //sprite.setY(origin_y);
        if (gameObject == 'disagree_popup') {
            sprite.setY(origin_y / 3);
        }

        move_it(gameObject.gameObject.texture.key, x, y, speed);

    });

}

function move_it(sprite, x, y, speed) {
    moveTo(sprite, x, y, speed);
}

function fadein(sprite, duration) {
    var gameObject = getSpriteObject(sprite);
    gameObject.alpha = 0;

    var alpha_incr = 1 / duration;

    var total_duration = 10;
    var fade_interval = setInterval(function () {

        if (total_duration >= duration)
            clearInterval(fade_interval);
        else {
            total_duration += 10;
            gameObject.alpha += (alpha_incr * 10);
        }
    }, 10);
}

function fadeout(sprite, duration) {
    ////console.log(sprite);
    try {
        var gameObject = getSpriteObject(sprite);
        gameObject.alpha = 1;

        var alpha_incr = 1 / duration;

        var total_duration = 10;
        var fade_interval = setInterval(function () {

            if (total_duration >= duration) {
                gameObject.alpha = 0;
                clearInterval(fade_interval);
            } else {
                total_duration += 10;
                gameObject.alpha -= (alpha_incr * 10);
            }
        }, 1000);
    } catch (e) {
        ////console.log(e);
    }
}

function fadeout_video(sprite, duration) {

    setTimeout(function () {

        var gameObject = getSpriteObject(sprite);
        //gameObject.alpha = 0;

        var tween = game.tweens.add({
            targets: gameObject,
            alpha: { from: 1, to: 0 },

            ease: 'Cubic',       //Linear, 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: duration,
            repeat: 0,            // -1: infinity
            yoyo: false,

        });

    }, 1000);

}

function scale(sprite, duration, scale, incr) {
    try {
        var gameObject = getSpriteObject(sprite);
        var curr_scale = gameObject.scale;

        //alert(curr_scale);

        var scale_interval = setInterval(function () {

            if (curr_scale >= scale)
                clearInterval(scale_interval);
            else {
                curr_scale += incr;
                gameObject.scale = curr_scale;
            }
        }, 100);
    } catch (e) {

    }
}

function setTextValue(textObject, textValue) {

    if (getTextObject(textObject)) {
        var textObject = getTextObject(textObject);
        textObject.setText(textValue);
        obj_list.push(textObject);
    }

}

function setInputTextValue(key, textValue) {
    if (getInputObject(key))
        getInputObject(key).setText(textValue);
}

function findKey(object, value) {
    var keyArr = [];
    for (let key in object) {
        //console.log(object[key]);

        if (object[key] === value) {
            keyArr.push(key);
        }
    }
    if (keyArr.length > 0) {
        return keyArr;
    } else {
        return "Not Found";
    }
}

function destroyTextObject(text_value) {
    if (getTextObject(text_value))
        getTextObject(text_value).destroy();
}

function addImageToSummary(url, xpos, ypos, width, height) {
    var img_canvas = game.add.rexCanvas(xpos, ypos, width, height);

    img_canvas.fill("#FFFFFF");

    var context = img_canvas.getContext();

    var img = new Image();
    img.addEventListener('load', function () {

        context.drawImage(img, 0, 0, width, height);

    }, false);
    img.crossOrigin = "anonymous";
    img.src = url; // Set source path  
    //console.log("Image Added");
}



/*var loader_animation;
function display_loader()
{
    //console.log("display_loader");
    loader_animation = animateSprite(560,1750,'loader',0.4,0,12,10,10);
    //console.log('Loader Animation = ',loader_animation);
}

function hide_loader()
{
    //console.log("hide_loader");
    if(loader_animation)
    {
        loader_animation.alpha = 0;
        loader_animation.destroy();
    }
}*/

var loader_animation;
var loader_text;
var loader_interval;
function display_loader() {
    //loader_animation = game.add.sprite(480,1750,'loader');
    if (cur_screen_name == 'Language Screen') {
        loader_animation = game.add.sprite(530, 1640, 'loader');
        loader_text = addTextToGame("Please Wait...", 530, 1690, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else if (cur_screen_name == 'Permission Screen') {
        loader_animation = game.add.sprite(520, 1720, 'loader');
        loader_text = addTextToGame("Please Wait...", 530, 1670, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else if (cur_screen_name == 'ID card Upload Screen') {
        loader_animation = game.add.sprite(520, 1700, 'loader');
        loader_text = addTextToGame("Please Wait...", 530, 1710, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else if (cur_screen_name == 'Photo Consent Screen') {
        loader_animation = game.add.sprite(520, 1660, 'loader');
        loader_text = addTextToGame("Please Wait...", 530, 1660, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else if (cur_screen_name == 'Personal Details' || cur_screen_name == 'Policy Screen' || cur_screen_name == 'Rider Details Screen') {
        loader_animation = game.add.sprite(540, 1800, 'loader');
        loader_text = addTextToGame("Please Wait...", 550, 1750, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else if (cur_screen_name == 'Personal Details - DisAgree') {
        loader_animation = game.add.sprite(540, 1800, 'loader');
        loader_text = addTextToGame("Please Wait...", 550, 1800, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else if (cur_screen_name == 'Video Consent Screen') {
        loader_animation = game.add.sprite(540, 1800, 'loader');
        loader_text = addTextToGame("Please Wait...", 540, 1750, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else if (cur_screen_name == 'Feedback Screen') {
        loader_animation = game.add.sprite(540, 1880, 'loader');
        loader_text = addTextToGame("Please Wait...", 540, 1850, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    } else {
        loader_animation = game.add.sprite(480, 1750, 'loader');
        loader_text = addTextToGame("Please Wait..", 620, 1750, 'Calibri', 40, '#000000', 'left', "800", 0.5, 0.5, false);
    }
    loader_animation.setScale(0.5);

    loader_interval = setInterval(function () {

        loader_animation.angle += 5;
        loader_text;

    }, 100);
}

function hide_loader() {
    //console.log("hide_loader");
    if (loader_animation) {
        loader_animation.alpha = 0;
        loader_animation.destroy();
    }

    if (loader_text) {
        loader_text.alpha = 0;
        loader_text.destroy();
    }
}

function waitforme(milisec) {
    //console.log("WAIT");
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

function blur_input_fields() {
    input_group.children.entries.forEach(function (currentValue, index, arr) {

        currentValue.setBlur();

    });
}

function faceonlyimage_assets() {

    //game.load.image('session_timeout', IMG_COM_PATH + 'session_timeout.png')

    /* if (sysLang == 'eng') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box.png');
    } else if (sysLang == 'hin') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_hin.png');
    } else if (sysLang == 'tam') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_tam.png');
    } else if (sysLang == 'tel') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_tel.png');
    } else if (sysLang == 'mal') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_mal.png');
    } else if (sysLang == 'mar') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_mar.png');
    } else if (sysLang == 'kan') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_kan.png');
    } else if (sysLang == 'pun') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_pun.png');
    } else if (sysLang == 'guj') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_guj.png');
    } else if (sysLang == 'ben') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_ben.png');
    } else if (sysLang == 'ori') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_ori.png');
    } else if (sysLang == 'maw') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_maw.png');
    } else if (sysLang == 'miz') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_miz.png');
    } else if (sysLang == 'ass') {
        game.load.image('face_box', IMG_COM_PATH + 'face_box_ass.png');
    } */
}

var sound_array = null;

function load_audios(value) {

    if (value.startsWith("$var.")) {

        value = value.slice(5);

        if (value.startsWith("number_")) {
            var str2 = value.slice(7);
            var res = numberInWords(evaluateExpression(str2), numberSystemLangArr[sysLang]);
            load_audios_into_cache(res);
        } else if (value.startsWith("currency_")) {
            var str2 = value.slice(9);
            var res = currencyInWords(evaluateExpression(str2), numberSystemLangArr[sysLang]);
            sound_array = res;
            load_audios_into_cache(res);

        } else if (value.startsWith("alphanumeric_")) {
            var str2 = value.slice(13);
            var strValue = (str2.startsWith("window.")) ? evaluateExpression(str2) : str2;
            var res = strInLetter(strValue);
            load_audios_into_cache(res);
        } else if (value.startsWith("dateStr_")) {
            var str2 = value.slice(8);
            str2 = new Date(evaluateExpression(str2));

            var res = strInDate(evaluateExpression(str2));
            load_audios_into_cache(res);

        } else if (value.startsWith("dateMonthStr_")) {
            var str2 = value.slice(13);
            var res = strInDateMonth(evaluateExpression(str2));
            load_audios_into_cache(res);

        } else if (value.startsWith("years_")) {
            var str2 = value.slice(6);
            var res = numberInWords(evaluateExpression(str2), numberSystemLangArr[sysLang]);
            load_audios_into_cache(res);
        }
    }

}


async function pdfStatus(name) {

    //display_loader();

    var form = new FormData();
    form.append("reference_id", window.res_params.reference_no);
    form.append("app_name", name);

    var settings = {
        // "url": "https://plvc.anurcloud.com/api/getAppName",
        "url": "https://plvcuat.anurcloud.com/api/getAppName",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {

        var responseData = JSON.stringify(response);
        return responseData;

    });
}


async function randomproposalnumber(next_page) {
    sysLang = 'eng';
    await call_LANG_UPDATE_NUMBER();
    await pdfStatus("absli");
    goToPage(next_page);

}

async function randomproposalnumber_kotak(next_page) {
    sysLang = "miz";
    await call_LANG_UPDATE_NUMBER();
    await pdfStatus("kotak");
    goToPage(next_page);

}

async function randomproposalnumber_allianz(next_page) {
    sysLang = "tel";
    await call_LANG_UPDATE_NUMBER();
    await pdfStatus("allianz");
    goToPage(next_page);

}

function load_audios_into_cache(res) {
    for (var j = 0; j < res.length; j++) {

        //console.log(res[j]);
        //res[j])

        if (res[j] != null && res[j].trim() != '') {
            game.load.audio(res[j], TYPE_COMMON_AUDIO_PATH + res[j] + '.mp3');
        }

    }
}


/*function gender_dropDown(){



    gender_dropDownselector();
       

        document.getElementById('gen-input_gender').style.display = 'block';



        if(document.getElementById('divOuter_Gender'))

    {

        var el = document.getElementById('divOuter_Gender');



        var domElement = game.add.dom(647, 840, el); //1535

        var dom_style = domElement.node.style;



        domElement.setDepth(5);

        domElement.setOrigin(0,0.5);



        var child = domElement.getChildByID('gen-input_gender');

        // console.log(child);

        var style = child.style;

        style.fontWeight = '5px';

        style.width ='340px';

        style.height = '85px';

        style.fontSize = '35px';

        style.fontFamily = 'Uniform';

        style.color = '000'

        style.backgroundColor = 'f8f8f8';  //5641fe

        style.borderRadius = '20px';

        domElement.updateSize();
        }

        }


function hideOut()

        {

          document.getElementById('gen-input_gender').style.display = 'none';

        }*/

// Orientation Exp



//For DropDown
var language_array = new Array();
var dropdown_object;
var selected_lang;
language_array.push("English");
language_array.push("Hindi");
language_array.push("Bengali");
language_array.push("Assamese");
language_array.push("Tamil");
language_array.push("Telugu");
language_array.push("Oriya");
language_array.push("Kannada");
language_array.push("Marathi");
language_array.push("Gujarati");
language_array.push("Malayalam");

// language_array.push("Punjabi");

var image_load;
function language_dropdown() {
    // load_start_screen();
    loadJSON().then(() => {

        load_start_screen();
    }).catch((error) => {
        console.error("Error loading JSON: ", error);
    });
    journey_started_hide();
    var select = document.createElement("select");
    var option = document.createElement("option");
    option.value = 'NULL';
    option.text = 'Select Language';
    option.disabled = true;
    option.selected = true;
    select.appendChild(option);


    language_array.forEach(function (currentValue, index, arr) {
        option = document.createElement("option");
        option.value = currentValue;
        option.text = getLocalName(currentValue);
        option.classList.add("largeFont");
        select.appendChild(option);
    });

    dropdown_object = game.add.dom(315, 1200, select);
    dropdown_object.setOrigin(0.5, 0.5);
    dropdown_object.setDepth(8);
    dropdown_object.setAlpha(1);

    var style = dropdown_object.node.style;
    style.width = 571 + 'px';
    style.height = 113 + 'px';
    style.fontSize = 30 + 'px';
    style.textIndent = '150px';
    style.fontFamily = 'NotoSans-Regular';
    style.borderRadius = "30px";
    style.appearance = 'none';
    style.backgroundImage = "url('assets/images/common/language_selection.png')";

    obj_list.push(dropdown_object);

    $('select').on('change', function () {
        style.fontSize = 30 + 'px';
        selected_lang = this.value;
        image_load = true;
        selected_lang = selected_lang.toLowerCase()
        journey_started_show();
        sysLang = allowed_lang[selected_lang];

        // if (document.getElementById('select').value != 'NULL') {
        revert_language_screen();

        loadJSON().then(() => {

            load_start_screen();
        }).catch((error) => {
            console.error("Error loading JSON: ", error);
        });

        // }

    });
}

function load_start_screen() {
    setTextValue('PROPOSAL_NO', window.product_language_data.start_screen.proposal_number);
    setTextValue('LANG_START_TEXT', window.product_language_data.start_screen.lang_start_start);
    setTextValue('CONTENT_1', window.product_language_data.start_screen.content_1);
    setTextValue('CONTENT_2', window.product_language_data.start_screen.content_2);
    setTextValue('START_BTN', window.product_language_data.start_screen.start_btn);

}
function revert_language_screen() {
    setTextValue(window.product_language_data.start_screen.proposal_number, 'PROPOSAL_NO');
    setTextValue(window.product_language_data.start_screen.lang_start_start, 'LANG_START_TEXT');
    setTextValue(window.product_language_data.start_screen.content_1, 'CONTENT_1');
    setTextValue(window.product_language_data.start_screen.content_2, 'CONTENT_2');
    setTextValue(window.product_language_data.start_screen.start_btn, 'START_BTN');
}

function journey_started_show() {
    if (getSpriteObject('start_btn')) {
        getSpriteObject('start_btn').alpha = 1;
    }

    if (window.product_language_data?.start_screen?.start_btn) {
        getTextObject(window.product_language_data.start_screen.start_btn).alpha = 1;
    }
}

function journey_started_hide() {
    if (getSpriteObject('start_btn')) {
        getSpriteObject('start_btn').alpha = 0;
    }

    if (window.product_language_data?.start_screen?.start_btn) {
        getTextObject(window.product_language_data.start_screen.start_btn).alpha = 0;
    }
}

function loadProductManifest(data) {

    window.product_manifest = data;

    if (data.hasOwnProperty(sysLang)) {
        window.product_language_data = evaluateExpression('window.product_manifest.' + sysLang);
    }

}

function loadProductManifest(data) {

    window.product_manifest = data;

    if (data.hasOwnProperty(sysLang)) {
        window.product_language_data = evaluateExpression('window.product_manifest.' + sysLang);
    }

}

function loadJSON() {
    return new Promise((resolve, reject) => {

        var json_url = "assets/json/products.json";
        $.getJSON(json_url)
            .done(function (data) {
                loadProductManifest(data);
                resolve();
            })
            .fail(function (jqxhr, textStatus, error) {
                console.error("Request Failed: " + textStatus + ", " + error);
                reject();
            });
    });
}

function loading_language_flow() {
    // var url = 'assets/json/products.json';
    // $.getJSON(url, function (data, status, xhr) {
    //     loadProductManifest(data);
    loading_language();
    return true;
    // });
}

function loading_language() {
    var lang_assets_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_assets_' + sysLang + '_' + sysFlow + '.js?v=1';
    var lang_flow_fpath = './assets/product_assets/' + window.flow_slug + '/js/flow_' + sysLang + '_' + sysFlow + '.js?v=1';
    loadScript(lang_assets_fpath, function () {
        loadScript(lang_flow_fpath, function () {
            game.scene.start("second_scene");
            if (sysLang == 'eng') {
                loadLangFlow("eng", "normal", 2);
            } else if (sysLang == 'hin') {
                loadLangFlow("hin", "normal", 2);
            } else if (sysLang == 'tam') {
                loadLangFlow("tam", "normal", 2);
            } else if (sysLang == 'tel') {
                loadLangFlow("tel", "normal", 2);
            } else if (sysLang == 'mal') {
                loadLangFlow("mal", "normal", 2);
            } else if (sysLang == 'kan') {
                loadLangFlow("kan", "normal", 2);
            } else if (sysLang == 'ben') {
                loadLangFlow("ben", "normal", 2);
            } else if (sysLang == 'mar') {
                loadLangFlow("mar", "normal", 2);
            } else if (sysLang == 'guj') {
                loadLangFlow("guj", "normal", 2);
            } else if (sysLang == 'pun') {
                loadLangFlow("pun", "normal", 2);
            } else if (sysLang == 'ass') {
                loadLangFlow("ass", "normal", 2);
            } else if (sysLang == 'ori') {
                loadLangFlow("ori", "normal", 2);
            }
        });
    });
}


var disagree_status = 0;
var agree_sts = 0;
const disagree_fields = {};
const agree_fields = {};

function action_agree_disagree(action, field) {
    var cur_page = '';
    if (cur_scr === 5) {
        cur_page = 'personal details -';
    } else if (cur_scr === 7) {
        cur_page = 'plan details -';
    }

    const alreadyAgreed = agree_fields.hasOwnProperty(field);
    const alreadyDisagreed = disagree_fields.hasOwnProperty(field);

    if (action === "disagree") {
        if (!alreadyDisagreed) {
            if (alreadyAgreed) {
                --agree_sts;
                delete agree_fields[field];
            }
            ++disagree_status;
            disagree_fields[field] = "disagree";
        }

        getTextObject(window.product_language_data.policy_details.message_text_1).alpha = 0;
        getTextObject(window.product_language_data.policy_details.message_text_2).alpha = 0;
        getSpriteObject('btn_sl_' + field + '_agree').alpha = 0;
        getSpriteObject('btn_sl_' + field + '_disagree').alpha = 1;
        getSpriteObject('btn_usl_' + field + '_agree').alpha = 1;
        getSpriteObject('btn_usl_' + field + '_disagree').alpha = 0;


        getSpriteObject('proceed_btn').alpha = 1;
        getSpriteObject('gray_btn').alpha = 0;
        hide_loader();

    }
    else if (action === "agree") {
        if (!alreadyAgreed) {
            if (alreadyDisagreed) {
                --disagree_status;
                delete disagree_fields[field];
            }
            ++agree_sts;
            agree_fields[field] = "agree";
        }

        getTextObject(window.product_language_data.policy_details.message_text_1).alpha = 0;
        getTextObject(window.product_language_data.policy_details.message_text_2).alpha = 0;
        getSpriteObject('btn_sl_' + field + '_agree').alpha = 1;
        getSpriteObject('btn_sl_' + field + '_disagree').alpha = 0;
        getSpriteObject('btn_usl_' + field + '_agree').alpha = 0;
        getSpriteObject('btn_usl_' + field + '_disagree').alpha = 1;

        getSpriteObject('proceed_btn').alpha = 1;
        getSpriteObject('gray_btn').alpha = 0;
        hide_loader();

    }
}

function check_disagree() {

    if (disagree_status >= 1) {
        getTextObject('ERROR_MSG').alpha = 1;
        getTextObject('CONTENT').alpha = 0;

    }
}

function reset_agree_disagree_status() {
    disagree_status = 0;
    agree_sts = 0;
}

async function agree_status() {

    if (cur_scr == 5) {

        if (agree_sts == 0 && disagree_status == 0) {
            getTextObject(window.product_language_data.policy_details.message_text_1).alpha = 1;
        }

        else if (agree_sts + disagree_status < 5) {
            getTextObject(window.product_language_data.policy_details.message_text_2).alpha = 1;
        }

        else {

            if (disagree_status >= 1) {
                call_UPDATE_DISAGREE_STATS(disagree_status, JSON.stringify(disagree_fields));
                goToPage(12);
                return;
            }
            else {

                if (window.res_params.plan_count === 1) {
                    goToPage(16);
                    return;
                }

                reset_agree_disagree_status();
                goToPage(7);
                return;
            }
        }
    }
    else if (cur_scr == 7) {
        goToPage(8);
    }

    else if (cur_scr == 16) {

        if (agree_sts == 0 && disagree_status == 0) {
            getTextObject(window.product_language_data.policy_details.message_text_1).alpha = 1;
        } else if (agree_sts + disagree_status < 7) {
            getTextObject(window.product_language_data.policy_details.message_text_2).alpha = 1;
        } else {
            if (disagree_status >= 1) {
                call_UPDATE_DISAGREE_STATS(disagree_status, JSON.stringify(disagree_fields));
                goToPage(12);
                return;
            } else {
                goToPage(8);
            }
        }
    }

    else if (cur_scr == 8) {
        goToPage(9);
    } else if (cur_scr == 9) {
        goToPage(10);
    }
}
var down_id = '';
var up_id = '';
var anurone_st_intervalId;

function update_anurone_speeds() {
    getTextObject('UPLOAD').alpha = 0;
}

function start_anurone_st() {
    if (getTextObject('download_speed').text == 'download_speed') {
        down_id = 'download_speed';

    }
    if (getTextObject('upload_speed').text == 'upload_speed') {
        up_id = 'upload_speed';

    }

    anurone_st_intervalId = setInterval(() => {
        var tmp_down_link = window.download_speed;
        var tmp_up_link = window.upload_speed;

        console.log("Updating speeds");

        setTextValue(down_id, tmp_down_link);
        setTextValue(up_id, tmp_up_link);
        down_id = tmp_down_link;
        up_id = tmp_up_link;
    }, 500);
}
let anuroneIntervalId = null;
function begin_anurone_st() {
    if (anuroneIntervalId !== null) {
        clearInterval(anuroneIntervalId);
    }
    anuroneIntervalId = setInterval(call_anurone_st, 5000);
    // Optional: Clear interval when page is about to be unloaded (though not strictly necessary as it will cease)

}
function stop_anurone_st() {
    if (anuroneIntervalId !== null) {
        clearInterval(anuroneIntervalId);
        anuroneIntervalId = null; // Reset the ID after stopping
    }
}
function redirect_url() {
    open_url_self(window.redirect_to_url);
}

function delete_overlay() {
    if (overlay_canvas) {
        clearOverlayCanvas();
    }
}

var drop_doc, domElement_doc;
async function dropdown_document() {
    drop_doc = document.createElement('select');

    drop_doc.id = "doc_select";
    drop_doc.style.fontSize = '36px';
    drop_doc.style.width = '636px';
    drop_doc.style.height = '138px';
    drop_doc.style.borderColor = '#1f2b59';
    drop_doc.style.borderRadius = '40px';
    drop_doc.style.textAlignLast = 'center';
    drop_doc.style.fontWeight = 'bold';
    drop_doc.style.boxShadow = '10px 10px 10px 10px #888888';
    drop_doc.style.backgroundColor = '#ffffff';
    drop_doc.style.color = "#015daa";
    drop_doc.style.appearance = "none";
    drop_doc.style.backgroundImage = "url('assets/images/common/btn_doc_sel.png')";
    drop_doc.style.backgroundRepeat = 'no-repeat';
    drop_doc.style.backgroundPosition = 'right';

    // 🔽 Pull multi-language labels from JSON
    var lang_data = window.product_language_data.upload_screen;

    var drop_values_array = [
        lang_data.select_doc,
        lang_data.aadhaar_card,
        lang_data.pan_card,
        lang_data.driving_license,
        lang_data.passport
    ];

    var pick_values_array = ["Select Document", "aadhaar", "pan", "vehicle-rc", "passport"];

    for (var i = 0; i < drop_values_array.length; i++) {
        var option_call = document.createElement("option");

        option_call.value = pick_values_array[i];
        option_call.text = drop_values_array[i];
        option_call.style.fontSize = '20px';
        option_call.style.textAlign = 'center';
        option_call.style.color = '#000000';

        if (i === 0) {
            option_call.disabled = true;
            option_call.selected = true;
        }

        drop_doc.appendChild(option_call);
    }

    window.doc_type = "";

    drop_doc.addEventListener('change', function () {
        drop_doc.options[0].disabled = true;

        if (drop_doc.value !== "Select Document") {

            if (typeof tmp !== "undefined" && tmp.btn_1 && getTextObject(tmp.btn_1))
                getTextObject(tmp.btn_1).alpha = 1;

            if (getSpriteObject("upload_btn"))
                getSpriteObject("upload_btn").alpha = 1;
            if (getTextObject(window.product_language_data.upload_screen.upload_txt))
                getTextObject(window.product_language_data.upload_screen.upload_txt).alpha = 1;

            window.doc_type = drop_doc.value;
        }
    });

    domElement_doc = game.add.dom(540, 1240, drop_doc);
    domElement_doc.updateSize();
    domElement_doc.setDepth(3);
    domElement_doc.setOrigin(0.5, 0);

    obj_list.push(domElement_doc);
}


async function imageCapture() {
    if (cur_scr == 5) {
        await call_ADD_CAPTURED_IMAGE('Personal Details', 'false');
        await call_ADD_CAPTURED_SCREENSHOT('Personal Details', 1);
        await waitforme(3000);
    } else if (cur_scr == 7) {
        await call_ADD_CAPTURED_IMAGE('Policy Screen', 'false');
        await call_ADD_CAPTURED_SCREENSHOT('Policy Screen', 1);
        await waitforme(3000);
    } else if (cur_scr == 8) {
        await call_ADD_CAPTURED_IMAGE('Rider Details Screen', 'false');
        await call_ADD_CAPTURED_SCREENSHOT('Rider Details Screen', 1);
        await waitforme(3000);
    } else if (cur_scr == 9) {
        await call_ADD_CAPTURED_IMAGE('Disclaimer Screen', 'false');
        await call_ADD_CAPTURED_SCREENSHOT('Disclaimer Screen', 1);
        await waitforme(3000);
    }
}


window.addEventListener('beforeunload', () => {
    clearInterval(intervalId);
});
const orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {});