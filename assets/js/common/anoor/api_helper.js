
// var BASE_PATH = 'https://plvc.anurcloud.com/api/';
var BASE_PATH = 'https://plvcuat.anurcloud.com/api/';


var sessionKey = crypto.getRandomValues(new Uint8Array(8)).toString();


//KLI PIVC API LIST
var UPDATE_DEVICE_DETAILS = BASE_PATH + 'deviceDetails';
var GET_GEOLOCATION_ADDRESS = BASE_PATH + 'getAndSaveLocation';
var ADD_CAPTURED_IMAGE = BASE_PATH + 'addCapturedImage';
var ADD_CAPTURED_SCREENSHOT = BASE_PATH + 'addCapturedScreenShot';
var UPDATE_LINK_RESPONSE = BASE_PATH + 'updateLinkResponse';
var UPDATE_EDIT_LINK_RESPONSE = BASE_PATH + 'updateEditLinkResponse';
var UPDATE_FEEDBACK_RESPONSE = BASE_PATH + 'Feedback_Details';
var UPDATE_THANKYOU_COMMENT = BASE_PATH + 'getComments';
var ID_CARD_UPLOADER = BASE_PATH + 'addIDCard';
var PHOTO_UPLOADER = BASE_PATH + 'addTakePhoto';
var UPDATE_DISAGREE_STATS = BASE_PATH + 'update_disagree_stats';
var ADD_CONSENT_VIDEO = BASE_PATH + 'addConsentVideo';
var CALL_VIDEO_LOG_IOS = BASE_PATH + 'videologsApi';

// var FACE_COMPARISION = BASE_PATH + 'Face_Comparision_Info'; 

var UPDATE_COMPLETE_STATUS = BASE_PATH + 'CompleteStatus';
var LANG_UPDATE_NUMBER = BASE_PATH + 'LangProposalPIVCLink';

var ANDROID_VIDEO_SAVE_URL_API = BASE_PATH + 'speechToTextDemoABSLI';
var SPEECH_TO_TEXT = BASE_PATH + 'speechToText';
var UPDATE_SPEECH_TO_TEXT = BASE_PATH + 'call_speech_to_text';




// speech to text 

// async function call_ANDROID_VIDEO_SAVE_URL_API(name, blob, type,proposal,latitude,longitude, speechLang) {
//     var form = new FormData();
//     form.append('name', 'consent');
//     form.append('link_video', blob);
//     form.append('type', 'consent');
//     form.append('proposal', window.proposal_no);
//     form.append('latitude', window.latitude_value);
//     form.append('longitude', window.longitude_value);
//     form.append('speechLang', speechLang);
//     form.append('plan_type',  window.plan_id); 

//     var result = await callAPI(ANDROID_VIDEO_SAVE_URL_API, form);

//     if(sysLang == 'eng' && result.status=="Failed")
//     {
//         window.result = "failed";
//       console.log("Uploading Failed"+sysLang);
//       goToPage(10);

//     }


//     else
//     { 

//         window.speech_ref = result.speech_res.ref

//         window.speech_words = result.speech_res.stt; 

//         window.score_res  = result.speech_res.score; 

//         if (result.speech_res.match == true ) {

//             window.match_res = "Matched"
//         } 
//         else {
//             window.match_res = "Not Matched"
//         }

//         if (result.speech_res.match == true)
//         {
//             console.log("Uploading Success");
//           window.result = "success";  
//           goToPage(12); 
//         }
//         else{
//             console.log("Uploading Success");
//           window.result = "match failed"; 
//           goToPage(12); 

//         }

//     }
//     return window.result;

// }  


window.address = '';

async function callAPI(api, data) {
    display_loader();

    var result = await api_call(api, data);

    //console.log('Returning Result ', result);

    hide_loader();

    return result;
}

async function callAPI_without_loader(api, data) {
    var result = await api_call(api, data);
    return result;
}

function api_call(api, data) {

    data = playE(data, sessionKey);  //encrypt
    var form = new FormData();
    form.append("data", data.encrypted_data);
    form.append("key", data.encrypted_key);

    return new Promise(function (resolve, reject) {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": api,
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
            // "timeout":30000
        }

        $.ajax(settings).done(function (response) {

            if (response != null) {

                try {
                    //var response_data = replayD(response, 'mT-7bxag?aeesycmAC-9QDN!Asfd4dsa');

                    var response_data = playECheck(response, sessionKey);  //decrypt
                    // alert(response_data);
                    response_data = JSON.parse(response_data);
                    // alert(response_data);

                    resolve(response_data);
                }
                catch (e) {
                    // alert(e);
                    resolve(null);
                }

            }
            else {
                reject(null);
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //console.log('NETWORK ERROR : ', errorThrown);
            hide_loader();

        });

    });
}

var response_data;
async function api_call_without_encription(api, blob, chunk, chunkIndex, totalChunks) { //(blob,extension,size) {

    // display_loader();

    var form = new FormData();
    form.append("proposal_no", window.p_proposal_number);
    form.append("reference_id", window.reference_no);
    form.append("video_data", chunk);
    form.append("chunkIndex", chunkIndex);
    form.append("totalChunks", totalChunks);
    form.append("device ", device_name);

    return new Promise(function (resolve, reject) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": api,
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
            // "timeout":45000
        }

        $.ajax(settings).done(function (response) {
            if (response != null) {
                hide_loader();
                try {
                    response_data = JSON.parse(response);
                    // alert(' JSON.parse'+response_data)
                    resolve(response_data);
                }
                catch (e) {
                    // alert(e);
                    resolve(null);
                }
            }
            else {
                reject(null);
            }
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
                // hide_loader();
                console.error("AJAX error on iOS:", textStatus, errorThrown);

                reject(errorThrown || textStatus);

            });

    });

}

async function CALL_SEND_OTP(ph_no) {
    var form = new FormData();
    form.append("sbil_key", window.link_key);
    form.append("sbil_mobile", ph_no);

    var result = await callAPI(SEND_OTP, form);
    return result;
}

async function call_ADD_CAPTURED_IMAGE(screen_type, media_append) {
    if (media_append != 'false')
        media_append = 'true';

    // var form = new FormData();
    // form.append("key", window.link_key);
    // form.append("reg_img", capturePhoto());
    // form.append("media_append", media_append);
    // form.append("lat", latitude_value);
    // form.append("long", longitude_value);
    // form.append("loc", window.address);
    // form.append("lang", sysLang);
    // form.append("scrn", screen_type);

    var obj = new Object();
    obj.key = window.link_key;
    obj.reg_img = capturePhoto();
    // obj.media_append = media_append_value;
    obj.lat = latitude_value;
    obj.long = longitude_value;
    obj.loc = window.address;
    obj.lang = sysLang;
    obj.scrn = screen_type;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(ADD_CAPTURED_IMAGE, jsonString);
    return result;
}

async function call_ADD_CAPTURED_SCREENSHOT(screen_type, plugin_type) {

    if (plugin_type == 1) {
        // var form = new FormData();
        // form.append("screen_img", getScreenImgDataURL());
        // form.append("key", window.link_key);
        // form.append("media_append", true);
        // form.append("lat", latitude_value);
        // form.append("long", longitude_value);
        // form.append("loc", window.address);
        // form.append("lang", sysLang);
        // form.append("scrn", screen_type);

        var obj = new Object();
        obj.screen_img = getScreenImgDataURL();
        obj.key = window.link_key;
        obj.media_append = true;
        obj.lat = latitude_value;
        obj.long = longitude_value;
        obj.loc = window.address;
        obj.lang = sysLang;
        obj.scrn = screen_type;

        var jsonString = JSON.stringify(obj);

        var result = await callAPI(ADD_CAPTURED_SCREENSHOT, jsonString);
        return result;
    }
    else if (plugin_type == 2) {
        if (checkIOS() == 0) {
            domtoimage.toJpeg(document.body, { quality: 0.5 }).then(function (dataUrl) {

                // var form = new FormData();
                // form.append("screen_img", dataUrl);
                // form.append("key", window.link_key);
                // form.append("media_append", "true");
                // form.append("lat", latitude_value);
                // form.append("long", longitude_value);
                // form.append("loc", window.address);
                // form.append("lang", sysLang);
                // form.append("scrn", screen_type);

                // var result = callAPI(ADD_CAPTURED_SCREENSHOT, form);

                var obj = new Object();
                obj.screen_img = dataUrl;
                obj.key = window.link_key;
                obj.media_append = "true";
                obj.lat = latitude_value;
                obj.long = longitude_value;
                obj.loc = window.address;
                obj.lang = sysLang;
                obj.scrn = screen_type;

                var jsonString = JSON.stringify(obj);

                var result = callAPI(ADD_CAPTURED_SCREENSHOT, jsonString);

            });
        }
        else {
            html2canvas(document.body).then(function (canvas) {

                // var form = new FormData();
                // form.append("screen_img", canvas.toDataURL('image/jpeg', 0.2));
                // form.append("key", window.link_key);
                // form.append("media_append", true);
                // form.append("lat", latitude_value);
                // form.append("long", longitude_value);
                // form.append("loc", window.address);
                // form.append("lang", sysLang);
                // form.append("scrn", screen_type);

                var obj = new Object();
                obj.screen_img = canvas.toDataURL('image/jpeg', 0.2);
                obj.key = window.link_key;
                obj.media_append = true;
                obj.lat = latitude_value;
                obj.long = longitude_value;
                obj.loc = window.address;
                obj.lang = sysLang;
                obj.scrn = screen_type;

                var jsonString = JSON.stringify(obj);

                var result = callAPI(ADD_CAPTURED_SCREENSHOT, jsonString);

            });
        }

    }

}

async function call_ADD_CONSENT_IMAGE(screen_type, media_append) {
    if (media_append != 'false')
        media_append = 'true';

    // var form = new FormData();
    // form.append("sbil_consent_img", capturePhoto());
    // form.append("sbil_key", window.link_key);
    // form.append("sbil_media_append", media_append);
    // form.append("sbil_lat", latitude_value);
    // form.append("sbil_long", longitude_value);
    // form.append("sbil_loc", window.address);
    // form.append("sbil_scrn", screen_type);
    // form.append("sbil_lang", sysLang);

    var obj = new Object();
    obj.sbil_consent_img = capturePhoto();
    obj.sbil_key = window.link_key;
    obj.sbil_media_append = media_append;
    obj.sbil_lat = latitude_value;
    obj.sbil_long = longitude_value;
    obj.sbil_loc = window.address;
    obj.sbil_scrn = screen_type;
    obj.sbil_lang = sysLang;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(ADD_CONSENT_IMAGE, jsonString);
    return result;
}

async function call_UPDATE_LINK_RESPONSE(ckey, cpage, castatus) {
    // var form = new FormData();
    // form.append("anur_pivc_key", window.link_key);
    // form.append("anur_pivc_ckey", ckey);
    // form.append("anur_pivc_cpage", cpage);
    // form.append("anur_pivc_castatus", castatus);

    var obj = new Object();
    obj.anur_pivc_key = window.link_key;
    obj.anur_pivc_ckey = ckey;
    obj.anur_pivc_cpage = cpage;
    obj.anur_pivc_castatus = castatus;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(UPDATE_LINK_RESPONSE, jsonString);
    return result;
}

async function call_UPDATE_DISAGREE_STATS(disagree_status, disagree_stats) {
    // var form = new FormData();
    // form.append("proposal_no", window.res_params.PROPOSAL_NUMBER);
    // form.append("reference_id", window.res_params.reference_no);
    // form.append("disagree_status", disagree_status);
    // form.append("disagree_stats", disagree_stats);

    var obj = new Object();
    obj.proposal_no = window.res_params.PROPOSAL_NUMBER;
    obj.reference_id = window.res_params.reference_no;
    obj.disagree_status = disagree_status;
    obj.disagree_stats = disagree_stats;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(UPDATE_DISAGREE_STATS, jsonString);
    return result;
}

async function call_UPDATE_FEEDBACK_RESPONSE(name, quest1, quest2, quest3, quest4, quest5) {
    // var form = new FormData();
    // form.append("proposal_no", window.res_params.PROPOSAL_NUMBER);
    // form.append("feedbackscr_name", name);
    // form.append("feedback_questions_1", quest1);
    // form.append("feedback_questions_2", quest2);
    // form.append("feedback_questions_3", quest3);
    // form.append("feedback_questions_4", quest4);
    // form.append("feedback_questions_5", quest5);

    var obj = new Object();
    obj.proposal_no = window.res_params.PROPOSAL_NUMBER;
    obj.feedbackscr_name = name;
    obj.feedback_questions_1 = quest1;
    obj.feedback_questions_2 = quest2;
    obj.feedback_questions_3 = quest3;
    obj.feedback_questions_4 = quest4;
    obj.feedback_questions_5 = quest5;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(UPDATE_FEEDBACK_RESPONSE, jsonString);
    return result;
}

async function call_UPDATE_THANKYOU_COMMENT(comment) {
    // var form = new FormData();
    // form.append("proposal", window.res_params.PROPOSAL_NUMBER);
    // form.append("comment", comment);

    var obj = new Object();
    obj.proposal = window.res_params.PROPOSAL_NUMBER;
    obj.comment = comment;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(UPDATE_THANKYOU_COMMENT, jsonString);
    return result;
}

async function call_UPDATE_EDIT_LINK_RESPONSE(ekey, epage, edata) {
    // disagreement_status = true;
    // var form = new FormData();
    // form.append("anur_pivc_key", window.link_key);
    // form.append("anur_pivc_ekey", ekey);
    // form.append("anur_pivc_epage", epage);
    // form.append("anur_pivc_edata", edata);

    const obj = {
        anur_pivc_key: window.link_key,
        anur_pivc_ekey: ekey,
        anur_pivc_epage: epage,
        anur_pivc_edata: edata
    };

    const jsonString = JSON.stringify(obj);

    const result = await callAPI(UPDATE_EDIT_LINK_RESPONSE, jsonString);
    return result;
}

async function call_MEDICAL_QUESTIONS(ques1, ques2, ques3, dropdown1_smoke, dropdown1_quantity, dropdown1_frequency, dropdown2_alcohal, dropdown2_quantity, dropdown2_frequency) {
    // var form = new FormData();
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);
    // form.append("medical_questions_1", ques1);
    // form.append("medical_questions_2", ques2);
    // form.append("medical_questions_3", ques3);
    // form.append("mq1_smoke", dropdown1_smoke);
    // form.append("mq1_quantity", dropdown1_quantity);
    // form.append("mq1_frequency", dropdown1_frequency);
    // form.append("mq2_alcohal", dropdown2_alcohal);
    // form.append("mq2_quantity", dropdown2_quantity);
    // form.append("mq2_frequency", dropdown2_frequency);

    var obj = new Object();
    obj.proposal_no = window.p_proposal_number;
    obj.reference_id = window.reference_no;
    obj.medical_questions_1 = ques1;
    obj.medical_questions_2 = ques2;
    obj.medical_questions_3 = ques3;
    obj.mq1_smoke = dropdown1_smoke;
    obj.mq1_quantity = dropdown1_quantity;
    obj.mq1_frequency = dropdown1_frequency;
    obj.mq2_alcohal = dropdown2_alcohal;
    obj.mq2_quantity = dropdown2_quantity;
    obj.mq2_frequency = dropdown2_frequency;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(MEDICAL_QUESTIONS, jsonString);
    return result;
}

async function call_ID_CARD(data, type) {

    var obj = new Object();
    obj.proposal_no = window.p_proposal_number;
    obj.reference_id = window.reference_no;
    obj.name = window.p_customer_name;
    obj.dob = window.p_dob;
    obj.id_card = data;
    obj.img_type = type;
    var jsonString = JSON.stringify(obj);

    // var form = new FormData();
    // form.append("id_card", data);
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);

    var result = await callAPI_without_loader(ID_CARD_UPLOADER, jsonString);
    return result;
}

async function call_PHOTO_UPLOADER() {
    // var form = new FormData();
    // form.append("take_photo", capturePhoto());
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);

    var obj = new Object();
    obj.take_photo = capturePhoto();
    obj.proposal_no = window.p_proposal_number;
    obj.reference_id = window.reference_no;

    var jsonString = JSON.stringify(obj);
    var result = await callAPI_without_loader(PHOTO_UPLOADER, jsonString);
    return result;
}

async function call_LANG_UPDATE_NUMBER() {
    var form = new FormData();
    var result = await callAPI(LANG_UPDATE_NUMBER, form);
}

async function call_UPDATE_COMPLETE_STATUS() {
    // var form = new FormData();
    // form.append("proposal_no", window.proposal_no);
    // form.append("reference_id", window.reference_no);
    // form.append("disagree_status", disagree_status);

    var obj = new Object();
    obj.proposal_no = window.proposal_no;
    obj.reference_id = window.reference_no;
    obj.disagree_status = disagree_status;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(UPDATE_COMPLETE_STATUS, jsonString);
}

async function call_UPDATE_DISAGREE_STATUS() {
    // var form = new FormData();
    // form.append("sbil_key", window.link_key);
    // form.append("sbil_cstatus", false);

    var obj = new Object();
    obj.sbil_key = window.link_key;
    obj.sbil_cstatus = false;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(UPDATE_DISAGREE_STATUS, jsonString);
}

async function call_GEO_LOCATION_API(latitude, longitude) {
    // var form = new FormData();
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);
    // form.append("lat", latitude);
    // form.append("long", longitude);

    var obj = new Object();
    obj.proposal_no = window.p_proposal_number;
    obj.reference_id = window.reference_no;
    obj.sys_lang = window.sysLang;
    obj.lat = latitude;
    obj.long = longitude;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(GET_GEOLOCATION_ADDRESS, jsonString);

    window.product_disclaimer = result.Message.tax_desclaimer;
    window.tax_disclaimer = result.Message.product_desclaimer;
    window.address = result.Message.address;

}

async function call_DEVICE_DETAILS() {
    // var form = new FormData();
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);
    // form.append("device_name", window.device_name);
    // form.append("nettype", window.nettype);
    // form.append("netrtt", window.netrtt);
    // form.append("netdown", window.netdown);

    var obj = new Object();
    obj.proposal_no = window.p_proposal_number;
    obj.reference_id = window.reference_no;
    obj.device_name = window.device_name;
    obj.nettype = window.nettype;
    obj.netrtt = window.netrtt;
    obj.netdown = window.netdown;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI_without_loader(UPDATE_DEVICE_DETAILS, jsonString);
}

// async function call_Face_Comparision(data)
// {
//     var form = new FormData();
//     form.append("id_card", data);
//     form.append("proposal_no", window.p_proposal_number);
// form.append("reference_id", window.reference_no);
// //    alert('console');
//     var result = callAPI_without_loader(FACE_COMPARISION, form);
// }

async function call_ADD_CONSENT_VIDEO(blob, chunk, chunkIndex, totalChunks) {
    // var form = new FormData();
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);
    // form.append("device", window.device_name);
    // form.append("video_data", blob);

    // var obj = new Object();
    // obj.proposal_no = window.p_proposal_number;
    // obj.reference_id = window.reference_no;
    // obj.device = window.device_name;
    // obj.video_data = blob;
    // obj.videoChunk = chunk;
    // obj.chunkIndex = chunkIndex;
    // obj.totalChunks = totalChunks;
    // var jsonString = JSON.stringify(obj);

    var result = await api_call_without_encription(ADD_CONSENT_VIDEO, blob, chunk, chunkIndex, totalChunks);
    // alert(result +'result');
    if (result.status == true) {
        if ((chunkIndex + 1) == totalChunks) {
            // window.speech_result = speech_response_data.speech_res;
            window.speech_result = response_data.speech_res;
        }
    }
    return window.result;
}

async function CALL_VIDEO_LOG(message) {

    var obj = new Object();
    obj.reference_id = window.proposal_no;
    obj.message = message;

    var jsonString = JSON.stringify(obj);
    var result = await callAPI(CALL_VIDEO_LOG_IOS, jsonString);
}

//    if (response_data.status == "Failed") {
//         window.result = "failed";
//         goToPage(VIDEO_UPLOAD_ERROR);
//     }
// if (sysLang == 'eng' && result.status == "Failed") {
//     window.result = "failed";
//     console.log("Uploading Failed" + sysLang);
//     goToPage(10);

// }
// else {
//     window.result = "success";

// }
// return result;

//video_consent_display_proceed();



async function call_SPEECH_TO_TEXT() {
    // var form = new FormData();
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);

    var obj = new Object();
    obj.proposal_no = window.p_proposal_number;
    obj.reference_id = window.reference_no;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI_without_loader(SPEECH_TO_TEXT, jsonString);

    if (sysLang == 'eng' && result.status == "Failed") {
        window.result = "failed";
        console.log("Uploading Failed" + sysLang);
        goToPage(10);
    }
    else {

        window.speech_ref = result.Message.speech_res.ref

        window.speech_words = result.Message.speech_res.stt;

        window.score_res = result.Message.speech_res.score;

        if (result.Message.speech_res.match == true) {

            window.match_res = "Matched"
        }
        else {
            window.match_res = "Not Matched"
        }

        if (result.Message.speech_res.match == true) {
            console.log("Uploading Success");
            window.result = "success";
            goToPage(12);
        }
        else {
            console.log("Uploading Success");
            window.result = "match failed";
            goToPage(12);

        }



    }
    return window.result;
    // return result;

    //video_consent_display_proceed();
}


async function call_PERMISSION_ERROR(type, message) {
    // var form = new FormData();
    // form.append("proposal_id", window.link_key);
    // form.append("proposal_no", window.proposal_no);
    // form.append("reference_id", window.reference_no);
    // form.append("permission_type", type);
    // form.append("response", '{\"response\":\'' + message + '\'}');

    var obj = new Object();
    obj.proposal_id = window.link_key;
    obj.proposal_no = window.proposal_no;
    obj.reference_id = window.reference_no;
    obj.permission_type = type;
    obj.response = { 'response': message };

    var jsonString = JSON.stringify(obj);

    var result = await callAPI_without_loader(UPDATE_PERMISSIONS_STATUS, jsonString);
}


async function update_speech_to_text() {
    // var form = new FormData();
    // form.append("proposal_no", window.p_proposal_number);
    // form.append("reference_id", window.reference_no);

    var obj = new Object();
    obj.proposal_no = window.p_proposal_number;
    obj.reference_id = window.reference_no;

    var jsonString = JSON.stringify(obj);

    var result = await callAPI(UPDATE_SPEECH_TO_TEXT, jsonString);
    return result;
}




///////////////////////////////////////////