var redo = 0;
async function product_introduction_agree() {
    //hide_network_error()
    var face_detected = await facedetect_frame();
    // if (face_detected == true) {
    getSpriteObject('agree').disableInteractive();
    await call_UPDATE_LINK_RESPONSE('cPolDet', 'Policy Screen', true);
    upload_photos_and_screenshots_agree('Policy Screen', 'true', 8, 'capture');
    // }
}

function product_introduction_disagree() {
    hide_network_error();
    goToPage(screen_indexes.get('PRODUCT_INTRO_DISAGREE'))
}

async function Policy_details() {
    await call_ADD_CAPTURED_IMAGE('Policy Screen', 'false');
    await call_ADD_CAPTURED_SCREENSHOT('Policy Screen', 7);
    await waitforme(3000);
}

// var policy_label, policy_text;

function load_policy_screen() {

    setTextValue('PROPOSAL_NO', window.product_language_data.policy_details.proposal_number);
    setTextValue('SCREEN_NAME', window.product_language_data.policy_details.screen_name);
    setTextValue('PRODUCT_NAME', window.product_language_data.policy_details.product_name);
    setTextValue('MESSAGE_TEXT_1', window.product_language_data.policy_details.message_text_1);
    setTextValue('MESSAGE_TEXT_2', window.product_language_data.policy_details.message_text_2);

    setTextValue('PLAN_NAME', window.product_language_data.policy_details.plan_name);
    setTextValue('SUM_ASSURED', window.product_language_data.policy_details.sum_assured);
    setTextValue('LIFE_INSURED_NAME', window.product_language_data.policy_details.life_insured_name);
    setTextValue('PREMIUM_AMOUNT', window.product_language_data.policy_details.premium_amount);
    setTextValue('PREMIUM_PAYING_TERM', window.product_language_data.policy_details.premium_paying_term);
    setTextValue('POLICY_TERM', window.product_language_data.policy_details.policy_term);
    setTextValue('FREQUENCY', window.product_language_data.policy_details.frequency);
    setTextValue('PLAN_NAME1', window.product_language_data.policy_details.plan_name1);
    setTextValue('PLAN_NAME2', window.product_language_data.policy_details.plan_name2);
    setTextValue('PLAN_NAME3', window.product_language_data.policy_details.plan_name3);
    setTextValue('PLAN_NAME4', window.product_language_data.policy_details.plan_name4);
    setTextValue('PLAN_NAME5', window.product_language_data.policy_details.plan_name5);
    setTextValue('PLAN_NAME6', window.product_language_data.policy_details.plan_name6);
    setTextValue('FIRST_POLICY', window.product_language_data.policy_details.first_policy);
    setTextValue('LAST_POLICY', window.product_language_data.policy_details.last_policy);
    setTextValue('SINGLE_PLAN', window.product_language_data.policy_details.single_plan);
    setTextValue('COMBO_PLAN_1', window.product_language_data.policy_details.combo_plan_1);
    setTextValue('COMBO_PLAN_2', window.product_language_data.policy_details.combo_plan_2);

    setTextValue('FACE_MATCH_TXT', window.product_language_data.policy_details.face_match_txt);
    setTextValue('NEXT_BTN', window.product_language_data.policy_details.next_btn);

}
