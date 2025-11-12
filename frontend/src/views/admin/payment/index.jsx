import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PaymentPage from './pages/PaymentPage';
import PaymentDetailPage from './views/admin/payment/page/PaymentDetailPage';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<PaymentPage />} />
      <Route path="/payment-detail/:id" element={<PaymentDetailPage />} />
    </Routes>
    </Router>
);