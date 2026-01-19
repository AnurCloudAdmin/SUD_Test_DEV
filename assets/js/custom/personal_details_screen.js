async function personal_details_agree() {
  //hide_network_error()
  var face_detected = await facedetect_frame();
  if (face_detected == true) {
    getSpriteObject('agree').disableInteractive();

    await call_UPDATE_LINK_RESPONSE('cPerDet', 'Personal Details', true);

    upload_photos_and_screenshots_agree('Personal Details', 'false', 7, 'capture');

  }
}

async function personal_details() {


  await call_ADD_CAPTURED_IMAGE('Personal Details', 'true');
  await call_ADD_CAPTURED_SCREENSHOT('Personal Details', 5);
  await waitforme(3000);
}


function upload_photos_and_screenshots_agree(screen_type, media_append, next_screen, photo_type) {
  //Upload Photo
  var photo = capturePhoto();
  var screenshot = getScreenImgDataURL();

  if (media_append != 'false')
    media_append = 'true';

  var photo_parameter, upload_photo_api;

  if (photo_type == 'capture') {
    photo_parameter = 'reg_img';
    upload_photo_api = ADD_CAPTURED_IMAGE;
  }

  display_loader();

  var form = new FormData();
  form.append("key", window.link_key);
  form.append("reg_img", capturePhoto());
  form.append("media_append", media_append);
  form.append("lat", latitude_value);
  form.append("long", longitude_value);
  form.append("loc", window.address);
  form.append("lang", sysLang);
  form.append("scrn", screen_type);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": upload_photo_api,
    "method": "POST",
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form,
    "timeout": 30000
  }

  $.ajax(settings).done(function (response) {

    if (response != null) {

      try {
        response_data = JSON.parse(response);

        if (response_data.status == true) {

          //Upload Screenshot
          var form = new FormData();
          form.append("screen_img", screenshot);
          form.append("key", window.link_key);
          form.append("media_append", "true");
          form.append("lat", latitude_value);
          form.append("long", longitude_value);
          form.append("loc", window.address);
          form.append("lang", sysLang);
          form.append("scrn", screen_type);

          var settings = {
            "async": true,
            "crossDomain": true,
            "url": ADD_CAPTURED_SCREENSHOT,
            "method": "POST",
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form,
            "timeout": 30000
          }

          $.ajax(settings).done(function (response) {

            if (response != null) {

              try {
                response_data = JSON.parse(response);
                //  alert(response_data);

                if (response_data.status == true) {
                  hide_loader();
                  goToPage(next_screen);
                }
              } catch (e) {

              }

            } else {

            }
          }).fail(function (jqXHR, textStatus, errorThrown) {
            //console.log('NETWORK ERROR ', errorThrown);
            hide_loader();
            display_network_error(screen_type);
            //activate_next_buttons(screen_type);
          });
        }
      } catch (e) {

      }

    } else {

    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    //console.log('NETWORK ERROR ', errorThrown);
    hide_loader();
    // display_network_error(screen_type);
    //activate_next_buttons(screen_type);
  });
}


function personal_details_disagree() {
  hide_network_error();
  goToPage(6);
}


function load_personal_screen() {

  setTextValue('PROPOSAL_NO', window.product_language_data.personal_details.proposal_number + ' : ');
  setTextValue('SCREEN_NAME', window.product_language_data.personal_details.screen_name);
  setTextValue('PRODUCT_NAME', window.product_language_data.personal_details.product_name);
  setTextValue('MESSAGE_TEXT_1', window.product_language_data.personal_details.message_text_1);
  setTextValue('MESSAGE_TEXT_2', window.product_language_data.personal_details.message_text_2);
  setTextValue('CUSTOMER_NAME', window.product_language_data.personal_details.customer_name);
  setTextValue('DOB', window.product_language_data.personal_details.dob);
  setTextValue('MOBILE_NO', window.product_language_data.personal_details.mobile_no);
  setTextValue('EMAIL', window.product_language_data.personal_details.email);
  setTextValue('ADDRESS', window.product_language_data.personal_details.address);
  setTextValue('FACE_MATCH_TXT', window.product_language_data.personal_details.face_match_txt);
  setTextValue('NEXT_BTN', window.product_language_data.personal_details.next_btn);

}


