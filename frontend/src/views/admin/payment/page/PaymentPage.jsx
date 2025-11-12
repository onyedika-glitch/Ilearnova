import React from 'react';
import PaymentTable from '../PaymentTable';
import PaymentCard from 'components/card/PaymentCard';

const PaymentPage = () => {

  const items = [
    { date: "11/18/2024", transactionId: "RN-102748WK", description: "Activity Fee", amount: "$50", method: "Credit Card", status: "Paid", action: "Download Receipt" },
    { date: "11/18/2024", transactionId: "RN-102748WK", description: "Activity Fee", amount: "$50", method: "Credit Card", status: "Failed", action: "No action" },
    { date: "11/18/2024", transactionId: "RN-102748WK", description: "Activity Fee", amount: "$50", method: "Credit Card", status: "Pending", action: "No action" }
    // Add more items as needed
  ];
  const data = [
    {
      title: "Tuition Fee",
      fee: "$100",
      feeType: "session",
      buttonText: "Pay Now",
      description: "Empower your child’s learning journey for just $300 per session – quality education, personalized attention, and a brighter future."
    },
    {
      title: "Music Classes",
      fee: "$50",
      feeType: "hour",
      buttonText: "Join Now",
      description: "Learn the art of music for $200 per month – personalized training and flexible timings."
    },
    {
      title: "Art Workshop",
      fee: "$70",
      feeType: "session",
      buttonText: "Enroll Today",
      description: "Unlock your creativity with our art workshop for just $280 per month."
    },
    {
      title: "Fitness Training",
      fee: "$40",
      feeType: "class",
      buttonText: "Start Now",
      description: "Achieve your fitness goals with professional training for $160 per week."
    },
    {
      title: "Cooking Classes",
      fee: "$30",
      feeType: "session",
      buttonText: "Register Now",
      description: "Master the art of cooking for just $120 per month with expert guidance."
    },
    {
      title: "Language Lessons",
      fee: "$25",
      feeType: "hour",
      buttonText: "Learn More",
      description: "Become fluent in new languages for $100 per month – fun and interactive classes."
    }
  ];
  
  return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((card, index) => (
          <PaymentCard
            key={index}
            title={card.title}
            fee={card.fee}
            feeType={card.feeType}
            buttonText={card.buttonText}
            description={card.description}
          />
        ))}
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Details</h1>
      <PaymentTable items={items} />
      <div className="mt-8">
        {data.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mb-2">Fee: {item.fee}</p>
            <p className="mb-2">Fee Type: {item.feeType}</p>
            <p className="mb-4">{item.description}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default PaymentPage;