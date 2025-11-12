<?php

require_once __DIR__ . '/../config/db.php';
error_reporting(0);

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include ('function.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

//if($requestMethod == 'POST') {
   // $inputData = json_decode(file_get_contents("php://input"),true);
    //if(empty($inputData)){

      //  $storeCustomer = storeCustomer($_POST);
    //}
    //else {
      //  $storeCustomer = storeCustomer($inputData);
    //}
       //echo $storeCustomer;
  //  }

//else
switch ($requestMethod) {
    case 'POST':
        $inputData = json_decode(file_get_contents("php://input"), true);

        if (empty($inputData)) {
            $storeStudent = storeStudent($_POST);
        } else {
            $storeStudent = storeStudent($inputData);
        }
        echo $storeStudent;
        break;
        default:
        $data = [
            'status' => 405,
            'message' => $requestMethod . ' Method Not Allowed',
        ];
        header('HTTP/1.0 405 Method Not Allowed');
        echo json_encode($data);
        break;
}

//{
   // $data = [
       // 'status' => 405,
       // 'message' => $requestMethod. 'Method Not Allowed',
   // ];
   // header('HTTP/1.0 405 Method Not Allowed');
   // echo json_encode($data);
//}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $StudentInput = json_decode($input, true);

    if ($StudentInput) {
        echo storeStudent($StudentInput);
    } else {
        http_response_code(422);
        echo json_encode([
            'status' => 422,
            'message' => 'Invalid JSON input'
        ]);
    }
}

?>