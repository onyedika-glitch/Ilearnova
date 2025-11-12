<?php

namespace App\Controller;

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../src/helpers.php';

class CourseController {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // GET /courses - Retrieve all courses
    public function getCourses() {
        try {
            $stmt = $this->pdo->query("SELECT id, title, description, created_at FROM courses");
            $courses = $stmt->fetchAll(\PDO::FETCH_ASSOC);
            json_response($courses);
        } catch (\PDOException $e) {
            json_response(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
    }

    // GET /courses/{id} - Retrieve a specific course
    public function getCourseById($data) {
        $id = $data['id'] ?? null;

        if (!$id || !is_numeric($id)) {
            json_response(['error' => 'Invalid course ID'], 400);
        }

        try {
            $stmt = $this->pdo->prepare("SELECT id, title, description, created_at FROM courses WHERE id = :id");
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();
            $course = $stmt->fetch(\PDO::FETCH_ASSOC);

            if ($course) {
                json_response($course);
                json_response(['message' => 'User logged in successfully', 'data' => $course], 200);
                echo json_response(['message'=> 'Course created successful!']);
echo "Course Created successfully!";
echo "Course Created successfully!";

exit(0);
            } else {
                json_response(['error' => 'Course not found'], 404);
            }
        } catch (\PDOException $e) {
            json_response(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
    }

    // POST /courses - Create a new course
    public function createCourse($data) {
        $title = $data['title'] ?? null;
        $description = $data['description'] ?? null;

        if (!$title || !$description) {
            json_response(['error' => 'Title and description are required'], 400);
        }

        try {
            $stmt = $this->pdo->prepare("INSERT INTO courses (title, description) VALUES (:title, :description)");
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':description', $description);
            $stmt->execute();

            json_response(['message' => 'Course created successfully', 'id' => $this->pdo->lastInsertId()]);
        } catch (\PDOException $e) {
            json_response(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
    }
}
echo json_response(['message'=> 'Course Created successful!']);
echo json_response(['message'=> 'Course Created successfully!']);
echo "Course Created successfully!";
echo "Course Created successfully!";

exit;