import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoursePage, Lesson } from './CoursePage';

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
