function inputstyle(){
    getInputObject('in_name').setStyle('border','4px solid #1E4679');
    getInputObject('in_name').on('textchange', function(inputText, e) {
        if (inputText.text.length > 0) {
            //getTextObject('Name should not be empty').alpha = 0;
            getInputObject('in_name').setStyle('border','4px solid #1E4679');
        }
    });
}
function add_comment(){
    getInputObject('in_comment').setStyle('border','4px solid #1E4679');
    getInputObject('in_comment').on('textchange', function(inputText, e) {
        if (inputText.text.length > 0) {
            //getTextObject('Name should not be empty').alpha = 0;
            getInputObject('in_comment').setStyle('border','4px solid #1E4679');
        }
    });
}
var ques1 = false;
var ques2 = false;
var ques3 = false;
var ques4 = false;
var ques5 = false;

function question1_glow(us1, us2, us3, us4, us5, s1, s2, s3, s4, s5) {
    getSpriteObject('ques1_1_us').alpha = us1;
    getSpriteObject('ques1_2_us').alpha = us2;
    getSpriteObject('ques1_3_us').alpha = us3;
    getSpriteObject('ques1_4_us').alpha = us4;
    getSpriteObject('ques1_5_us').alpha = us5;
    getSpriteObject('ques1_1_sl').alpha = s1;
    getSpriteObject('ques1_2_sl').alpha = s2;
    getSpriteObject('ques1_3_sl').alpha = s3;
    getSpriteObject('ques1_4_sl').alpha = s4;
    getSpriteObject('ques1_5_sl').alpha = s5;
}

function question1_selective(type, number) {

    if (type == 'unselect') {
        ques1 = true;
        if (number == 1) {
            question1_glow(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 2) {
            question1_glow(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 3) {
            question1_glow(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 4) {
            question1_glow(0, 0, 0, 0, 1, 1, 1, 1, 1, 0);
        } else if (number == 5) {
            question1_glow(0, 0, 0, 0, 0, 1, 1, 1, 1, 1);
        }
    }else if (type == "select") {
        ques1 = false;
        if (number == 1) {
            question1_glow(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
        } else if (number == 2) {
            question1_glow(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 3) {
            question1_glow(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 4) {
            question1_glow(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 5) {
            question1_glow(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
        }
    }
    gotothankyou_page();
    //setInterval(gotothankyou_page,1500000);
}

function upload_feedback_question1(){
    let feedback_quest1;

    if (getSpriteObject('ques1_1_sl') && getSpriteObject('ques1_1_sl').alpha == 1) {
        feedback_quest1 = '1';
    }
    if (getSpriteObject('ques1_2_sl') && getSpriteObject('ques1_2_sl').alpha == 1) {
        feedback_quest1 = '2';
    }

    if (getSpriteObject('ques1_3_sl') && getSpriteObject('ques1_3_sl').alpha == 1) {
        feedback_quest1 = '3';
    }

    if (getSpriteObject('ques1_4_sl') && getSpriteObject('ques1_4_sl').alpha == 1) {
        feedback_quest1 = '4';
    }

    if (getSpriteObject('ques1_5_sl') && getSpriteObject('ques1_5_sl').alpha == 1) {
        feedback_quest1 = '5';
    }

    return feedback_quest1;
}

function question2_glow(us1, us2, us3, us4, us5, s1, s2, s3, s4, s5) {
    getSpriteObject('ques2_1_us').alpha = us1;
    getSpriteObject('ques2_2_us').alpha = us2;
    getSpriteObject('ques2_3_us').alpha = us3;
    getSpriteObject('ques2_4_us').alpha = us4;
    getSpriteObject('ques2_5_us').alpha = us5;
    getSpriteObject('ques2_1_sl').alpha = s1;
    getSpriteObject('ques2_2_sl').alpha = s2;
    getSpriteObject('ques2_3_sl').alpha = s3;
    getSpriteObject('ques2_4_sl').alpha = s4;
    getSpriteObject('ques2_5_sl').alpha = s5;
}

function question2_selective(type, number) {
    if (type == 'unselect') {
        ques2 = true;
        if (number == 1) {
            question2_glow(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 2) {
            question2_glow(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 3) {
            question2_glow(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 4) {
            question2_glow(0, 0, 0, 0, 1, 1, 1, 1, 1, 0);
        } else if (number == 5) {
            question2_glow(0, 0, 0, 0, 0, 1, 1, 1, 1, 1);
        }
    }else if (type == "select") {
        ques2 = false;
        if (number == 1) {
            question2_glow(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
        } else if (number == 2) {
            question2_glow(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 3) {
            question2_glow(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 4) {
            question2_glow(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 5) {
            question2_glow(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
        }
    }
    gotothankyou_page();
    //setInterval(gotothankyou_page,1500000);
}

function upload_feedback_question2(){
    let feedback_quest2;

    if (getSpriteObject('ques2_1_sl') && getSpriteObject('ques2_1_sl').alpha == 1) {
        feedback_quest2 = '1';
    }
    if (getSpriteObject('ques2_2_sl') && getSpriteObject('ques2_2_sl').alpha == 1) {
        feedback_quest2 = '2';
    }

    if (getSpriteObject('ques2_3_sl') && getSpriteObject('ques2_3_sl').alpha == 1) {
        feedback_quest2 = '3';
    }

    if (getSpriteObject('ques2_4_sl') && getSpriteObject('ques2_4_sl').alpha == 1) {
        feedback_quest2 = '4';
    }

    if (getSpriteObject('ques2_5_sl') && getSpriteObject('ques2_5_sl').alpha == 1) {
        feedback_quest2 = '5';
    }

    return feedback_quest2;
}

function question3_glow(us1, us2, us3, us4, us5, s1, s2, s3, s4, s5) {
    getSpriteObject('ques3_1_us').alpha = us1;
    getSpriteObject('ques3_2_us').alpha = us2;
    getSpriteObject('ques3_3_us').alpha = us3;
    getSpriteObject('ques3_4_us').alpha = us4;
    getSpriteObject('ques3_5_us').alpha = us5;
    getSpriteObject('ques3_1_sl').alpha = s1;
    getSpriteObject('ques3_2_sl').alpha = s2;
    getSpriteObject('ques3_3_sl').alpha = s3;
    getSpriteObject('ques3_4_sl').alpha = s4;
    getSpriteObject('ques3_5_sl').alpha = s5;
}

function question3_selective(type, number) {
    if (type == 'unselect') {
        ques3 = true;
        if (number == 1) {
            question3_glow(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 2) {
            question3_glow(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 3) {
            question3_glow(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 4) {
            question3_glow(0, 0, 0, 0, 1, 1, 1, 1, 1, 0);
        } else if (number == 5) {
            question3_glow(0, 0, 0, 0, 0, 1, 1, 1, 1, 1);
        }
    }else if (type == "select") {
        ques3 = false;
        if (number == 1) {
            question3_glow(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
        } else if (number == 2) {
            question3_glow(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 3) {
            question3_glow(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 4) {
            question3_glow(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 5) {
            question3_glow(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
        }
    }
    gotothankyou_page();
    //setInterval(gotothankyou_page,1500000);
}


function upload_feedback_question3(){
    let feedback_quest3;

    if (getSpriteObject('ques3_1_sl') && getSpriteObject('ques3_1_sl').alpha == 1) {
        feedback_quest3 = '1';
    }
    if (getSpriteObject('ques3_2_sl') && getSpriteObject('ques3_2_sl').alpha == 1) {
        feedback_quest3 = '2';
    }

    if (getSpriteObject('ques3_3_sl') && getSpriteObject('ques3_3_sl').alpha == 1) {
        feedback_quest3 = '3';
    }

    if (getSpriteObject('ques3_4_sl') && getSpriteObject('ques3_4_sl').alpha == 1) {
        feedback_quest3 = '4';
    }

    if (getSpriteObject('ques3_5_sl') && getSpriteObject('ques3_5_sl').alpha == 1) {
        feedback_quest3 = '5';
    }

    return feedback_quest3;
}

function question4_glow(us1, us2, us3, us4, us5, s1, s2, s3, s4, s5) {
    getSpriteObject('ques4_1_us').alpha = us1;
    getSpriteObject('ques4_2_us').alpha = us2;
    getSpriteObject('ques4_3_us').alpha = us3;
    getSpriteObject('ques4_4_us').alpha = us4;
    getSpriteObject('ques4_5_us').alpha = us5;
    getSpriteObject('ques4_1_sl').alpha = s1;
    getSpriteObject('ques4_2_sl').alpha = s2;
    getSpriteObject('ques4_3_sl').alpha = s3;
    getSpriteObject('ques4_4_sl').alpha = s4;
    getSpriteObject('ques4_5_sl').alpha = s5;
}

function question4_selective(type, number) {
    if (type == 'unselect') {
        ques4 = true;
        if (number == 1) {
            question4_glow(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 2) {
            question4_glow(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 3) {
            question4_glow(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 4) {
            question4_glow(0, 0, 0, 0, 1, 1, 1, 1, 1, 0);
        } else if (number == 5) {
            question4_glow(0, 0, 0, 0, 0, 1, 1, 1, 1, 1);
        }
    }else if (type == "select") {
        ques4 = false;
        if (number == 1) {
            question4_glow(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
        } else if (number == 2) {
            question4_glow(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 3) {
            question4_glow(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 4) {
            question4_glow(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 5) {
            question4_glow(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
        }
    }
    gotothankyou_page();
    //setInterval(gotothankyou_page,1500000);
}

function upload_feedback_question4(){
    let feedback_quest4;

    if (getSpriteObject('ques4_1_sl') && getSpriteObject('ques4_1_sl').alpha == 1) {
        feedback_quest4 = '1';
    }
    if (getSpriteObject('ques4_2_sl') && getSpriteObject('ques4_2_sl').alpha == 1) {
        feedback_quest4 = '2';
    }

    if (getSpriteObject('ques4_3_sl') && getSpriteObject('ques4_3_sl').alpha == 1) {
        feedback_quest4 = '3';
    }

    if (getSpriteObject('ques4_4_sl') && getSpriteObject('ques4_4_sl').alpha == 1) {
        feedback_quest4 = '4';
    }

    if (getSpriteObject('ques4_5_sl') && getSpriteObject('ques4_5_sl').alpha == 1) {
        feedback_quest4 = '5';
    }

    return feedback_quest4;
}

function question5_glow(us1, us2, us3, us4, us5, s1, s2, s3, s4, s5) {
    getSpriteObject('ques5_1_us').alpha = us1;
    getSpriteObject('ques5_2_us').alpha = us2;
    getSpriteObject('ques5_3_us').alpha = us3;
    getSpriteObject('ques5_4_us').alpha = us4;
    getSpriteObject('ques5_5_us').alpha = us5;
    getSpriteObject('ques5_1_sl').alpha = s1;
    getSpriteObject('ques5_2_sl').alpha = s2;
    getSpriteObject('ques5_3_sl').alpha = s3;
    getSpriteObject('ques5_4_sl').alpha = s4;
    getSpriteObject('ques5_5_sl').alpha = s5;
}

function question5_selective(type, number) {
    if (type == 'unselect') {
        ques5 = true;
        if (number == 1) {
            question5_glow(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 2) {
            question5_glow(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 3) {
            question5_glow(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 4) {
            question5_glow(0, 0, 0, 0, 1, 1, 1, 1, 1, 0);
        } else if (number == 5) {
            question5_glow(0, 0, 0, 0, 0, 1, 1, 1, 1, 1);
        }
    }else if (type == "select") {
        ques5 = false;
        if (number == 1) {
            question5_glow(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
        } else if (number == 2) {
            question5_glow(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
        } else if (number == 3) {
            question5_glow(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
        } else if (number == 4) {
            question5_glow(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
        } else if (number == 5) {
            question5_glow(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
        }
    }
    gotothankyou_page();
    //setInterval(gotothankyou_page,5000);
}

function upload_feedback_question5(){
    let feedback_quest5;

    if (getSpriteObject('ques5_1_sl') && getSpriteObject('ques5_1_sl').alpha == 1) {
        feedback_quest5 = '1';
    }
    if (getSpriteObject('ques5_2_sl') && getSpriteObject('ques5_2_sl').alpha == 1) {
        feedback_quest5 = '2';
    }

    if (getSpriteObject('ques5_3_sl') && getSpriteObject('ques5_3_sl').alpha == 1) {
        feedback_quest5 = '3';
    }

    if (getSpriteObject('ques5_4_sl') && getSpriteObject('ques5_4_sl').alpha == 1) {
        feedback_quest5 = '4';
    }

    if (getSpriteObject('ques5_5_sl') && getSpriteObject('ques5_5_sl').alpha == 1) {
        feedback_quest5 = '5';
    }

    return feedback_quest5;
}


async function gotothankyou_page(){

    var feedback_validation1 = upload_feedback_question1();
    var feedback_validation2 = upload_feedback_question2();
    var feedback_validation3 = upload_feedback_question3();
    var feedback_validation4 = upload_feedback_question4();
    var feedback_validation5 = upload_feedback_question5();

    if(ques1 == true){
        if(getInputObject('in_comment')){
            if(getInputObject('in_comment').text == ''){
                getInputObject('in_comment').setStyle('border','6px solid #ff8080');
                popup_feedback('feedback_popup',540);
                //getTextObject('Name should not be empty').alpha = 1;
           }
       }
    }

    if(ques2 == true){
        if(getInputObject('in_comment')){
            if(getInputObject('in_comment').text == ''){
                getInputObject('in_comment').setStyle('border','6px solid #ff8080');
                popup_feedback('feedback_popup',540);
                //getTextObject('Name should not be empty').alpha = 1;
           }
       }
    }

    if(ques1 == true && ques2 == true && ques3 == true && ques4 == true && ques5 == true){
            //getTextObject('Name should not be empty').alpha = 0;
            await call_UPDATE_FEEDBACK_RESPONSE(getInputObject('in_comment').text,feedback_validation1,feedback_validation2,feedback_validation3
            ,feedback_validation4,feedback_validation5);
            if(window.res_params.PROPOSAL_NUMBER == '123789'){
                await Fixedcompletestatus();
            }else{
               await completestatus();  
            }
            // await call_ADD_CAPTURED_IMAGE('Feedback Screen','true');
            // await call_ADD_CAPTURED_SCREENSHOT('Feedback Screen', 2);
            //goToPage(12)
    }
}

function close_error_feedback_popup(){
    closepopup_feedback('feedback_popup',540);
}

/* function inputstyle(){
    getInputObject('in_name').setStyle('border','4px solid #1E4679');
    getInputObject('in_name').on('textchange', function(inputText, e) {
        //alert(inputText.text.length)
        if (inputText.text.length > 0) {
            //console.log(inputText.text);
            gameCanvasEnable();
            getTextObject('Name should not be empty').alpha = 0;
            getInputObject('in_name').setStyle('border','4px solid #1E4679');
        }else{
            gameCanvasDisable();
            getTextObject('Name should not be empty').alpha = 1;
            getInputObject('in_name').setStyle('border','6px solid #ff8080');
        }
    });
} */

