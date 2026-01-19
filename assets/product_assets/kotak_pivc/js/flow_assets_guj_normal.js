/*
 Custom Assets
 */

// Define Paths
var PRODUCT_PATH = './assets/product_assets/' + window.flow_slug + '/';
var PRODUCT_COMMON_IMG_PATH = PRODUCT_PATH + 'images/';
var PRODUCT_LANG_IMG_PATH = PRODUCT_COMMON_IMG_PATH + 'eng/';

var PRODUCT_SCENE_AUDIO_PATH = PRODUCT_PATH + 'audio/guj/scenes/';  //Audio for all pages
var PRODUCT_COMMON_AUDIO_PATH = PRODUCT_PATH + 'audio/eng/common/';

var COMMON_IMG_PATH = './assets/images/common/kli/';
var COMMON_IMAGE_PATH = IMG_COM_PATH + 'kli/';
var COMMON_LANG_IMG_PATH = COMMON_IMG_PATH + 'eng/';

var COMMON_JS_PATH = './assets/js/common/';
var CUSTOM_IMG_PATH = './assets/images/custom/';
var CUSTOM_IMG_LANG_PATH = './assets/images/custom/eng/';
var CUSTOM_IMG_PRODUCT_PATH = './assets/images/custom/product/';

var COMMON_AUDIO_PATH = './assets/audio/common/';
var COMMON_AUDIO_LANG_PATH = COMMON_AUDIO_PATH + 'eng/';

// var TYPE_SCENE_AUDIO_PATH = './assets/audio/product/eng/scenes/';
var TYPE_COMMON_AUDIO_PATH = './assets/audio/product/guj/common/';  //dynamic values


function langAssets() {

    //console.log('English Language Assets Loading');

    //Loading Images
    load_assets_init_images();

    //Loading Sprites
    load_assets_init_sprites();

    //Loading Audios
    load_lang_assets_init_audios();
}

function load_assets_init_images() {

    //second Scene
    game.load.image('plain_bg', COMMON_IMAGE_PATH + 'plain_bg.jpg');
    game.load.image('popup_facescore', COMMON_IMAGE_PATH + 'popup_facescore.png');


    //Face Detection and Smile Detection
    game.load.image('tick3', COMMON_IMAGE_PATH + 'tick.png');
    game.load.image('multi_face_detected', COMMON_IMAGE_PATH + 'multi_face_detected.png');
    game.load.image('no_face_detected', COMMON_IMAGE_PATH + 'no_face_detected.png');
    game.load.image('allow_access_camera_gray', COMMON_IMAGE_PATH + 'allow_access_gray.png');
    game.load.image('allow_access_location_gray', COMMON_IMAGE_PATH + 'allow_access_gray.png');

    //ID CARD Screen
    game.load.image('id_card_bg', COMMON_IMAGE_PATH + 'id_card_bg.jpg');
    game.load.image('next_btn', COMMON_IMAGE_PATH + 'next_btn.png');
    game.load.image('framebox', COMMON_IMAGE_PATH + 'framebox.png');
    game.load.image('upload_icon', COMMON_IMAGE_PATH + 'upload_icon.png');
    game.load.image('upload_btn', COMMON_IMAGE_PATH + 'upload_btn.png');
    // game.load.image('upload_btn_disable', COMMON_IMAGE_PATH + 'upload_btn_disable.png');
    game.load.image('cancel_btn', COMMON_IMAGE_PATH + 'cancel_btn.png');
    game.load.image('cancel_btn_disable', COMMON_IMAGE_PATH + 'cancel_btn_disable.png');
    game.load.image('proceed_btn', COMMON_IMAGE_PATH + 'proceed_btn.png');
    game.load.image('gray_btn', COMMON_IMAGE_PATH + 'red_btn.png');


    //Photo Consent Screen
    game.load.image('photo_consent', COMMON_IMAGE_PATH + 'photo_consent.jpg');   //bg
    game.load.image('take_photo', COMMON_IMAGE_PATH + 'take_photo.png');
    game.load.image('score_popup', COMMON_IMAGE_PATH + 'score_popup.png');
    game.load.image('selfie_icon', COMMON_IMAGE_PATH + 'selfie_icon.png');
    game.load.image('box', COMMON_IMAGE_PATH + 'box.png');
    game.load.image('next_btn', COMMON_IMAGE_PATH + 'next_btn.png');
    game.load.image('ticks', COMMON_IMAGE_PATH + 'ticks.png');

    //Personal Screen
    game.load.image('personal_details_bg', COMMON_IMAGE_PATH + 'personal_details_bg.jpg');
    game.load.image('agree', COMMON_IMAGE_PATH + 'agree.png');
    game.load.image('disagree', COMMON_IMAGE_PATH + 'disagree.png');
    game.load.image('personaldetails_fields', COMMON_IMAGE_PATH + 'personaldetails_fields.png');
    game.load.image('face_detected', COMMON_IMAGE_PATH + 'face_detected.png');
    game.load.image('personal_details_disagree_bg', COMMON_IMAGE_PATH + 'personal_details_bg.jpg');
    game.load.image('saveandproceed_btn', COMMON_IMAGE_PATH + 'saveandproceed_btn.png');
    // game.load.image('mobile_popup', COMMON_IMAGE_PATH + 'mobile_popup.png');
    game.load.image('age_popup', COMMON_IMAGE_PATH + 'age_popup.png');
    game.load.image('name_popup', COMMON_IMAGE_PATH + 'name_popup.png');
    game.load.image('valid_dob_popup', COMMON_IMAGE_PATH + 'valid_dob_popup.png');

    game.load.image('btn_sl_name_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_name_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_name_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_name_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_dob_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_dob_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_dob_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_dob_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_number_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_number_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_number_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_number_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_mail_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_mail_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_mail_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_mail_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_address_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_address_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_address_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_address_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    //Policy Screen  
    game.load.image('policy_bg', COMMON_IMAGE_PATH + 'policy_bg.jpg');
    game.load.image('policy_field', COMMON_IMAGE_PATH + 'policy_field.png');
    game.load.image('policy_details_disagree', COMMON_IMAGE_PATH + 'policy_details_disagree.jpg');
    game.load.image('cancel', COMMON_IMAGE_PATH + 'cancel.png');
    game.load.image('next_icon', COMMON_IMAGE_PATH + 'next_icon.png');
    game.load.image('back_icon', COMMON_IMAGE_PATH + 'back_icon.png');

    //Plan details ICONS
    game.load.image('યોજનાનું નામ', COMMON_IMAGE_PATH + 'plan_icon.png');
    game.load.image('જીવન કવર- વીમાની રકમ', COMMON_IMAGE_PATH + 'sum_assured_icon.png');
    game.load.image('જીવન વીમાધારકનું નામ', COMMON_IMAGE_PATH + 'life_insured_icon.png');
    game.load.image('પ્રીમિયમ રકમ', COMMON_IMAGE_PATH + 'premium_amount_icon.png');
    game.load.image('પ્રીમિયમ ભરવાની મુદત', COMMON_IMAGE_PATH + 'premium_paying_term.png');
    game.load.image('પોલિસી ટર્મ', COMMON_IMAGE_PATH + 'policy_term_icon.png');
    game.load.image('ફ્રીક્વન્સી', COMMON_IMAGE_PATH + 'frequency_icon.png');

    //Rider details ICONS
    game.load.image('Rider 1', COMMON_IMAGE_PATH + 'Rider_1.png');
    game.load.image('Rider 2', COMMON_IMAGE_PATH + 'Rider_2.png');
    game.load.image('Rider 3', COMMON_IMAGE_PATH + 'Rider_3.png');
    game.load.image('Rider 4', COMMON_IMAGE_PATH + 'Rider_4.png');
    game.load.image('Rider 5', COMMON_IMAGE_PATH + 'Rider_5.png');


    game.load.image('btn_sl_plan_name_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_plan_name_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_plan_name_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_plan_name_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_sum_assured_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_sum_assured_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_sum_assured_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_sum_assured_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_insured_name_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_insured_name_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_insured_name_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_insured_name_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_pre_amount_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_pre_amount_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_pre_amount_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_pre_amount_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_paying_term_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_paying_term_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_paying_term_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_paying_term_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_policy_term_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_policy_term_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_policy_term_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_policy_term_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');

    game.load.image('btn_sl_pre_paying_agree', COMMON_IMAGE_PATH + 'btn_sl_agree.png');
    game.load.image('btn_sl_pre_paying_disagree', COMMON_IMAGE_PATH + 'btn_sl_disagree.png');
    game.load.image('btn_usl_pre_paying_agree', COMMON_IMAGE_PATH + 'btn_usl_agree.png');
    game.load.image('btn_usl_pre_paying_disagree', COMMON_IMAGE_PATH + 'btn_usl_disagree.png');


    //Rider Details Screen
    game.load.image('rider_details_bg', COMMON_IMAGE_PATH + 'rider_details_bg.jpg');
    game.load.image('rider_details_field', COMMON_IMAGE_PATH + 'rider_details_field.png');

    //Disclaimer Screen
    game.load.image('disclaimer_bg', COMMON_IMAGE_PATH + 'disclaimer_bg.jpg');
    // game.load.image('disclaimer_field', COMMON_IMAGE_PATH + 'disclaimer_field.png');

    //Video Consent Screen 

    game.load.image('video_consent_bg', COMMON_IMAGE_PATH + 'video_consent_bg.jpg');
    game.load.image('consent_box', COMMON_IMAGE_PATH + 'consent_box.png');
    game.load.image('empty_consent_box', COMMON_IMAGE_PATH + 'empty_consent_box.png');
    game.load.image('upload_btn', COMMON_IMAGE_PATH + 'upload_btn.png');
    game.load.image('camera_icon', COMMON_IMAGE_PATH + 'camera_icon.png');
    game.load.image('next_btn', COMMON_IMAGE_PATH + 'next_btn.png');
    game.load.image('facedetection_bright', COMMON_IMAGE_PATH + 'facedetection_bright.png');
    game.load.image('smiledetection_bright', COMMON_IMAGE_PATH + 'smiledetection_bright.png');
    game.load.image('spoofdetection_bright', COMMON_IMAGE_PATH + 'spoofdetection_bright.png');
    game.load.image('nofacedetection_bright', COMMON_IMAGE_PATH + 'nofacedetection_bright.png');
    game.load.image('multiface_bright', COMMON_IMAGE_PATH + 'multiface_bright.png');
    game.load.image('lightdetection_bright', COMMON_IMAGE_PATH + 'lightdetection_bright.png');
    game.load.image('stop', COMMON_IMAGE_PATH + 'stop.png');
    game.load.image('speech_popup', COMMON_IMAGE_PATH + 'speech_popup.png');
    game.load.image('position_box', COMMON_IMAGE_PATH + 'position_the_face_box.png');
    game.load.image('liveness_check', COMMON_IMAGE_PATH + 'liveness_check.png');
    game.load.image('green_box', COMMON_IMAGE_PATH + 'green_box.png');
    game.load.image('red_box', COMMON_IMAGE_PATH + 'red_box.png');
    game.load.image('face_match', COMMON_IMAGE_PATH + 'face_match.png');
    game.load.image('multi_face', COMMON_IMAGE_PATH + 'multi_face.png');

    //game.load.image('network_error_sprite', IMG_COM_PATH+'network_error_sprite.png');
    game.load.image('photograph_error', COMMON_IMAGE_PATH + 'photograph_error.png');
    game.load.image('loader', COMMON_IMAGE_PATH + 'loader_150_150.png');
    game.load.image('light_error', COMMON_IMAGE_PATH + 'light_error.png');
    game.load.image('Video_recording_box', COMMON_IMAGE_PATH + 'Video_recording_box.png');
    game.load.image('video_consent_tick', COMMON_IMAGE_PATH + 'video_consent_tick.png');

    //Feedback Screen

    // game.load.image('feedback_bg', COMMON_IMAGE_PATH + 'feedback_bg.jpg');
    // game.load.image('feedback_popup', COMMON_IMAGE_PATH + 'feedback_popup.png');
    // game.load.image('line1', COMMON_IMAGE_PATH + 'line.png');
    // game.load.image('line2', COMMON_IMAGE_PATH + 'line.png');
    // game.load.image('line3', COMMON_IMAGE_PATH + 'line.png');
    // game.load.image('line4', COMMON_IMAGE_PATH + 'line.png');

    // //Question 1
    // game.load.image('ques1_1_us', COMMON_IMAGE_PATH + '1_us.png');
    // game.load.image('ques1_1_sl', COMMON_IMAGE_PATH + '1_sl.png');
    // game.load.image('ques1_2_us', COMMON_IMAGE_PATH + '2_us.png');
    // game.load.image('ques1_2_sl', COMMON_IMAGE_PATH + '2_sl.png');
    // game.load.image('ques1_3_us', COMMON_IMAGE_PATH + '3_us.png');
    // game.load.image('ques1_3_sl', COMMON_IMAGE_PATH + '3_sl.png');
    // game.load.image('ques1_4_us', COMMON_IMAGE_PATH + '4_us.png');
    // game.load.image('ques1_4_sl', COMMON_IMAGE_PATH + '4_sl.png');
    // game.load.image('ques1_5_us', COMMON_IMAGE_PATH + '5_us.png');
    // game.load.image('ques1_5_sl', COMMON_IMAGE_PATH + '5_sl.png');

    // //Question 2
    // game.load.image('ques2_1_us', COMMON_IMAGE_PATH + '1_us.png');
    // game.load.image('ques2_1_sl', COMMON_IMAGE_PATH + '1_sl.png');
    // game.load.image('ques2_2_us', COMMON_IMAGE_PATH + '2_us.png');
    // game.load.image('ques2_2_sl', COMMON_IMAGE_PATH + '2_sl.png');
    // game.load.image('ques2_3_us', COMMON_IMAGE_PATH + '3_us.png');
    // game.load.image('ques2_3_sl', COMMON_IMAGE_PATH + '3_sl.png');
    // game.load.image('ques2_4_us', COMMON_IMAGE_PATH + '4_us.png');
    // game.load.image('ques2_4_sl', COMMON_IMAGE_PATH + '4_sl.png');
    // game.load.image('ques2_5_us', COMMON_IMAGE_PATH + '5_us.png');
    // game.load.image('ques2_5_sl', COMMON_IMAGE_PATH + '5_sl.png');

    // //Question 3
    // game.load.image('ques3_1_us', COMMON_IMAGE_PATH + '1_us.png');
    // game.load.image('ques3_1_sl', COMMON_IMAGE_PATH + '1_sl.png');
    // game.load.image('ques3_2_us', COMMON_IMAGE_PATH + '2_us.png');
    // game.load.image('ques3_2_sl', COMMON_IMAGE_PATH + '2_sl.png');
    // game.load.image('ques3_3_us', COMMON_IMAGE_PATH + '3_us.png');
    // game.load.image('ques3_3_sl', COMMON_IMAGE_PATH + '3_sl.png');
    // game.load.image('ques3_4_us', COMMON_IMAGE_PATH + '4_us.png');
    // game.load.image('ques3_4_sl', COMMON_IMAGE_PATH + '4_sl.png');
    // game.load.image('ques3_5_us', COMMON_IMAGE_PATH + '5_us.png');
    // game.load.image('ques3_5_sl', COMMON_IMAGE_PATH + '5_sl.png');

    // //Question 4
    // game.load.image('ques4_1_us', COMMON_IMAGE_PATH + '1_us.png');
    // game.load.image('ques4_1_sl', COMMON_IMAGE_PATH + '1_sl.png');
    // game.load.image('ques4_2_us', COMMON_IMAGE_PATH + '2_us.png');
    // game.load.image('ques4_2_sl', COMMON_IMAGE_PATH + '2_sl.png');
    // game.load.image('ques4_3_us', COMMON_IMAGE_PATH + '3_us.png');
    // game.load.image('ques4_3_sl', COMMON_IMAGE_PATH + '3_sl.png');
    // game.load.image('ques4_4_us', COMMON_IMAGE_PATH + '4_us.png');
    // game.load.image('ques4_4_sl', COMMON_IMAGE_PATH + '4_sl.png');
    // game.load.image('ques4_5_us', COMMON_IMAGE_PATH + '5_us.png');
    // game.load.image('ques4_5_sl', COMMON_IMAGE_PATH + '5_sl.png');

    // //Question 5
    // game.load.image('ques5_1_us', COMMON_IMAGE_PATH + '1_us.png');
    // game.load.image('ques5_1_sl', COMMON_IMAGE_PATH + '1_sl.png');
    // game.load.image('ques5_2_us', COMMON_IMAGE_PATH + '2_us.png');
    // game.load.image('ques5_2_sl', COMMON_IMAGE_PATH + '2_sl.png');
    // game.load.image('ques5_3_us', COMMON_IMAGE_PATH + '3_us.png');
    // game.load.image('ques5_3_sl', COMMON_IMAGE_PATH + '3_sl.png');
    // game.load.image('ques5_4_us', COMMON_IMAGE_PATH + '4_us.png');
    // game.load.image('ques5_4_sl', COMMON_IMAGE_PATH + '4_sl.png');
    // game.load.image('ques5_5_us', COMMON_IMAGE_PATH + '5_us.png');
    // game.load.image('ques5_5_sl', COMMON_IMAGE_PATH + '5_sl.png');

    //ThnakYou Screen
    game.load.image('thank_you_bg', COMMON_IMAGE_PATH + 'thank_you_bg.jpg');
    // game.load.image('thankyou_popup', COMMON_IMAGE_PATH + 'thankyou_popup.png');
    game.load.image('call', COMMON_IMAGE_PATH + 'call.png');
    game.load.image('mail', COMMON_IMAGE_PATH + 'mail.png');
    game.load.image('submit_btn', COMMON_IMAGE_PATH + 'submit_btn.png');
    game.load.image('web', COMMON_IMAGE_PATH + 'web.png');
    // game.load.image('pdf', COMMON_IMAGE_PATH + 'pdf.png');

}

function load_assets_init_sprites() {



}

function load_lang_assets_init_audios() {


    game.load.audio('product_kotak', PRODUCT_SCENE_AUDIO_PATH + 'product_kotak.mp3');

    //Payment Type
    //game.load.audio('payment_type', PRODUCT_SCENE_AUDIO_PATH + GetFriendlyName(window.res_params.PAYMENT_TYPE)+'.mp3');

    game.load.audio('premium_of', PRODUCT_SCENE_AUDIO_PATH + 'premium_of.mp3');

    //Payment Frequency
    game.load.audio('payment_frequency', PRODUCT_SCENE_AUDIO_PATH + GetFriendlyName(window.res_params.PREMIUM_PAYING) + '.mp3');

    game.load.audio('for', PRODUCT_SCENE_AUDIO_PATH + 'for.mp3');

    game.load.audio('policy_term', PRODUCT_SCENE_AUDIO_PATH + 'policy_term.mp3');

    game.load.audio('sum_assured', PRODUCT_SCENE_AUDIO_PATH + 'sum_assured.mp3');

    // game.load.audio('video_audio', PRODUCT_SCENE_AUDIO_PATH + 'video_audio.mp3');

    game.load.audio('and', PRODUCT_SCENE_AUDIO_PATH + 'and.mp3');
    game.load.audio('rupees', PRODUCT_SCENE_AUDIO_PATH + 'rupees.mp3');

    game.load.audio('comma', PRODUCT_SCENE_AUDIO_PATH + 'comma.mp3');
    game.load.audio('years', PRODUCT_SCENE_AUDIO_PATH + 'years.mp3');
    game.load.audio('year', PRODUCT_SCENE_AUDIO_PATH + 'year.mp3');

    load_audios('$var.currency_window.res_params.PREMIUM_AMOUNT');
    load_audios('$var.years_window.res_params.PREMIUM_PAYING_TERM');
    load_audios('$var.years_window.res_params.POLICY_TERM');
    load_audios('$var.currency_window.res_params.SUM_ASSURED');

    game.load.audio('permission_screen_audio', PRODUCT_SCENE_AUDIO_PATH + 'permission_screen_audio.mp3');
    game.load.audio('personal_details_agree_audio', PRODUCT_SCENE_AUDIO_PATH + 'personal_details_agree_audio.mp3');
    // game.load.audio('feedback_screen_audio', PRODUCT_SCENE_AUDIO_PATH + 'feedback_screen_audio.mp3');
    game.load.audio('rider_details_audio', PRODUCT_SCENE_AUDIO_PATH + 'rider_details_audio.mp3');
    game.load.audio('disclaimer_audio', PRODUCT_SCENE_AUDIO_PATH + 'disclaimer_audio.mp3');
    game.load.audio('photo_consent_audio', PRODUCT_SCENE_AUDIO_PATH + 'photo_consent_audio.mp3');
    // game.load.audio('personal_details_disagree_audio', PRODUCT_SCENE_AUDIO_PATH + 'personal_details_disagree_audio.mp3');
    game.load.audio('idcard_screen_audio', PRODUCT_SCENE_AUDIO_PATH + 'idcard_screen_audio.mp3');
    game.load.audio('video_consent_audio', PRODUCT_SCENE_AUDIO_PATH + 'video_consent_audio.mp3');
    game.load.audio('thankyou_screen_audio', PRODUCT_SCENE_AUDIO_PATH + 'thankyou_screen_audio.mp3');

    // game.load.audio('next_btn', PRODUCT_SCENE_AUDIO_PATH + 'next_btn.mp3');
    // game.load.audio('life_cover_sum_assured', PRODUCT_SCENE_AUDIO_PATH + 'life_cover_sum_assured.mp3');
    // game.load.audio('policy_term', PRODUCT_SCENE_AUDIO_PATH + 'policy_term.mp3');
    // game.load.audio('premium_amount', PRODUCT_SCENE_AUDIO_PATH + 'premium_amount.mp3');
    // game.load.audio('Premium_paying', PRODUCT_SCENE_AUDIO_PATH + 'Premium_paying.mp3');
    // game.load.audio('premium_paying_term', PRODUCT_SCENE_AUDIO_PATH + 'premium_paying_term.mp3');




}


function langAssetsRest() {
    //console.log("langAssetsRest : Init");
    loadComplete();
}