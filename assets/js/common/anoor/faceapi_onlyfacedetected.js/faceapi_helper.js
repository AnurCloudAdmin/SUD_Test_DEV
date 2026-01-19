async function LoadFaceModels(path) {
    await faceapi.loadTinyFaceDetectorModel(path + '/tiny_face_detector_model-weights_manifest');
    await faceapi.loadFaceLandmarkTinyModel(path + '/face_landmark_68_tiny_model-weights_manifest');
    await faceapi.loadFaceExpressionModel(path + '/face_expression_model-weights_manifest');
    await faceapi.loadSsdMobilenetv1Model(path + '/ssd_mobilenetv1_model-weights_manifest');

}

var intervalFaceDetectCam;

function beginFaceDetect(face_tick,record) {
    //console.log("Starting Face Detection");

    isFaceDetected = false;
    createOverlayCanvas();

    intervalFaceDetectCam = setInterval(function() {
        faceDetectEnable(face_tick, record);
    }, 500);
}

var isFaceDetected = false;
var multifacecount = 0;
var face_detected_count = 0;
var response_data;
async function faceDetectEnable(face_tick, smile_tick) {

    if (webcam_canvas != null) {
        const options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 128,
            scoreThreshold: 0.3
        })
        var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options).withFaceLandmarks(true).withFaceExpressions();

        if (result && result.length > 1) {
            multifacecount++;

            if (multifacecount >= 5) {
                multifacecount = 0;

                showMultiFaceDetected();

                isFaceDetected = false;
               
                if (getSpriteObject(face_tick))
                    getSpriteObject(face_tick).setAlpha(0);
            }


        } else if (result && result.length == 1) {

            face_detected_count++;
            faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
            faceapi.draw.drawDetections(overlay_canvas.canvas, result);

            if (face_detected_count >= 2) {
                face_detected_count = 0;

                ////console.log(result);

                hideMultiFaceDetected();
                

                isFaceDetected = true;

                if (getSpriteObject(face_tick))
                    getSpriteObject(face_tick).setAlpha(1);
                else {
                    
                }

                stopfaceDetect();
                // faceapi.matchDimensions(overlay_canvas.canvas, webcam_canvas.canvas);
                // faceapi.draw.drawDetections(overlay_canvas.canvas, result);
            }


        } else {
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



function showMultiFaceDetected() {
    if (getSpriteObject('multi_face_detected'))
        getSpriteObject('multi_face_detected').alpha = 1;
}

function hideMultiFaceDetected() {
    if (getSpriteObject('multi_face_detected'))
        getSpriteObject('multi_face_detected').alpha = 0;
}


var photograph_error;
function showPhotographerror(){
    
    if(photograph_error == null){
        photograph_error = game.add.sprite(840,400,'photograph_error');
        photograph_error.setDepth(7);
        photograph_error.setOrigin(0.5,0.5);
    }
    else
    {
        photograph_error.alpha=1;
    }

}

function hidephotographerror(){

    if(photograph_error!=null)
        photograph_error.alpha=0;
}

function showNoFaceDetected() {
    if (getSpriteObject('no_face_detected'))
        getSpriteObject('no_face_detected').alpha = 1;
}

function hideNoFaceDetected() {
    if (getSpriteObject('no_face_detected'))
        getSpriteObject('no_face_detected').alpha = 0;
}

async function facedetect_single_frame() {
    hideNoFaceDetected();
    hideMultiFaceDetected();
    hidephotographerror();

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

                var response_data = await call_spoof_api();
                 if(response_data.comparision == false){
                    showPhotographerror();
                    setTimeout(function(){
                        if(photograph_error!=null)
                            photograph_error.alpha=0;
                    },1000);
                }

                if (response_data.comparision == true) {
                    return true;
                    hidePhotographerror();
                }
                else
                    return false;
                    
                //return true;
            } else {
                showNoFaceDetected();
                return false;
            }
        } else
            return false;
    } else
        return false;


}


async function facedetect_frame()
{
    hideNoFaceDetected();
    hideMultiFaceDetected();

    if(isFaceDetected==true)
    {
    
       if (webcam_canvas != null) {
       const options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 128,
            scoreThreshold: 0.7
        });

        var result = await faceapi.detectAllFaces(webcam_canvas.canvas, options);

        if (result && result.length > 1) {

            showMultiFaceDetected();
            return false;

        }
        else if (result && result.length == 1) {
            return true;
        }
        else
        {
            showNoFaceDetected();
            return false;
        }
    }
    else
        return false;
    }

   else
        return false;

    
}

// function video_consent_validation()
// {
//     if(cur_scr==screen_indexes.get('HIGH_RISK_VIDEO_CONSENT'))
//     {
//         if(getSpriteObject('rec_btn'))
//             getSpriteObject('rec_btn').alpha = 1;
//     }
// }


function video_consent_validation() {
    if (cur_scr == screen_indexes.get('Video Consent Screen')) {
        if (getSpriteObject('camera_icon'))
            getSpriteObject('camera_icon').alpha = 1;
    }
}

function call_spoof_api() {

    var base64_image = webcam_canvas.canvas.toDataURL();
    base64_image = base64_image.replace("data:image/png;base64,", "");

    return new Promise(function(resolve, reject)
    {
        var settings = {
            "url": "./assets/scripts/liveness.php",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },

            "data": JSON.stringify({
                "proposal_no": window.proposal_no,
                "image_base64": base64_image
            }),
        };

        $.ajax(settings).done(function(response) {

            if(response!=null)
            {
                response_data = JSON.parse(response);
                //console.log(response_data);
                resolve(response_data);
            }
            else
                reject(null);
            
        });
   });

}