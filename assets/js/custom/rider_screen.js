var redo = 0;
async function rider_screen_agree() {
    //hide_network_error()
    var face_detected = await facedetect_frame();
    // if (face_detected == true) {
    /* getSpriteObject('agree').disableInteractive();
    await call_UPDATE_LINK_RESPONSE('cPolDet','Policy Screen',true);
    upload_photos_and_screenshots_agree('Policy Screen', 'true', 8, 'capture'); */
    await call_UPDATE_LINK_RESPONSE('crider', 'Rider Details Screen', true);
    upload_photos_and_screenshots_agree('Rider Details Screen', 'true', 9, 'capture');
    //goToPage(9);
    // }
}

async function declaration_screen_agree() {
    //hide_network_error()
    var face_detected = await facedetect_frame();
    // if (face_detected == true) {
    /* getSpriteObject('agree').disableInteractive();
    await call_UPDATE_LINK_RESPONSE('cPolDet','Policy Screen',true);
    upload_photos_and_screenshots_agree('Policy Screen', 'true', 8, 'capture'); */
    upload_photos_and_screenshots_agree('Disclaimer Screen', 'true', 10, 'capture');
    //goToPage(9);Declaration Screen
    // }
}

async function rider_disagree_save() {
    // blur_input_fields();
    // //hide_network_error();


    //     if (getInputObject('in_rider_disagreement')) {
    //         if (getInputObject('in_rider_disagreement').text.trim() == '') {
    //                 popup_text('Please Provide Input Values',540);
    //         } else {

    //             getSpriteObject('saveandproceed_btn').disableInteractive();
    //             var object = new Object();
    //             object.in_rider_disagreement = getInputObject('in_rider_disagreement').text;

    //             if(object.in_rider_disagreement ){


    await call_ADD_CAPTURED_IMAGE('Rider Details Screen', 'false');
    await call_ADD_CAPTURED_SCREENSHOT('Rider Details Screen', 2);
    // await call_UPDATE_LINK_RESPONSE('crider', 'Rider Details Screen', false);
    // await call_UPDATE_EDIT_LINK_RESPONSE('erider', 'Rider Details Screen', JSON.stringify(object));

    await waitforme(3000);
    //         goToPage(9);
    //         }

    //     }
    // }
}


async function riderscreen_popup() {

    //await call_ADD_CAPTURED_IMAGE('Policy Screen','true');
    for (var i = 0; i <= cur_sfx_list.length - 1; i++) {
        cur_sfx_list[i].stop()
    }
    getInputObject('in_rider_disagreement').alpha = 1;
    popup('policy_details_disagree', 540);
    popup('cancel', 620);
    popup('saveandproceed_btn', 540);
    popup_text('Enter your disagreement on the box provided above and click Save and Proceed', 540);

}

function load_rider_screen() {

    setTextValue('PROPOSAL_NO', window.product_language_data.rider_details.proposal_number);
    setTextValue('SCREEN_NAME', window.product_language_data.rider_details.screen_name);
    setTextValue('PRODUCT_NAME', window.product_language_data.rider_details.product_name);
    setTextValue('RIDER1', window.product_language_data.rider_details.rider1);
    setTextValue('RIDER2', window.product_language_data.rider_details.rider2);
    setTextValue('RIDER3', window.product_language_data.rider_details.rider3);
    setTextValue('RIDER4', window.product_language_data.rider_details.rider4);
    setTextValue('RIDER5', window.product_language_data.rider_details.rider5);
    setTextValue('SUM_ASSURED', window.product_language_data.rider_details.sum_assured);
    setTextValue('TERM', window.product_language_data.rider_details.term);
    setTextValue('FIRST_POLICY', window.product_language_data.rider_details.first_policy);
    setTextValue('LAST_POLICY', window.product_language_data.rider_details.last_policy);

    setTextValue('SINGLE_PLAN', window.product_language_data.rider_details.single_plan);
    setTextValue('COMBO_PLAN_1', window.product_language_data.rider_details.combo_plan_1);
    setTextValue('COMBO_PLAN_2', window.product_language_data.rider_details.combo_plan_2);

    setTextValue('FACE_MATCH_TXT', window.product_language_data.rider_details.face_match_txt);
    setTextValue('NEXT_BTN', window.product_language_data.rider_details.next_btn);

}
