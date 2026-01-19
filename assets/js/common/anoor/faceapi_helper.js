async function LoadFaceModels(path) {
    await faceapi.loadTinyFaceDetectorModel(path + '/tiny_face_detector_model-weights_manifest');
    await faceapi.loadFaceLandmarkTinyModel(path + '/face_landmark_68_tiny_model-weights_manifest');
    await faceapi.loadFaceExpressionModel(path + '/face_expression_model-weights_manifest');
    await faceapi.loadSsdMobilenetv1Model(path + '/ssd_mobilenetv1_model-weights_manifest');

}

var intervalFaceDetectCam;

function beginFaceDetect(withLiveness, face_tick, smile_tick, record) {

    isFaceDetected = false;
    isSmileDetected = false;

    createOverlayCanvas();

    intervalFaceDetectCam = setInterval(function () {
        faceDetectEnable(withLiveness, face_tick, smile_tick, record);
    }, 750); //500
}

var isFaceDetected = false;
var isSmileDetected = false;
var multifacecount = 0;
var face_detected_count = 0;
var face_capture_flag = true;

async function faceDetectEnable(withLiveness, face_tick, smile_tick, record) {

    if (webcam_canvas != null) {
        const options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 128,
            scoreThreshold: 0.3
        })
        var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();

        if (result && result.length > 1) {
            multifacecount++;

            // if (multifacecount >= 3) {
            multifacecount = 0;

            showMultiFaceDetected();
            isFaceDetected = false;
            if (getSpriteObject(face_tick))
                getSpriteObject(face_tick).setAlpha(0);
            // getSpriteObject('proceed_btn').setAlpha(0);
            // getTextObject('NEXT').setAlpha(0);
            getSpriteObject('multi_face_detected').setAlpha(1); //changes

            // }


        } else if (result && result.length == 1) {

            face_detected_count++;
            faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
            faceapi.draw.drawDetections(overlay_canvas.canvas, result);
            hideNoFaceDetected();
            if (face_detected_count >= 2) {
                face_detected_count = 0;

                //console.log(result);

                hideMultiFaceDetected();
                // start_photo_detections_1();

                isFaceDetected = true;
                // showMultiFaceDetected();

                if (getSpriteObject(face_tick))
                    getSpriteObject(face_tick).setAlpha(1);
                getSpriteObject('multi_face_detected').setAlpha(0); //changes



                if (cur_screen_name == 'Video Consent Screen') {
                    withLiveness = true;
                } else {
                    withLiveness = false;
                }

                if (withLiveness) {

                    if (result[0].expressions.happy > 0.5) {

                        if (cur_screen_name == 'Video Consent Screen') {
                            var response_data = await call_spoof_api();
                            if (response_data.comparision == false) {
                                showPhotographerror();

                                setTimeout(function () {

                                    if (photograph_error != null) {
                                        photograph_error.alpha = 0;
                                        // photograph_error=null;
                                    }
                                }, 3000);
                            }

                            if (response_data.comparision == true) {
                                hidephotographerror();
                                $.ajax().abort(function (response) { });
                                if (getSpriteObject(smile_tick))
                                    getSpriteObject(smile_tick).setAlpha(1);

                                isSmileDetected = true;

                                stopfaceDetect();
                                video_consent_validation();
                            }

                        } else {

                            if (getSpriteObject(smile_tick))
                                getSpriteObject(smile_tick).setAlpha(1);

                            isSmileDetected = true;

                            stopfaceDetect();
                            video_consent_validation();
                        }

                    } else {
                        isSmileDetected = false;
                    }
                }
                else {
                    stopfaceDetect();
                }
            }

        } else {
            showNoFaceDetected();
            isFaceDetected = false;
            if (getSpriteObject(face_tick))
                getSpriteObject(face_tick).setAlpha(0);
        }
    }
}

function stopfaceDetect() {
    clearInterval(intervalFaceDetectCam);
    clearOverlayCanvas();

}



// var intervalFaceDetectCam;

// var isFaceDetected = false;
// var isSmileDetected = false;
// var multifacecount = 0;
// var face_detected_count = 0;

// function beginFaceDetect(withLiveness, face_tick, smile_tick, record) {

//     isFaceDetected = false;
//     isSmileDetected = false;
//     multifacecount = 0;
//     face_detected_count = 0;

//     createOverlayCanvas();

//     intervalFaceDetectCam = setInterval(() => {
//         faceDetectEnable(withLiveness, face_tick, smile_tick, record);
//     }, 700);
// }

// async function faceDetectEnable(withLiveness, face_tick, smile_tick, record) {

//     if (!webcam_canvas) return;

//     const options = new faceapi.TinyFaceDetectorOptions({
//         inputSize: 160,
//         scoreThreshold: 0.35  
//     });

//     const result = await faceapi
//         .detectAllFaces(webcam_canvas.canvas, options)
//         .withFaceLandmarks(true)
//         .withFaceExpressions();

//     const faceCount = result ? result.length : 0;

//     // ----------------------------------------------------------
//     // 1️⃣ NO FACE FOUND
//     // ----------------------------------------------------------
//     if (faceCount === 0) {
//         showNoFaceDetected();
//         hideMultiFaceDetected();

//         isFaceDetected = false;
//         if (getSpriteObject(face_tick)) getSpriteObject(face_tick).setAlpha(0);

//         return;
//     }

//     // ----------------------------------------------------------
//     // 2️⃣ MULTI FACE FOUND
//     // ----------------------------------------------------------
//     if (faceCount > 1) {
//         multifacecount++;

//         if (multifacecount >= 2) {
//             multifacecount = 0;
//             showMultiFaceDetected();
//             hideNoFaceDetected();

//             isFaceDetected = false;
//             if (getSpriteObject(face_tick)) getSpriteObject(face_tick).setAlpha(0);

//             getSpriteObject('multi_face_detected').setAlpha(1);
//         }
//         return;
//     }

//     // ----------------------------------------------------------
//     // 3️⃣ EXACTLY ONE FACE – VALID FACE FOUND
//     // ----------------------------------------------------------
//     if (faceCount === 1) {

//         face_detected_count++;

//         // Draw detection box on overlay
//         faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
//         faceapi.draw.drawDetections(overlay_canvas.canvas, result);

//         hideNoFaceDetected();
//         hideMultiFaceDetected();
//         getSpriteObject('multi_face_detected').setAlpha(0);

//         // Need 2 continuous detections to confirm
//         if (face_detected_count < 2) return;

//         face_detected_count = 0;
//         isFaceDetected = true;

//         if (getSpriteObject(face_tick)) getSpriteObject(face_tick).setAlpha(1);

//         // ----------------------------------------------------------
//         // 4️⃣ IF LIVENESS REQUIRED → Check SMILE
//         // ----------------------------------------------------------
//         if (withLiveness) {

//             let happyValue = result[0].expressions.happy;

//             if (happyValue > 0.5) {

//                 if (getSpriteObject(smile_tick))
//                     getSpriteObject(smile_tick).setAlpha(1);

//                 isSmileDetected = true;

//                 stopfaceDetect();
//                 video_consent_validation();
//                 return;

//             } else {
//                 isSmileDetected = false;
//                 return;
//             }
//         }

//         // ----------------------------------------------------------
//         // 5️⃣ NO LIVENESS → Directly Stop detection
//         // ----------------------------------------------------------
//         stopfaceDetect();
//         return;
//     }
// }

// function stopfaceDetect() {
//     clearInterval(intervalFaceDetectCam);
//     clearOverlayCanvas();
// }


function showMultiFaceDetected() {

    if (cur_screen_name == 'Video Consent Screen') {
        hide_detections_complete();

        if (getSpriteObject('multiface_bright'))
            getSpriteObject('multiface_bright').alpha = 1;

    } else {
        if (getSpriteObject('multi_face_detected'))
            getSpriteObject('multi_face_detected').alpha = 1;
    }
}

function hideMultiFaceDetected() {

    if (cur_screen_name == 'Video Consent Screen') {
        if (getSpriteObject('multiface_bright'))
            getSpriteObject('multiface_bright').alpha = 0;
    } else {
        if (getSpriteObject('multi_face_detected'))
            getSpriteObject('multi_face_detected').alpha = 0;
    }
}


function showlighterror() {

    if (getSpriteObject('light_error'))
        getSpriteObject('light_error').alpha = 1;
    isFaceDetected = false;
    isSmileDetected = false;
    if (getSpriteObject('facedetection_bright'))
        getSpriteObject('facedetection_bright').setAlpha(0);
    if (getSpriteObject('smiledetection_bright'))
        getSpriteObject('smiledetection_bright').setAlpha(0);
    if (overlay_canvas != null) {
        clearOverlayCanvas();
    }
    againfacedetection();

}

function hidelighterror() {

    if (getSpriteObject('light_error'))
        getSpriteObject('light_error').alpha = 0;
    /*if(overlay_canvas!= null){
        clearOverlayCanvas();
    }
    if(((getSpriteObject('lightdetection_bright').alpha == 1) && (isFaceDetected == false && isSmileDetected == false))){
       againfacedetection();
    }*/

}


var photograph_error;

function showPhotographerror() {

    if (cur_screen_name == 'Video Consent Screen') {
        if (photograph_error == null) {
            photograph_error = game.add.sprite(450, 390, 'spoofdetection_bright');
            photograph_error.setDepth(7);
            photograph_error.setOrigin(0.5, 0.5);
        } else {
            photograph_error.alpha = 1;
        }
    } else {
        if (photograph_error == null) {
            photograph_error = game.add.sprite(840, 400, 'photograph_error');
            photograph_error.setDepth(7);
            photograph_error.setOrigin(0.5, 0.5);
        } else {
            photograph_error.alpha = 1;
        }
    }

}

function hidephotographerror() {

    if (photograph_error != null)
        photograph_error.alpha = 0;
}

function showNoFaceDetected() {

    if (cur_screen_name == 'Video Consent Screen') {
        if (getSpriteObject('nofacedetection_bright'))
            getSpriteObject('nofacedetection_bright').alpha = 1;
    } else {
        if (getSpriteObject('no_face_detected'))
            getSpriteObject('no_face_detected').alpha = 1;
    }
}

function hideNoFaceDetected() {
    if (cur_screen_name == 'Video Consent Screen') {
        if (getSpriteObject('nofacedetection_bright'))
            getSpriteObject('nofacedetection_bright').alpha = 0;
    } else {
        if (getSpriteObject('no_face_detected'))
            getSpriteObject('no_face_detected').alpha = 0;
    }
}

async function facedetect_single_frame() {
    hideNoFaceDetected();
    hideMultiFaceDetected();
    hidelighterror();
    //hidephotographerror();

    if (isSmileDetected == true) {

        if (webcam_canvas != null) {
            const options = new faceapi.TinyFaceDetectorOptions({
                inputSize: 128,
                scoreThreshold: 0.3
            });

            var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options);

            if (result && result.length > 1) {

                showMultiFaceDetected();
                return false;

            } else if (result && result.length == 1) {
                //checkBrightness();
                var response_data = await call_spoof_api();
                if (response_data.comparision == false) {
                    showPhotographerror();
                    setTimeout(function () {
                        if (photograph_error != null)
                            photograph_error.alpha = 0;
                    }, 3000);
                }

                if (response_data.comparision == true) {
                    return true;
                    hidePhotographerror();
                } else {
                    return false;
                }

                return true;
            } else {
                showNoFaceDetected();
                return false;
            }
        } else
            return false;
    } else
        return false;


}

const minScore = 0.2; // minimum score
const maxResults = 5; // maximum number of results to return
let optionsSSDMobileNet;

async function facedetect_frame() {
    hideNoFaceDetected();
    hideMultiFaceDetected();

    if (isFaceDetected == true) {

        if (webcam_canvas != null) {
            // const options = new faceapi.TinyFaceDetectorOptions({
            //     inputSize: 128,
            //     scoreThreshold: 0.2
            // });
            optionsSSDMobileNet = new faceapi.SsdMobilenetv1Options({ minConfidence: minScore, maxResults });

            var result = await faceapi.detectAllFaces(webcam_canvas.canvas, optionsSSDMobileNet);

            if (result && result.length > 1) {
                showMultiFaceDetected();
                return false;

            } else if (result && result.length == 1) {
                return true;
            } else {
                showNoFaceDetected();
                return false;
            }
        } else
            return false;
    } else
        return false;


}


function video_consent_validation() {
    if (cur_screen_name == 'Video Consent Screen') {
        if (getSpriteObject('camera_icon'))
            getSpriteObject('camera_icon').alpha = 1;
    }
}

function hide_video_consent_validation() {
    if (cur_screen_name == 'Video Consent Screen') {
        if (getSpriteObject('camera_icon'))
            getSpriteObject('camera_icon').alpha = 0;
    }
}

async function call_spoof_api() {

    var base64_image = webcam_canvas.canvas.toDataURL();
    base64_image = base64_image.replace("data:image/png;base64,", "");

    return new Promise(function (resolve, reject) {
        var settings = {
            "url": "./assets/scripts/liveness.php",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },

            "data": JSON.stringify({
                "proposal_no": window.proposal_no,
                "reference_id": window.reference_id,
                "image_base64": base64_image
            }),
        };

        $.ajax(settings).done(function (response) {

            if (response != null) {
                response_data = JSON.parse(response);
                resolve(response_data);
            } else
                reject(null);

        });
    });

}

var isBright = false;
//var intervalBrightnessCheck; reference_id

function beginBrightnessCheck() {
    intervalFaceDetectCam = setInterval(checkBrightness_instance, 1000);

}

async function checkBrightness_instance() {
    var isBright = await checkBrightness();

    if (isBright == true) {
        getSpriteObject('lightdetection_bright').alpha = 1;
        hidelighterror();

    } else {
        getSpriteObject('lightdetection_bright').alpha = 0;
        showlighterror();
    }
}



function beginfacedetection(withLiveness, face_tick, smile_tick, record) {
    //console.log("Starting Face Detection");

    isFaceDetected = false;
    isSmileDetected = false;

    createOverlayCanvas();

    intervalFaceDetectCam = setInterval(function () {
        facedetect(withLiveness, face_tick, smile_tick, record);
    }, 500);
}

async function facedetect(withLiveness, face_tick, smile_tick, record) {
    if (webcam_canvas != null) {
        const options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 128,
            scoreThreshold: 0.3
        })
        var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();

        if (result && result.length > 1) {
            multifacecount++;

            // if (multifacecount >= 5) {
            multifacecount = 0;

            showMultiFaceDetected();

            isFaceDetected = false;
            isSmileDetected = false;
            if (getSpriteObject(face_tick))
                getSpriteObject(face_tick).setAlpha(0);
            if (getSpriteObject(smile_tick))
                getSpriteObject(smile_tick).setAlpha(0);
            // }
        } else if (result && result.length == 1) {
            hideNoFaceDetected();
            if (getSpriteObject('lightdetection_bright').alpha === 1) {
                face_detected_count++;
                faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
                faceapi.draw.drawDetections(overlay_canvas.canvas, result);
                if (face_detected_count >= 2) {
                    face_detected_count = 0;
                    hideMultiFaceDetected();
                    isFaceDetected = true;

                    if (getSpriteObject(face_tick))
                        getSpriteObject(face_tick).setAlpha(1);

                    withLiveness = true;

                    if (withLiveness) {

                        if (result[0].expressions.happy > 0.5) {

                            var response_data = await call_spoof_api();
                            if (response_data.comparision == false) {
                                showPhotographerror();
                                if (getSpriteObject(smile_tick))
                                    getSpriteObject(smile_tick).setAlpha(0);

                                setTimeout(function () {

                                    if (photograph_error != null) {
                                        photograph_error.alpha = 0;
                                    }

                                }, 3000);

                            }

                            if (response_data.comparision == true) {
                                hidephotographerror();
                                $.ajax().abort(function (response) { });
                                //console.log("Face Comparison True");
                                if (getSpriteObject(smile_tick))
                                    getSpriteObject(smile_tick).setAlpha(1);

                                isSmileDetected = true;
                                stopfaceDetect();
                                video_consent_validation();

                            }

                        } else {
                            isSmileDetected = false;
                            hide_video_consent_validation();
                        }

                    } else {
                        stopfaceDetect();
                    }

                }
            } else {

            }
        } else {
            //finalfacedetection();
            showNoFaceDetected();
            isFaceDetected = false;
            isSmileDetected = false;
            if (getSpriteObject('facedetection_bright'))
                getSpriteObject('facedetection_bright').setAlpha(0);
            if (getSpriteObject('smiledetection_bright'))
                getSpriteObject('smiledetection_bright').setAlpha(0);
        }
    }
}


function againfacedetection() {
    if (isFaceDetected == false && isSmileDetected == false) {
        hide_video_consent_validation();
        beginfacedetection(true, 'facedetection_bright', 'smiledetection_bright', null);

    } else if ((getSpriteObject('lightdetection_bright').alpha == 1) && (isFaceDetected == false || isSmileDetected == false)) {
        beginfacedetection(true, 'facedetection_bright', 'smiledetection_bright', null);
    } else {
        return false;
    }
}


async function finalfacedetection() {

    if (((getSpriteObject('camera_icon').active == true) && (getSpriteObject('lightdetection_bright').active == true))) {
        //alert("HG");
        if ((isFaceDetected == false || isSmileDetected == false)) {
            //alert("PG");
            beginfacedetection(true, 'facedetection_bright', 'smiledetection_bright', null);
        }
    }
}


//Changes By M

var isFaceDetected = false;
var isSmileDetected = false;
var isLivenessDetected = false;
var multifacecount = 0;
var face_detected_count = 0;
var isLightDetected = false;
var canCallSpoof = true;
var liveness_failure_count = 0;

var face_detect_interval;

function set_all_face_parameters_to_default() {
    isFaceDetected = false;
    isSmileDetected = false;
    isLivenessDetected = false;
    multifacecount = 0;
    face_detected_count = 0;
    isLightDetected = false;
    liveness_failure_count = 0;
}

function stop_detections() {
    if (face_detect_interval)
        clearInterval(face_detect_interval);

    if (overlay_canvas)
        clearOverlayCanvas();
}

function restart_video_consent() {

}

function hideall_sprites() {
    if (getSpriteObject("facedetection_bright")) {
        getSpriteObject("facedetection_bright").alpha = 0
    }

    if (getSpriteObject("smiledetection_bright")) {
        getSpriteObject("smiledetection_bright").alpha = 0
    }

    if (getSpriteObject("spoofdetection_bright")) {
        getSpriteObject("spoofdetection_bright").alpha = 0
    }

    if (getSpriteObject("nofacedetection_bright")) {
        getSpriteObject("nofacedetection_bright").alpha = 0
    }

    if (getSpriteObject("multiface_bright")) {
        getSpriteObject("multiface_bright").alpha = 0
    }

    if (getSpriteObject("lightdetection_bright")) {
        getSpriteObject("lightdetection_bright").alpha = 0
    }

    if (getSpriteObject("light_error")) {
        getSpriteObject("light_error").alpha = 0
    }
}

function start_video_recording() {

    hideall_sprites();
    display_camera_button();
    do_fade_out('consent_box');

    do_fade_out('facedetection_bright');

    do_fade_out('smiledetection_bright');

    do_fade_out('lightdetection_bright');

    hide_smile_helper();
    hide_distance_helper();


    setTimeout(function () {
        getSpriteObject('empty_consent_box').alpha = 1;
        show_detections_complete();
        hide_smile_helper();
        hideall_sprites();
        hide_distance_helper();
    }, 2000);


}

//face checking

// function start_detections() {
//     set_all_face_parameters_to_default();

//     createOverlayCanvas();

//     face_detect_interval = setInterval(function () {
//         start_face_detect();
//     }, 500);

// }


// async function start_face_detect() {
//     isLightDetected = await checkBrightness();

//     if (isLightDetected) {
//         light_detection_success();

//         //Detect Face
//         if (webcam_canvas != null) {
//             const options = new faceapi.TinyFaceDetectorOptions({
//                 inputSize: 128,
//                 scoreThreshold: 0.3
//             })
//             var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();

//             if (result != null) {
//                 if (result.length < 1) {
//                     showNoFaceDetected();
//                     hide_distance_helper();
//                     face_detection_failure();
//                 } else if (result.length > 1) {
//                     showMultiFaceDetected();
//                     hide_distance_helper();
//                     face_detection_failure();

//                     faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
//                     faceapi.draw.drawDetections(overlay_canvas.canvas, result);
//                 } else {
//                     hideNoFaceDetected();
//                     hideMultiFaceDetected();
//                     hide_distance_helper();

//                     //alert(''+result);

//                     if (result[0].alignedRect.score < 0.7) {
//                         show_distance_helper();
//                         face_detection_failure();

//                     } else {


//                         hide_distance_helper();
//                         face_detection_success();

//                         faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
//                         faceapi.draw.drawDetections(overlay_canvas.canvas, result);


//                         //Smile Detection
//                         if (result[0].expressions.happy > 0.6) {
//                             smile_detection_success();  //changes in 28.8.25

//                             if (canCallSpoof) {
//                                 canCallSpoof = false;

//                                 if (liveness_failure_count < 5) {
//                                     var response_data = await call_spoof_api();

//                                     if (response_data.comparision == false) {
//                                         liveness_failure();
//                                     } else {
//                                         liveness_success();
//                                     }
//                                 } else {
//                                     // alert('Try the Process Again');
//                                     liveness_failure_count = 0;
//                                     canCallSpoof = true;
//                                 }


//                             }
//                         }
//                         else {

//                         }


//                     }
//                 }
//             }
//         }

//     } else {
//         light_detection_failure();
//     }
// }


function light_detection_success() {
    getSpriteObject('lightdetection_bright').alpha = 1;
    getSpriteObject('light_error').alpha = 0;
}

function light_detection_failure() {
    getSpriteObject('lightdetection_bright').alpha = 0;
    getSpriteObject('light_error').alpha = 1;

    face_detection_failure();
    smile_detection_failure();
}

function face_detection_success() {
    isFaceDetected = true;
    getSpriteObject('facedetection_bright').setAlpha(1);
    show_smile_helper();
}

function face_detection_failure() {
    isFaceDetected = false;
    hide_smile_helper();
    getSpriteObject('facedetection_bright').setAlpha(0);
    smile_detection_failure();
    canCallSpoof = true;
}

function smile_detection_success() {
    isSmileDetected = true;
    getSpriteObject('smiledetection_bright').setAlpha(1);
}

function show_smile_helper() {
    if (cur_scr === 4 && window.product_language_data.photo_consent_screen.smile_error) {
        getTextObject(window.product_language_data.photo_consent_screen.smile_error).alpha = 1;
    } else if (cur_scr === 10 && window.product_language_data.video_consent_screen.smile_error) {
        getTextObject(window.product_language_data.video_consent_screen.smile_error).alpha = 1;
    }
}

function hide_smile_helper() {
    if (cur_scr === 4 && window.product_language_data.photo_consent_screen.smile_error) {
        getTextObject(window.product_language_data.photo_consent_screen.smile_error).alpha = 0;
    } else if (cur_scr === 10 && window.product_language_data.video_consent_screen.smile_error) {
        getTextObject(window.product_language_data.video_consent_screen.smile_error).alpha = 0;
    }
}

function show_distance_helper() {
    if (cur_scr === 4 && window.product_language_data.photo_consent_screen.come_closer_txt) {
        getTextObject(window.product_language_data.photo_consent_screen.come_closer_txt).alpha = 1;
    } else if (cur_scr === 10 && window.product_language_data.video_consent_screen.come_closer_txt) {
        getTextObject(window.product_language_data.video_consent_screen.come_closer_txt).alpha = 1;
    }
}

function hide_distance_helper() {
    if (cur_scr === 4 && window.product_language_data.photo_consent_screen.come_closer_txt) {
        getTextObject(window.product_language_data.photo_consent_screen.come_closer_txt).alpha = 0;
    } else if (cur_scr === 10 && window.product_language_data.video_consent_screen.come_closer_txt) {
        getTextObject(window.product_language_data.video_consent_screen.come_closer_txt).alpha = 0;
    }
}


function smile_detection_failure() {
    isSmileDetected = false;
    getSpriteObject('smiledetection_bright').setAlpha(0);
}

function liveness_success() {
    smile_detection_success();
    getSpriteObject('spoofdetection_bright').setAlpha(0);
    //alert('Live Person');
    hide_smile_helper();
    stop_detections();
    start_video_recording();

}

function liveness_failure() {
    getSpriteObject('spoofdetection_bright').setAlpha(1);
    smile_detection_failure();
    face_detection_failure();
    hide_smile_helper();
    canCallSpoof = true;
    liveness_failure_count++;
}

function display_camera_button() {
    hideall_sprites();
    getSpriteObject('camera_icon').alpha = 1;
}

function hide_camera_button() {
    getSpriteObject('camera_icon').alpha = 0;
}

function show_detections_complete() {
    getTextObject(window.product_language_data.video_consent_screen.detections_txt).alpha = 1;
}


function hide_detections_complete() {
    getTextObject(window.product_language_data.video_consent_screen.detections_txt).alpha = 0;
}

function show_record_liveness_failure() {
    getTextObject(window.product_language_data.video_consent_screen.livenes_error).alpha = 1;

}

function hide_record_liveness_failure() {
    getTextObject(window.product_language_data.video_consent_screen.livenes_error).alpha = 0;

}

function show_read_script() {
    if (sysLang == 'tel') {
        getTextObject('Silakan baca Script yang ditampilkan.').alpha = 1;
    } else {
        getTextObject('Please read the Script displayed.').alpha = 1;
    }
}

function hide_read_script() {
    if (sysLang == 'tel') {
        getTextObject('Silakan baca Script yang ditampilkan.').alpha = 0;
    } else {
        getTextObject('Please read the Script displayed.').alpha = 0;
        getTextObject('Please read the Script displayed.').alpha = 0;
    }
}

function do_fade_out(sprite) {
    // alert('do fade out');
    if (getSpriteObject(sprite) && getSpriteObject(sprite).alpha == 1) {
        //alert(sprite);
        fadeout_video(sprite, 1000);
    }
}

//Photo Consents
async function start_faceonly_detect() {
    getSpriteObject('take_photo').alpha = 0;
    getTextObject(window.product_language_data.photo_consent_screen.take_pic_txt).alpha = 0
    //Detect Face
    if (webcam_canvas != null) {
        const options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 128,
            scoreThreshold: 0.3
        })
        var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();
        if (result != null) {
            if (result.length < 1) {
                // alert("No Face Detections")
                showNoFaceDetected();
                hide_distance_photo_error();
                // photo_consent_detecction_failure();
            } else if (result.length > 1) {
                // alert("Multi Face Detections")
                showMultiFaceDetected();
                hide_distance_photo_error();
                // photo_consent_detecction_failure();
                /* faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
                faceapi.draw.drawDetections(overlay_canvas.canvas, result); */
            } else {

                hideNoFaceDetected();
                hideMultiFaceDetected();
                hide_distance_photo_error();
                //alert(''+result)
                if (result[0].alignedRect.score < 0.7) {
                    show_distance_photo_error();
                    // photo_consent_detecction_failure();
                } else {
                    // alert("Face Detection")
                    hide_distance_photo_error();
                    stop_detections();   //changes 15.06.25
                    await photo_consent_detecction_success();

                }
            }
        }
    }
}


function start_photo_detections() {
    isFaceDetected = false;
    createOverlayCanvas();
    face_detect_interval = setInterval(async function () {
        await start_faceonly_detect();
    }, 1000);
}


var response_data;
async function photo_consent_detecction_success() {
    isFaceDetected = true;
    stop_detections();
    popup_photoconsent(window.product_language_data.photo_consent_screen.face_detection, 540);

    getTextObject(window.product_language_data.photo_consent_screen.computing).alpha = 1;

    if (cur_scr == 4 && isFaceDetected == true && face_capture_flag == true) {
        face_capture_flag = false;
        // if (isFaceDetected === true) {
        response_data = await call_PHOTO_UPLOADER();
        // alert(response_data);
        window.face_score = response_data.Message.face_scre.face_score;
        if (window.face_score) {
            getTextObject(window.product_language_data.photo_consent_screen.computing).alpha = 0;
        }
        if (getTextObject(window.product_language_data.photo_consent_screen.score_text)) {
            getTextObject(window.product_language_data.photo_consent_screen.score_text).alpha = 1;
        }
        if (window.face_score <= 35) {
            popup_matchscore('score_popup', 540);
            // getSpriteObject('score_popup').alpha=1;
            getTextObject(window.product_language_data.photo_consent_screen.face_match_txt).alpha = 1;
            getTextObject(window.product_language_data.photo_consent_screen.try_again_txt).alpha = 1;

        } else {
            getSpriteObject('proceed_btn').alpha = 1;
            getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 1;
            // getSpriteObject('ticks').alpha = 1;
        }
        hide_loader();
        // }
    }
}

//Face Comparison
async function start_faceonly_detect_1() {
    isFaceDetected = true;
    var face_detection = await facedetect_frame();
    // alert(face_detection);
    if (face_detection) {
        isFaceDetected = true;
        await photo_consent_detecction_success_1();
    }

    //Detect Face
    /*  if (webcam_canvas != null) {
         const options = new faceapi.TinyFaceDetectorOptions({
             inputSize: 128,
             scoreThreshold: 0.3
         })
         var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();
         if (result != null) {
             if (result.length < 1) {
                 // alert("Face Detection")
                 showNoFaceDetected();
                 hide_distance_photo_error();
                 // photo_consent_detecction_failure();
             } else if (result.length > 1) {
                 // alert("multiface detection")
                 showMultiFaceDetected();
                 hide_distance_photo_error();
                 // photo_consent_detecction_failure();
                 faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
                 faceapi.draw.drawDetections(overlay_canvas.canvas, result);
             } else {
 
                 hideNoFaceDetected();
                 hideMultiFaceDetected();
                 hide_distance_photo_error();
                 //alert(''+result)
                 if (result[0].alignedRect.score < 0.7) {
                     show_distance_photo_error();
                     // photo_consent_detecction_failure();
                 } else {
                     hide_distance_photo_error();
                     stop_detections();   //changes 15.06.25
                      
                 }
             }
         }
     } */
}

async function start_photo_detections_1() {

    if (cur_scr == 5 || cur_scr == 7 || cur_scr == 8 || cur_scr == 9 || cur_scr == 16) {

        if (getSpriteObject('proceed_btn'))
            getSpriteObject('proceed_btn').disableInteractive();    //setTexture('gray_btn').
        pleasWait();
        await imageCapture();
        await start_faceonly_detect_1();
        pleasWait_1();
        if (getSpriteObject('proceed_btn'))
            getSpriteObject('proceed_btn').setInteractive();
    }
}

var response_data_1;

async function photo_consent_detecction_success_1() {
    isFaceDetected = true;
    stop_detections();
    // pleasWait();

    // Fix the condition
    if (cur_scr == 5 || cur_scr == 7 || cur_scr == 8 || cur_scr == 9 || cur_scr == 10 || cur_scr == 16) {   // if (cur_scr == 5 || 7 || 8 || 9 || 10) {

        if (isFaceDetected === true) {

            response_data_1 = await call_PHOTO_UPLOADER();
            // alert( window.face_score);
            window.face_score = response_data_1.Message.face_scre.face_score;

            if (window.face_score <= 35) {
                popup_matchscore('popup_facescore', 540);
                face_match_text_by_screen();
                setTimeout(() => {
                    detectionSuccessCalled = false;

                    goToPage(cur_scr);
                }, 3000);
            }
            else if (window.face_score > 35) {

                if (cur_scr == 5 || cur_scr == 7 || cur_scr == 8 || cur_scr == 9 || cur_scr == 16) {

                    await agree_status();

                }
                else if (cur_scr == 10) {
                    // alert()
                     face_detected();
                }
            }
            hide_loader();
        }
    }
}

// Display Helpers

let detectionSuccessCalled;
let multiFaceShown = false;

function start_detections() {

    detectionSuccessCalled = false;

    if (face_detect_interval) {
        clearInterval(face_detect_interval);
    }

    // set_all_face_parameters_to_default();

    createOverlayCanvas();

    face_detect_interval = setInterval(checkFaceStatus, 1000);

}

// async function checkFaceStatus() {
//     if (!webcam_canvas) {
//         no_face();
//         return;
//     }

//     const options = new faceapi.TinyFaceDetectorOptions({
//         inputSize: 224,
//         scoreThreshold: 0.2
//     });

//     const result = await faceapi
//         .detectAllFaces(webcam_canvas.canvas, options)
//         .withFaceLandmarks(true)
//         .withFaceExpressions();

//     if (!result || result.length < 1) {
//         no_face();
//     }
//     else if (result.length > 1) {
//         multi_face();
//     }
//     else {

//         if (!detectionSuccessCalled) {
//             detectionSuccessCalled = true;
//             clearInterval(face_detect_interval);
//             await photo_consent_detecction_success_1();
//         }
//     }
// }
async function checkFaceStatus() {

    if (!webcam_canvas) {
        no_face();
        return;
    }

    const options = new faceapi.TinyFaceDetectorOptions({
        inputSize: 224,
        scoreThreshold: 0.2
    });

    const result = await faceapi
        .detectAllFaces(webcam_canvas.canvas, options)
        .withFaceLandmarks(true)
        .withFaceExpressions();


    if (!result || result.length < 1) {
        multiFaceShown = false;
        no_face();
        return;
    }

    if (result.length > 1) {

        if (!multiFaceShown) {
            multiFaceShown = true;
            multi_face();
        }

        return;
    }
    if (result.length == 1) {

        // multiFaceShown = false;

        // if (!detectionSuccessCalled) {
        //     detectionSuccessCalled = true;
        //     clearInterval(face_detect_interval);
            await photo_consent_detecction_success_1();
        // }

        return;
    }
}


    // multiFaceShown = false;
    // face_detected();

    // if (!detectionSuccessCalled) {
    //     detectionSuccessCalled = true;
    //     clearInterval(face_detect_interval);
    //     await photo_consent_detecction_success_1();
    // }


function multi_face() {
    getSpriteObject('red_box').alpha = 1;
    getSpriteObject('multi_face').alpha = 1;
    getSpriteObject('red_box_cancel').alpha = 1;
    getTextObject(window.product_language_data.video_consent_screen.multi_face).alpha = 1;

    getSpriteObject('green_box').alpha = 0;
    getSpriteObject('face_match').alpha = 0;
    getSpriteObject('green_box_tick').alpha = 0;

    getSpriteObject('liveness_check').alpha = 1;
    getTextObject(window.product_language_data.video_consent_screen.liveness_check).alpha = 1;
    getTextObject(window.product_language_data.video_consent_screen.position_text).alpha = 0;
}

function face_detected() {
    getSpriteObject('green_box').alpha = 1;
    getSpriteObject('face_match').alpha = 1;
    getSpriteObject('green_box_tick').alpha = 1;

    getTextObject(window.product_language_data.video_consent_screen.liveness_checked).alpha = 1;
    getTextObject(window.product_language_data.video_consent_screen.proceed_to_record).alpha = 1;

    getSpriteObject('red_box').alpha = 0;
    getSpriteObject('multi_face').alpha = 0;
    getSpriteObject('red_box_cancel').alpha = 0;
    getTextObject(window.product_language_data.video_consent_screen.multi_face).alpha = 0;

    getSpriteObject('liveness_check').alpha = 0;
    getTextObject(window.product_language_data.video_consent_screen.liveness_check).alpha = 0;
    getTextObject(window.product_language_data.video_consent_screen.position_text).alpha = 0;

    getSpriteObject('camera_icon').alpha = 1;

}

function no_face() {

    getSpriteObject('no_face_detected').alpha = 1;

    setTimeout(() => {
        getSpriteObject('no_face_detected').alpha = 0;
    }, 1000);
}



function face_match_text_by_screen() {
    if (cur_scr === 5) {
        if (window.product_language_data.personal_details.face_match_txt) {
            getTextObject(window.product_language_data.personal_details.face_match_txt).alpha = 1;
        }
    } else if (cur_scr === 7) {
        if (window.product_language_data.policy_details.face_match_txt) {
            getTextObject(window.product_language_data.policy_details.face_match_txt).alpha = 1;
        }
    } else if (cur_scr === 8) {
        if (window.product_language_data.rider_details.face_match_txt) {
            getTextObject(window.product_language_data.rider_details.face_match_txt).alpha = 1;
        }
    } else if (cur_scr === 9) {
        if (window.product_language_data.declaration_screen.face_match_txt) {
            getTextObject(window.product_language_data.declaration_screen.face_match_txt).alpha = 1;
        }
    } else if (cur_scr === 10) {
        if (window.product_language_data.video_consent_screen.face_match_txt) {
            getTextObject(window.product_language_data.video_consent_screen.face_match_txt).alpha = 1;
        }
    }
}


function photo_consent_detecction_failure() {
    isFaceDetected = false;
    closepopup_photoconsent(window.product_language_data.photo_consent_screen.face_detection, 540)
}

function show_distance_photo_error() {
    // if (getTextObject(window.product_language_data.photo_consent_screen.come_closer_txt || window.product_language_data.video_consent_screen.come_closer_txt))
    getTextObject(window.product_language_data.photo_consent_screen.come_closer_txt).alpha = 1;
    // getTextObject(window.product_language_data.video_consent_screen.come_closer_txt).alpha = 1;

}

function hide_distance_photo_error() {
    // if (getTextObject(window.product_language_data.photo_consent_screen.come_closer_txt || window.product_language_data.video_consent_screen.come_closer_txt))
    getTextObject(window.product_language_data.photo_consent_screen.come_closer_txt).alpha = 0;
    // getTextObject(window.product_language_data.video_consent_screen.come_closer_txt).alpha = 0;
}