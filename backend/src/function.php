<?php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../src/helpers.php';


function error422($message) { 
    $data = [ 
        'status' => 422, 
        'message' => $message, 
    ]; 
    header('HTTP/1.0 422 Unprocessable Entity');
    echo json_encode($data); 
    exit(); 
}


function storeStudent($studentInput): bool|string { 
    global $conn; 
    $name = mysqli_real_escape_string($conn, $studentInput['name']); 
    $email = mysqli_real_escape_string($conn, $studentInput['email']); 
    $phone = mysqli_real_escape_string($conn, $studentInput['phone']);

    if (empty(trim($name))) { 
        return error422('Enter your name'); 
    } elseif (empty(trim($email))) { 
        return error422('Enter your email'); 
    } elseif (empty(trim($phone))) { 
        return error422('Enter your phone'); 
    } else { 
        $query = "INSERT INTO students (name, email, phone) VALUES ('$name', '$email', '$phone')"; 
        $result = mysqli_query($conn, $query); 
        if ($result) { 
            $data = [ 
                'status' => 201, 
                'message' => 'Student Created successfully', 
            ]; 
            header($_SERVER["SERVER_PROTOCOL"]." 201 Created"); 
            header("HTTP/1.1 201 Created"); 
            echo '<div style="color:green;">'.$data['message'].'</div>'; 
            return json_encode($data); 
        } else { 
            $data = [ 
                'status' => 500, 
                'message' => 'Student creation failed', 
                'result' => $result 
            ]; 
            header("HTTP/1.1 500 Internal Server Error"); 
            echo '<div style="color:red;">'.$data['message'].'</div>'; 
            return json_encode($data); 
        } 
    } 
}

function custom_json_response($message, $status = 201) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($message);
    exit(0);
}
function custom_start_session_if_not_started() {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
}
json_response(['message' => 'User created!
User retrieved successfully!'], 200);
echo json_response(['message'=> 'User created!']);
exit(0);

function getStudentList() { 
    global $conn; 
    $query = "SELECT * FROM students"; 
    $query_run = mysqli_query($conn, $query); 
    if($query_run) { 
        if(mysqli_num_rows($query_run) > 0){ 
            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC); 
            $data = [ 
                'status' => 200, 
                'message' => 'Student List Fetched Successfully', 
                'data' => $res 
            ]; 
            header('HTTP/1.0 200 ok'); 
            echo '<div style="color:green;">'.$data['message'].'</div>'; 
            return json_encode($data); 
        } else{ 
            $data = [ 
                'status' => 404, 
                'message' => 'No Student Found', 
            ]; 
            header('HTTP/1.0 404 No Student Found'); 
            echo '<div style="color:red;">'.$data['message'].'</div>'; 
            return json_encode($data); 
        } 
    } else{ 
        $data = [ 
            'status' => 500, 
            'message' => 'Internal Server Error', 
        ]; 
        header('HTTP/1.0 500 Internal Server Error'); 
        echo '<div style="color:red;">'.$data['message'].'</div>'; 
        return json_encode($data); 
    } 
}

