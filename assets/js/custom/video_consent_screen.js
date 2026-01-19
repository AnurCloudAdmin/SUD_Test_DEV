
var recordingInterval;
var record_count;
var spoof_count = 0;
var count = 0;
var record_count;
var highlightInterval;

async function BeginRecording() {

    if (getSpriteObject('camera_icon'))
        getSpriteObject('camera_icon').disableInteractive();

    getSpriteObject('face_match').alpha = 0;
    getSpriteObject('position_box').alpha = 0;
        getSpriteObject('green_box_tick').alpha = 0;
    getTextObject(window.product_language_data.video_consent_screen.liveness_checked).alpha = 0;
    getTextObject(window.product_language_data.video_consent_screen.proceed_to_record).alpha = 0;

    if (cur_scr == 10) {
        gameCanvasDisable();
    }

    count = 1;

    if (getSpriteObject('camera_icon'))
        getSpriteObject('camera_icon').alpha = 0;

    if (cur_sfx_list) {
        cur_sfx_list[0].stop();
    }

    if (getTextObject('Please read the given text below:'))
        getTextObject('Please read the given text below:').alpha = 1;

    getTextObject(window.product_language_data.video_consent_screen.message_text).alpha = 1;

    record_count = getTextObject(window.product_language_data.video_consent_screen.recording_start_text);
    record_count.alpha = 1;

    VideoRecord_Start();

    recordingInterval = setInterval(recording_process, 1000);

    typewriter(getTextObject(' ' + window.speech_script));

    if (getSpriteObject('camera_icon'))
        getSpriteObject('camera_icon').setInteractive();
}


async function recording_process() {

    if (count == 60) {  //38//18 //40
        clearInterval(recordingInterval);

        // display_loader();

        await VideoRecord_Stop();
        //hide_read_script(); 

        // console.log("video page");

        record_count.setText(window.product_language_data.video_consent_screen.recording_complete_text);

        obj_list.push(record_count);
        // await completestatus();

    }
    else {
        count = count + 1;

        record_count.setText(window.product_language_data.video_consent_screen.recording_text + ' ' + count + ' ' + window.product_language_data.video_consent_screen.seconds_text);

        if (count == 20) {
            gameCanvasEnable();
            getSpriteObject('stop').alpha = 1;
        } else if (count == 60) {
            gameCanvasEnable();
            getSpriteObject('stop').alpha = 0;
        }
    }
}


async function Videostop() {

    getSpriteObject('stop').alpha = 0;

    gameCanvasEnable();

    clearInterval(recordingInterval);

    display_loader();

    await VideoRecord_Stop();

    // console.log("video page");

    record_count.setText(window.product_language_data.video_consent_screen.recording_complete_text);

    obj_list.push(record_count);

}

//   async function recording_process() {

//     const totalDuration = 25; 

//     let remainingTime = totalDuration - count;

//     if (count == totalDuration) { 
//         clearInterval(recordingInterval);

//         display_loader();

//         await VideoRecord_Stop();

//         console.log("video page");

//         record_count.setText("Recording Complete");

//         obj_list.push(record_count);

//     } else {
//         count = count + 1; // Increment count for the main logic to track elapsed time

//         // Display the *remaining* time
//         record_count.setText("Recording" + ' ' + (totalDuration - count) + ' ' + "Seconds Remaining");

//         if (count == 10) {
//             getSpriteObject('stop').alpha = 1;
//         }
//     }
// }

var highlight_count = 0;
var highlight_script_array;
var highlight_final_script;

function highlight_script() {

    if (highlight_script_array == null) {
        highlight_script_array = window.speech_script.split(' ');
    }

    if (getTextObject(highlight_final_script) != null) {
        getTextObject(highlight_final_script).alpha = 0;
        getTextObject(highlight_final_script).destroy();
    }
    else if (getTextObject(window.speech_script) != null) {
        getTextObject(window.speech_script).alpha = 0;
        getTextObject(window.speech_script).destroy();
    }

    highlight_final_script = '';

    for (var i = 0; i < highlight_script_array.length; i++) {
        if (i == highlight_count) {
            highlight_final_script += ' [b][color=red]' + highlight_script_array[i] + '[/color][/b]';
        }
        else {
            highlight_final_script += ' ' + highlight_script_array[i];
        }
    }

    //alert(highlight_final_script);
    var new_text = addTextToGameH(" " + highlight_final_script, 540, 1330, fontFamilyLangArr[sysLang], "39px", "#00000", "left", 950, 0.5, 0, false);
    obj_list.push(new_text);

    highlight_count++;
}



async function nextpage() {
    if (response_data.Message.speech_res.match == false) {

        record_count.alpha = 0;

        if (getSpriteObject('next_btn'))
            getSpriteObject('next_btn').alpha = 0;

        if (getTextObject(window.product_language_data.video_consent_screen.recording_complete_text))
            getTextObject(window.product_language_data.video_consent_screen.recording_complete_text).alpha = 0

        if (getTextObject('Please read the given text below:'))
            getTextObject('Please read the given text below:').alpha = 0

        if (getTextObject('Silakan baca teks yang diberikan di bawah ini:'))
            getTextObject('Silakan baca teks yang diberikan di bawah ini:').alpha = 0

        if (getTextObject('Please read the above declaration statement correctly.'))
            getTextObject('Please read the above declaration statement correctly.').alpha = 1

        if (getSpriteObject('camera_icon'))
            getSpriteObject('camera_icon').alpha = 1;

        record_count.setText(window.product_language_data.video_consent_screen.recording_start_text);

    } else {
        goToPage(12)
        await completestatus();

    }
}

function pagecomplete() {

    goToPage(12);
    completestatus();
}

var response_pdf;
async function completestatus() {

    display_loader();

    var form = new FormData();
    form.append("proposal_no", window.proposal_no);

    var settings = {
        // "url": "https://dev1.anurcloud.com/anur_pivc/portal/public/api/CompleteStatus",
        "url": "https://dev1.anurcloud.com/kotak_pivc/portal/public/api/CompleteStatus",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (res) {

        response_pdf = JSON.parse(res);
        //   alert(response_pdf);
        if (response_pdf.Status == true) {
            hide_loader();
            goToPage(12);
        }
        return response_pdf;

    });
}


var response_pdf;
async function Fixedcompletestatus() {

    display_loader();

    var form = new FormData();
    form.append("proposal_no", '123789');

    var settings = {
        // "url": "https://dev1.anurcloud.com/anur_pivc/portal/public/api/CompleteStatus",
        "url": "https://dev1.anurcloud.com/kotak_pivc/portal/public/api/Fixed_CompleteStatus",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (res) {

        response_pdf = JSON.parse(res);
        //   alert(response_pdf);
        if (response_pdf.Status == true) {
            hide_loader();
            goToPage(12);
        }
        return response_pdf;

    });
}

function openpdf() {
    //open_url(response_pdf.Message.pdf);
    open_url('https://dev1.anurcloud.com/kotak_pivc/portal/public/api/completed_status_pdf/' + window.res_params.PROPOSAL_NUMBER);
}


function thamkyou_comment_style() {
    getInputObject('in_comment').setStyle('border', '5px solid #1E4679');
}

async function thankyou_response() {
    hide_loader();
    if (getInputObject('in_comment').text != '') {
        popup_thankyou('thankyou_popup', 540);
    } else {
        getInputObject('in_comment').setStyle('border', '5px solid #ff0000');
        getInputObject('in_comment').placeholder = 'Please give a comment.';
    }
    await call_UPDATE_THANKYOU_COMMENT(getInputObject('in_comment').text);
    getInputObject('in_comment').on('textchange', function (inputText, e) {
        if (inputText.text.length > 0) {
            getInputObject('in_comment').setStyle('border', '4px solid #1E4679');
        }
    });
}

function clickSubmit() {
    closepopup_thankyou('thankyou_popup', 540);
}

function load_video_consent_screen() {
    setTextValue('PROPOSAL_NO', window.product_language_data.video_consent_screen.proposal_number);
    setTextValue('SCREEN_NAME', window.product_language_data.video_consent_screen.screen_name);
    setTextValue('CONTENT', window.product_language_data.video_consent_screen.content);
    setTextValue('DETECTION_TEXT', window.product_language_data.video_consent_screen.detections_txt);
    setTextValue('LIVENESS_ERROR_TEXT', window.product_language_data.video_consent_screen.livenes_error);
    setTextValue('SMILE_ERROR_TEXT', window.product_language_data.video_consent_screen.smile_error);
    setTextValue('COME_CLOSER_TXT', window.product_language_data.video_consent_screen.come_closer_txt);
    setTextValue('MESSAGE_TEXT', window.product_language_data.video_consent_screen.message_text);
    setTextValue('POPUP_TEXT', window.product_language_data.video_consent_screen.popup_text);
    setTextValue('RECORDING_START_TEXT', window.product_language_data.video_consent_screen.recording_start_text);
    setTextValue('RECORDING_COMPLETE_TEXT', window.product_language_data.video_consent_screen.recording_complete_text);
    setTextValue('RECORDING_TEXT', window.product_language_data.video_consent_screen.recording_text);
    setTextValue('SECONDS_TEXT', window.product_language_data.video_consent_screen.seconds_text);
    setTextValue('POSITION_TEXT', window.product_language_data.video_consent_screen.position_text);
    setTextValue('LIVENESS_CHECK', window.product_language_data.video_consent_screen.liveness_check);
    setTextValue('LIVENESS_CHECKED', window.product_language_data.video_consent_screen.liveness_checked);
    setTextValue('MULTI_FACE_DETECTED', window.product_language_data.video_consent_screen.multi_face);
    setTextValue('PROCEED_TO_RECORD', window.product_language_data.video_consent_screen.proceed_to_record);
    setTextValue('RECORDING_IS_COMPLETE', window.product_language_data.video_consent_screen.recording_is_complete);
    setTextValue('FACE_MATCH_TXT', window.product_language_data.video_consent_screen.face_match_txt);
    setTextValue('TRY_AGAIN_TXT', window.product_language_data.video_consent_screen.try_again_txt);
    setTextValue('NEXT_BTN', window.product_language_data.video_consent_screen.next_btn);


}
