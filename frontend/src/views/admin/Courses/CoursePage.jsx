import React from 'react';
import { useParams, BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// Sample Data
const lessons = [
    {
        id: 1,
        title: 'Introduction to Physics',
        description: 'Unravel the secrets of motion, matter, and energy.',
        videoUrl: 'https://example.com/video1',
        teacher: 'Teacher A',
        notes: 'Understanding the basics is key to unlocking advanced concepts.'
    },
    {
        id: 2,
        title: 'Definition of Physics',
        description: 'Explore fundamental principles and their applications.',
        videoUrl: 'https://example.com/video2',
        teacher: 'Teacher B',
        notes: 'Practice consistently and ask questions!'
    }
];

// Lesson Card Component
function LessonCard({ lesson }) {
    return (
        <div className="lesson-card">
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
            <button onClick={() => window.location.href=`/lesson/${lesson.id}`}>Start Course</button>
        </div>
    );
}

// Lesson Detail Component
function LessonDetail({ lesson }) {
    return (
        <div className="lesson-detail">
            <iframe src={lesson.videoUrl} title={lesson.title} width="100%" height="400"></iframe>
            <h1>{lesson.title}</h1>
            <p><strong>Teacher:</strong> {lesson.teacher}</p>
            <p>{lesson.notes}</p>
            <button>Ask Questions</button>
        </div>
    );
}

// Main Page Component
export function CoursePage() {
    return (
        <div className="course-page">
            {lessons.map(lesson => (
                <LessonCard key={lesson.id} lesson={lesson} />
            ))}
        </div>
    );
}

// Dynamic Route for Lessons
export function Lesson({ id }) {
    const lesson = lessons.find(l => l.id === Number(id));
    return lesson ? <LessonDetail lesson={lesson} /> : <p>Lesson not found.</p>;
}

// App Component
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CoursePage />} />
                <Route path="/lesson/:id" element={<LessonPage />} />
            </Routes>
        </Router>
    );
}

// LessonPage Wrapper to Handle Routing Params
function LessonPage() {
    const { id } = useParams();
    return <Lesson id={id} />;
}

export default App;
