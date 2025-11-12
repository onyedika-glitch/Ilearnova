import React from 'react';
import ReactDOM from 'react-dom/client';
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

  const TuitionPage = () => {
    return (
      <div className="container mx-auto p-8">
        <div className="text-center mb-8">
          <div className="progress-bar flex justify-center mb-4">
            <span className="step active"></span>
            <span className="step active"></span>
            <span className="step"></span>
            <span className="step"></span>
          </div>
          <h2 className="text-lg font-semibold">Step 2: Choose Payment Method</h2>
        </div>
        <PaymentMethod />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <TuitionPage />
    </React.StrictMode>
  );
  
  export default PaymentMethod;