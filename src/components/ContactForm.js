// ContactForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faAt, faComment } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <FontAwesomeIcon icon={faFileSignature} className="icon" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>
      <br />
      <div className="input-container">
        <FontAwesomeIcon icon={faAt} className="icon" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
        />
      </div>
      <br />
      <div className="input-container">
        <FontAwesomeIcon icon={faComment} className="icon" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
