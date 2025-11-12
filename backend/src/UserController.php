<?php
namespace App\Controller;
require_once __DIR__ . '/../src/helpers.php';
require_once __DIR__ . '/../config/db.php';

class UserController {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // GET /users/{id} - Retrieve user profile
    public function getUserProfile($data) {
        $id = $data['id'] ?? null;

        if (!$id || !is_numeric($id)) {
            json_response(['error' => 'Invalid user ID'], 400);
        }

        try {
            $stmt = $this->pdo->prepare("SELECT id, name, email, created_at FROM users WHERE id = :id");
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();
            $user = $stmt->fetch(\PDO::FETCH_ASSOC);

            if ($user) {
                json_response(['message' => 'User logged in successfully', 'data' => $user], 200);
                echo json_response(['message'=> 'User logged in successful!']);
echo "UserController loaded successfully!";
echo "User Profile Updated successfully!";

exit(0);
            } else {
                json_response(['message' => 'Invalid email or password'], 401);
            }
           
        } catch (\PDOException $e) {
            json_response(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
    }

    // PUT /users/{id} - Update user profile
    public function updateUserProfile($data) {
        $id = $data['id'] ?? null;
        $name = $data['name'] ?? null;
        $email = $data['email'] ?? null;

        if (!$id || !is_numeric($id) || !$name || !$email) {
            json_response(['error' => 'Invalid input data'], 400);
        }

        try {
            $stmt = $this->pdo->prepare("UPDATE users SET name = :name, email = :email WHERE id = :id");
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();
            if ($stmt->execute()) {
                error_log('Query executed successfully');
            } else {
                error_log('Query execution failed');
            }
            error_log('Rows affected: ' . $stmt->rowCount());

            if ($stmt->rowCount() > 0) {
                json_response(['message' => 'User profile updated successfully']);
            } else {
                json_response(['error' => 'User not found or no changes made'], 404);
            }
        } catch (\PDOException $e) {
            json_response(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
    }
}
echo json_response(['message'=> 'User logged in successful!']);
echo json_response(['message'=> 'User profile updated successfully!']);
echo "UserController loaded successfully!";
echo "User Profile Updated successfully!";

exit;
