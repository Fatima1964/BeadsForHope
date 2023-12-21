import React from 'react';
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <strong>Contact Number:</strong>
        <p className="contact-number">Whatsapp:+1 (780) 457-7174</p>
      </div>
      <div className="contact-info">
        <strong>Email:</strong>
        <p className="email">lana.moussa13@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
