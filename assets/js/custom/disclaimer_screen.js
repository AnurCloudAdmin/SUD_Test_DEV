// async function disclaimer_details() {
//   await call_ADD_CAPTURED_IMAGE('Disclaimer Screen', 'false');
//   await call_ADD_CAPTURED_SCREENSHOT('Disclaimer Screen', 9);
//   await waitforme(3000);
// }

//   declaration_title = [window.product_language_data.declaration_screen.content,
//     window.product_language_data.declaration_screen.health_disclaimer
//         ,window.product_language_data.declaration_screen.product_disclaimer,window.product_language_data.declaration_screen.gift_declaration]

//     declaration_content = [window.product_language_data.declaration_screen.tax_declaration_text,window.product_language_data.declaration_screen.health_disclaimer_text
//         ,window.product_language_data.declaration_screen.product_discalimer_text,window.product_language_data.declaration_screen.gift_declaration_text]


function load_declaration_screen() {


    setTextValue('PROPOSAL_NO', window.product_language_data.declaration_screen.proposal_number);
    setTextValue('SCREEN_NAME', window.product_language_data.declaration_screen.screen_name);
    setTextValue('PRODUCT_NAME', window.product_language_data.declaration_screen.product_name);
    setTextValue('CONTENT', window.product_language_data.declaration_screen.content);
    setTextValue('NEXT_BTN', window.product_language_data.declaration_screen.next_btn);
    setTextValue('FACE_MATCH_TXT', window.product_language_data.declaration_screen.face_match_txt);
    setTextValue('FIRST_POLICY', window.product_language_data.declaration_screen.first_policy);
    setTextValue('LAST_POLICY', window.product_language_data.declaration_screen.last_policy);

    setTextValue('SINGLE_PLAN', window.product_language_data.declaration_screen.single_plan);
    setTextValue('COMBO_PLAN_1', window.product_language_data.declaration_screen.combo_plan_1);
    setTextValue('COMBO_PLAN_2', window.product_language_data.declaration_screen.combo_plan_2);

    setTextValue('PRODUCT_DISCLAIMER', window.product_disclaimer);
    setTextValue('TAX_DISCLAIMER', window.tax_disclaimer);

    if (getTextObject(window.product_disclaimer))
        getTextObject(window.product_disclaimer).alpha = 1;

    if (getTextObject(window.tax_disclaimer))
        getTextObject(window.tax_disclaimer).alpha = 1;

}


var declaration_title, declaration_content;


async function declaration_disagree_screen_popup() {
    await call_UPDATE_BUTTON_RESPONSE(4, "yes");
    for (var i = 0; i <= cur_sfx_list.length - 1; i++) {
        cur_sfx_list[i].stop()
    }
    getInputObject('in_declaration_disagreement').alpha = 1;
    popup('disagree_popup', 540);
    popup('cancel', 620);
    popup('save_proceed_btn', 540);
    popup_text(window.product_language_data.declaration_screen.disagree_text, 540);
    popup_text(window.product_language_data.declaration_screen.save_and_proceed, 540);

}

async function declaration_details_save_proceed() {
    if (getInputObject('in_declaration_disagreement')) {
        if (getInputObject('in_declaration_disagreement').text.trim() == '') {
            popup_text(window.product_language_data.declaration_screen.error_txt, 540);
        } else {
            getSpriteObject('save_proceed_btn').disableInteractive();
            var object = new Object();
            object.in_disagreement = getInputObject('in_declaration_disagreement').text;
            if (object.in_disagreement) {
                await call_DECLARATION_DETAILS_DISAGREE_DETAILS_UPDATE('declaration_details', JSON.stringify(object));
            }
            // await waitforme(3000); 
            goToPage(10);

            /* if(object.in_disagreement){
                await call_UPDATE_LINK_RESPONSE('cPolDet', 'Policy Screen', false);
                await call_UPDATE_EDIT_LINK_RESPONSE('ePolDet', 'Policy Screen', JSON.stringify(object));
                await call_ADD_CAPTURED_SCREENSHOT('Policy Screen', 2);
            }*/



        }
    }
}

function addDeclarationScroller(x_pos, y_pos, width, height, COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content) {
    var scroller_panel = game.rexUI.add.scrollablePanel({

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
            child: createDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content),
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

function createDetailsPanel(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content) {
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
        sizer.add(createDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title[i], declaration_content[i]));
    }

    sizer.add(game.rexUI.add.roundRectangle(0, 0, 0, 0, 0, COLOR_PRIMARY));

    return sizer;
}

function createDetailsSet(COLOR_PRIMARY, COLOR_LIGHT, COLOR_DARK, declaration_title, declaration_content) {
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
    addDeclarationScroller(540, 1135, 1000, 1010, 0xFFFFFF, 0xEC9306, 0x00A0E3, declaration_title, declaration_content);
}
