var rider_name, rider_name_2, rider_name_3, rider_name_4, rider_name_5, rider_name_6;
var rider_plan, rider_plan_2, rider_plan_3, rider_plan_4, rider_plan_5, rider_plan_6;
var sum_assured, sum_assured_2, sum_assured_3, sum_assured_4, sum_assured_5, sum_assured_6;
var term, term_2, term_3, term_4, term_5, term_6;

var scroller_panel_rider, scroller_panel_rider_2, scroller_panel_rider_3, scroller_panel_rider_4, scroller_panel_rider_5, scroller_panel_rider_6;


var Rider_count = 1;
var Rider_count_1 = window.res_params.plan_count;
var Rider_totalCount = window.res_params.plan_count;

var p_product_name_2 = window.res_params[2]?.PRODUCT_NAME || ' ';
var p_product_name_3 = window.res_params[3]?.PRODUCT_NAME || ' ';
var p_product_name_4 = window.res_params[4]?.PRODUCT_NAME || ' ';
var p_product_name_5 = window.res_params[5]?.PRODUCT_NAME || ' ';
var p_product_name_6 = window.res_params[6]?.PRODUCT_NAME || ' ';


function updatePlanTextAlpha_Rider() {

    if (Rider_count_1 === 1) {
        getTextObject(window.product_language_data.rider_details.single_plan).alpha = 1;

        getSpriteObject('next_icon').alpha = 0;
        getSpriteObject('back_icon').alpha = 0;
    } else {
        getTextObject(window.product_language_data.rider_details.combo_plan_1).alpha = 1;

        getTextObject(window.res_params.plan_count).alpha = 1;

        getTextObject(window.product_language_data.rider_details.combo_plan_2).alpha = 1;
    }
}
function RiderScrollers() {

    switch (Rider_count) {

        case 1:
            if (!scroller_panel_rider) Rider_scroller();

            if (scroller_panel_rider) scroller_panel_rider.alpha = 1;
            if (scroller_panel_rider_2) scroller_panel_rider_2.alpha = 0;
            if (scroller_panel_rider_3) scroller_panel_rider_3.alpha = 0;
            if (scroller_panel_rider_4) scroller_panel_rider_4.alpha = 0;
            if (scroller_panel_rider_5) scroller_panel_rider_5.alpha = 0;
            if (scroller_panel_rider_6) scroller_panel_rider_6.alpha = 0;

            getTextObject(window.p_product_name).alpha = 1;
            getTextObject(window.p_product_name_2).alpha = 0;
            getTextObject(window.p_product_name_3).alpha = 0;
            getTextObject(window.p_product_name_4).alpha = 0;
            getTextObject(window.p_product_name_5).alpha = 0;
            getTextObject(window.p_product_name_6).alpha = 0;

            getTextObject('1').alpha = 1;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            break;

        case 2:

            if (!scroller_panel_rider_2) Rider_scroller_2();

            if (scroller_panel_rider) scroller_panel_rider.alpha = 0;
            if (scroller_panel_rider_2) scroller_panel_rider_2.alpha = 1;
            if (scroller_panel_rider_3) scroller_panel_rider_3.alpha = 0;
            if (scroller_panel_rider_4) scroller_panel_rider_4.alpha = 0;
            if (scroller_panel_rider_5) scroller_panel_rider_5.alpha = 0;
            if (scroller_panel_rider_6) scroller_panel_rider_6.alpha = 0;

            getTextObject(window.p_product_name).alpha = 0;
            getTextObject(window.p_product_name_2).alpha = 1;
            getTextObject(window.p_product_name_3).alpha = 0;
            getTextObject(window.p_product_name_4).alpha = 0;
            getTextObject(window.p_product_name_5).alpha = 0;
            getTextObject(window.p_product_name_6).alpha = 0;

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 1;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            break;
        case 3:

            if (!scroller_panel_rider_3) Rider_scroller_3();

            if (scroller_panel_rider) scroller_panel_rider.alpha = 0;
            if (scroller_panel_rider_2) scroller_panel_rider_2.alpha = 0;
            if (scroller_panel_rider_3) scroller_panel_rider_3.alpha = 1;
            if (scroller_panel_rider_4) scroller_panel_rider_4.alpha = 0;
            if (scroller_panel_rider_5) scroller_panel_rider_5.alpha = 0;
            if (scroller_panel_rider_6) scroller_panel_rider_6.alpha = 0;

            getTextObject(window.p_product_name).alpha = 0;
            getTextObject(window.p_product_name_2).alpha = 0;
            getTextObject(window.p_product_name_3).alpha = 1;
            getTextObject(window.p_product_name_4).alpha = 0;
            getTextObject(window.p_product_name_5).alpha = 0;
            getTextObject(window.p_product_name_6).alpha = 0;

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 1;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            break;
    }
}



function nextPolicy_Rider() {

    countCheck();

    if (Rider_count < Rider_totalCount) {
        Rider_count++;
        RiderScrollers();

        if (Rider_count === Rider_totalCount) {
            getSpriteObject('proceed_btn').alpha = 1;
            getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 1;
        } else {
            getSpriteObject('proceed_btn').alpha = 0;
            getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 0;
        }

    } else {
        var lastPolicyText = getTextObject(window.product_language_data.declaration_screen.last_policy);
        lastPolicyText.alpha = 1;

        setTimeout(function () {
            lastPolicyText.alpha = 0;
        }, 3000);
    }
}


function prevPolicy_Rider() {

    countCheck();

    if (Rider_count > 1) {
        Rider_count--;
        RiderScrollers();

        getSpriteObject('proceed_btn').alpha = 0;
        getTextObject(window.product_language_data.photo_consent_screen.next_btn).alpha = 0;

    } else {
        var firstPolicyText = getTextObject(window.product_language_data.declaration_screen.first_policy);
        firstPolicyText.alpha = 1;

        setTimeout(function () {
            firstPolicyText.alpha = 0;
        }, 3000);
        // alert("You are already on the first policy!");

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

//1st scroller

function addRiderScroller(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name, rider_sum_assured, rider_plan) {
    scroller_panel_rider = game.rexUI.add.scrollablePanel({

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
            child: createRiderDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name, rider_sum_assured, rider_plan),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_rider);

    return scroller_panel_rider;
}

function createRiderDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name, rider_sum_assured, rider_plan) {
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

    for (i = 0; i < rider_plan.length; i++) {
        sizer.add(createRiderDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name[i], rider_plan[i], rider_sum_assured[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createRiderDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name, rider_sum_assured, rider_plan) {
    var staticWidth = 900;

    var rider_text = addTextToGame(rider_name, 0, 0, "Roboto-Regular", 46, "#1E4679", "left", 870, 0, 0.5, false);
    var rider_sumcap = addTextToGame(rider_sum_assured, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(rider_plan, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    // var rider_termcap = addTextToGame(rider_term, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, rider_name);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
        .add(rider_sumcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
    // .add(rider_termcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function Rider_scroller() {
    rider_name = [
        window.product_language_data.rider_details.rider1,
        window.product_language_data.rider_details.rider2,
        window.product_language_data.rider_details.rider3,
        window.product_language_data.rider_details.rider4,
        window.product_language_data.rider_details.rider5
    ]

    rider_plan_name = [

    ]

    rider_sum_assured = [
        window.product_language_data.rider_details.sum_assured + " : " + window.p_rider1_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.p_rider1_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.p_rider2_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.p_rider2_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.p_rider3_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.p_rider3_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.p_rider4_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.p_rider4_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.p_rider5_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.p_rider5_term
    ]

    rider_plan = [
        window.p_rider1,
        window.p_rider2,
        window.p_rider3,
        window.p_rider4,
        window.p_rider5
    ]

    addRiderScroller(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, rider_name, rider_sum_assured, rider_plan);
}

//2nd scroller

function addRiderScroller_2(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_2, rider_sum_assured_2, rider_plan_2) {
    scroller_panel_rider_2 = game.rexUI.add.scrollablePanel({

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
            child: createRiderDetailsPanel_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_2, rider_sum_assured_2, rider_plan_2),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_rider_2);

    return scroller_panel_rider_2;
}

function createRiderDetailsPanel_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_2, rider_sum_assured_2, rider_plan_2) {
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

    for (i = 0; i < rider_plan_2.length; i++) {
        sizer.add(createRiderDetailsSet_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_2[i], rider_plan_2[i], rider_sum_assured_2[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createRiderDetailsSet_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_2, rider_sum_assured_2, rider_plan_2) {
    var staticWidth = 900;

    var rider_text = addTextToGame(rider_name_2, 0, 0, "Roboto-Regular", 46, "#1E4679", "left", 870, 0, 0.5, false);
    var rider_sumcap = addTextToGame(rider_sum_assured_2, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(rider_plan_2, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    // var rider_termcap = addTextToGame(rider_term, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, rider_name_2);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
        .add(rider_sumcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
    // .add(rider_termcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function Rider_scroller_2() {
    rider_name_2 = [
        window.product_language_data.rider_details.rider1,
        window.product_language_data.rider_details.rider2,
        window.product_language_data.rider_details.rider3,
        window.product_language_data.rider_details.rider4,
        window.product_language_data.rider_details.rider5
    ]

    rider_plan_2_name = [

    ]

    rider_sum_assured_2 = [
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[2].rider1_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[2].rider1_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[2].rider2_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[2].rider2_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[2].rider3_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[2].rider3_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[2].rider4_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[2].rider4_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[2].rider5_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[2].rider5_term
    ]

    rider_plan_2 = [
        window.res_params[2].rider1,
        window.res_params[2].rider2,
        window.res_params[2].rider3,
        window.res_params[2].rider4,
        window.res_params[2].rider5
    ]

    addRiderScroller_2(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, rider_name_2, rider_sum_assured_2, rider_plan_2);
}

//3rd scroller

function addRiderScroller_3(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_3, rider_sum_assured_3, rider_plan_3) {
    scroller_panel_rider_3 = game.rexUI.add.scrollablePanel({

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
            child: createRiderDetailsPanel_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_3, rider_sum_assured_3, rider_plan_3),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_rider_3);

    return scroller_panel_rider_3;
}

function createRiderDetailsPanel_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_3, rider_sum_assured_3, rider_plan_3) {
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

    for (i = 0; i < rider_plan_3.length; i++) {
        sizer.add(createRiderDetailsSet_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_3[i], rider_plan_3[i], rider_sum_assured_3[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createRiderDetailsSet_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_3, rider_sum_assured_3, rider_plan_3) {
    var staticWidth = 900;

    var rider_text = addTextToGame(rider_name_3, 0, 0, "Roboto-Regular", 46, "#1E4679", "left", 870, 0, 0.5, false);
    var rider_sumcap = addTextToGame(rider_sum_assured_3, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(rider_plan_3, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    // var rider_termcap = addTextToGame(rider_term, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, rider_name_3);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
        .add(rider_sumcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
    // .add(rider_termcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function Rider_scroller_3() {
    rider_name_3 = [
        window.product_language_data.rider_details.rider1,
        window.product_language_data.rider_details.rider2,
        window.product_language_data.rider_details.rider3,
        window.product_language_data.rider_details.rider4,
        window.product_language_data.rider_details.rider5
    ]

    rider_plan_3_name = [

    ]

    rider_sum_assured_3 = [
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[3].rider1_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider1_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[3].rider2_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider2_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[3].rider3_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider3_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[3].rider4_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider4_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[3].rider5_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider5_term
    ]

    rider_plan_3 = [
        window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider1_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider2_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider3_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider4_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[3].p_rider5_term
    ]

    addRiderScroller_3(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, rider_name_3, rider_sum_assured_3, rider_plan_3);
}

//4th scroller


function addRiderScroller_4(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_4, rider_sum_assured_4, rider_plan_4) {
    scroller_panel_rider_4 = game.rexUI.add.scrollablePanel({

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
            child: createRiderDetailsPanel_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_4, rider_sum_assured_4, rider_plan_4),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_rider_4);

    return scroller_panel_rider_4;
}

function createRiderDetailsPanel_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_4, rider_sum_assured_4, rider_plan_4) {
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

    for (i = 0; i < rider_plan_4.length; i++) {
        sizer.add(createRiderDetailsSet_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_4[i], rider_plan_4[i], rider_sum_assured_4[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createRiderDetailsSet_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_4, rider_sum_assured_4, rider_plan_4) {
    var staticWidth = 900;

    var rider_text = addTextToGame(rider_name_4, 0, 0, "Roboto-Regular", 46, "#1E4679", "left", 870, 0, 0.5, false);
    var rider_sumcap = addTextToGame(rider_sum_assured_4, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(rider_plan_4, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    // var rider_termcap = addTextToGame(rider_term, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, rider_name_4);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
        .add(rider_sumcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
    // .add(rider_termcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function Rider_scroller_4() {
    rider_name_4 = [
        window.product_language_data.rider_details.rider1,
        window.product_language_data.rider_details.rider2,
        window.product_language_data.rider_details.rider3,
        window.product_language_data.rider_details.rider4,
        window.product_language_data.rider_details.rider5
    ]

    rider_plan_4_name = [

    ]

    rider_sum_assured_4 = [
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[4].rider1_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider1_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[4].rider2_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider2_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[4].rider3_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider3_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[4].rider4_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider4_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[4].rider5_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider5_term
    ]

    rider_plan_4 = [
        window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider1_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider2_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider3_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider4_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[4].p_rider5_term
    ]

    addRiderScroller_4(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, rider_name_4, rider_sum_assured_4, rider_plan_4);
}

//5th scroller


function addRiderScroller_5(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_5, rider_sum_assured_5, rider_plan_5) {
    scroller_panel_rider_5 = game.rexUI.add.scrollablePanel({

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
            child: createRiderDetailsPanel_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_5, rider_sum_assured_5, rider_plan_5),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_rider_5);

    return scroller_panel_rider_5;
}

function createRiderDetailsPanel_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_5, rider_sum_assured_5, rider_plan_5) {
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

    for (i = 0; i < rider_plan_5.length; i++) {
        sizer.add(createRiderDetailsSet_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_5[i], rider_plan_5[i], rider_sum_assured_5[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createRiderDetailsSet_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_5, rider_sum_assured_5, rider_plan_5) {
    var staticWidth = 900;

    var rider_text = addTextToGame(rider_name_5, 0, 0, "Roboto-Regular", 46, "#1E4679", "left", 870, 0, 0.5, false);
    var rider_sumcap = addTextToGame(rider_sum_assured_5, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(rider_plan_5, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    // var rider_termcap = addTextToGame(rider_term, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, rider_name_5);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
        .add(rider_sumcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
    // .add(rider_termcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function Rider_scroller_5() {
    rider_name_5 = [
        window.product_language_data.rider_details.rider1,
        window.product_language_data.rider_details.rider2,
        window.product_language_data.rider_details.rider3,
        window.product_language_data.rider_details.rider4,
        window.product_language_data.rider_details.rider5
    ]

    rider_plan_5_name = [

    ]

    rider_sum_assured_5 = [
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[5].rider1_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider1_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[5].rider2_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider2_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[5].rider3_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider3_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[5].rider4_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider4_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[5].rider5_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider5_term
    ]

    rider_plan_5 = [
        window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider1_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider2_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider3_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider4_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[5].p_rider5_term
    ]

    addRiderScroller_5(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, rider_name_5, rider_sum_assured_5, rider_plan_5);
}

//6th scroller


function addRiderScroller_6(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_6, rider_sum_assured_6, rider_plan_6) {
    scroller_panel_rider_6 = game.rexUI.add.scrollablePanel({

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
            child: createRiderDetailsPanel_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_6, rider_sum_assured_6, rider_plan_6),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_rider_6);

    return scroller_panel_rider_6;
}

function createRiderDetailsPanel_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_6, rider_sum_assured_6, rider_plan_6) {
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

    for (i = 0; i < rider_plan_6.length; i++) {
        sizer.add(createRiderDetailsSet_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_6[i], rider_plan_6[i], rider_sum_assured_6[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createRiderDetailsSet_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, rider_name_6, rider_sum_assured_6, rider_plan_6) {
    var staticWidth = 900;

    var rider_text = addTextToGame(rider_name_6, 0, 0, "Roboto-Regular", 46, "#1E4679", "left", 870, 0, 0.5, false);
    var rider_sumcap = addTextToGame(rider_sum_assured_6, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    var rider_textcap = addTextToGame(rider_plan_6, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    // var rider_termcap = addTextToGame(rider_term, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);
    let icon = game.add.sprite(0, 0, rider_name_6)

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(icon, { align: 'left', padding: { left: 0, right: 10, top: 0, bottom: 0 } })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
        .add(rider_sumcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } })
    // .add(rider_termcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function Rider_scroller_6() {
    rider_name_6 = [
        window.product_language_data.rider_details.rider1,
        window.product_language_data.rider_details.rider2,
        window.product_language_data.rider_details.rider3,
        window.product_language_data.rider_details.rider4,
        window.product_language_data.rider_details.rider5
    ]

    rider_plan_6_name = [

    ]

    rider_sum_assured_6 = [
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[6].rider1_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider1_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[6].rider2_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider2_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[6].rider3_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider3_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[6].rider4_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider4_term,
        window.product_language_data.rider_details.sum_assured + " : " + window.res_params[6].rider5_sum_assured + "         " + window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider5_term
    ]

    rider_plan_6 = [
        window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider1_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider2_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider3_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider4_term,
        window.product_language_data.rider_details.term + " : " + window.res_params[6].p_rider5_term
    ]

    addRiderScroller_6(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, rider_name_6, rider_sum_assured_6, rider_plan_6);
}



