/*
 Custom Assets
 */

// Define Paths
var CUSTOM_IMG_PATH = './assets/images/custom/';
var PRODUCT_PATH = './assets/product_assets/' + window.flow_slug + '/';
var PRODUCT_IMG_PATH = PRODUCT_PATH + 'images/';
var COMMON_PRODUCT_IMG_PATH = './assets/images/common/product/';
var COMMON_PRODUCT_LANG_IMG_PATH = COMMON_PRODUCT_IMG_PATH + 'eng/';
var PRODUCT_SCENE_AUDIO_PATH = PRODUCT_PATH + 'audio/eng/scenes/';

var COMMON_JS_PATH = './assets/js/common/';

var COMMON_AUDIO_PATH = './assets/audio/common/';
var TYPE_COMMON_AUDIO_PATH = './assets/audio/product/eng/common/';

var TYPE_SCENE_AUDIO_PATH_EN = './assets/audio/product/eng/scenes/';
var TYPE_SCENE_AUDIO_PATH_HN = './assets/audio/product/hin/scenes/';


var COMMON_IMG_PATH = './assets/images/common/product/';
var COMMON_LANG_IMG_PATH = COMMON_IMG_PATH + 'eng/';

function customAssets() {
    //Loading Images
    load_assets_init_images();

    //Loading Sprites
    load_assets_init_sprites();

    //Loading Audios
    // load_assets_init_audios();

}

function load_assets_init_images() {

    //Start Screen
    game.load.image('start_bg', IMG_COM_PATH + 'start_bg.jpg');
    game.load.image('language_selection', IMG_COM_PATH + 'language_selection.png');
    game.load.image('english_btn', IMG_COM_PATH + 'english_btn.png');
    game.load.image('start_btn', IMG_COM_PATH + 'start_btn.png');
    game.load.image('favicon', IMG_COM_PATH + 'favicon.png');


    //Permission Screen
    game.load.image('permission_bg', IMG_COM_PATH + 'permission_bg.jpg');
    game.load.image('proceed_permission_screen_btn', IMG_COM_PATH + 'proceed_permission_screen_btn.png');
    game.load.image('allow_access_camera', IMG_COM_PATH + 'allow_access_btn.png');
    game.load.image('allow_access_location', IMG_COM_PATH + 'allow_access_btn.png');
    game.load.image('cam_access', IMG_COM_PATH + 'cam_access.png');
    game.load.image('location_access', IMG_COM_PATH + 'location_access.png');
    game.load.image('tick_camera', IMG_COM_PATH + 'tick.png');
    game.load.image('tick_location', IMG_COM_PATH + 'tick.png');
    game.load.image('loader', IMG_COM_PATH + 'loader_150_150.png');
}

function load_assets_init_sprites() {

    game.load.spritesheet('permission_screen_animation', IMG_COM_PATH + 'permission_screen_animation.png', {
        frameWidth: 320,
        frameHeight: 270
    });
}

// function load_assets_init_audios() {
//     game.load.audio('permission_screen_audio', TYPE_SCENE_AUDIO_PATH_EN + 'permission_screen_audio.mp3');
// }