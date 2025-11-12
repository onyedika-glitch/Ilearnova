<?php

namespace App\Service;

require_once __DIR__ . '/../src/helpers.php';


class AuthService
{
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    // User Login
    public function login($username, $password)
    {
        // Fetch user by username
        $stmt = $this->pdo->prepare("SELECT id, username, password_hash FROM users WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);

        // Verify password
        if ($user && password_verify($password, $user['password_hash'])) {
            // Generate token (simple example, not for production)
            $token = bin2hex(random_bytes(32));
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['token'] = $token;

            return [
                'token' => $token,
                'status' => 'success',
                'message' => 'Login successful'
            ];
        }

        http_response_code(401);
        return ['error' => 'Invalid credentials'];
    }

    // User Signup
    public function signup($username, $password)
    {
        // Check if username already exists
        $stmt = $this->pdo->prepare("SELECT id FROM users WHERE username = ?");
        $stmt->execute([$username]);

        if ($stmt->fetch()) {
            http_response_code(400);
            return ['error' => 'Username already taken'];
        }

        // Hash the password
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);

        // Insert user into database
        $stmt = $this->pdo->prepare("INSERT INTO users (username, password_hash) VALUES (?, ?)");
        if ($stmt->execute([$username, $passwordHash])) {
            return ['status' => 'success', 'message' => 'User created successfully'];
        }

        http_response_code(500);
        return ['error' => 'Failed to create user'];
    }

    // User Logout
    public function logout()
    {
        session_unset();
        session_destroy();
        return ['status' => 'success', 'message' => 'Logged out successfully'];
    }

    // Get Current User Info
    public function me()
    {
        if (empty($_SESSION['user_id'])) {
            http_response_code(401);
            return ['error' => 'Unauthorized'];
        }

        $stmt = $this->pdo->prepare("SELECT id, username, created_at FROM users WHERE id = ?");
        $stmt->execute([$_SESSION['user_id']]);
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);

        if (!$user) {
            http_response_code(404);
            return ['error' => 'User not found'];
        }

        return [
            'username' => $user['username'],
            'created_at' => $user['created_at']
        ];
    }
}

// Helper function for JSON responses
function json_response($message, $status = 200)
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($message);
    exit;
}
