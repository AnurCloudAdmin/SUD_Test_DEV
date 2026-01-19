var sessionKey = crypto.getRandomValues(new Uint8Array(8)).toString();

//var s1_path='./assets/js/common/security/file1c.js';
var s2_path = './assets/js/common/security/file2e.js';
var s3_path = './assets/js/common/security/file3s.js';

// window.kfd_api_url = 'https://plvc.anurcloud.com/';
window.kfd_api_url = 'https://plvcuat.anurcloud.com/';

var kfd_validate_url_api = window.kfd_api_url + 'api/validatePIVCLink';

var scene1 = './assets/js/common/scenes/start_scene.js';
var scene2 = './assets/js/common/scenes/second_scene.js';


var IMG_COM_PATH = 'assets/images/common/';
var AUDIO_COM_PATH = 'assets/audio/en/common/';
var AUDIO_CUST_PATH = 'assets/audio/custom/';
var AUDIO_CUST_NEED_PATH = AUDIO_CUST_PATH + 'needed/';
var device_name;
var allowed_lang, allowed_other_lang;

function devicedetect() {

    if (WURFL) {
        window.device_name = WURFL.complete_device_name + ' - ' + WURFL.form_factor;
    } else {
        window.device_name = 'Not Detected';
    }
}

async function connectionType() {
    //    alert('CONNECTION TYPE');
    devicedetect();
    try {
        connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        console.log(connection);

        window.nettype = connection.effectiveType;
        window.netrtt = connection.rtt;
        window.netdown = connection.downlink;

        await call_DEVICE_DETAILS();

    }
    catch (e) {
        console.log('Exception in connection type ', e);
        window.nettype = '';
        window.netrtt = '';
        window.netdown = '';
    }
}

window.redirect_to_url = "";
$(document).ready(function () {

    $("#loading_div").show();

    window.cur_url = window.location.href.trim();
    const queryParams = new URLSearchParams(window.location.search);
    const queryParam1 = [...queryParams.keys()][0];
    const redirectUri = queryParams.get('redirect_uri');
    window.redirect_to_url = redirectUri;
    init_faceapi();



    window.cur_url = window.location.href.trim();
    // window.kfd_api_url = 'https://kli.anurcloud.com/';



    window.geo_latitude = 0;
    window.geo_longitude = 0;
    window.geo_location = '';

    window.app_view = false;

    window.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    call_validate_url();
});


function load_game_js(slug) {
    // loadScript('./assets/js/common/plugins/rex/rexcanvasplugin.min.js', null);
    // loadScript('./assets/js/common/plugins/rex/rexinputtextplugin.min.js', null);
    // loadScript('./assets/js/common/plugins/rex/rexfilechooserplugin.min.js', null)
    // loadScript('./assets/js/common/plugins/rex/rexscaleplugin.min.js', null);
    // loadScript('./assets/js/common/plugins/rex/rextexttypingplugin.min.js', null);

    loadScript('./assets/js/common/plugins/rex/rexinputtextplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexscaleplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexflashplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexmovetoplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexshakepositionplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexcanvasplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexbbcodetextplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexfilechooserplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rextexttypingplugin.min.js', null);
    loadScript('./assets/js/common/plugins/rex/rexuiplugin.min.js', null);


    loadScript("./assets/product_assets/" + slug + "/js/flow_assets_init.js?v=7", function () {
        // Load card workflow js
        loadScript("./assets/product_assets/" + slug + "/js/flow_init.js?v=7", function () {
            $("#loading_div").hide();
            loadScript(scene1, function () {
                loadScript(scene2, function () {
                    $("#loading_div").hide();
                    loadScript(scripts_loader_fpath, function () {
                        loadScripts();
                    });
                    loadScript("./assets/js/common/anoor/game.js?v=7", function () {

                    });
                });
            });

        });
    });
}


allowed_lang = {
    "english": "eng",
    "tamil": "tam",
    "hindi": "hin",
    "telugu": "tel",
    "malayalam": "mal",
    "kannada": "kan",
    "marathi": "mar",
    "gujarati": "guj",
    "punjabi": "pun",
    "assamese": "ass",
    "bengali": "ben",
    "mizo": "miz",
    "marwari": "maw",
    "bengali": "ben",
    "oriya": "ori"
};
allowed_other_lang = {
    "hindi": "hin",
    "tamil": "tam",
    "telugu": "tel",
    "malayalam": "mal",
    "kannada": "kan",
    "marathi": "mar",
    "gujarati": "guj",
    "punjabi": "pun",
    "assamese": "ass",
    "bengali": "ben",
    "mizo": "miz",
    "marwari": "maw",
    "bengali": "ben",
    "oriya": "ori"
};

const scripts_loader_fpath = './assets/js/common/anoor/scripts_loader.js';


function call_validate_url() {

    // loadScript(s1_path, function() {

    loadScript(s2_path, function () {

        loadScript(s3_path, function () {

            var obj = new Object();
            obj.pivc_url = window.cur_url;
            cur_url_data = playE(JSON.stringify(obj), sessionKey);
            console.log(cur_url_data);
            var form = new FormData();
            form.append("data", cur_url_data.encrypted_data);
            form.append("key", cur_url_data.encrypted_key);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": kfd_validate_url_api,
                "method": "POST",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": form,
                "timeout": 30000
            }

            // $.ajax(kfd_validate_url_api, { 'pivc_url': cur_url }, function (data) { }, 'json').done(function (data) {

            $.ajax(settings).done(function (data) {

                data = playECheck((data), sessionKey);
                data = JSON.parse(data);
                if (data == 404) {
                    window.product = "404";
                    window.product_slug = GetFriendlyName(window.product);
                    window.flow_slug = GetFriendlyName(window.product);
                    load_game_js(window.flow_slug);
                } else if (data.status) {
                    //console.log("enter : main");
                    if (data.expired) {
                        window.product = "expiry";
                        window.product_slug = GetFriendlyName(window.product);
                        window.flow_slug = GetFriendlyName(window.product);
                        load_game_js(window.flow_slug);
                    } else if (data.completed) {
                        window.product = "completed";
                        window.product_slug = GetFriendlyName(window.product);
                        window.flow_slug = GetFriendlyName(window.product);
                        load_game_js(window.flow_slug);
                    } else {
                        window.base_url = getBaseURL();
                        //Kotak pivc
                        window.res_params = data.output;
                        window.reference_no = (window.res_params.reference_no) ? window.res_params.reference_no : ' ';
                        window.p_address = (window.res_params.ADDRESS) ? window.res_params.ADDRESS : ' ';
                        window.p_customer_name = (window.res_params.CUSTOMER_NAME) ? window.res_params.CUSTOMER_NAME : ' ';
                        window.p_dob = (window.res_params.DOB) ? window.res_params.DOB : ' ';
                        window.p_email = (window.res_params.EMAIL) ? window.res_params.EMAIL : ' ';
                        window.p_mobile_number = (window.res_params.MOBILE_NUMBER) ? window.res_params.MOBILE_NUMBER : ' ';
                        window.p_preferred_lang = (window.res_params.PREFERED_LANG) ? window.res_params.PREFERED_LANG : ' ';

                        window.p_payment_type = (window.res_params.PAYMENT_TYPE) ? window.res_params.PAYMENT_TYPE : ' ';
                        //window.p_benefit_term = (window.res_params.PREMIUM_PAYING_TERM) ? window.res_params.PREMIUM_PAYING_TERM : ' ';
                        window.p_proposal_number = (window.res_params.PROPOSAL_NUMBER) ? window.res_params.PROPOSAL_NUMBER : ' ';
                        window.proposal_no = (window.res_params.PROPOSAL_NUMBER) ? window.res_params.PROPOSAL_NUMBER : ' ';
                        window.p_policy_no = (window.res_params.policy_no) ? window.res_params.policy_no : ' ';

                        //plan Count
                        window.plan_count = (window.res_params.plan_count) ? window.res_params.plan_count : ' ';

                        // ✅ Handle dynamic plan data
                        if (Array.isArray(window.res_params)) {
                            for (let i = 0; i < window.res_params.length; i++) {
                                const planIndex = i === 0 ? '' : `_${i + 1}`;
                                const dataPlan = window.res_params[i];

                                window[`p_product_name${planIndex}`] = dataPlan.PRODUCT_NAME || ' ';
                                window[`p_sum_assured${planIndex}`] = dataPlan.SUM_ASSURED || ' ';
                                window[`p_life_insured_name${planIndex}`] = dataPlan.life_insured_name || ' ';
                                window[`p_premium_amount${planIndex}`] = dataPlan.PREMIUM_AMOUNT || ' ';
                                window[`p_premium_paying_term${planIndex}`] = dataPlan.PREMIUM_PAYING_TERM || ' ';
                                window[`p_policy_term${planIndex}`] = dataPlan.POLICY_TERM || ' ';
                                window[`p_frequency${planIndex}`] = dataPlan.PREMIUM_PAYING || ' ';
                            }
                        } else {
                            window.p_product_name = window.res_params.PRODUCT_NAME || ' ';
                            window.p_sum_assured = window.res_params.SUM_ASSURED || ' ';
                            window.p_life_insured_name = window.res_params.life_insured_name || ' ';
                            window.p_premium_amount = window.res_params.PREMIUM_AMOUNT || ' ';
                            window.p_premium_paying_term = window.res_params.PREMIUM_PAYING_TERM || ' ';
                            window.p_policy_term = window.res_params.POLICY_TERM || ' ';
                            window.p_frequency = window.res_params.PREMIUM_PAYING || ' ';
                        }

                        // ✅ Handle dynamic plan data
                        if (Array.isArray(window.res_params)) {
                            for (let i = 0; i < window.res_params.length; i++) {
                                const planIndex = i === 0 ? '' : `_${i + 1}`;
                                const dataPlan = window.res_params[i];

                                window[`p_rider1_term${planIndex}`] = dataPlan.rider1_term || 'NA';
                                window[`p_rider2_term${planIndex}`] = dataPlan.rider2_term || 'NA';
                                window[`p_rider3_term${planIndex}`] = dataPlan.rider3_term || 'NA';
                                window[`p_rider4_term${planIndex}`] = dataPlan.rider4_term || 'NA';
                                window[`p_rider5_term${planIndex}`] = dataPlan.rider5_term || 'NA';
                            }
                        } else {
                            window.p_rider1_term = window.res_params.rider1_term || 'NA';
                            window.p_rider2_term = window.res_params.rider2_term || 'NA';
                            window.p_rider3_term = window.res_params.rider3_term || 'NA';
                            window.p_rider4_term = window.res_params.rider4_term || 'NA';
                            window.p_rider5_term = window.res_params.rider5_term || 'NA';
                        }

                        // ✅ Handle dynamic plan data
                        if (Array.isArray(window.res_params)) {
                            for (let i = 0; i < window.res_params.length; i++) {
                                const planIndex = i === 0 ? '' : `_${i + 1}`;
                                const dataPlan = window.res_params[i];

                                window[`p_rider1_sum_assured${planIndex}`] = dataPlan.rider1_sum_assured || 'NA';
                                window[`p_rider2_sum_assured${planIndex}`] = dataPlan.rider2_sum_assured || 'NA';
                                window[`p_rider3_sum_assured${planIndex}`] = dataPlan.rider3_sum_assured || 'NA';
                                window[`p_rider4_sum_assured${planIndex}`] = dataPlan.rider4_sum_assured || 'NA';
                                window[`p_rider5_sum_assured${planIndex}`] = dataPlan.rider5_sum_assured || 'NA';
                            }
                        } else {
                            window.p_rider1_sum_assured = window.res_params.rider1_sum_assured || 'NA';
                            window.p_rider2_sum_assured = window.res_params.rider2_sum_assured || 'NA';
                            window.p_rider3_sum_assured = window.res_params.rider3_sum_assured || 'NA';
                            window.p_rider4_sum_assured = window.res_params.rider4_sum_assured || 'NA';
                            window.p_rider5_sum_assured = window.res_params.rider5_sum_assured || 'NA';
                        }

                        // ✅ Handle dynamic plan data
                        if (Array.isArray(window.res_params)) {
                            for (let i = 0; i < window.res_params.length; i++) {
                                const planIndex = i === 0 ? '' : `_${i + 1}`;
                                const dataPlan = window.res_params[i];

                                window[`p_rider1${planIndex}`] = dataPlan.rider1 || 'NA';
                                window[`p_rider2${planIndex}`] = dataPlan.rider2 || 'NA';
                                window[`p_rider3${planIndex}`] = dataPlan.rider3 || 'NA';
                                window[`p_rider4${planIndex}`] = dataPlan.rider4 || 'NA';
                                window[`p_rider5${planIndex}`] = dataPlan.rider5 || 'NA';
                            }
                        } else {
                            window.p_rider1 = window.res_params.rider1 || 'NA';
                            window.p_rider2 = window.res_params.rider2 || 'NA';
                            window.p_rider3 = window.res_params.rider3 || 'NA';
                            window.p_rider4 = window.res_params.rider4 || 'NA';
                            window.p_rider5 = window.res_params.rider5 || 'NA';
                        }

                        // window.p_rider1_term = (window.res_params.rider1_term) ? window.res_params.rider1_term : 'NA';
                        // window.p_rider2_term = (window.res_params.rider2_term) ? window.res_params.rider2_term : 'NA';
                        // window.p_rider3_term = (window.res_params.rider3_term) ? window.res_params.rider3_term : 'NA';
                        // window.p_rider4_term = (window.res_params.rider4_term) ? window.res_params.rider4_term : 'NA';
                        // window.p_rider5_term = (window.res_params.rider5_term) ? window.res_params.rider5_term : 'NA';

                        // window.p_rider1_sum_assured = (window.res_params.rider1_sum_assured) ? window.res_params.rider1_sum_assured : 'NA';
                        // window.p_rider2_sum_assured = (window.res_params.rider2_sum_assured) ? window.res_params.rider2_sum_assured : 'NA';
                        // window.p_rider3_sum_assured = (window.res_params.rider3_sum_assured) ? window.res_params.rider3_sum_assured : 'NA';
                        // window.p_rider4_sum_assured = (window.res_params.rider4_sum_assured) ? window.res_params.rider4_sum_assured : 'NA';
                        // window.p_rider5_sum_assured = (window.res_params.rider5_sum_assured) ? window.res_params.rider5_sum_assured : 'NA';


                        // window.p_rider1 = (window.res_params.rider1) ? window.res_params.rider1 : 'NA';
                        // window.p_rider2 = (window.res_params.rider2) ? window.res_params.rider2 : 'NA';
                        // window.p_rider3 = (window.res_params.rider3) ? window.res_params.rider3 : 'NA';
                        // window.p_rider4 = (window.res_params.rider4) ? window.res_params.rider4 : 'NA';
                        // window.p_rider5 = (window.res_params.rider5) ? window.res_params.rider5 : 'NA';


                        // ['p_rider1', 'p_rider2', 'p_rider3', 'p_rider4', 'p_rider5'].forEach(key => {
                        //     if (window[key] === '') {
                        //         window[key] = 'NA';
                        //     }
                        //     else if (window[key] === 'NA') {
                        //         window[key] = 'NA';
                        //     }
                        // });

                        // window.product_disclaimer = (window.res_params.product_disclaimer) ? window.res_params.product_disclaimer : ' ';
                        // window.tax_disclaimer = (window.res_params.tax_disclaimer) ? window.res_params.tax_disclaimer : ' ';

                        window.prefered_lang_slug = allowed_lang.hasOwnProperty(window.PREFERED_LANG) ? allowed_lang[window.PREFERED_LANG] : 'eng';
                        window.PREFERED_LANG_NAME = allowed_other_lang.hasOwnProperty(window.PREFERED_LANG) ? getLocalName(window.PREFERED_LANG) : false;

                        window.flow_slug = data.flow_key;
                        window.link_key = data.lkey;


                        loadScript('assets/js/common/anoor/api_helper.js', function () {

                            connectionType();

                        });

                        load_game_js(window.flow_slug);
                    }


                } else {
                    window.product = "404";
                    window.product_slug = GetFriendlyName(window.product);
                    window.flow_slug = GetFriendlyName(window.product);
                    load_game_js(window.flow_slug);
                }
            }).fail(function () {
                window.product = "404";
                window.product_slug = GetFriendlyName(window.product);
                window.flow_slug = GetFriendlyName(window.product);
                load_game_js(window.flow_slug);
            });
        });


    });
}


function init_faceapi() {

    var faceapi_helper_path = './assets/js/common/anoor/faceapi_helper.js'
    var faceapi_lib_path = './assets/js/common/camera/faceapi/face-api.js';
    loadScript(faceapi_lib_path, function () {

        loadScript(faceapi_helper_path, function () {

            LoadFaceModels('./assets/js/common/camera/faceapi').then(() => {
                //console.log("FaceAPI Models Loaded");
                return;
            });

        });

    });
}

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    script.onerror = () => console.error("Failed to load:", src);
    document.head.appendChild(script);
}

function evaluateExpression(str2) {
    try {
        const parts = str2.split('.');
        let value = window;
        for (let i = 1; i < parts.length; i++) { // Skip "window"
            value = value[parts[i]];
            if (value === undefined) return undefined;
        }
        return value;
    } catch (err) {
        console.warn("Failed to resolve:", str2, err);
        return undefined;
    }
}

function callFunctionString(str) {
    try {
        const fnMatch = str.match(/^([a-zA-Z_$][\w$]*)\s*\((.*)\)$/);
        if (!fnMatch) throw new Error("Invalid function format: " + str);
        const fnName = fnMatch[1];
        const rawArgs = fnMatch[2].trim();
        let args = [];
        if (rawArgs.length > 0) {
            // Smart split that avoids breaking on commas inside strings
            const splitArgs = rawArgs.match(/('[^']*'|"[^"]*"|[^,]+)/g);
            args = splitArgs.map(arg => {
                arg = arg.trim();
                if (arg === "true") return true;
                if (arg === "false") return false;
                if (arg === "null") return null;
                if (/^-?\d+(\.\d+)?$/.test(arg)) return parseFloat(arg);
                if ((arg.startsWith('"') && arg.endsWith('"')) ||
                    (arg.startsWith("'") && arg.endsWith("'"))) {
                    return arg.slice(1, -1).replace(/\\(['"])/g, '$1'); // handle escaped quotes
                }
                throw new Error("Unsupported argument format: " + arg);
            });
        }
        const fn = window[fnName];
        if (typeof fn !== "function") {
            console.warn("Function not found:", fnName);
            return;
        }
        return fn(...args);
    } catch (err) {
        console.error("callFunctionString failed:", str, err);
    }
}