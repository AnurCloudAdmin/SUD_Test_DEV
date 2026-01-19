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

var COMMON_AUDIO_PATH='./assets/audio/common/';
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
    load_assets_init_audios();

}

function load_assets_init_images() {
    
    game.load.image('plain_bg', IMG_COM_PATH + 'plain_bg.jpg');    

}

function load_assets_init_sprites() {

   
}

function load_assets_init_audios() {   
   

}