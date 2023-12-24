import React, { useState } from 'react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div id="contact-us-container">
      <h1 id="contact-us-title">Contact Us</h1>
      <form id="contact-us-form" onSubmit={handleSubmit}>
        <div className="contact-us-form-group">
          <label className="contact-us-label" htmlFor="name">
            Name:
          </label>
          <input
            className="contact-us-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-us-form-group">
          <label className="contact-us-label" htmlFor="email">
            Email:
          </label>
          <input
            className="contact-us-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="contact-us-form-group">
          <label className="contact-us-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="contact-us-textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="contact-us-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
