async function product_intro_disagree_save() {
    blur_input_fields();
    //hide_network_error();


        if (getInputObject('in_disagreement')) {
            if (getInputObject('in_disagreement').text.trim() == '') {
                    popup_text('Please Provide Input Values',540);
            } else {

                getSpriteObject('saveandproceed_btn').disableInteractive();
                var object = new Object();
                object.in_disagreement = getInputObject('in_disagreement').text;

                if(object.in_disagreement){
                    await call_UPDATE_LINK_RESPONSE('cPolDet', 'Policy Screen', false);
                    await call_UPDATE_EDIT_LINK_RESPONSE('ePolDet', 'Policy Screen', JSON.stringify(object));
                    await call_ADD_CAPTURED_SCREENSHOT('Policy Screen', 2);
                }
                           
                await waitforme(3000);
                goToPage(8);

            }
        }
    }


async function policyscreen_popup(){

    await call_ADD_CAPTURED_IMAGE('Policy Screen','true');
    for (var i = 0; i <= cur_sfx_list.length - 1; i++) {
        cur_sfx_list[i].stop()
    }
    getInputObject('in_disagreement').alpha=1
    popup('policy_details_disagree',540);
    popup('cancel',620);
    popup('saveandproceed_btn',540);
    popup_text('Enter your disagreement on the box provided above and click Save and Proceed',540);

}
