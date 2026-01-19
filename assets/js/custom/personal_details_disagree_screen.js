var currentData;
var birthdate;
var calculating_age;

function dob_validation(){
    currentData = new Date(getInputObject('in_dob').text);
    birthdate = currentData.getFullYear();
    
    return birthdate;
    
}


function isYearFirst(dateString) {
  var parts = dateString.split("-");
  var firstPart = parts[0];
  var yearFirst = false;
  
  if (parseInt(firstPart, 10) >= 1000) {
    yearFirst = true;
  }else{
    getInputObject('in_dob').on('textchange', function(inputText, e) {
        if (inputText.text.length > 0) {
            inputText.setStyle('border','5px solid #364473');
        }
    });
  }
  
  return yearFirst;
}


async function personal_details_disagree_proceed() {
    blur_input_fields();
    dob_validation();
    

    var face_detected = await facedetect_frame();
    if (face_detected == true) {
        var obj_array = {};
        try {
            if (obj_input_list) {
                
                obj_input_list.forEach(function(item, index) {
                    console.log(item['text']);

                    if (item['text'].trim() == '' )
                        throw item['key'] + " input_empty";

                       
                    obj_array[item['key']] = item['text'];
                    
                });
                //getSpriteObject('proceed_btn').disableInteractive();  /\d/.test(inputText)

                if(getInputObject('in_mobile').text.length < 10){
                    empty_field_validation();
                    validateMobileNumber(getInputObject('in_mobile').text);
                }else if(getInputObject('in_mail').text.includes("@") == false || getInputObject('in_mail').text.includes(".com") == false){
                    empty_field_validation();
                    validateEmailNumber(getInputObject('in_mail').text);
                }else if(/\d/.test(getInputObject('in_name').text)){
                    empty_field_validation();
                    validatePolicyHolderName(getInputObject('in_name').text)
                }else if(birthdate > 2005){
                    empty_field_validation();
                    if(birthdate*10 >= 10000){
                       popup('valid_dob_popup',540);
                    }else{
                       popup('age_popup',540);
                    }
                }else{
                    await call_ADD_CAPTURED_IMAGE('Personal Details - DisAgree', 'false');
                    await call_ADD_CAPTURED_SCREENSHOT('Personal Details - DisAgree', 2);
                    await call_UPDATE_LINK_RESPONSE('cPerDet', 'Personal Details - DisAgree', false);
                    await call_UPDATE_EDIT_LINK_RESPONSE('ePerDet', 'Personal Details - DisAgree', JSON.stringify(obj_array));
                    await waitforme(3000);
                    goToPage(7);
            }
                
            }

        } catch (e) {
            empty_field_validation();
            personal_details_popup();
        }
    }
}

function personal_details_popup() {
    popup('disagree_popup',540);
}

function load_personal_details_disagree_screen(){

    setInputTextValue('in_name', window.p_customer_name);
    if(isYearFirst(window.res_params.DOB) == false){
       setInputTextValue('in_dob', window.p_dob.split("-").reverse().join("-"));
    }else{
       setInputTextValue('in_dob', window.p_dob);
    }
    

    // if(window.res_params.GENDER != ''){
    //   setInputTextValue('in_gender', window.p_gender);
    // }else{
    //     setInputTextValue('in_gender', getInputObject('in_gender').text);
    // }

    //setInputTextValue('in_nominee_relation', nominee_name_and_relationship);
    setInputTextValue('in_mail', window.p_email);
    setInputTextValue('in_mobile', window.p_mobile_number);
    setInputTextValue('in_address', window.p_address);
}

function disagreepopup(){

    closepopup('disagree_popup',540);
}


function clear_mobile_popup(){
    closepopup('mobile_popup',540);
}
function clear_mail_popup(){
    closepopup('email_popup',540);
}
function clear_age_popup(){
    closepopup('age_popup',540);
}
function clear_valid_dob_popup(){
    closepopup('valid_dob_popup',540);
}
function clear_name_popup(){
    closepopup('name_popup',540);
} 


function validatePolicyHolderName(name) {
    
    var regex_expression = /^[a-zA-Z]*$/;
    if (regex_expression.test(name)) {
       return true;
    }else {
         popup('name_popup',540);
  }
}
   
function validateMobileNumber(number) {
    
    var regex = /^(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (regex.test(number)) {
       return true;
    }else {
         popup('mobile_popup',540);
  }
}

function validateEmailNumber(email) {
     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return true;
    }else {
        popup('email_popup',540);
  }
}

function mobilenumbervalidation(){

    getInputObject('in_mobile').on('textchange', function(inputText, e) {
        if (inputText.text.length >= 10) {
            inputText.setBlur();
        }
    });
    getInputObject('in_mobile').on('focus', function(inputText, e) {
        if (inputText.text.length == 10) {
            //inputText.setFocus();
            e.preventDefault();
        }
    });
}


function empty_field_validation(){
    if(getInputObject('in_name').text.trim() == ''){
        getInputObject('in_name').setStyle('border','5px solid red');
    }

    if(/\d/.test(getInputObject('in_name').text)){
        getInputObject('in_name').setStyle('border','5px solid red');
    }

    getInputObject('in_name').on('textchange', function(inputText, e) {
        if (inputText.text.length > 0) {
            inputText.setStyle('border','5px solid #364473');
        }
    });

    if(birthdate > 2005 || getInputObject('in_dob').text.trim() == ''){
        getInputObject('in_dob').setStyle('border','5px solid red');
    }else{
    getInputObject('in_dob').on('focus', function(inputText, e) {
        if (inputText.text.length > 0) {
            inputText.setStyle('border','5px solid #364473');
        }
    });
  }


    if(getInputObject('in_mobile').text.trim() == '' || getInputObject('in_mobile').text.length < 10){
        getInputObject('in_mobile').setStyle('border','5px solid red');
    }

    getInputObject('in_mobile').on('textchange', function(inputText, e) {
        if (inputText.text.length > 0) {
            inputText.setStyle('border','5px solid #364473');
        }
    });

    if(getInputObject('in_mail').text.trim() == ''){
        getInputObject('in_mail').setStyle('border','5px solid red');
    }

    getInputObject('in_mail').on('textchange', function(inputText, e) {
        if (inputText.text.length > 0) {
            inputText.setStyle('border','5px solid #364473');
        }
    });


    if(getInputObject('in_address').text.trim() == ''){
        getInputObject('in_address').setStyle('border','5px solid red');
    }

    getInputObject('in_address').on('textchange', function(inputText, e) {
        if (inputText.text.length > 0) {
            inputText.setStyle('border','5px solid #364473');
        }
    });
}



var dropdown_object_gender;
function add_gender_dropdown(){

    var select = document.createElement("select");
    select.setAttribute("id", "dropdownFirst");

    var labelText = window.res_params.GENDER.charAt(0).toLocaleUpperCase() + window.res_params.GENDER.slice(1).toLowerCase();
    select.label = labelText;

    var genderValues = ["Male", "Female", "Other"]; 

    for (var i = 0; i < genderValues.length; i++) {
    var option = document.createElement("option");
    option.value = genderValues[i];
    option.text = genderValues[i];
  
    if (genderValues[i] === window.res_params.GENDER) {
        option.selected = true; 
    }
  
    select.appendChild(option);
}


    // Append the select element to the parent node
    /*var parentNode = document.createElement("parentNodeId"); // Replace "parentNodeId" with the actual ID of the parent node
    parentNode.appendChild(select);*/

    dropdown_object_gender = game.add.dom(680, 910, select);
    var dom_style = dropdown_object_gender.node.style;
    dom_style.width = 360 + 'px';
    dom_style.height = 95 + 'px';
    dom_style.fontSize = 30 + 'px';
    dom_style.backgroundColor = '#364473';
    dom_style.borderStyle= 'inset';
    dom_style.color = '#000000';
    dom_style.pointerEvents = "auto";
    
    dropdown_object_gender.updateSize();
    dropdown_object_gender.setDepth(5);
    dropdown_object_gender.setOrigin(0,0.5);

    obj_list.push(dropdown_object_gender);
    $('#dropdownFirst').on('change', function() {
        var gender_values = getInputObject('in_gender').text = this.value;
        return gender_values;

   });
}
