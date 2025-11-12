import React from 'react';
import ReactDOM from 'react-dom';
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TuitionPage />
  </React.StrictMode>
);
export default TuitionPage;