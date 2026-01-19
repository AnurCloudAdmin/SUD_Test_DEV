var policy_label, policy_label_2, policy_label_3, policy_label_4, policy_label_5, policy_label_6;
var policy_text, policy_text_2, policy_text_3, policy_text_4, policy_text_5, policy_text_6;
var scroller_panel, scroller_panel_2, scroller_panel_3, scroller_panel_4, scroller_panel_5, scroller_panel_6;


var count = 1;
var count_1 = window.res_params.plan_count;
var totalCount = window.res_params.plan_count;

var p_product_name_2 = window.res_params[2]?.PRODUCT_NAME || ' ';
var p_product_name_3 = window.res_params[3]?.PRODUCT_NAME || ' ';
var p_product_name_4 = window.res_params[4]?.PRODUCT_NAME || ' ';
var p_product_name_5 = window.res_params[5]?.PRODUCT_NAME || ' ';
var p_product_name_6 = window.res_params[6]?.PRODUCT_NAME || ' ';

function updatePlanTextAlpha() {

    if (count_1 === 1) {
        getTextObject(window.product_language_data.policy_details.single_plan).alpha = 1;

        getSpriteObject('next_icon').alpha = 0;
        getSpriteObject('back_icon').alpha = 0;

    } else {
        getTextObject(window.product_language_data.policy_details.combo_plan_1).alpha = 1;

        getTextObject(window.res_params.plan_count).alpha = 1;

        getTextObject(window.product_language_data.policy_details.combo_plan_2).alpha = 1;
    }
}

function policyScrollers() {

    var planName1;
    var planName2;
    var planName3;
    var planName4;
    var planName5;
    var planName6;

    switch (count) {

        case 1:
            if (scroller_panel) scroller_panel.alpha = 1;
            if (scroller_panel_2) scroller_panel_2.alpha = 0;
            if (scroller_panel_3) scroller_panel_3.alpha = 0;
            if (scroller_panel_4) scroller_panel_4.alpha = 0;
            if (scroller_panel_5) scroller_panel_5.alpha = 0;
            if (scroller_panel_6) scroller_panel_6.alpha = 0;

            if (!scroller_panel) policy_scrollercall();

            getTextObject('1').alpha = 1;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            getTextObject(window.p_product_name).alpha = 1;
            getTextObject(window.p_product_name_2).alpha = 0;
            getTextObject(window.p_product_name_3).alpha = 0;
            getTextObject(window.p_product_name_4).alpha = 0;
            getTextObject(window.p_product_name_5).alpha = 0;
            getTextObject(window.p_product_name_6).alpha = 0;

            planName1 = getTextObject(window.product_language_data.policy_details.plan_name1);
            planName2 = getTextObject(window.product_language_data.policy_details.plan_name2);
            planName3 = getTextObject(window.product_language_data.policy_details.plan_name3);
            planName4 = getTextObject(window.product_language_data.policy_details.plan_name4);
            planName5 = getTextObject(window.product_language_data.policy_details.plan_name5);
            planName6 = getTextObject(window.product_language_data.policy_details.plan_name6);

            if (planName1) planName1.alpha = 1;
            if (planName2) planName2.alpha = 0;
            if (planName3) planName3.alpha = 0;
            if (planName4) planName4.alpha = 0;
            if (planName5) planName5.alpha = 0;
            if (planName6) planName6.alpha = 0;
            break;

        case 2:
            if (scroller_panel) scroller_panel.alpha = 0;
            if (scroller_panel_2) scroller_panel_2.alpha = 1;
            if (scroller_panel_3) scroller_panel_3.alpha = 0;
            if (scroller_panel_4) scroller_panel_4.alpha = 0;
            if (scroller_panel_5) scroller_panel_5.alpha = 0;
            if (scroller_panel_6) scroller_panel_6.alpha = 0;


            if (!scroller_panel_2) policy_scrollercall_2();

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 1;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            getTextObject(window.p_product_name).alpha = 0;
            getTextObject(window.p_product_name_2).alpha = 1;
            getTextObject(window.p_product_name_3).alpha = 0;
            getTextObject(window.p_product_name_4).alpha = 0;
            getTextObject(window.p_product_name_5).alpha = 0;
            getTextObject(window.p_product_name_6).alpha = 0;

            planName1 = getTextObject(window.product_language_data.policy_details.plan_name1);
            planName2 = getTextObject(window.product_language_data.policy_details.plan_name2);
            planName3 = getTextObject(window.product_language_data.policy_details.plan_name3);
            planName4 = getTextObject(window.product_language_data.policy_details.plan_name4);
            planName5 = getTextObject(window.product_language_data.policy_details.plan_name5);
            planName6 = getTextObject(window.product_language_data.policy_details.plan_name6);

            if (planName1) planName1.alpha = 0;
            if (planName2) planName2.alpha = 1;
            if (planName3) planName3.alpha = 0;
            if (planName4) planName4.alpha = 0;
            if (planName5) planName5.alpha = 0;
            if (planName6) planName6.alpha = 0;
            break;

        case 3:
            if (scroller_panel) scroller_panel.alpha = 0;
            if (scroller_panel_2) scroller_panel_2.alpha = 0;
            if (scroller_panel_3) scroller_panel_3.alpha = 1;
            if (scroller_panel_4) scroller_panel_4.alpha = 0;
            if (scroller_panel_5) scroller_panel_5.alpha = 0;
            if (scroller_panel_6) scroller_panel_6.alpha = 0;

            else policy_scrollercall_3();

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 1;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            planName1 = getTextObject(window.product_language_data.policy_details.plan_name1);
            planName2 = getTextObject(window.product_language_data.policy_details.plan_name2);
            planName3 = getTextObject(window.product_language_data.policy_details.plan_name3);
            planName4 = getTextObject(window.product_language_data.policy_details.plan_name4);
            planName5 = getTextObject(window.product_language_data.policy_details.plan_name5);
            planName6 = getTextObject(window.product_language_data.policy_details.plan_name6);

            if (planName2) planName2.alpha = 0;
            if (planName1) planName1.alpha = 0;
            if (planName3) planName3.alpha = 1;
            if (planName4) planName4.alpha = 0;
            if (planName5) planName5.alpha = 0;
            if (planName6) planName6.alpha = 0;
            break;

        case 4:
            if (scroller_panel) scroller_panel.alpha = 0;
            if (scroller_panel_2) scroller_panel_2.alpha = 0;
            if (scroller_panel_3) scroller_panel_3.alpha = 0;
            if (scroller_panel_4) scroller_panel_4.alpha = 1;
            if (scroller_panel_5) scroller_panel_5.alpha = 0;
            if (scroller_panel_6) scroller_panel_6.alpha = 0;

            else policy_scrollercall_4();

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 1;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            planName1 = getTextObject(window.product_language_data.policy_details.plan_name1);
            planName2 = getTextObject(window.product_language_data.policy_details.plan_name2);
            planName3 = getTextObject(window.product_language_data.policy_details.plan_name3);
            planName4 = getTextObject(window.product_language_data.policy_details.plan_name4);
            planName5 = getTextObject(window.product_language_data.policy_details.plan_name5);
            planName6 = getTextObject(window.product_language_data.policy_details.plan_name6);

            if (planName2) planName2.alpha = 0;
            if (planName1) planName1.alpha = 0;
            if (planName3) planName3.alpha = 0;
            if (planName4) planName4.alpha = 1;
            if (planName5) planName5.alpha = 0;
            if (planName6) planName6.alpha = 0;
            break;

        case 5:
            if (scroller_panel) scroller_panel.alpha = 0;
            if (scroller_panel_2) scroller_panel_2.alpha = 0;
            if (scroller_panel_3) scroller_panel_3.alpha = 0;
            if (scroller_panel_4) scroller_panel_4.alpha = 0;
            if (scroller_panel_5) scroller_panel_5.alpha = 1;
            if (scroller_panel_6) scroller_panel_6.alpha = 0;

            else policy_scrollercall_4();

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 1;
            getTextObject('6').alpha = 0;

            planName1 = getTextObject(window.product_language_data.policy_details.plan_name1);
            planName2 = getTextObject(window.product_language_data.policy_details.plan_name2);
            planName3 = getTextObject(window.product_language_data.policy_details.plan_name3);
            planName4 = getTextObject(window.product_language_data.policy_details.plan_name4);
            planName5 = getTextObject(window.product_language_data.policy_details.plan_name5);
            planName6 = getTextObject(window.product_language_data.policy_details.plan_name6);

            if (planName2) planName2.alpha = 0;
            if (planName1) planName1.alpha = 0;
            if (planName3) planName3.alpha = 0;
            if (planName4) planName4.alpha = 0;
            if (planName5) planName5.alpha = 1;
            if (planName6) planName6.alpha = 0;
            break;

        case 6:
            if (scroller_panel) scroller_panel.alpha = 0;
            if (scroller_panel_2) scroller_panel_2.alpha = 0;
            if (scroller_panel_3) scroller_panel_3.alpha = 0;
            if (scroller_panel_4) scroller_panel_4.alpha = 0;
            if (scroller_panel_5) scroller_panel_5.alpha = 0;
            if (scroller_panel_6) scroller_panel_6.alpha = 1;

            else policy_scrollercall_4();

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 1;

            planName1 = getTextObject(window.product_language_data.policy_details.plan_name1);
            planName2 = getTextObject(window.product_language_data.policy_details.plan_name2);
            planName3 = getTextObject(window.product_language_data.policy_details.plan_name3);
            planName4 = getTextObject(window.product_language_data.policy_details.plan_name4);
            planName5 = getTextObject(window.product_language_data.policy_details.plan_name5);
            planName6 = getTextObject(window.product_language_data.policy_details.plan_name6);

            if (planName2) planName2.alpha = 0;
            if (planName1) planName1.alpha = 0;
            if (planName3) planName3.alpha = 0;
            if (planName4) planName4.alpha = 0;
            if (planName5) planName5.alpha = 0;
            if (planName6) planName6.alpha = 1;
            break;

        default:
            console.error("Error: 'count' variable is outside the expected range (1-4). Current count: " + count);
            break;
    }
}
//1st scroller

function nextPolicy() {

    countCheck();

    if (count < totalCount) {
        count++;
        policyScrollers();

        if (count === totalCount) {
            getSpriteObject('proceed_btn').alpha = 1;
            getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 1;
        } else {
            getSpriteObject('proceed_btn').alpha = 0;
            getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 0;
        }

    } else {
        var lastPolicyText = getTextObject(window.product_language_data.policy_details.last_policy);
        lastPolicyText.alpha = 1;

        setTimeout(function () {
            lastPolicyText.alpha = 0;
        }, 3000);
    }
}

function prevPolicy() {

    countCheck();

    if (count > 1) {
        count--;
        policyScrollers();

        getSpriteObject('proceed_btn').alpha = 0;
        getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 0;

    } else {
        var firstPolicyText = getTextObject(window.product_language_data.policy_details.first_policy);
        firstPolicyText.alpha = 1;

        setTimeout(function () {
            firstPolicyText.alpha = 0;
        }, 3000);

        getSpriteObject('proceed_btn').alpha = 0;
        getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 0;
    }
}

function countCheck() {
    if (count === 1 && totalCount === 1) {
        getSpriteObject('proceed_btn').alpha = 1;
        getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 1;
    }
}


function addPolicyScroller(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label, policy_text) {
    scroller_panel = game.rexUI.add.scrollablePanel({

        x: x_pos,
        y: y_pos,
        width: width,
        height: height,

        scrollMode: 0,

        // background: game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY),

        slider: {
            track: game.rexUI.add.roundRectangle(0, 0, 13, 5, 0, COLOR_DARK),
            thumb: game.rexUI.add.roundRectangle(0, 0, 20, 20, 15, COLOR_LIGHT)
        },

        mouseWheelScroller: {
            focus: false,
            speed: 0.2
        },

        panel: {
            child: createPolicyDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label, policy_text),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel);

    return scroller_panel;
}

function createPolicyDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label, policy_text) {
    var sizer = game.rexUI.add.sizer({

        orientation: 'y',
        space: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            item: 0
        }  //300
    });

    for (i = 0; i < policy_text.length; i++) {
        sizer.add(createPolicyDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label[i], policy_text[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createPolicyDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label, policy_text) {
    var rider_text = addTextToGame(policy_text, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var staticWidth = 900;
    // var sizer;

    var rider_textcap = addTextToGame(policy_label, 0, 0, "NotoSans-Regular", 42, "#1E4679", "left", 0, 0, 0.5, false);

    let icon = game.add.sprite(0, 0, policy_label);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    /* horizontalSizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0XFF0000));
    sizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xEC9306)); */

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function policy_scrollercall() {
    policy_label = [
        window.product_language_data.policy_details.plan_name,
        window.product_language_data.policy_details.sum_assured,
        window.product_language_data.policy_details.life_insured_name,
        window.product_language_data.policy_details.premium_amount,
        window.product_language_data.policy_details.premium_paying_term,
        window.product_language_data.policy_details.policy_term,
        window.product_language_data.policy_details.frequency
    ]

    policy_text = [
        window.p_product_name,
        window.sum_assured,
        window.res_params.life_insured_name,
        window.premium_amount,
        window.premium_paying_term,
        window.policy_term,
        window.p_frequency
    ]
    addPolicyScroller(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, policy_label, policy_text);
    //    addPolicyScroller(540, 1135, 1000, 1010, 0xFFFFFF, 0xEC9306, 0x00A0E3, policy_label, policy_text);

}

//2nd scroller

function addPolicyScroller_2(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_2, policy_text_2) {
    scroller_panel_2 = game.rexUI.add.scrollablePanel({
        x: x_pos,
        y: y_pos,
        width: width,
        height: height,
        scrollMode: 0,
        slider: {
            track: game.rexUI.add.roundRectangle(0, 0, 13, 5, 0, COLOR_DARK),
            thumb: game.rexUI.add.roundRectangle(0, 0, 20, 20, 15, COLOR_LIGHT)
        },
        mouseWheelScroller: { focus: false, speed: 0.2 },
        panel: {
            child: createPolicyDetailsPanel_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_2, policy_text_2)
        },
        space: { left: 0, right: 0, top: 10, bottom: 10, panel: 0 }
    }).layout();

    obj_list.push(scroller_panel_2);
    return scroller_panel_2;
}

function createPolicyDetailsPanel_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_2, policy_text_2) {
    var sizer = game.rexUI.add.sizer({ orientation: 'y', space: { left: 0, right: 0, top: 0, bottom: 0, item: 0 } });
    for (i = 0; i < policy_text_2.length; i++) {
        sizer.add(createPolicyDetailsSet_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_2[i], policy_text_2[i]));
    }
    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));
    return sizer;
}

function createPolicyDetailsSet_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_2, policy_text_2) {
    var rider_text = addTextToGame(policy_text_2, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(policy_label_2, 0, 0, "NotoSans-Regular", 42, "#1E4679", "left", 0, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, policy_label_2);

    let horizontalSizer = game.rexUI.add.sizer({ orientation: 'x', space: { item: 10 } })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({ orientation: 'y', space: { item: 0 } })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(900, 0);
    sizer.setPosition(10, sizer.y);
    sizer.layout();
    return sizer;
}

// var b = 2;
function policy_scrollercall_2() {

    policy_label_2 = [
        window.product_language_data.policy_details.plan_name, // + " " + b,
        window.product_language_data.policy_details.sum_assured, // + " " + b,
        window.product_language_data.policy_details.life_insured_name, // + " " + b,
        window.product_language_data.policy_details.premium_amount, // + " " + b,
        window.product_language_data.policy_details.premium_paying_term, // + " " + b,
        window.product_language_data.policy_details.policy_term, // + " " + b,
        window.product_language_data.policy_details.frequency, // + " " + b
    ]

    policy_text_2 = [
        window.res_params[2].PRODUCT_NAME,
        window.res_params[2].SUM_ASSURED,
        window.res_params[2].life_insured_name,
        window.res_params[2].PREMIUM_AMOUNT,
        window.res_params[2].PREMIUM_PAYING_TERM + " Years",
        window.res_params[2].POLICY_TERM + " Years",
        window.res_params[2].PREMIUM_PAYING
    ]
    addPolicyScroller_2(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, policy_label_2, policy_text_2);
}


//3rd scroller

function addPolicyScroller_3(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_3, policy_text_3) {
    scroller_panel_3 = game.rexUI.add.scrollablePanel({
        x: x_pos,
        y: y_pos,
        width: width,
        height: height,
        scrollMode: 0,
        slider: {
            track: game.rexUI.add.roundRectangle(0, 0, 13, 5, 0, COLOR_DARK),
            thumb: game.rexUI.add.roundRectangle(0, 0, 20, 20, 15, COLOR_LIGHT)
        },
        mouseWheelScroller: { focus: false, speed: 0.2 },
        panel: {
            child: createPolicyDetailsPanel_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_3, policy_text_3)
        },
        space: { left: 0, right: 0, top: 10, bottom: 10, panel: 0 }
    }).layout();

    obj_list.push(scroller_panel_3);
    return scroller_panel_3;
}

function createPolicyDetailsPanel_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_3, policy_text_3) {
    var sizer = game.rexUI.add.sizer({ orientation: 'y', space: { left: 0, right: 0, top: 0, bottom: 0, item: 0 } });
    for (i = 0; i < policy_text_3.length; i++) {
        sizer.add(createPolicyDetailsSet_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_3[i], policy_text_3[i]));
    }
    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));
    return sizer;
}

function createPolicyDetailsSet_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_3, policy_text_3) {
    var rider_text = addTextToGame(policy_text_3, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(policy_label_3, 0, 0, "NotoSans-Regular", 42, "#1E4679", "left", 0, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, policy_label_3);

    let horizontalSizer = game.rexUI.add.sizer({ orientation: 'x', space: { item: 10 } })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({ orientation: 'y', space: { item: 0 } })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(900, 0);
    sizer.setPosition(10, sizer.y);
    sizer.layout();
    return sizer;
}

// var c = 3;
function policy_scrollercall_3() {

    policy_label_3 = [
        window.product_language_data.policy_details.plan_name, // + " " + c,
        window.product_language_data.policy_details.sum_assured, //+ " " + c,
        window.product_language_data.policy_details.life_insured_name, // + " " + c,
        window.product_language_data.policy_details.premium_amount, // + " " + c,
        window.product_language_data.policy_details.premium_paying_term, // + " " + c,
        window.product_language_data.policy_details.policy_term, // + " " + c,
        window.product_language_data.policy_details.frequency, // + " " + c
    ]

    policy_text_3 = [
        window.res_params[3].PRODUCT_NAME,
        window.res_params[3].SUM_ASSURED,
        window.res_params[3].life_insured_name,
        window.res_params[3].PREMIUM_AMOUNT,
        window.res_params[3].PREMIUM_PAYING_TERM,
        window.res_params[3].POLICY_TERM,
        window.res_params[3].PREMIUM_PAYING
    ]
    addPolicyScroller_3(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, policy_label_3, policy_text_3);
}


//4th scroller

function addPolicyScroller_4(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_4, policy_text_4) {
    scroller_panel_4 = game.rexUI.add.scrollablePanel({
        x: x_pos,
        y: y_pos,
        width: width,
        height: height,
        scrollMode: 0,
        slider: {
            track: game.rexUI.add.roundRectangle(0, 0, 13, 5, 0, COLOR_DARK),
            thumb: game.rexUI.add.roundRectangle(0, 0, 20, 20, 15, COLOR_LIGHT)
        },
        mouseWheelScroller: { focus: false, speed: 0.2 },
        panel: {
            child: createPolicyDetailsPanel_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_4, policy_text_4)
        },
        space: { left: 0, right: 0, top: 10, bottom: 10, panel: 0 }
    }).layout();

    obj_list.push(scroller_panel_4);
    return scroller_panel_4;
}

function createPolicyDetailsPanel_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_4, policy_text_4) {
    var sizer = game.rexUI.add.sizer({ orientation: 'y', space: { left: 0, right: 0, top: 0, bottom: 0, item: 0 } });
    for (i = 0; i < policy_text_4.length; i++) {
        sizer.add(createPolicyDetailsSet_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_4[i], policy_text_4[i]));
    }
    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));
    return sizer;
}

function createPolicyDetailsSet_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_4, policy_text_4) {
    var rider_text = addTextToGame(policy_text_4, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(policy_label_4, 0, 0, "NotoSans-Regular", 42, "#1E4679", "left", 0, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, policy_label_4);

    let horizontalSizer = game.rexUI.add.sizer({ orientation: 'x', space: { item: 10 } })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({ orientation: 'y', space: { item: 0 } })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(900, 0);
    sizer.setPosition(10, sizer.y);
    sizer.layout();
    return sizer;
}

// var d = 4;
function policy_scrollercall_4() {

    policy_label_4 = [
        window.product_language_data.policy_details.plan_name,  // + " " + d,
        window.product_language_data.policy_details.sum_assured,  // + " " + d,
        window.product_language_data.policy_details.life_insured_name,  // + " " + d,
        window.product_language_data.policy_details.premium_amount,  // + " " + d,
        window.product_language_data.policy_details.premium_paying_term,  // + " " + d,
        window.product_language_data.policy_details.policy_term,  // + " " + d,
        window.product_language_data.policy_details.frequency,  // + " " + d
    ]

    policy_text_4 = [
        window.res_params[4].PRODUCT_NAME,
        window.res_params[4].SUM_ASSURED,
        window.res_params[4].life_insured_name,
        window.res_params[4].PREMIUM_AMOUNT,
        window.res_params[4].PREMIUM_PAYING_TERM,
        window.res_params[4].POLICY_TERM,
        window.res_params[4].PREMIUM_PAYING
    ]
    addPolicyScroller_4(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, policy_label_4, policy_text_4);
}


//5th scroller

function addPolicyScroller_5(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_5, policy_text_5) {
    scroller_panel_5 = game.rexUI.add.scrollablePanel({
        x: x_pos,
        y: y_pos,
        width: width,
        height: height,
        scrollMode: 0,
        slider: {
            track: game.rexUI.add.roundRectangle(0, 0, 13, 5, 0, COLOR_DARK),
            thumb: game.rexUI.add.roundRectangle(0, 0, 20, 20, 15, COLOR_LIGHT)
        },
        mouseWheelScroller: { focus: false, speed: 0.2 },
        panel: {
            child: createPolicyDetailsPanel_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_5, policy_text_5)
        },
        space: { left: 0, right: 0, top: 10, bottom: 10, panel: 0 }
    }).layout();

    obj_list.push(scroller_panel_5);
    return scroller_panel_5;
}

function createPolicyDetailsPanel_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_5, policy_text_5) {
    var sizer = game.rexUI.add.sizer({ orientation: 'y', space: { left: 0, right: 0, top: 0, bottom: 0, item: 0 } });
    for (i = 0; i < policy_text_5.length; i++) {
        sizer.add(createPolicyDetailsSet_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_5[i], policy_text_5[i]));
    }
    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));
    return sizer;
}

function createPolicyDetailsSet_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_5, policy_text_5) {
    var rider_text = addTextToGame(policy_text_5, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(policy_label_5, 0, 0, "NotoSans-Regular", 42, "#1E4679", "left", 0, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, policy_label_5);

    let horizontalSizer = game.rexUI.add.sizer({ orientation: 'x', space: { item: 10 } })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({ orientation: 'y', space: { item: 0 } })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(900, 0);
    sizer.setPosition(10, sizer.y);
    sizer.layout();
    return sizer;
}

function policy_scrollercall_5() {

    policy_label_5 = [
        window.product_language_data.policy_details.plan_name,  // + " " + d,
        window.product_language_data.policy_details.sum_assured,  // + " " + d,
        window.product_language_data.policy_details.life_insured_name,  // + " " + d,
        window.product_language_data.policy_details.premium_amount,  // + " " + d,
        window.product_language_data.policy_details.premium_paying_term,  // + " " + d,
        window.product_language_data.policy_details.policy_term,  // + " " + d,
        window.product_language_data.policy_details.frequency,  // + " " + d
    ]

    policy_text_5 = [
        window.res_params[5].PRODUCT_NAME,
        window.res_params[5].SUM_ASSURED,
        window.res_params[5].life_insured_name,
        window.res_params[5].PREMIUM_AMOUNT,
        window.res_params[5].PREMIUM_PAYING_TERM,
        window.res_params[5].POLICY_TERM,
        window.res_params[5].PREMIUM_PAYING
    ]
    addPolicyScroller_5(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, policy_label_5, policy_text_5);
}


//6th scroller

function addPolicyScroller_6(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_6, policy_text_6) {
    scroller_panel_6 = game.rexUI.add.scrollablePanel({
        x: x_pos,
        y: y_pos,
        width: width,
        height: height,
        scrollMode: 0,
        slider: {
            track: game.rexUI.add.roundRectangle(0, 0, 13, 5, 0, COLOR_DARK),
            thumb: game.rexUI.add.roundRectangle(0, 0, 20, 20, 15, COLOR_LIGHT)
        },
        mouseWheelScroller: { focus: false, speed: 0.2 },
        panel: {
            child: createPolicyDetailsPanel_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_4, policy_text_4)
        },
        space: { left: 0, right: 0, top: 10, bottom: 10, panel: 0 }
    }).layout();

    obj_list.push(scroller_panel_6);
    return scroller_panel_6;
}

function createPolicyDetailsPanel_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_6, policy_text_6) {
    var sizer = game.rexUI.add.sizer({ orientation: 'y', space: { left: 0, right: 0, top: 0, bottom: 0, item: 0 } });
    for (i = 0; i < policy_text_6.length; i++) {
        sizer.add(createPolicyDetailsSet_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_6[i], policy_text_6[i]));
    }
    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));
    return sizer;
}

function createPolicyDetailsSet_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, policy_label_4, policy_text_4) {
    var rider_text = addTextToGame(policy_text_6, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(policy_label_6, 0, 0, "NotoSans-Regular", 42, "#1E4679", "left", 0, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, policy_label_6);

    let horizontalSizer = game.rexUI.add.sizer({ orientation: 'x', space: { item: 10 } })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({ orientation: 'y', space: { item: 0 } })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(900, 0);
    sizer.setPosition(10, sizer.y);
    sizer.layout();
    return sizer;
}

// var d = 4;
function policy_scrollercall_6() {

    policy_label_4 = [
        window.product_language_data.policy_details.plan_name,  // + " " + d,
        window.product_language_data.policy_details.sum_assured,  // + " " + d,
        window.product_language_data.policy_details.life_insured_name,  // + " " + d,
        window.product_language_data.policy_details.premium_amount,  // + " " + d,
        window.product_language_data.policy_details.premium_paying_term,  // + " " + d,
        window.product_language_data.policy_details.policy_term,  // + " " + d,
        window.product_language_data.policy_details.frequency,  // + " " + d
    ]

    policy_text_6 = [
        window.res_params[6].PRODUCT_NAME,
        window.res_params[6].SUM_ASSURED,
        window.res_params[6].life_insured_name,
        window.res_params[6].PREMIUM_AMOUNT,
        window.res_params[6].PREMIUM_PAYING_TERM,
        window.res_params[6].POLICY_TERM,
        window.res_params[6].PREMIUM_PAYING
    ]
    addPolicyScroller_6(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, policy_label_6, policy_text_6);
}