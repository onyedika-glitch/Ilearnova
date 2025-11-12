<?php
namespace App\Controller;

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../src/helpers.php';

// EnrollmentController.php

class EnrollmentController {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // POST /enrollments - Enroll a student in a course
    public function enrollStudent($data) {
        $studentId = $data['student_id'] ?? null;
        $courseId = $data['course_id'] ?? null;

        if (!$studentId || !$courseId) {
            json_response([
                'status' => 'error',
                'message' => 'Student ID and Course ID are required',
                'data' => null
            ], 400);
        }

        try {
            // Prepare and execute SQL to insert the enrollment record
            $stmt = $this->pdo->prepare("INSERT INTO enrollments (student_id, course_id) VALUES (:student_id, :course_id)");
            $stmt->bindParam(':student_id', $studentId, \PDO::PARAM_INT);
            $stmt->bindParam(':course_id', $courseId, \PDO::PARAM_INT);
            $stmt->execute();

            // Return success message with enrollment details
            $enrollmentId = $this->pdo->lastInsertId();
            $enrollmentDate = date('Y-m-d'); // Assuming today's date as the enrollment date

            json_response([
                'status' => 'success',
                'message' => 'Enrollment successful',
                'data' => [
                    'enrollment_id' => $enrollmentId,
                    'student_id' => $studentId,
                    'course_id' => $courseId,
                    'enrollment_date' => $enrollmentDate,
                ]
                
            ]);
            json_response(['message' => 'Enrollment details retrieved successful!
            Enrollment successfull']);
        echo json_response(['message'=> 'Enrollment details retrieved successful!
        Enrollment successfull']);
        echo "Enrollment details retrieved successfully!";
        exit(0);

        } catch (\PDOException $e) {
            json_response([
                'status' => 'error',
                'message' => 'Database error: ' . $e->getMessage(),
                'data' => null
            ], 500);
        }
    }

    // GET /enrollments/{id} - Retrieve enrollment details by ID
    public function getEnrollmentById($vars) {
        $id = $vars['id'] ?? null;

        if (!$id || !is_numeric($id)) {
            json_response([
                'status' => 'error',
                'message' => 'Invalid enrollment ID',
                'data' => null
            ], 400);
        }

        try {
            // Prepare and execute SQL to fetch enrollment details
            $stmt = $this->pdo->prepare("SELECT e.id AS enrollment_id, e.student_id, e.course_id, e.enrollment_date, c.title AS course_title, s.name AS student_name
                                          FROM enrollments e
                                          JOIN courses c ON e.course_id = c.id
                                          JOIN students s ON e.student_id = s.id
                                          WHERE e.id = :id");
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();
            $enrollment = $stmt->fetch(\PDO::FETCH_ASSOC);

            if ($enrollment) {
                json_response([
                    'status' => 'success',
                    'message' => 'Enrollment details retrieved successfully',
                    'data' => $enrollment
                ]);
                json_response(['message' => 'Enrollment details retrieved successful!']);
        echo json_response(['message'=> 'Enrollment details retrieved successful!']);
        echo "Enrollment details retrieved successfully!";
        exit(0);
             

            } else {
                json_response([
                    'status' => 'error',
                    'message' => 'Enrollment not found',
                    'data' => null
                ], 404);
            }
        } catch (\PDOException $e) {
            json_response([
                'status' => 'error',
                'message' => 'Database error: ' . $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
}
json_response(['message' => 'Enrollment details retrieved successful!
Enrollment successfull']);
        echo json_response(['message'=> 'Enrollment details retrieved successful!
        Enrollment successfull']);
        echo "Enrollment details retrieved successfully!
        Enrollment successfull";
        exit(0);