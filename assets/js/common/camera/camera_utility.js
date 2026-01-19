
var video;
var videoStream = null;
var pri_video_width = 400;
var pri_video_height = 400;

var pri_canvas_x = 540;
var pri_canvas_y = 1300;
var pri_canvas_width = 760;
var pri_canvas_height = 650;
var webcam_canvas;
var overlay_canvas;
var context;

var videoRecorder;
var audioRecorder;
var audioblob;

function webCamCreate() {

	//Checks for compatibiltiy
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia;


	//Creates Video element
	video = document.createElement('video');
	video.setAttribute("id", "vid1");
	video.playsInline = true;
	video.autoplay = true;
	video.muted = true;
	video.volume = 0.00000000001;
}

function getPermission() {
	clear_all_permission_errors();
	navigator.getUserMedia({
		video: {
			minWidth: pri_video_width,
			minHeight: pri_video_height,
			//maxAspectRatio:1,
		},
		audio: true
	}, permission_success.bind(this), permission_error.bind(this));
}

function permission_success(stream) {
	//console.log("permission_success");
	cam_permission_granted = true;
	show_camera_permission_success_indicator();
}

function permission_error(stream) {
	//console.log("permission_error");
	cam_permission_granted = false;
	show_camera_permission_error();
}


function initCamOnly() {
	createOverlayCanvas();

	var width = 700;
	var height = 700;
	if (cur_scr == 4) {
		pri_canvas_x = 540;
		pri_canvas_y = 820;
		pri_canvas_width = 750;
		pri_canvas_height = 650;
	} else {
		pri_canvas_x = 540;
		pri_canvas_y = 610;
		pri_canvas_width = 750;
		pri_canvas_height = 758;
	}
	navigator.getUserMedia({
		video: {
			mandatory: {
				minWidth: pri_video_width,
				minHeight: pri_video_height,
				maxAspectRatio: 1,
			}

		},

		audio: true
	}, connectCallback.bind(this), errorCallback.bind(this));
}

function initCamOnly_online(width, height) {
	// var width = 600;
	// var height = 600;

	pri_canvas_x = 540;
	pri_canvas_y = 1410;

	pri_canvas_height = height;
	pri_canvas_width = width;

	navigator.getUserMedia({
		video: {
			mandatory: {
				minWidth: pri_video_width,
				minHeight: pri_video_height,
				maxAspectRatio: 1,
			}
		},
		audio: true
	}, connectCallback.bind(this), errorCallback.bind(this));

}


function connectCallback(stream) {
	//console.log(stream);
	videoStream = stream;

	if (video == null) {
		video = document.createElement('video');
		video.setAttribute("id", "vid1");
		video.playsInline = true;
		video.autoplay = true;
		video.volume = 0.00000000001;
	}
	video.srcObject = stream;

	init_OnScreenFeed();

}

function errorCallback(stream) {

}

function init_OnScreenFeed() {

	webcam_canvas = game.add.rexCanvas(pri_canvas_x, pri_canvas_y, pri_canvas_width, pri_canvas_height);
	webcam_canvas.fill("#FFFFFF");
	webcam_canvas.setOrigin(0.5, 0.5);

	//console.log(webcam_canvas);

	context = webcam_canvas.getContext();
	video.play();


	// 	if (videoStream)
	// 	{
	// 		console.log(videoStream);
	// 		console.log(video);

	// 		context.drawImage(video, 0, 0,pri_canvas_width, pri_canvas_height);
	// 	}

	// }
	// Changed
	if (videoStream) {
		//alert();
		//console.log(videoStream);
		//console.log(video);
		context.translate(pri_canvas_width, 0);
		context.scale(-1, 1);
		context.drawImage(video, 0, 0, pri_canvas_width, pri_canvas_height);
	}

}

//This is called in Update
function updateVideoFrame() {
	if (videoStream) {
		context.drawImage(video, 0, 0, pri_canvas_width, pri_canvas_height);
	}
}

function stopCameraFeed() {
	if (videoStream) {
		videoStream.getTracks().forEach(function (track) { track.stop(); });
		videoStream = null;
		//console.log("Camera is stopped!");
	}
}

function createOverlayCanvas() {

	overlay_canvas = game.add.rexCanvas(pri_canvas_x, pri_canvas_y, pri_canvas_width, pri_canvas_height);
	overlay_canvas.depth = 2;
	obj_list.push(overlay_canvas);
}

function clearOverlayCanvas() {
	if (overlay_canvas) {
		//overlay_canvas.clear();
		overlay_canvas.destroy();
	}

}



function miniCam() {
	var width = 360;
	var height = 360;

	pri_canvas_height = height;
	pri_canvas_width = width;

	navigator.getUserMedia({
		video: {
			mandatory: {
				minWidth: width,
				minHeight: height,
				maxAspectRatio: 1,
			}
		},
		audio: false
	}, function (stream) {

		videoStream = stream;
		video.srcObject = stream;
		var x = 870;
		var y = 360;

		pri_canvas_x = x;
		pri_canvas_y = y;

		webcam_canvas = game.add.rexCanvas(x, y, width, height);
		webcam_canvas.fill("#FFFFFF");

		//console.log(webcam_canvas);

		context = webcam_canvas.getContext();
		context.translate(pri_canvas_width, 0);
		context.scale(-1, 1);
		video.play();

		createOverlayCanvas();

	}, errorCallback.bind(this));

}



function capturePhoto() {
	//console.log('CAMERA UTIL : Capture Photo');
	var imgCanvas = document.createElement("canvas");
	imgCanvas.width = video.videoWidth;
	imgCanvas.height = video.videoHeight;
	var context = imgCanvas.getContext('2d');
	context.translate(imgCanvas.width, 0);
	context.scale(-1, 1);
	context.drawImage(video, 0, 0, imgCanvas.width, imgCanvas.height);
	// imgCanvas.getContext('2d')
	// 	.drawImage(video, 0, 0, imgCanvas.width, imgCanvas.height);	


	return (imgCanvas.toDataURL('image/jpeg', 0.4)) ? imgCanvas.toDataURL('image/jpeg', 0.4) : null;
}

const readUploadedFileAsBase64 = (inputFile) => {
	const temporaryFileReader = new FileReader();

	return new Promise((resolve, reject) => {
		temporaryFileReader.onerror = () => {
			temporaryFileReader.abort();
			reject(new DOMException("Problem parsing input file."));
		};

		temporaryFileReader.onload = () => {
			resolve(temporaryFileReader.result);
		};
		temporaryFileReader.readAsDataURL(inputFile);
	});
};


var mediaRecorder = null;
var recordedChunks = [];
/**
* Start recording using pre-existing videoStream
*/
function VideoRecord_Start() {
	if (!videoStream) {
		log_video_recording('videoStream not found. Initialize camera before recording.');
		return;
	}
	const stream = videoStream; // your existing MediaStream
	const mimeCandidates = [
		'video/webm;codecs=vp8,opus',
		'video/webm;codecs=vp9,opus',
		'video/webm',
		'video/mp4', // Safari support
		''
	];
	var mimeType = '';
	for (const type of mimeCandidates) {
		if (!type || (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(type))) {
			mimeType = type;
			break;
		}
	}
	log_video_recording('Using MIME type: ' + (mimeType || '(browser default)'));
	try {
		mediaRecorder = mimeType
			? new MediaRecorder(stream, { mimeType })
			: new MediaRecorder(stream);
	} catch (err) {
		log_video_recording('MediaRecorder init failed: ' + err);
		log_video_recording('Unable to start recording: ' + err.message);
		return;
	}
	recordedChunks = [];
	mediaRecorder.ondataavailable = (e) => {
		if (e.data && e.data.size > 0) recordedChunks.push(e.data);
	};
	mediaRecorder.onerror = (e) => {
		log_video_recording('MediaRecorder error: ' + e.message);
	};
	mediaRecorder.onstart = () => log_video_recording('Recording started...');
	mediaRecorder.onstop = () => log_video_recording('Recording stopped.');
	mediaRecorder.start();
}

var response_data;
var speech_response_data;

function VideoRecord_Stop() {
	return new Promise((resolve, reject) => {
		if (!mediaRecorder) {
			reject('No active recording session.');
			return;
		}

		mediaRecorder.onstop = async () => {
			try {
				const blob = new Blob(recordedChunks, {
					type: mediaRecorder.mimeType || 'video/webm'
				});
				log_video_recording('Recording complete: ' + blob.size + ' bytes, type: ' + blob.type);
				window.videoblob = blob;

				const reader = new FileReader();
				reader.readAsDataURL(blob);
				reader.onloadend = async function () {
					try {
						let base64String = reader.result;
						console.log('Base64 String - ', blob);

						base64String = base64String.replace(/^data:/, '');

						// Upload the video blob to server
						response_data = await uploadVideo(blob);

						// Call speech-to-text update
						speech_response_data = await update_speech_to_text();

						if (speech_response_data.Status === true) {

							// getTextObject(window.speech_script).alpha = 0;
							// getSpriteObject('proceed_btn').alpha = 1;
							// getTextObject("NEXT_BTN").alpha = 1;
							// getSpriteObject("Video_recording_box").alpha = 1;
							// getTextObject(window.product_language_data.video_consent_screen.recording_is_complete).alpha = 1;

							// getTextObject(window.product_language_data.video_consent_screen.message_text).alpha = 0;
							// getTextObject(window.record_count).alpha = 0;

							goToPage(15);

						} else {
							getSpriteObject('speech_popup').alpha = 1;
							getTextObject(window.product_language_data.video_consent_screen.popup_text).alpha = 1;
							getTextObject(window.product_language_data.video_consent_screen.try_again_txt).alpha = 1;
						}

						resolve(blob);
					} catch (innerErr) {
						reject(innerErr);
					}
				};
			} catch (err) {
				reject(err);
			}
		};

		// Stop the recording (triggers onstop)
		mediaRecorder.stop();
	});
}

function log_video_recording(message) {
	CALL_VIDEO_LOG(message); // TEMPORARY
}

//old 
// function VideoRecord_Start() {
// 	if (parseFloat(checkIOS()) <= 14.5) {
// 		videoRecorder = RecordRTC(videoStream,
// 			{
// 				mimeType: 'video/webm',  // Change the video format and codec
// 				type: 'video',
// 				recorderType: MediaStreamRecorder,
// 				videoBitsPerSecond: 256 * 1024, // Adjust the video bitrate
// 				audioBitsPerSecond: 32 * 1024,  // Setting audio bitrate to 32 kbps
// 				//frameRate: 15,
// 			});
// 	}

// 	else if (parseFloat(checkIOS()) >= 14.5) {
// 		videoRecorder = RecordRTC(videoStream,
// 			{
// 				mimeType: 'video/webm',  // Change the video format and codec
// 				type: 'video',
// 				recorderType: MediaStreamRecorder,
// 				videoBitsPerSecond: 128 * 1024, // Adjust the video bitrate
// 				audioBitsPerSecond: 16 * 1024,  // Setting audio bitrate to 32 kbps
// 				//frameRate: 15, 
// 			});
// 	}
// 	else {
// 		//console.log("mimeType: video/webm");
// 		videoRecorder = RecordRTC(videoStream,
// 			{
// 				//type: 'video',
// 				mimeType: 'video/webm',
// 				type: 'video',
// 				recorderType: MediaStreamRecorder,
// 				videoBitsPerSecond: 768 * 1024, //1 * 1024 * 1024, // For example, setting video bitrate to 5 Mbps
// 				audioBitsPerSecond: 64 * 1024 // Setting audio bitrate to 128 kbps

// 			});

// 	}

// 	videoRecorder.startRecording();
// 	videoRecorder.camera = videoStream;
// }

// var reponse_data;
// var speech_response_data;
// async function VideoRecord_Stop() {

// 	blob = videoRecorder.stopRecording(
// 		function () {
// 			var blob = videoRecorder.getBlob();


// 			var reader = new FileReader();
// 			reader.readAsDataURL(blob);
// 			reader.onloadend = async function () {
// 				var base64String = reader.result;
// 				// var base64String=await readUploadedFileAsBase64(blob);
// 				console.log('Base64 String - ', blob);

// 				base64String = base64String.replace(/^data:/, ''); //base64String.split(";base64,"); 

// 				// var response = await call_ADD_CONSENT_VIDEO(base64String); //base64String[1]
// 				// alert("1");

// 				var response = await uploadVideo(blob);

// 				// alert("2");

// 				var speech_response_data = await update_speech_to_text();
// 				if (speech_response_data.Status == true) {
// 					goToPage(12);
// 				} else if (speech_response_data.Status == false) {
// 					getSpriteObject('speech_popup').alpha = 1;
// 					getTextObject(window.product_language_data.video_consent_screen.popup_text).alpha = 1;
// 					getTextObject(window.product_language_data.video_consent_screen.try_again_txt).alpha = 1;
// 				}

// 				videoRecorder.camera.stop();
// 				return response_data;

// 			}
// 		});
// }

async function uploadVideo(blob) {
	const chunkSize = 5 * 1024 * 1024;
	const totalChunks = Math.ceil(blob.size / chunkSize);

	for (let i = 0; i < totalChunks; i++) {
		const start = i * chunkSize;
		const end = Math.min(start + chunkSize, blob.size);
		const blobPart = blob.slice(start, end);
		// sendChunk(blobPart, i, totalChunks);
		await call_ADD_CONSENT_VIDEO(blob, blobPart, i, totalChunks);
	}

}

// function pageHightlight() {

// 	// var speechto = "I hereby agree that the policy and personal details mentioned in the video for" + " " + window.res_params.PROPOSAL_NUMBER + " " + "are correct. I authorize Kotak Life insurance to issue my life insurance policy";

// 	var speechto = "  I hereby agree that I am consciously buying Kotak Life insurance policy " + " " + window.res_params.PROPOSAL_NUMBER + " "
// 		+ " with " + " " + window.p_frequency + " " + " premium of Rs" + " " + window.premium_amount + " " + ". I need to pay this premium for next" +
// 		" " + window.p_policy_term + " " + "years against the sum assured of Rs." + " " + window.sum_assured + " " +
// 		" I authorize Kotak Life Insurance to issue my life insurance policy."
// 	window.speech_script = speechto;

// 	addTextToGameH(" " + speechto, 540, 1510, fontFamilyLangArr[sysLang], "32px", "#00000", "justify", 950, 0.5, 0, false);
// }

function pageHightlight() {
	var proposalNo = window.res_params.PROPOSAL_NUMBER;
	var frequencyEng = window.p_frequency; // Always English from backend
	var premium = window.premium_amount;
	var policyTerm = window.p_premium_paying_term;
	var sumAssured = window.sum_assured;

	// Frequency translation map
	var frequencyMap = {
		"eng": frequencyEng,

		"hin": frequencyEng === "monthly" ? "मासिक" :
			frequencyEng === "Quarterly" ? "त्रैमासिक" :
				frequencyEng === "Half-Yearly" ? "अर्धवार्षिक" :
					frequencyEng === "Half Yearly" ? "अर्धवार्षिक" :
						frequencyEng === "Yearly" ? "वार्षिक" :
							frequencyEng === "Single" ? "एकमात्र" : frequencyEng,

		"ben": frequencyEng === "monthly" ? "মাসিক" :
			frequencyEng === "Quarterly" ? "ত্রৈমাসিক" :
				frequencyEng === "Half-Yearly" ? "অর্ধ-বার্ষিক" :
					frequencyEng === "Half Yearly" ? "অর্ধ-বার্ষিক" :
						frequencyEng === "Yearly" ? "বার্ষিক" :
							frequencyEng === "Single" ? "একক" : frequencyEng,

		"ass": frequencyEng === "monthly" ? "মাসিক" :
			frequencyEng === "Quarterly" ? "ত্ৰৈমাসিক" :
				frequencyEng === "Half-Yearly" ? "অৰ্ধ-বৰ্ষিক" :
					frequencyEng === "Half Yearly" ? "অৰ্ধ-বৰ্ষিক" :
						frequencyEng === "Yearly" ? "বৰ্ষিক" :
							frequencyEng === "Single" ? "একক" : frequencyEng,

		"tam": frequencyEng === "monthly" ? "மாதம்தோறும்" :
			frequencyEng === "Quarterly" ? "காலாண்டு" :
				frequencyEng === "Half-Yearly" ? "அரை ஆண்டுதோறும்" :
					frequencyEng === "Half Yearly" ? "அரை ஆண்டுதோறும்" :
						frequencyEng === "Yearly" ? "ஆண்டுதோறும்" :
							frequencyEng === "Single" ? "ஒருமுறை" : frequencyEng,

		"tel": frequencyEng === "monthly" ? "మాసిక" :
			frequencyEng === "Quarterly" ? "త్రైమాసిక" :
				frequencyEng === "Half-Yearly" ? "అర్ధ సంవత్సరానికి" :
					frequencyEng === "Half Yearly" ? "అర్ధ సంవత్సరానికి" :
						frequencyEng === "Yearly" ? "సంవత్సరం" :
							frequencyEng === "Single" ? "సింగిల్" : frequencyEng,

		"ori": frequencyEng === "monthly" ? "ମାସିକ" :
			frequencyEng === "Quarterly" ? "ତ୍ରୈମାସିକ" :
				frequencyEng === "Half-Yearly" ? "ଅର୍ଧ-ବାର୍ଷିକ" :
					frequencyEng === "Half Yearly" ? "ଅର୍ଧ-ବାର୍ଷିକ" :
						frequencyEng === "Yearly" ? "ବାର୍ଷିକ" :
							frequencyEng === "Single" ? "ଏକମାତ୍ର" : frequencyEng,

		"kan": frequencyEng === "monthly" ? "ಮಾಸಿಕ" :
			frequencyEng === "Quarterly" ? "ತ್ರೈಮಾಸಿಕ" :
				frequencyEng === "Half-Yearly" ? "ಅರ್ಧವಾರ್ಷಿಕ" :
					frequencyEng === "Half Yearly" ? "ಅರ್ಧವಾರ್ಷಿಕ" :
						frequencyEng === "Yearly" ? "ವಾರ್ಷಿಕ" :
							frequencyEng === "Single" ? "ಏಕ" : frequencyEng,

		"mar": frequencyEng === "monthly" ? "मासिक" :
			frequencyEng === "Quarterly" ? "त्रैमासिक" :
				frequencyEng === "Half-Yearly" ? "अर्धवार्षिक" :
					frequencyEng === "Half Yearly" ? "अर्धवार्षिक" :
						frequencyEng === "Yearly" ? "वार्षिक" :
							frequencyEng === "Single" ? "एकदाच" : frequencyEng,

		"guj": frequencyEng === "monthly" ? "માસિક" :
			frequencyEng === "Quarterly" ? "ત્રિમાસિક" :
				frequencyEng === "Half-Yearly" ? "અર્ધવાર્ષિક" :
					frequencyEng === "Half Yearly" ? "અર્ધવાર્ષિક" :
						frequencyEng === "Yearly" ? "વાર્ષિક" :
							frequencyEng === "Single" ? "સિંગલ" : frequencyEng,

		"mal": frequencyEng === "monthly" ? "മാസിക" :
			frequencyEng === "Quarterly" ? "പാദ വാർഷിക" :
				frequencyEng === "Half-Yearly" ? "അർദ്ധ വാർഷിക" :
					frequencyEng === "Half Yearly" ? "അർദ്ധ വാർഷിക" :
						frequencyEng === "Yearly" ? "വാർഷിക" :
							frequencyEng === "Single" ? "സിംഗിൾ" : frequencyEng,

	};

	// Language-specific styles
	var languageStyleMap = {
		"eng": { fontSize: "52px", x: 540, y: 1030 },
		"hin": { fontSize: "52px", x: 520, y: 1030 },
		"ben": { fontSize: "52px", x: 530, y: 1030 },
		"ass": { fontSize: "52px", x: 530, y: 1030 },
		"tam": { fontSize: "42px", x: 530, y: 1030 },
		"tel": { fontSize: "50px", x: 530, y: 1030 },
		"ori": { fontSize: "54px", x: 530, y: 1030 },
		"kan": { fontSize: "52px", x: 530, y: 1030 },
		"mar": { fontSize: "50px", x: 530, y: 1030 },
		"guj": { fontSize: "52px", x: 530, y: 1030 },
		"mal": { fontSize: "42px", x: 530, y: 1030 }

	};

	// Speech text
	var speechScripts = {
		"eng": `I hereby agree that I am consciously buying Kotak Life insurance policy ${proposalNo} with ${frequencyMap.eng} premium of Rs ${premium}. I need to pay this premium for next ${policyTerm} years against the sum assured of Rs. ${sumAssured}. I authorize Kotak Life Insurance to issue my life insurance policy.`,

		"hin": `\nमैं सहमति देता/देती हूँ कि मैं कोटक लाइफ इंश्योरेंस पॉलिसी ${proposalNo} को सोच-समझकर खरीद रहा/रही हूँ। इस पॉलिसी की ${frequencyMap.hin} प्रीमियम राशि ₹ ${premium} है, जो मुझे अगले ${policyTerm} वर्षों तक भरनी होगी। इस पॉलिसी में मुझे ₹. ${sumAssured} का सम एश्योर्ड मिलेगा। मैं कोटक लाइफ इंश्योरेंस को मेरी जीवन बीमा पॉलिसी जारी करने की अनुमति देता/देती हूँ।`,

		"ben": `\nআমি এখানে সম্মত হচ্ছি যে আমি সচেতনভাবে কোটাক লাইফ ইনস্যুরেন্স পলিসি ${proposalNo} প্রতি ${frequencyMap.ben} প্রিমিয়াম ₹. ${premium} কিনছি। আমাকে এই প্রিমিয়াম পরবর্তী ${policyTerm} বছর পরিশোধ করতে হবে ₹ ${sumAssured} এর নির্ধারিত পরিমাণের বিপরীতে। আমি কোটাক লাইফ ইনস্যুরেন্সকে আমার জীবন বীমা পলিসি ইস্যু করার জন্য অনুমোদন দিচ্ছি।`,

		"ass": `\nমই য়াৰ একমত হ'লো যে মই সৎভাৱে কোটাক লাইফ ইনছুৰেন্স পলিচি ${proposalNo} ৰ সাৰি ${frequencyMap.ass} প্ৰিমিয়াম হিচাপে ₹${premium} পৰিশোধ কৰিব লাগিব। মই এই প্ৰিমিয়ামটো অহা ${policyTerm} বছৰৰ বাবে ₹${sumAssured} নিশ্চিত মাছুলৰ বিৰুদ্ধে পৰিশোধ কৰিব লাগিব। মই কোটাক লাইফ ইনছুৰেন্সক মোৰ জীৱন বীমা পলিচি জাৰি কৰিবলৈ অনুমতি দিছো।`,

		"tam": `நான் இதன் மூலம் கோடக் லைஃப் இன்ஷூரன்ஸ் பாலிசி ${proposalNo}  ஐ  ${frequencyMap.tam} பிரீமியம் ரூபாய் ${premium}  சுய விருப்பத்துடன் வாங்குகிறேன். அடுத்த ${policyTerm} ஆண்டுகளுக்கு இந்த பிரீமியத்தை செலுத்த வேண்டும், இது ரூபாய் ${sumAssured} சம் அஷ்யூர்ட் எதிராக உள்ளது. எனது லைஃப் இன்ஷூரன்ஸ் பாலிசியை வழங்குவதற்கு கோடக் லைஃப் இன்ஷூரன்ஸ் க்கு அனுமதி அளிக்கிறேன்`,

		"tel": `నేను ఈ ద్వారా స్వచ్ఛందంగా కోటక్ లైఫ్ ఇన్షూరెన్స్ పాలసీ ${proposalNo} ను కొనుగోలు చేస్తున్నానని అంగీకరిస్తున్నాను దీని ${frequencyMap.tel} ప్రీమియం రూ ${premium}  మరియు నేను ఈ ప్రీమియంను రాబోయే ${policyTerm} సంవత్సరాలపాటు చెల్లించాల్సి ఉంది ఇది రూ ${sumAssured} మొత్తం భీమా మొత్తానికి వ్యతిరేకంగా ఉంటుంది నా జీవిత భీమా పాలసీని జారీ చేయడానికి కోటక్ లైఫ్ ఇన్షూరెన్స్‌కు అధికారం ఇస్తున్నాను`,

		"ori": `ମୁଁ ଏଠାରେ ସହମତ ଅଟେ ଯେ ମୁଁ ସଚେତନ ଭାବରେ କୋଟକ ଲାଇଫ ଇନସୁରାନ୍ସ ପଲିସି ${proposalNo} କିଣୁଛି ${frequencyMap.ori} ପ୍ରିମିୟମ ଟଙ୍କା ${premium} ସହିତ | ମୋତେ ଏହି ପ୍ରିମିୟମ ପରବର୍ତ୍ତୀ ${policyTerm} ବର୍ଷ ପାଇଁ ସମ ଆସୁରଡ ଟଙ୍କା ${sumAssured}  ବିପରୀତରେ ଦେବାକୁ ହେବ | ମୁଁ କୋଟକ ଲାଇଫ ଇନସୁରାନ୍ସକୁ ମୋର ଲାଇଫ ଇନସୁରାନ୍ସ ପଲିସି ଜାରି କରିବାକୁ ଅନୁମତି ଦେଉଛି`,

		"kan": `ನಾನು ಇಲ್ಲಿ ಜಾಗೃತವಾಗಿ ಕೋಟಕ್ ಲೈಫ್ ಇನ್ಶುರನ್ಸ್ ಪಾಲಿಸಿ ${proposalNo} ಅನ್ನು ${frequencyMap.kan} ಪ್ರೀಮಿಯಂ  ₹ ${premium} ಜೊತೆಗೆ ಖರೀದಿಸುತ್ತಿದ್ದೇನೆ ಎಂದು ಒಪ್ಪುತ್ತೇನೆ. ನಾನು ಈ ಪ್ರೀಮಿಯಂ ಅನ್ನು ಮುಂದಿನ ${policyTerm} ವರ್ಷಗಳವರೆಗೆ ₹ ${sumAssured} ರ ಸಮ್ ಅಶ್ಯುರ್ಡ್ ವಿರುದ್ಧವಾಗಿ ಪಾವತಿಸಬೇಕು. ನಾನು ಕೋಟಕ್ ಲೈಫ್ ಇನ್ಶುರನ್ಸ್ ಗೆ ನನ್ನ ಜೀವ ವಿಮಾ ಪಾಲಿಸಿಯನ್ನು ಜಾರಿ ಮಾಡಲು ಅಧಿಕಾರ ನೀಡುತ್ತೇನೆ`,

		"mar": `\nमी याद्वारे सहमती देतो की मी जाणीवपूर्वक कोटक लाइफ इन्श्युरन्स पॉलिसी ${proposalNo} खरेदी करत आहे ज्यासाठी ${frequencyMap.mar} प्रीमियम रुपये ₹ ${premium} आहे. मला हा प्रीमियम पुढील ${policyTerm} वर्षांसाठी भरावा लागेल रुपये ₹ ${sumAssured} च्या सम अश्युअर्ड विरुद्ध. मी कोटक लाइफ इन्श्युरन्सला माझी लाइफ इन्श्युरन्स पॉलिसी जारी करण्यासाठी अधिकृत करतो.`,

		"guj": `\nહું આ સાથે સંમત છું કે હું સભાનપણે કોટક લાઇફ ઇન્શ્યોરન્સ પૉલિસી ક્રમાંક ${proposalNo} ખરીદી રહ્યો છું. ₹ ${premium}  ના ${frequencyMap.guj} પ્રીમિયમ સાથે, મારે આગામી ${policyTerm} વર્ષ માટે ₹ ${sumAssured} ની વીમા રકમ સામે આ પ્રીમિયમ ચૂકવવાની જરૂર છે. હું કોટક લાઇફ ઇન્શ્યોરન્સને મારી જીવન વીમા પૉલિસી જારી કરવા માટે અધિકૃત કરું છું.`,

		"mal": `\nഞാൻ ബോധപൂർവം കോടക് ലൈഫ് ഇൻഷുറൻസ് പോളിസി ${proposalNo} വാങ്ങുന്നു എന്നും അതിന്റെ ${premium}  പ്രീമിയം ${frequencyMap.mal} ആണെന്നും ഈ പ്രീമിയം അടക്കേണ്ട കാലാവധി അടുത്ത ${policyTerm}വർഷം ആണ് സം അഷ്വേർഡ് Rs ${sumAssured}ആണ്. ഞാൻ കോടക് ലൈഫ് ഇൻഷുറൻസിനു എന്റെ പോളിസി ഇഷ്യു ചെയ്യാൻ അനുമതി നൽകുന്നു.`

	};

	var lang = window.sysLang;
	var style = languageStyleMap[lang];
	var speechto = speechScripts[lang];

	window.speech_script = speechto;

	addTextToGameH(
		" " + speechto,
		style.x,
		style.y,
		fontFamilyLangArr[lang],
		style.fontSize,
		"#000000",
		"justify",
		950,
		0.5,
		0,
		false
	);
}


function AudioRecord_Start() {
	audioRecorder = RecordRTC(videoStream, {
		type: 'audio',
		mimeType: 'audio/wav',
		audio: true,
		recorderType: RecordRTC.StereoAudioRecorder
	});

	audioRecorder.startRecording();
	audioRecorder.camera = videoStream;
}

function AudioRecord_Stop() {
	audioblob = audioRecorder.stopRecording(
		function () {
			audioblob = audioRecorder.getBlob();
			audioRecorder.camera.stop();
			//console.log(audioblob);

			uploadConsentAudio(audioblob);
			//init_quantics(audioblob);
			//uploadConsentVideo(audioblob);		
		});
}



//var canvas = document.createElement(webcam_canvas);
function checkBrightness() {


	return new Promise(function (resolve, reject) {

		//alert("Check Brightness");


		//console.log('CAMERA UTIL : Capture Photo');
		var imgCanvas = document.createElement("canvas");
		imgCanvas.width = video.videoWidth;
		imgCanvas.height = video.videoHeight;
		var context = imgCanvas.getContext('2d');
		context.translate(imgCanvas.width, 0);
		context.scale(-1, 1);
		context.drawImage(video, 0, 0, imgCanvas.width, imgCanvas.height);



		// Get the pixel data from the canvas
		const imageData = context.getImageData(0, 0, imgCanvas.width, imgCanvas.height);
		const data = imageData.data;



		let totalBrightness = 0;



		// Calculate the brightness level for each pixel
		for (let i = 0; i < data.length; i += 4) {
			const red = data[i];
			const green = data[i + 1];
			const blue = data[i + 2];



			// Calculate the brightness using the luminance formula
			const brightness = (red + green + blue) / 3;
			//alert(brightness);



			totalBrightness += brightness;
			//alert(totalBrightness);
		}



		// Calculate the average brightness across all pixels
		const averageBrightness = totalBrightness / (data.length / 4);
		//alert(averageBrightness);



		// You can adjust the brightness threshold as needed
		const brightnessThreshold = 90; // Adjust this value to set the threshold



		if (averageBrightness >= brightnessThreshold) {
			resolve(true);

		}

		else {
			resolve(false);
		}
	});
}


function checkIOS() {
	var agent = window.navigator.userAgent;
	start = agent.indexOf('OS');
	if ((agent.indexOf('iPhone') > -1 || agent.indexOf('iPad') > -1
	) && start > -1) {
		return agent.substr(start + 3, 4).replace('_', '.');
	}
	return 0;
}






