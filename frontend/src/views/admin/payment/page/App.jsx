import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TuitionPage from './TuitionPage';
import PaymentMethodCard from './PaymentMethodCard';
const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<TuitionPage />} />
          <Route path="/payment-method" element={<PaymentMethodCard />} />
        </Routes>
      </Router>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  