var cam_permission_error, location_permission_error;
var cam_permission_granted = false;
var location_permission_granted = false;

function permission_screen_proceed() {

	//getSpriteObject('proceed_permission_screen_btn').disableInteractive();
	clear_all_permission_errors();
	var status = validate_permissions();
	if (status) {
		goToPage(3);
	}
}

function load_permission_screen() {

	setTextValue('PERMISSION_CONTENT', window.product_language_data.permission_screen.content);
	setTextValue('CAMERA_TEXT', window.product_language_data.permission_screen.camera_txt);
	setTextValue('LOCATION_TEXT', window.product_language_data.permission_screen.location_txt);
	setTextValue('CAM_ERROR', window.product_language_data.permission_screen.camera_error_txt);
	setTextValue('LOC_ERROR', window.product_language_data.permission_screen.location_error_txt);
	setTextValue('ALLOW_ACCESS_CAM', window.product_language_data.permission_screen.allow_access_btn_1);
	setTextValue('ALLOW_ACCESS_LOC', window.product_language_data.permission_screen.allow_access_btn_2);
	setTextValue('PROCEED', window.product_language_data.permission_screen.proceed_btn);

}


function clear_all_permission_errors() {
	hide_camera_permission_error();
	hide_location_permission_error();
}

function show_camera_permission_error() {

	getTextObject(window.product_language_data.permission_screen.camera_error_txt).alpha = 1;
}

function hide_camera_permission_error() {
	getTextObject(window.product_language_data.permission_screen.camera_error_txt).alpha = 0;
}

function show_location_permission_error() {
	getTextObject(window.product_language_data.permission_screen.location_error_txt).alpha = 1;
}

function hide_location_permission_error() {
	getTextObject(window.product_language_data.permission_screen.location_error_txt).alpha = 0;
}

function show_camera_permission_success_indicator() {
	getSpriteObject('tick_camera').alpha = 1;
	getSpriteObject('allow_access_camera_gray').alpha = 1;
	getSpriteObject('allow_access_camera').alpha = 0;
}

function show_location_permission_success_indicator() {
	getSpriteObject('tick_location').alpha = 1;
	getSpriteObject('allow_access_location_gray').alpha = 1;
	getSpriteObject('allow_access_location').alpha = 0;

}

//Get Geo Location
var latitude_value, longitude_value;

function getLocationPermission() {

	clear_all_permission_errors();

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function (position) {

			//console.log(position);

			latitude_value = position.coords.latitude;
			longitude_value = position.coords.longitude;
			location_permission_granted = true;

			show_location_permission_success_indicator();
			call_GEO_LOCATION_API(latitude_value, longitude_value);

		}, function (error) {

			//console.log(error);
			//call_PERMISSION_ERROR('LOCATION',error.message);
			location_permission_granted = false;
			show_location_permission_error();
		});


	}
	else {

	}
}

function validate_permissions() {
	if (cam_permission_granted == true && location_permission_granted == true)
		return true;
	else if (cam_permission_granted == false) {
		show_camera_permission_error();
		return false;
	}
	else if (location_permission_granted == false) {
		show_location_permission_error();
		return false;
	}
}
