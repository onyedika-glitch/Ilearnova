<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');



require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../src/AuthController.php';
require_once __DIR__ . '/../src/DashboardController.php';
require_once __DIR__ . '/../src/PasswordResetController.php';
require_once __DIR__ . '/../src/helpers.php';
require_once __DIR__ . '/../src/function.php';
require_once __DIR__ . '/../src/UserController.php';
require_once __DIR__ . '/../src/CourseController.php';
require_once __DIR__ . '/../src/EnrollmentController.php';
require_once __DIR__ . '/src/GradeController.php';



use App\Controller\AuthController;
use App\Controller\DashboardController;
use App\Controller\PasswordResetController;
use App\Controller\UserController;
use App\Controller\CourseController;
use App\Controller\EnrollmentController;
use App\Controller\GradeController;
use App\Controller\function;



$pdo = new PDO('mysql:host=localhost;dbname=ilearnova', 'root', '');
$userController = new UserController($pdo);
$courseController = new CourseController($pdo);
$enrollmentController = new EnrollmentController($pdo);
$gradeController = new GradeController($pdo);


if (!isset($pdo)) {
    die('Database connection not initialized.');
}

// Initialize controllers
$authController = new AuthController($pdo);
$dashboardController = new DashboardController($pdo);
$resetCtrl = new PasswordResetController($pdo);

// Get request data
$requestUri = rtrim(strtok($_SERVER['REQUEST_URI'], '?'), '/');
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestBody = json_decode(file_get_contents('php://input'), true) ?? [];
if (preg_match('#^/api/courses/(\d+)$#', $requestUri, $matches)) {
    $data['id'] = $matches[1];
    $courseController->getCourseById($data);
} elseif ($requestUri === '/api/courses' && $requestMethod === 'POST') {
    $courseController->createCourse($requestBody);
} elseif ($requestUri === '/api/courses' && $requestMethod === 'GET') {
    $courseController->getCourses();
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}

// Decode the JSON body if available
$requestBody = json_decode(file_get_contents('php://input'), true) ?? [];

// Handle different routes
if (preg_match('#^/api/enrollments/(\d+)$#', $requestUri, $matches)) {
    // GET /api/enrollments/{id}
    $data['id'] = $matches[1];
    $enrollmentController->getEnrollmentById($data);
} elseif ($requestUri === '/api/enrollments' && $requestMethod === 'POST') {
    // POST /api/enrollments - Enroll a student in a course
    $enrollmentController->enrollStudent($requestBody);
} elseif ($requestUri === '/api/enrollments' && $requestMethod === 'GET') {
    // GET /api/enrollments - List enrollments (if needed, or you can leave this out)
    // Example: $enrollmentController->listEnrollments(); 
    // You can create a method to list enrollments if necessary.
    echo json_encode(['message' => 'List enrollments not implemented']);
} else {
    // Route not found
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}

// Handle grade routes
if (preg_match('#^/api/grades/(\d+)$#', $requestUri, $matches)) {
    // GET /api/grades/{id}
    $data['id'] = $matches[1];
    $gradeController->getGradeById($data);
} elseif ($requestUri === '/api/grades' && $requestMethod === 'POST') {
    // POST /api/grades - Submit a grade
    $gradeController->submitGrade($requestBody);
} else {
    // Route not found
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}


// Extract ID from URL
preg_match('/\/api\/users\/(\d+)/', $requestUri, $matches);
$id = $matches[1] ?? null;
// Handle POST /enrollments
if ($requestMethod === 'POST' && $requestUri === '/enrollments') {
    $data = json_decode(file_get_contents('php://input'), true);
    $enrollmentcontroller->enrollStudent($data);
}

// Handle GET /enrollments/{id}
elseif ($requestMethod === 'GET' && preg_match('/^\/enrollments\/(\d+)$/', $requestUri, $matches)) {
    $id = $matches[1];
    $enrollmentcontroller->getEnrollmentById(['id' => $id]);
}
else {
    json_response(['error' => 'Endpoint not found'], 404);
}

if ($requestMethod === 'POST' && $requestUri === '/grades') {
    $data = json_decode(file_get_contents('php://input'), true);
    $gradecontroller->submitGrade($data);
}

// Handle GET /enrollments/{id}
elseif ($requestMethod === 'GET' && preg_match('/^\/grades\/(\d+)$/', $requestUri, $matches)) {
    $id = $matches[1];
    $gradecontroller->getGradeById(['id' => $id]);
}
else {
    json_response(['error' => 'Endpoint not found'], 404);
}

// Sanitize and handle missing or null values
function getInputValue($data, $key, $default = null) {
    return isset($data[$key]) && $data[$key] !== '' ? htmlspecialchars(trim($data[$key])) : $default;
}

// Route mapping
$routes = [
    '/api/signup' => ['POST', [$authController, 'signup']],
    '/api/admin/login' => ['POST', [$authController, 'login']],
    '/api/admin/logout' => ['POST', [$authController, 'logout']],
    '/api/me' => ['GET', [$authController, 'me']],
    '/api/admin/dashboard' => ['GET', [$dashboardController, 'getDashboardData']],
    '/api/password-reset-request' => ['POST', [$resetCtrl, 'requestReset']],
    '/api/users' => [
        'GET' => [$userController, 'getUserProfile'],
        'PUT' => [$userController, 'updateUserProfile'],
        '/api/courses' =>
         ['GET', [$courseController, 'getCourses']],
         ['POST', [$courseController, 'createCourse']],
        '/api/courses/{id}' => ['GET', [$courseController, 'getCourseById']],
    ],
    '/api/enrollments' => [
        'POST' => [$enrollmentController, 'enrollStudent'],
    ],
    '/api/enrollments/{id}' => [
        'GET' => [$enrollmentController, 'getEnrollmentById'],
    ],
   '/api/grades' => [
    'POST' => [$gradeController, 'submitGrade'],
    ],
    '/api/grades/{id}' => [
        'GET' => [$gradeController, 'getGradeById'],
   ]
];

// Match Routes Dynamically
$baseRoute = preg_replace('/\/\d+$/', '', $requestUri);

if (isset($routes[$requestUri][$requestMethod])) {
    $handler = $routes[$requestUri][$requestMethod];
    $requestBody['id'] = $id;
    call_user_func($handler, $requestBody);
} elseif (isset($routes[$baseRoute][$requestMethod])) {
    $handler = $routes[$baseRoute][$requestMethod];
    $requestBody['id'] = $id;
    call_user_func($handler, $requestBody);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Route not found']);
}
// Match the route based on request method and URI
$routeMatched = false;

foreach ($routes as $route => $methods) {
    // Check if the route matches the request URI (with dynamic route parameters)
    if (preg_match('@^' . preg_replace('/\{[^\}]+\}/', '(\d+)', $route) . '$@', $requestUri, $matches)) {
        // Check if the method is allowed
        if (in_array($requestMethod, (array)$methods)) {
            // Remove the first match (the full route)
            array_shift($matches);

            // Call the respective controller method
            $controllerMethod = $methods[$requestMethod];
            call_user_func_array($controllerMethod, $matches);

            $routeMatched = true;
            break;
        } else {
            json_response(['error' => 'Method not allowed'], 405);
            break;
        }
    }
}

if (!$routeMatched) {
    json_response(['error' => 'Route not found'], 404);
}

// Validate and handle routes
if (isset($routes[$requestUri])) {
    [$method, $handler] = $routes[$requestUri];
    if ($method === $requestMethod) {
        try {
            // Extract required parameters and handle null cases
            $email = getInputValue($requestBody, 'email');
            $password = getInputValue($requestBody, 'password');
            $token = getInputValue($requestBody, 'token');
            $newPassword = getInputValue($requestBody, 'new_password');

            // Build data array dynamically for controller methods
            $data = [
                'email' => $email,
                'password' => $password,
                'token' => $token,
                'new_password' => $newPassword
            ];

            // Call handler with prepared data
            $handler($data);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
} else {
    http_response_code(200);
    echo json_encode(['message' => 'Welcome to our Platform']);
}
