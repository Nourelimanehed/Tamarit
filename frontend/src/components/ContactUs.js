import React, { useState } from 'react';
import imageMap from './../graphics/Rectangle 186.png';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    const validationErrors = {};
    if (name.trim() === '') {
      validationErrors.name = 'Veuillez saisir votre nom.';
    }
    if (email.trim() === '') {
      validationErrors.email = 'Veuillez saisir votre email.';
    }
    if (message.trim() === '') {
      validationErrors.message = 'Veuillez saisir votre message.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Send the data to the server
      const formData = {
        name,
        email,
        message,
      };

      try {
        await fetch('http://localhost:8000/home/contactUs/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        // Reset fields and errors after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      } catch (error) {
        console.log(error); // Handle any error that occurs during the API request
      }
    }
  };

  return (
    <div className="contact-us-page">
      <div className="contact-form">
        <h1>Contacter nous</h1>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <div className="input-wrapper">
            <input type="text" id="name" value={name} onChange={handleInputChange} />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <div className="input-wrapper">
            <input type="email" id="email" value={email} onChange={handleInputChange} />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <div className="input-wrapper">
            <textarea id="message" rows="4" value={message} onChange={handleInputChange} />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
        </div>
        <button className="send-button" onClick={handleSubmit}>Envoyer</button>
      </div>
      <div className="map-section">
        <img src={imageMap} alt="Map" />
        {Object.keys(errors).length > 0 && (
          <div className="error-messages">
            {Object.values(errors).map((error, index) => (
              <p key={index} className="error-message">{error}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUsPage;
