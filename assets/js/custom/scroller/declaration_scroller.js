var declaration_title, declaration_title_2, declaration_title_3, declaration_title_4, declaration_title_5, declaration_title_6;
var declaration_content, declaration_content_2, declaration_content_3, declaration_content_4, declaration_content_5, declaration_content_6;
var scroller_panel_dec, scroller_panel_dec_2, scroller_panel_dec_3, scroller_panel_dec_4, scroller_panel_dec_5, scroller_panel_dec_6;


var declaration_count = 1;
var declaration_count_1 = window.res_params.plan_count;

var declaration_totalCount = window.res_params.plan_count;

var p_product_name_2 = window.res_params[2]?.PRODUCT_NAME || ' ';
var p_product_name_3 = window.res_params[3]?.PRODUCT_NAME || ' ';
var p_product_name_4 = window.res_params[4]?.PRODUCT_NAME || ' ';
var p_product_name_5 = window.res_params[5]?.PRODUCT_NAME || ' ';
var p_product_name_6 = window.res_params[6]?.PRODUCT_NAME || ' ';

function updatePlanTextAlpha_declaration() {

    if (declaration_count_1 === 1) {
        getTextObject(window.product_language_data.declaration_screen.single_plan).alpha = 1;
        getSpriteObject('next_icon').alpha = 0;
        getSpriteObject('back_icon').alpha = 0;
    } else {
        getTextObject(window.product_language_data.declaration_screen.combo_plan_1).alpha = 1;

        getTextObject(window.res_params.plan_count).alpha = 1;

        getTextObject(window.product_language_data.declaration_screen.combo_plan_2).alpha = 1;
    }
}


function declarationScrollers() {

    switch (declaration_count) {

        case 1:
            if (!scroller_panel_dec) declaration_scroller();

            if (scroller_panel_dec) scroller_panel_dec.alpha = 1;
            if (scroller_panel_dec_2) scroller_panel_dec_2.alpha = 0;
            if (scroller_panel_dec_3) scroller_panel_dec_3.alpha = 0;
            if (scroller_panel_dec_4) scroller_panel_dec_4.alpha = 0;
            if (scroller_panel_dec_5) scroller_panel_dec_5.alpha = 0;
            if (scroller_panel_dec_6) scroller_panel_dec_6.alpha = 0;

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

            if (!scroller_panel_dec_2) declaration_scroller_2();

            if (scroller_panel_dec) scroller_panel_dec.alpha = 0;
            if (scroller_panel_dec_2) scroller_panel_dec_2.alpha = 1;
            if (scroller_panel_dec_3) scroller_panel_dec_3.alpha = 0;
            if (scroller_panel_dec_4) scroller_panel_dec_4.alpha = 0;
            if (scroller_panel_dec_5) scroller_panel_dec_5.alpha = 0;
            if (scroller_panel_dec_6) scroller_panel_dec_6.alpha = 0;

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

            if (!scroller_panel_dec_3) declaration_scroller_3();

            if (scroller_panel_dec) scroller_panel_dec.alpha = 0;
            if (scroller_panel_dec_2) scroller_panel_dec_2.alpha = 0;
            if (scroller_panel_dec_3) scroller_panel_dec_3.alpha = 1;
            if (scroller_panel_dec_4) scroller_panel_dec_4.alpha = 0;
            if (scroller_panel_dec_5) scroller_panel_dec_5.alpha = 0;
            if (scroller_panel_dec_6) scroller_panel_dec_6.alpha = 0;

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

        case 4:

            if (!scroller_panel_dec_4) declaration_scroller_4();

            if (scroller_panel_dec) scroller_panel_dec.alpha = 0;
            if (scroller_panel_dec_2) scroller_panel_dec_2.alpha = 0;
            if (scroller_panel_dec_3) scroller_panel_dec_3.alpha = 0;
            if (scroller_panel_dec_4) scroller_panel_dec_4.alpha = 1;
            if (scroller_panel_dec_5) scroller_panel_dec_5.alpha = 0;
            if (scroller_panel_dec_6) scroller_panel_dec_6.alpha = 0;

            getTextObject(window.p_product_name).alpha = 0;
            getTextObject(window.p_product_name_2).alpha = 0;
            getTextObject(window.p_product_name_3).alpha = 0;
            getTextObject(window.p_product_name_4).alpha = 1;
            getTextObject(window.p_product_name_5).alpha = 0;
            getTextObject(window.p_product_name_6).alpha = 0;

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 1;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 0;

            break;

        case 5:

            if (!scroller_panel_dec_5) declaration_scroller_5();

            if (scroller_panel_dec) scroller_panel_dec.alpha = 0;
            if (scroller_panel_dec_2) scroller_panel_dec_2.alpha = 0;
            if (scroller_panel_dec_3) scroller_panel_dec_3.alpha = 0;
            if (scroller_panel_dec_4) scroller_panel_dec_4.alpha = 0;
            if (scroller_panel_dec_5) scroller_panel_dec_5.alpha = 1;
            if (scroller_panel_dec_6) scroller_panel_dec_6.alpha = 0;

            getTextObject(window.p_product_name).alpha = 0;
            getTextObject(window.p_product_name_2).alpha = 0;
            getTextObject(window.p_product_name_3).alpha = 0;
            getTextObject(window.p_product_name_4).alpha = 0;
            getTextObject(window.p_product_name_5).alpha = 1;
            getTextObject(window.p_product_name_6).alpha = 0;

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 1;
            getTextObject('6').alpha = 0;

            break;

        case 6:

            if (!scroller_panel_dec_6) declaration_scroller_6();

            if (scroller_panel_dec) scroller_panel_dec.alpha = 0;
            if (scroller_panel_dec_2) scroller_panel_dec_2.alpha = 0;
            if (scroller_panel_dec_3) scroller_panel_dec_3.alpha = 0;
            if (scroller_panel_dec_4) scroller_panel_dec_4.alpha = 0;
            if (scroller_panel_dec_5) scroller_panel_dec_5.alpha = 0;
            if (scroller_panel_dec_6) scroller_panel_dec_6.alpha = 1;

            getTextObject(window.p_product_name).alpha = 0;
            getTextObject(window.p_product_name_2).alpha = 0;
            getTextObject(window.p_product_name_3).alpha = 0;
            getTextObject(window.p_product_name_4).alpha = 0;
            getTextObject(window.p_product_name_5).alpha = 0;
            getTextObject(window.p_product_name_6).alpha = 1;

            getTextObject('1').alpha = 0;
            getTextObject('2').alpha = 0;
            getTextObject('3').alpha = 0;
            getTextObject('4').alpha = 0;
            getTextObject('5').alpha = 0;
            getTextObject('6').alpha = 1;

            break;


    }
}


function nextPolicy_Declaration() {

    countCheck();

    if (declaration_count < declaration_totalCount) {
        declaration_count++;
        declarationScrollers();

        if (declaration_count === declaration_totalCount) {
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


function prevPolicy_Declaration() {

    countCheck();

    if (declaration_count > 1) {
        declaration_count--;
        declarationScrollers();

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

//1st scroller

function addDeclarationScroller(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content) {
    scroller_panel_dec = game.rexUI.add.scrollablePanel({

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
            child: createDeclarationDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_dec);

    return scroller_panel_dec;
}

function createDeclarationDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content) {
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

    for (i = 0; i < declaration_content.length; i++) {
        sizer.add(createDeclarationDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title[i], declaration_content[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createDeclarationDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content) {
    var rider_text = addTextToGame(declaration_title, 0, 0, "NotoSans-Regular", 42, "#93B5C3", "left", 870, 0, 0.5, false);
    var staticWidth = 900;

    var rider_textcap = addTextToGame(declaration_content, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(rider_text, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    /* horizontalSizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0XFF0000));
    sizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xEC9306)); */

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function declaration_scroller() {
    declaration_title = [
        // "Product Name",
        "Disclaimer",
        "Product Disclaimer",
        "Tax Disclaimer",
    ]

    declaration_content = [
        // window.p_product_name,
        window.product_language_data.declaration_screen.content,
        window.product_disclaimer[1],
        window.tax_disclaimer[1]
    ]
    addDeclarationScroller(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, declaration_title, declaration_content);
}



//2nd scroller


function addDeclarationScroller_2(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_2, declaration_content_2) {
    scroller_panel_dec_2 = game.rexUI.add.scrollablePanel({

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
            child: createDeclarationDetailsPanel_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_2, declaration_content_2),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_dec_2);

    return scroller_panel_dec_2;
}

function createDeclarationDetailsPanel_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_2, declaration_content_2) {
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

    for (i = 0; i < declaration_content_2.length; i++) {
        sizer.add(createDeclarationDetailsSet_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_2[i], declaration_content_2[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createDeclarationDetailsSet_2(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_2, declaration_content_2) {
    var rider_text_2 = addTextToGame(declaration_title_2, 0, 0, "NotoSans-Regular", 42, "#93B5C3", "left", 870, 0, 0.5, false);
    var staticWidth = 900;

    var rider_textcap_2 = addTextToGame(declaration_content_2, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(rider_text_2, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap_2, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    /* horizontalSizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0XFF0000));
    sizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xEC9306)); */

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function declaration_scroller_2() {
    declaration_title_2 = [
        // "Product Name",
        "Disclaimer",
        "Product Disclaimer",
        "Tax Disclaimer"

    ]

    declaration_content_2 = [
        // window.res_params[2].PRODUCT_NAME,
        window.product_language_data.declaration_screen.content,
        window.product_disclaimer[2],
        window.tax_disclaimer[2]
    ]
    addDeclarationScroller_2(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, declaration_title_2, declaration_content_2);
}


//3rd scroller


function addDeclarationScroller_3(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_3, declaration_content_3) {
    scroller_panel_dec_3 = game.rexUI.add.scrollablePanel({

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
            child: createDeclarationDetailsPanel_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_3, declaration_content_3),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_dec_3);

    return scroller_panel_dec_3;
}

function createDeclarationDetailsPanel_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_3, declaration_content_3) {
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

    for (i = 0; i < declaration_content_3.length; i++) {
        sizer.add(createDeclarationDetailsSet_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_3[i], declaration_content_3[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createDeclarationDetailsSet_3(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_3, declaration_content_3) {
    var rider_text_3 = addTextToGame(declaration_title_3, 0, 0, "NotoSans-Regular", 42, "#93B5C3", "left", 870, 0, 0.5, false);
    var staticWidth = 900;

    var rider_textcap_3 = addTextToGame(declaration_content_3, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(rider_text_3, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap_3, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    /* horizontalSizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0XFF0000));
    sizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xEC9306)); */

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function declaration_scroller_3() {
    declaration_title_3 = [
        "Product Name",
        "Product Disclaimer",
        "Tax Disclaimer",

    ]

    declaration_content_3 = [
        window.res_params[3].PRODUCT_NAME,
        window.product_language_data.declaration_screen.content,
        window.product_disclaimer[3],
        window.tax_disclaimer[3]
    ]
    addDeclarationScroller_3(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, declaration_title_3, declaration_content_3);
}


// //4th scroller


function addDeclarationScroller_4(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_4, declaration_content_4) {
    scroller_panel_dec_4 = game.rexUI.add.scrollablePanel({

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
            child: createDeclarationDetailsPanel_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_4, declaration_content_4),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_dec_4);

    return scroller_panel_dec_4;
}

function createDeclarationDetailsPanel_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_4, declaration_content_4) {
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

    for (i = 0; i < declaration_content_4.length; i++) {
        sizer.add(createDeclarationDetailsSet_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_4[i], declaration_content_4[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createDeclarationDetailsSet_4(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_4, declaration_content_4) {
    var rider_text_4 = addTextToGame(declaration_title_4, 0, 0, "NotoSans-Regular", 42, "#93B5C3", "left", 870, 0, 0.5, false);
    var staticWidth = 900;

    var rider_textcap_4 = addTextToGame(declaration_content_4, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(rider_text_4, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap_4, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    /* horizontalSizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0XFF0000));
    sizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xEC9306)); */

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function declaration_scroller_4() {
    declaration_title_4 = [
        "Product Name",
        "IRDA",
        "Tax Disclaimer",
        "Product Disclaimer"
    ]

    declaration_content_4 = [
        window.res_params[4].PRODUCT_NAME,
        window.product_language_data.declaration_screen.content,
        window.res_params.product_disclaimer,
        window.res_params.tax_disclaimer
    ]
    addDeclarationScroller_4(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, declaration_title_4, declaration_content_4);
}


//5th scroller

function addDeclarationScroller_5(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_5, declaration_content_5) {
    scroller_panel_dec_5 = game.rexUI.add.scrollablePanel({

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
            child: createDeclarationDetailsPanel_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_5, declaration_content_5),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_dec_5);

    return scroller_panel_dec_5;
}

function createDeclarationDetailsPanel_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_5, declaration_content_5) {
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

    for (i = 0; i < declaration_content_5.length; i++) {
        sizer.add(createDeclarationDetailsSet_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_5[i], declaration_content_5[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createDeclarationDetailsSet_5(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_5, declaration_content_5) {
    var rider_text_5 = addTextToGame(declaration_title_5, 0, 0, "NotoSans-Regular", 42, "#93B5C3", "left", 870, 0, 0.5, false);
    var staticWidth = 900;

    var rider_textcap_5 = addTextToGame(declaration_content_5, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(rider_text_5, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap_5, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    /* horizontalSizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0XFF0000));
    sizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xEC9306)); */

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function declaration_scroller_5() {
    declaration_title_5 = [
        "Product Name",
        "IRDA",
        "Tax Disclaimer",
        "Product Disclaimer"
    ]

    declaration_content_5 = [
        window.res_params[5].PRODUCT_NAME,
        window.product_language_data.declaration_screen.content,
        window.res_params.product_disclaimer,
        window.res_params.tax_disclaimer
    ]
    addDeclarationScroller_5(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, declaration_title_5, declaration_content_5);
}


// //6th scroller


function addDeclarationScroller_6(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_6, declaration_content_6) {
    scroller_panel_dec_6 = game.rexUI.add.scrollablePanel({

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
            child: createDeclarationDetailsPanel_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_6, declaration_content_6),
        },

        space: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
            panel: 0,

        }

    }).layout();


    obj_list.push(scroller_panel_dec_6);

    return scroller_panel_dec_6;
}

function createDeclarationDetailsPanel_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_6, declaration_content_6) {
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

    for (i = 0; i < declaration_content_6.length; i++) {
        sizer.add(createDeclarationDetailsSet_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_6[i], declaration_content_6[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createDeclarationDetailsSet_6(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title_6, declaration_content_6) {
    var rider_text_6 = addTextToGame(declaration_title_6, 0, 0, "NotoSans-Regular", 42, "#93B5C3", "left", 870, 0, 0.5, false);
    var staticWidth = 900;

    var rider_textcap_6 = addTextToGame(declaration_content_6, 0, 0, "NotoSans-Regular", 42, "#000", "left", 870, 0, 0.5, false);

    let horizontalSizer = game.rexUI.add.sizer({
        orientation: 'x', // Horizontal orientation
        space: { item: 10 } // Space between icon and textcap
    })
        .add(rider_text_6, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 0 } });

    let sizer = game.rexUI.add.sizer({
        orientation: 'y', // Main vertical sizer
        space: { item: 0 }
    })
        .add(horizontalSizer, { align: 'left', padding: { left: 0, right: 0, top: 0, bottom: 10 } })
        .add(rider_textcap_6, { align: 'left', padding: { left: 0, right: 0, top: 10, bottom: 40 } });

    sizer.setMinSize(staticWidth, 0);

    /* horizontalSizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0XFF0000));
    sizer.addBackground(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, 0xEC9306)); */

    sizer.setPosition(10, sizer.y) //sizer.y); 
    sizer.layout();

    return sizer;
}


function declaration_scroller_6() {
    declaration_title_6 = [
        "Product Name",
        "IRDA",
        "Tax Disclaimer",
        "Product Disclaimer"
    ]

    declaration_content_6 = [
        window.res_params[6].PRODUCT_NAME,
        window.product_language_data.declaration_screen.content,
        window.res_params.product_disclaimer,
        window.res_params.tax_disclaimer
    ]
    addDeclarationScroller_6(540, 1080, 1000, 950, 0xFFFFFF, 0xEC9306, 0x00A0E3, declaration_title_6, declaration_content_6);
}

