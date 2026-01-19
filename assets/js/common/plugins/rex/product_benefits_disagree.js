//var products =["sbilm_retire_smart","sbilsa_retire_smart","sbilm_retire_smart_plus","sbilsa_retire_smart_plus","sbilm_smart_wealth_builder_v3","sbilsa_smart_wealth_builder_v3","sbilm_smart_scholar","sbilsa_smart_scholar","sbilpl_smart_scholar","sbilm_saral_swadhan_plus_v3","sbilsa_saral_swadhan_plus_v3"];
var smart_swadhan_content;
async function product_benefit_disagree_proceed() {
    hide_network_error();
    blur_input_fields();
    hide_error_product_benefits_disagree();

    var face_detected = await facedetect_frame();

    if (face_detected == true) {
       

        if (getInputObject('in_disagreement')) {
            if (getInputObject('in_disagreement').text.trim() == '') {
                display_error_product_benefits_disagree();
            } else {

                getSpriteObject('save').disableInteractive();

                var object = new Object();
                object.in_disagreement = getInputObject('in_disagreement').text;


                await call_ADD_CAPTURED_IMAGE('Benefit Illustration - Disagree');
                await call_ADD_CAPTURED_SCREENSHOT('Benefit Illustration - Disagree', 2);
                await call_UPDATE_EDIT_LINK_RESPONSE('eBenIll', 'Benefit Illustration - Disagree', JSON.stringify(object));
                await call_UPDATE_LINK_RESPONSE('cBenIll', 'Benefit Illustration - Disagree', false);


        if(window.flow_slug == "sbilm_smart_lifetime_saver"){

        if(redo == 1){
            await waitforme(3000);
            goToPage(screen_indexes.get('PHOTO_PREVIEW'));
        }else{
            await waitforme(2000);
            goToPage(screen_indexes.get('IMPORTANT_POINTS'));
        }
        }

               if(window.flow_slug != "sbilm_smart_lifetime_saver"){
                if (redo == 1) {
                    await waitforme(3000);
                    goToPage(screen_indexes.get('PHOTO_PREVIEW'));
                } else {
                    await waitforme(2000);
                    goToPage(screen_indexes.get('DEATH_BENEFITS'))
                }
            }

            }
        }
    }
}

function product_benefit_disagree_back() {
    hide_network_error();
    goToPage(screen_indexes.get('PRODUCT_BENEFITS_SCREEN'))
}

function load_product_benefits_disagree_screen() {

    if(getSpriteObject('face_smile_box'))
    getSpriteObject('face_smile_box').setTexture("face_box");  //for these screen we didn't capture smile

    if(getSpriteObject('smilebar'))
    getSpriteObject('smilebar').alpha=0;  //for these screen we didn't capture smile

  if(getSpriteObject('tick3'))
       getSpriteObject('tick3').x = 754;  //for only face detected

    if(getSpriteObject('face_box'))
      getSpriteObject('face_box').x=1040;;  //for only face detected


    setTextValue('PRODUCT_BENFITS_TITLE', window.product_language_data.product_benefit_disagree.title);
    setTextValue('PROCEED', window.product_language_data.product_benefit_disagree.save);
    setTextValue('PRO_NUM_LBL', window.product_language_data.welcome_screen.proposal_no + " :");
    setTextValue('SOUND_TEXT_1', window.product_language_data.welcome_screen.sound_txt1);
    setTextValue('SOUND_TEXT_2', window.product_language_data.welcome_screen.sound_txt2);
    setTextValue('QUOTE_1', window.product_language_data.product_benefit_disagree.content);
    setTextValue('BACK', window.product_language_data.personal_disagree.back);
    setTextValue('PRO_NUM', window.proposal_no);
    setTextValue('PRODUCT_NAME', window.product +"(" + window.p_UIN_NO +")");
    setTextValue('ERROR', window.product_language_data.personal_disagree.error);
    setTextValue('dis_line', window.product_language_data.product_introduction_disagree.dis_line);

    smart_swadhan_content=window.product_language_data.product_benefit_screen.pb_content1 + " "+ window.pa_policy_term_in_years + " " + window.product_language_data.product_benefit_screen.pb_content1_1 ;

//SMART PLATINA PLUS
   if((window.flow_slug == "sbilm_smart_platina_plus") || (window.flow_slug == "sbilsa_smart_platina_plus") || (window.flow_slug == "sbilpl_smart_platina_plus")){

    var platina_plus_content=window.product_language_data.product_benefit_screen.pb_income.point_1.content.replace('<GUARANTEED_INCOME>',window.p_GUARANTEED_INCOME);
    platina_plus_content=platina_plus_content.replace('<PAYMENT_FREQUENCY>',window.res_params.flow_data.strGuaranteedPayoutFrequency);
    platina_plus_content=platina_plus_content.replace('<POLICY_TERM>',window.p_PAYOUT_PERIOD);
    platina_plus_content=platina_plus_content.replace('<PAYMENT_START_YEAR>',window.payment_term_in_years_pb);
      //window.product_language_data.product_benefit_screen.pb_income.point_1.content



    var platina_plus_content_2=window.product_language_data.product_benefit_screen.pb_income.point_2.content.replace('<POLICY_TERM_IN_YEARS>',window.policy_term_in_years);
    platina_plus_content_2 = platina_plus_content_2.replace('<BI_4>',window.BI_4); 
 }


if(products.includes(window.flow_slug)){
    
    if (sysLang == 'mal')
        var pb_content = window.product_language_data.product_benefit_screen.pb_content1 + " "+ window.pa_policy_term_in_years + " " + window.product_language_data.product_benefit_screen.pb_content1_1 ;
    else
        var pb_content = window.product_language_data.product_benefit_screen.pb_content1 + " " + window.pa_policy_term_in_years + " " + window.product_language_data.product_benefit_screen.pb_content1_1;


        if((window.flow_slug == "sbilm_smart_platina_assure_v4") || (window.flow_slug == "sbilsa_smart_platina_assure_v4") || (window.flow_slug == "sbilpl_smart_platina_assure_v4") ){
   
            var platina_assure = window.product_language_data.product_benefit_screen.pb_content1_1 .replace('<BI_4>', window.res_params.flow_data.BI_4)
            var pb_content = window.product_language_data.product_benefit_screen.pb_content1 + " "+ window.pa_policy_term_in_years + " " + platina_assure;
        
         }    
   

    if (sysLang == 'eng' || sysLang == 'kan' || sysLang == 'hin' || sysLang == 'tel' || sysLang == 'mar' || sysLang == 'pun' || sysLang == 'guj' || sysLang == 'ben' || sysLang == 'ass' || sysLang == 'miz' || sysLang == 'maw' || sysLang == 'ori') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 1030,
            text: pb_content,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1360,
            text: window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 620
                },
            },
        });

        obj_list.push(txt_2);
        txt_2.setDepth(6);
        txt_2.setOrigin(0, 0.5);
    } else if (sysLang == 'tam') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 1000,
            text: pb_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1240,
            text: window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

    } else if (sysLang == 'mal') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 1000,
            text: pb_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1210,
            text: window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

    }
}
else if(window.flow_slug == 'sbilm_smart_platina_plus' || window.flow_slug == 'sbilsa_smart_platina_plus' || window.flow_slug == 'sbilpl_smart_platina_plus' ) {

    if (sysLang == 'eng' || sysLang == 'kan' || sysLang == 'hin'|| sysLang == 'tel' || sysLang == 'mar' || sysLang == 'pun' || sysLang == 'guj' || sysLang == 'ben' || sysLang == 'ass' || sysLang == 'miz' || sysLang == 'maw' || sysLang == 'ori') {
        var txt_1 = game.add.rexBBCodeText({
            x: 220,
            y: 900,
            text: platina_plus_content,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 220,
            y: 1100,
            text: platina_plus_content_2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_2);
        txt_2.setDepth(6);
        txt_2.setOrigin(0, 0.5);

        var txt_3 = game.add.rexBBCodeText({
            x: 220,
            y: 1300,
            text: window.product_language_data.product_benefit_screen.pb_income.point_3.content_1,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_3);
        txt_3.setDepth(6);
        txt_3.setOrigin(0, 0.5);

        var txt_4 = game.add.rexBBCodeText({
            x: 220,
            y: 1440,
            text: window.product_language_data.product_benefit_screen.pb_income.point_4.content_2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                fontWeight: "bold",
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 8,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_3);
        txt_3.setDepth(6);
        txt_3.setOrigin(0, 0.5);
        
    }else if (sysLang == 'tam') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 900,
            text: platina_plus_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1040,
            text: platina_plus_content_2,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        var txt_3 = game.add.rexBBCodeText({
            x: 200,
            y: 1300,
            text: window.product_language_data.product_benefit_screen.pb_income.point_3.content_1,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_3);
        txt_3.setDepth(6);
        txt_3.setOrigin(0, 0.5);

        var txt_4 = game.add.rexBBCodeText({
            x: 220,
            y: 1440,
            text: window.product_language_data.product_benefit_screen.pb_income.point_4.content_2,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                fontWeight: "bold",
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 8,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_3);
        txt_3.setDepth(6);
        txt_3.setOrigin(0, 0.5);


    } else if (sysLang == 'mal') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 900,
            text: platina_plus_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1040,
            text: platina_plus_content_2,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });


        var txt_3 = game.add.rexBBCodeText({
            x: 200,
            y: 1320,
            text: window.product_language_data.product_benefit_screen.pb_income.point_3.content_1,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_3);
        txt_3.setDepth(6);
        txt_3.setOrigin(0, 0.5);

        var txt_4 = game.add.rexBBCodeText({
            x: 220,
            y: 1440,
            text: window.product_language_data.product_benefit_screen.pb_income.point_4.content_2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                fontWeight: "bold",
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 8,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_3);
        txt_3.setDepth(6);
        txt_3.setOrigin(0, 0.5);


    }

    
}

else if(window.flow_slug == 'sbilm_smart_champ_insurance' || window.flow_slug == 'sbilsa_smart_champ_insurance' || window.flow_slug == 'sbilm_smart_bachat' || window.flow_slug == 'sbilsa_smart_bachat') {
    if (sysLang == 'eng' || sysLang == 'kan' || sysLang == 'hin'|| sysLang == 'tel' || sysLang == 'mar' || sysLang == 'pun' || sysLang == 'guj' || sysLang == 'ben' || sysLang == 'ass' || sysLang == 'miz' || sysLang == 'maw' || sysLang == 'ori'|| sysLang == 'tam'|| sysLang == 'mal') {
        var txt_1 = game.add.rexBBCodeText({
            x: 220,
            y: 1020,
            text: window.product_language_data.product_benefit_screen.pb_content1,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 220,
            y: 1370,
            text:window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_2);
        txt_2.setDepth(6);
        txt_2.setOrigin(0, 0.5);

        
    }
}


else if(window.flow_slug == 'sbilm_smart_champ_insurance' || window.flow_slug == 'sbilsa_smart_champ_insurance' || window.flow_slug == 'sbilm_smart_bachat' || window.flow_slug == 'sbilsa_smart_bachat') {
    if (sysLang == 'eng' || sysLang == 'kan' || sysLang == 'hin'|| sysLang == 'tel' || sysLang == 'mar' || sysLang == 'pun' || sysLang == 'guj' || sysLang == 'ben' || sysLang == 'ass' || sysLang == 'miz' || sysLang == 'maw' || sysLang == 'ori'|| sysLang == 'tam'|| sysLang == 'mal') {
        var txt_1 = game.add.rexBBCodeText({
            x: 220,
            y: 1020,
            text: window.product_language_data.product_benefit_screen.pb_content1,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 220,
            y: 1370,
            text:window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_2);
        txt_2.setDepth(6);
        txt_2.setOrigin(0, 0.5);

        
    }
}


else if(window.flow_slug == 'sbilm_smart_lifetime_saver' || window.flow_slug == 'sbilsa_lifetime_saver' ) {
    if (sysLang == 'eng' || sysLang == 'kan' || sysLang == 'hin'|| sysLang == 'tel' || sysLang == 'mar' || sysLang == 'pun' || sysLang == 'guj' || sysLang == 'ben' || sysLang == 'ass' || sysLang == 'miz' || sysLang == 'maw' || sysLang == 'ori'|| sysLang == 'tam'|| sysLang == 'mal') {
        var txt_1 = game.add.rexBBCodeText({
            x: 220,
            y: 900,
            text: window.product_language_data.product_benefit_screen.sub_title1,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                fontWeight: "bold",
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 220,
            y: 1060,
            text: window.product_language_data.product_benefit_screen.pb_content1,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_2);
        txt_2.setDepth(6);
        txt_2.setOrigin(0, 0.5);

        var txt_3 = game.add.rexBBCodeText({
            x: 220,
            y: 1290,
            text: window.product_language_data.product_benefit_screen.sub_title2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                fontWeight: "bold",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_3);
        txt_3.setDepth(6);
        txt_3.setOrigin(0, 0.5);

        var txt_4 = game.add.rexBBCodeText({
            x: 220,
            y: 1380,
            text:window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_4);
        txt_4.setDepth(6);
        txt_4.setOrigin(0, 0.5);

        
    }
}

else if(window.res_params.flow_data.PREMIUM_POLICY_TYPE.toLowerCase() == 'single'){


    if(window.flow_slug == 'sbilm_smart_swadhan_plus' || window.flow_slug == 'sbilsa_smart_swadhan_plus') {

    if (sysLang == 'eng' || sysLang == 'kan' || sysLang == 'hin'|| sysLang == 'tel' || sysLang == 'mar' || sysLang == 'pun' || sysLang == 'guj' || sysLang == 'ben' || sysLang == 'ass' || sysLang == 'miz' || sysLang == 'maw' || sysLang == 'ori') {
        var txt_1 = game.add.rexBBCodeText({
            x: 220,
            y: 1020,
            text: smart_swadhan_content,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 220,
            y: 1370,
            text:window.product_language_data.product_benefit_screen.pb_content_single,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_2);
        txt_2.setDepth(6);
        txt_2.setOrigin(0, 0.5);

        
    }else if (sysLang == 'tam') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 900,
            text: platina_plus_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1040,
            text:window.product_language_data.product_benefit_screen.pb_content_single,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        
    } else if (sysLang == 'mal') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 900,
            text: platina_plus_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1040,
            text:window.product_language_data.product_benefit_screen.pb_content_single,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

     } 
  }
 }

else if(window.res_params.flow_data.PREMIUM_POLICY_TYPE.toLowerCase() == 'regular'){


    if(window.flow_slug == 'sbilm_smart_swadhan_plus' || window.flow_slug == 'sbilsa_smart_swadhan_plus') {

    if (sysLang == 'eng' || sysLang == 'kan' || sysLang == 'hin'|| sysLang == 'tel' || sysLang == 'mar' || sysLang == 'pun' || sysLang == 'guj' || sysLang == 'ben' || sysLang == 'ass' || sysLang == 'miz' || sysLang == 'maw' || sysLang == 'ori') {
        var txt_1 = game.add.rexBBCodeText({
            x: 220,
            y: 1020,
            text: smart_swadhan_content,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 220,
            y: 1370,
            text:window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "34px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 700
                },
            },
        });

        obj_list.push(txt_2);
        txt_2.setDepth(6);
        txt_2.setOrigin(0, 0.5);

        
    }else if (sysLang == 'tam') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 1020,
            text: smart_swadhan_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1180,
            text:window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 4,
                    offset: 8
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        
    } else if (sysLang == 'mal') {
        var txt_1 = game.add.rexBBCodeText({
            x: 200,
            y: 1020,
            text: smart_swadhan_content,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

        obj_list.push(txt_1);
        txt_1.setDepth(6);
        txt_1.setOrigin(0, 0.5);

        var txt_2 = game.add.rexBBCodeText({
            x: 200,
            y: 1170,
            text:window.product_language_data.product_benefit_screen.pb_content2,
            style: {
                fontSize: "30px",
                fontFamily: fontFamilyLangArr[sysLang],
                color: "#000000",
                align: "justify",
                underline: {
                    color: '#000', // css string, or number
                    thickness: 5,
                    offset: 8,
                    lineSpacing: 10
                },
                wrap: {
                    mode: 1, // 0|'none'|1|'word'|2|'char'|'character'
                    width: 800
                },
            },
        });

     } 
  }
 }
}

console.log('Product Benefits Disagree');

function display_error_product_benefits_disagree() {
    getTextObject(window.product_language_data.personal_disagree.error).alpha = 1;
}

function hide_error_product_benefits_disagree() {
    getTextObject(window.product_language_data.personal_disagree.error).alpha = 0;
}




function product_benefits_disagree_sound_setup() {
    if (cur_sfx_list) {
        if (cur_sfx_list[cur_sfx_list.length - 1]) {
            cur_sfx_list[cur_sfx_list.length - 1].on("complete", function() {
                console.log('product Benefits Sound complete');

                getSpriteObject('save').alpha = 1;
                getSpriteObject('back').alpha = 1;

                getTextObject(window.product_language_data.product_benefit_disagree.save).alpha = 1;
                getTextObject(window.product_language_data.personal_disagree.back).alpha = 1;
            });
        }
    }
}