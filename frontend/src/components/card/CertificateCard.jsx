import React from 'react';

const CertificateCard = ({ certificates }) => {
  return (
    <div className="certificate-container">
      {certificates.map((cert, index) => (
        <div key={index} className="certificate-card">
          <div className="certificate-icon">🔔</div>
          <div className="certificate-details">
            <h3>{cert.title}</h3>
            <p>{cert.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateCard;
