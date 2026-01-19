var all_scripts_loaded = false;

var camera_utility_fpath = './assets/js/common/camera/camera_utility.js';
var faceApi_path = './assets/js/common/camera/faceapi/face-api.js';
var upload_path = './assets/js/common/uploads/uploads.js';
var record_rtc_path = './assets/js/common/camera/RecordRTC.js';


var number_system_path = './assets/js/common/currency/number_system.js'
var currency_path = './assets/js/common/currency/currency_json.js'
var alphanumeric_path = './assets/js/common/alphanumeric/alphanumeric_system.js'
var date_system_path = './assets/js/common/date/date_system.js'
var moment_path = './assets/js/common/date/moment.js'


var screen_permissions_path = './assets/js/custom/permission_screen.js';
var screen_personal_path = './assets/js/custom/personal_details_screen.js';
var screen_personal_disagree_path = './assets/js/custom/personal_details_disagree_screen.js';
var screen_product_introduction_path = './assets/js/custom/policy_screen.js';
var screen_product_introduction_disagree_path = './assets/js/custom/policy_disagree_screen.js';
var screen_video_consent_path = './assets/js/custom/video_consent_screen.js';
var screen_rider_path = './assets/js/custom/rider_screen.js';
var screen_feedback_path = './assets/js/custom/feedback_screen.js';
var anurone_st_path = './assets/scripts/anurone_st_1.js';
var screen_photo_path = './assets/js/custom/photo_consent_screen.js';
var screen_upload_path = './assets/js/custom/upload_screen.js';
var screen_disclaimer_path = './assets/js/custom/disclaimer_screen.js';
var screen_thank_path = './assets/js/custom/thank_screen.js';
var plan_scroller_path = './assets/js/custom/scroller/plan_scroller.js';
var disclaimer_scroller_path = './assets/js/custom/scroller/declaration_scroller.js';
var rider_scroller_path = './assets/js/custom/scroller/rider_scroller.js';


function loadScripts() {

    loadScript(anurone_st_path, function () {

    });
    loadScript(screen_photo_path, function () {

    });
    loadScript(screen_upload_path, function () {

    });
    loadScript(screen_disclaimer_path, function () {

    });
    loadScript(screen_thank_path, function () {

    });
    loadScript(screen_rider_path, function () {

    });

    loadScript(screen_feedback_path, function () {

    });


    loadScript(record_rtc_path, function () {

    });

    loadScript(screen_video_consent_path, function () {

    });



    loadScript(screen_permissions_path, function () {

        //              loadScript(screen_welcome_path, function() {

        loadScript(screen_personal_path, function () {

            loadScript(screen_personal_disagree_path, function () {

                loadScript(screen_product_introduction_path, function () {

                    loadScript(screen_product_introduction_disagree_path, function () {

                        loadScript(plan_scroller_path, function () {

                            loadScript(disclaimer_scroller_path, function () {

                                loadScript(rider_scroller_path, function () {

                                });

                            });

                        });

                        //                                     loadScript(screen_death_benefits_path, function() {

                        //                                         loadScript(screen_death_benefits_disagree_path, function() {

                        //                                         	 loadScript(screen_important_points_path, function() {

                        //                                         	 	 loadScript(screen_thank_you_path, function() {

                        //                                                    loadScript(screen_photopreview_path, function() {       



                        //                                         });

                        //                                         });

                        //                                     });

                        //                                 });

                        //                             });

                        //                         });

                    });

                });

            });

        });

    });


    loadScript(date_system_path, function () {
        ////console.log('Date sysytem JS is Loaded');
        loadScript(moment_path, function () {
            ////console.log('Moment sysytem JS is Loaded');
            loadScript(number_system_path, function () {
                ////console.log('number sysytem JS is Loaded');
                loadScript(currency_path, function () {
                    ////console.log('currency JS is Loaded');
                    loadScript(alphanumeric_path, function () {
                        ////console.log('alphanumeric JS is Loaded');
                    });
                });
            });

        });
    });

}



