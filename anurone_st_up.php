<?php 
// header("Access-Control-Allow-Origin: https://kli.anurcloud.com");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: text/plain');
// Handle preflight OPTIONS request (sent by browsers before actual POST)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
file_put_contents('php://input', '');
// error_log("Received upload of size: " . strlen($input) . " bytes from " . $_SERVER['REMOTE_ADDR']);
echo 'OK'; 
?>