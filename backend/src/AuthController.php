<?php
namespace App\Controller;

use PDO;

require_once __DIR__ . '/../src/helpers.php';
require_once __DIR__ . '/../config/db.php';


class AuthController {
    
        private $pdo;
    
        public function __construct(PDO $pdo)
        {
            $this->pdo = $pdo;
        }
    
        public function login($requestData)
        {
            $email = $requestData['email'];
            $password = $requestData['password'];
    
            $stmt = $this->pdo->prepare("SELECT * FROM users WHERE email = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
    
            $user = $stmt->fetch();
            if (!$user) {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid email or password']);
                exit;
            }
    
            if (!password_verify($password, $user['password'])) {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid email or password']);
                exit;
            }
    
            $token = bin2hex(random_bytes(32));
            $stmt = $this->pdo->prepare("UPDATE users SET token = :token WHERE id = :id");
            $stmt->bindParam(':token', $token);
            $stmt->bindParam(':id', $user['id']);
            $stmt->execute();
    
            echo json_encode(['token' => $token]);
        }
    
        public function register($requestData)
        {
            $name = $requestData['name'];
            $email = $requestData['email'];
            $password = $requestData['password'];

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $this->pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->execute();

        echo json_encode(['message' => 'User created successfully']);
        json_response(['message' => 'User created successful!
        User retrieved successfully!'], 200);
        echo json_response(['message'=> 'User created successful!']);
        echo "AuthController loaded successfully!";
        exit(0);

    }

    public function logout($requestData)
    {
        $token = $requestData['token'];

        $stmt = $this->pdo->prepare("UPDATE users SET token = NULL WHERE token = :token");
        $stmt->bindParam(':token', $token);
        $stmt->execute();

        echo json_encode(['message' => 'Logged out successfully']);
    }
}
json_response(['message' => 'User created successful!
User retrieved successfully!'], 200);
echo json_response(['message'=> 'User created successful!']);
echo "AuthController loaded successfully!";
exit(0);


    