import React from 'react';
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <strong>Contact Number:</strong>
        <p className="contact-number">+1 (555) 123-4567</p>
      </div>
      <div className="contact-info">
        <strong>Email:</strong>
        <p className="email">example@example.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
