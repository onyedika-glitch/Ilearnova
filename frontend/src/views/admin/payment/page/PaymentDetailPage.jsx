import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import TuitionFeeCard from 'components/card/TuitionFeeCard';

const TuitionPage = () => {
  const feeData = {
    title: "Tuition Fee",
    fee: "$100",
    feeType: "session",
    description: "Empower your child’s learning journey for just $300 per session – quality education, personalized attention, and a brighter future."
  };
  
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <div className="progress-bar flex justify-center mb-4">
          <span className="step active"></span>
          <span className="step"></span>
          <span className="step"></span>
          <span className="step"></span>
        </div>
        <h2 className="text-lg font-semibold">Step 1: Select Fee</h2>
      </div>
      <TuitionFeeCard fee={feeData} />
    </div>
  );
};


  const PaymentDetailPage = ({fee}) => {
  const navigate = useNavigate();
    return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-white rounded-lg shadow-lg p-6 flex">
        <div className="w-1/2 pr-6">
          <h1 className="text-2xl font-bold mb-2">Tuition Fee</h1>
            <h1 className="text-2xl font-bold mb-2">{fee.title}</h1>
          <p className="text-blue-600 text-3xl font-semibold">${fee.amount}<span className="text-blue-600 text-sm font-semibold">/ {fee.session}</span></p>
          <p className="text-gray-700 mt-4">{fee.description}</p>
          <button 
            className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 w-full" 
            onClick={() => navigate('/payment-method')}
          >
            Proceed to payment
          </button>
        </div>
        <div className="w-1/2">
          <img src="assets/img/Payment/image1.png" alt="Payment illustration" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

const PaymentMethod = () => {
  const methods = [
    { name: 'Credit Card/Debit Card', icon: '💳' },
    { name: 'Bank Transfer', icon: '🏦' },
    { name: 'Paypal', icon: '🅿️' },
    { name: 'Stripe', icon: '🔵' },
  ];

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-white rounded-lg shadow-lg p-6 flex">
        <div className="w-1/2 pr-6">
          <h1 className="text-2xl font-bold mb-4">Choose Your Preferred Payment Method</h1>
          {methods.map((method, index) => (
            <div key={index} className="flex items-center border p-4 rounded-lg mb-2">
              <span className="text-3xl mr-4">{method.icon}</span>
              <p className="text-lg">{method.name}</p>
            </div>
          ))}
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <label>Save payment method</label>
          </div>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 w-full">Continue</button>
        </div>
        <div className="w-1/2">
          <img src="/images/payment-method.png" alt="Payment method illustration" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
  <React.StrictMode>
    <PaymentDetailPage />
  </React.StrictMode>

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TuitionPage />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
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


export default PaymentDetailPage;
