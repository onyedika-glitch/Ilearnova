<?php
namespace App\Controller;

require_once __DIR__ . '/../src/helpers.php';
require_once __DIR__ . '/../config/db.php';



class PasswordResetController {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Request Password Reset
    public function requestReset($data) {
        $email = trim($data['email'] ?? '');

        // Validate email input
        if (empty($email)) {
            json_response(['error' => 'Email is required'], 400);
        }

        // Check if user exists by email
        $stmt = $this->pdo->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);

        // Always return success response to prevent email enumeration
        if (!$user) {
            json_response(['message' => 'If that email exists, a reset link has been sent.']);
        }

        // Generate secure token and expiration time
        $token = bin2hex(random_bytes(32));
        $expiresAt = date('Y-m-d H:i:s', strtotime('+1 hour'));

        // Store token and expiry in the database
        $stmt = $this->pdo->prepare(
            "INSERT INTO password_resets (user_id, reset_token, expires_at) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE reset_token = VALUES(reset_token), expires_at = VALUES(expires_at)"
        );
        $stmt->execute([$user['id'], $token, $expiresAt]);

        // Send reset link via email (Placeholder for email logic)
        // sendResetEmail($email, $token);

        json_response(['message' => 'If that email exists, a reset link has been sent.']);
    }

    // Reset Password using Token
    public function resetPassword($data) {
        $token = $data['token'] ?? '';
        $newPassword = $data['new_password'] ?? '';

        // Validate input
        if (empty($token) || empty($newPassword)) {
            json_response(['error' => 'Invalid request'], 400);
        }

        // Fetch reset request by token
        $stmt = $this->pdo->prepare(
            "SELECT user_id, expires_at FROM password_resets WHERE reset_token = ?"
        );
        $stmt->execute([$token]);
        $reset = $stmt->fetch(\PDO::FETCH_ASSOC);

        // Check if token exists and is not expired
        if (!$reset || new \DateTime() > new \DateTime($reset['expires_at'])) {
            json_response(['error' => 'Invalid or expired token.'], 400);
        }

        // Hash the new password
        $passwordHash = password_hash($newPassword, PASSWORD_BCRYPT);

        // Update user password
        $stmt = $this->pdo->prepare("UPDATE users SET password_hash = ? WHERE id = ?");
        $stmt->execute([$passwordHash, $reset['user_id']]);

        // Delete used reset token
        $this->pdo->prepare("DELETE FROM password_resets WHERE reset_token = ?")->execute([$token]);

        json_response(['message' => 'Password reset successful!']);
        echo json_response(['message'=> 'Password reset successful!']);
        echo "PasswordResetController loaded successfully!";
        exit(0);

    }
}

// Helper function for JSON response

 function custom_json_response($message, $status = 201) {
    echo custom_json_response($message, $status);
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

// Example Email Sending (to be implemented)
function sendResetEmail($email, $token) {
    $resetLink = "https://example.com/reset-password?token=$token";
    $subject = "Password Reset Request";
    $message = "Click the link below to reset your password:\n$resetLink";
    mail($email, $subject, $message);
}

echo json_response(['message'=> 'Password reset successful!']);
        echo "PasswordResetController loaded successfully!";
        exit(0);

?>
