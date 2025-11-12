<?php

namespace App\Controller;

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../src/helpers.php';

class GradeController {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // POST /grades - Submit a grade for a student's assignment
    public function submitGrade($data) {
        $studentId = $data['student_id'] ?? null;
        $assignmentId = $data['assignment_id'] ?? null;
        $grade = $data['grade'] ?? null;

        if (!$studentId || !$assignmentId || !$grade) {
            json_response(['error' => 'Student ID, Assignment ID, and Grade are required'], 400);
        }

        try {
            $stmt = $this->pdo->prepare("INSERT INTO grades (student_id, assignment_id, grade) VALUES (:student_id, :assignment_id, :grade)");
            $stmt->bindParam(':student_id', $studentId, \PDO::PARAM_INT);
            $stmt->bindParam(':assignment_id', $assignmentId, \PDO::PARAM_INT);
            $stmt->bindParam(':grade', $grade, \PDO::PARAM_STR);
            $stmt->execute();

            json_response(['message' => 'Grade submitted successfully', 'grade_id' => $this->pdo->lastInsertId()]);
        } catch (\PDOException $e) {
            json_response(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
        json_response(['message' => 'Grade submitted successful!
        Grade retrieved successfully!'], 200);
        echo json_response(['message'=> 'Grade submitted successful!']);
        echo "GradeController loaded successfully!";
        exit(0);

    }

    // GET /grades/{id} - Retrieve a student's grade for a specific assignment
    public function getGradeById($data) {
        $id = $data['id'] ?? null;

        if (!$id || !is_numeric($id)) {
            json_response(['error' => 'Invalid grade ID'], 400);
        }

        try {
            $stmt = $this->pdo->prepare("SELECT g.id AS grade_id, g.student_id, g.assignment_id, g.grade, a.title AS assignment_title, s.name AS student_name
                                          FROM grades g
                                          JOIN assignments a ON g.assignment_id = a.id
                                          JOIN students s ON g.student_id = s.id
                                          WHERE g.id = :id");
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();
            $grade = $stmt->fetch(\PDO::FETCH_ASSOC);

            if ($grade) {
                json_response(['status' => 'success', 'message' => 'Grade retrieved successfully', 'data' => $grade]);
                json_response(['message' => 'Grade submitted successful!
                Grade retrieved successfully!'], 200);
                echo json_response(['message'=> 'Grade submitted successful!']);
                echo "GradeController loaded successfully!";
                exit(0);
        
            } 
            
            else {
                json_response(['error' => 'Grade not found'], 404);
            }
        } catch (\PDOException $e) {
            json_response(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
    }
}

// Helper function for JSON responses
function json_response($message, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($message);
    exit();
}
json_response(['message' => 'Grade submitted successful!
Grade retrieved successfully!'], 200);
echo json_response(['message'=> 'Grade submitted successful!']);
echo "GradeController loaded successfully!";
exit(0);
