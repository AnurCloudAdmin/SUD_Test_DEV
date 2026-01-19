<?php
$request_body = file_get_contents('php://input');
$dataK = json_decode($request_body);

$proposal_no = $dataK->proposal_no;
$data = $dataK->image_base64;
$reference_id = @$dataK->reference_id;
$myObj = new stdClass();


if($data!='')
{
 $curl = curl_init();

 $myObj->image_base64 = str_replace('\\','',$data);
 $myObj->proposal_no = $proposal_no;
 $myObj->reference_id = $reference_id;

 $myJSON = json_encode($myObj);

curl_setopt_array($curl, array(

  CURLOPT_URL => 'https://klipy.anurcloud.com/kotak_liveness/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>$myJSON,
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
}
else {
  echo 'data missing';
}

?>
