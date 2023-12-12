// src/Contact.js
import cimg from "./contact.jpeg";
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? "" : `${name} is required`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setConfirmationMessage("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setFormErrors({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setConfirmationMessage("");
    }, 10000);
  };

  return (
    <div className="contact-box">

      <div className="contact-heading">
        Contact Me
      </div>
      <div className="form-container">
        <div className="contacti">
          <img src={cimg} alt="" />
        </div>

        <div className="form-c">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="error-text">{formErrors.name}</div>
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="error-text">{formErrors.email}</div>
            </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="error-text">{formErrors.message}</div>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="contact-button"
                style={{ width: "100%" }}
              >
                Send
              </button>
            </div>
          </form>

          {confirmationMessage && (
            <div className="confirmation-message">{confirmationMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
