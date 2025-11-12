<?php
namespace App\Controller;
require_once __DIR__ . '/../src/helpers.php';
require_once __DIR__ . '/../config/db.php';


class DashboardController {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getDashboardData() {
        try {
            // Start session to retrieve user data
            $this->startSessionIfNotStarted();

            // Check if user is logged in
            if (!isset($_SESSION['user_id'])) {
                $this->jsonResponse(['error' => 'Unauthorized'], 401);
            }

            $userId = $_SESSION['user_id'];

            // Fetch user info
            $userInfo = $this->getUserInfo($userId);

            // Fetch recent activities
            $recentActivities = $this->getRecentActivities($userId);

            // Fetch statistics
            $stats = $this->getDashboardStats($userId);

            // Compile data for response
            $dashboardData = [
                'user_info' => $userInfo,
                'recent_activities' => $recentActivities,
                'stats' => $stats
            ];

            $this->jsonResponse($dashboardData);
        } catch (\Exception $e) {
            $this->jsonResponse(['error' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }

    private function getUserInfo($userId) {
        $stmt = $this->pdo->prepare("SELECT id, name, email, role FROM users WHERE id = :userId");
        $stmt->bindParam(':userId', $userId, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    private function getRecentActivities($userId) {
        $stmt = $this->pdo->prepare("SELECT action, timestamp FROM activities WHERE user_id = :userId ORDER BY timestamp DESC LIMIT 10");
        $stmt->bindParam(':userId', $userId, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    private function getDashboardStats($userId) {
        $stmt = $this->pdo->prepare(
            "SELECT 
                (SELECT COUNT(*) FROM posts WHERE user_id = :userId) AS total_posts, 
                (SELECT COUNT(*) FROM comments WHERE user_id = :userId) AS total_comments, 
                (SELECT COUNT(*) FROM likes WHERE user_id = :userId) AS total_likes"
        );
        $stmt->bindParam(':userId', $userId, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    private function jsonResponse($data, $code = 200) {
        http_response_code($code);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit();
    }

    private function startSessionIfNotStarted() {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }
}
?>

