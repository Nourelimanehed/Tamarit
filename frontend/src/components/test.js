import React, { useState } from "react";
import Footer1 from "./Footer1";
import { Outlet, Link } from "react-router-dom";

import EventForm from "./EventForm";

function FormTest() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    adresse: "",
    wilaya: "",
    commune: "",
    moyensDeTransport: [],
    evenement: false,
    photos: [],
    horairesOuverture: "",
  });
  const [showTransportList, setShowTransportList] = useState(true);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire vers le serveur ou effectuer une autre action
    console.log(formData);
  };

  const handleTransportChange = (transport) => {
    const transportList = formData.moyensDeTransport.includes(transport)
      ? formData.moyensDeTransport.filter((item) => item !== transport)
      : [...formData.moyensDeTransport, transport];
    setFormData({ ...formData, moyensDeTransport: transportList });
  };

  const renderStep1 = () => (
    <>
      <h1>Informations</h1>
      <br />
      <label htmlFor="titre">Titre *</label>
      <input
        className="form-field"
        type="text"
        id="titre"
        value={formData.titre}
        onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
      />

      <label htmlFor="description">Description *</label>
      <textarea
        id="description"
        className="form-field"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <h1>Adresse</h1>
      <label htmlFor="adresse">Adresse *</label>
      <input
        className="form-field"
        type="text"
        id="adresse"
        value={formData.adresse}
        onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
      />

      <div className="form-2-field">
        <div className="form-1-field">
          <label htmlFor="wilaya">Wilaya *</label>
          <input
            type="text"
            id="wilaya"
            value={formData.wilaya}
            onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
          />
        </div>

        <div className="form-1-field">
          <label htmlFor="commune">Commune *</label>
          <input
            type="text"
            id="commune"
            value={formData.commune}
            onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
          />
        </div>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <h1>Ajouter les moyens de transport</h1>
      <div className="transport-field">
        <input
          onClick={() => setShowTransportList(!showTransportList)}
          type="text"
          id="moyensDeTransport"
          value={formData.moyensDeTransport.join(", ")}
          readOnly
        />
      </div>

      {showTransportList && (
        <div className="transport-options">
          <label>
            <input
              type="checkbox"
              checked={formData.moyensDeTransport.includes("bus")}
              onChange={() => handleTransportChange("bus")}
            />
            <span className="checkbox-label">Bus</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.moyensDeTransport.includes("tram")}
              onChange={() => handleTransportChange("tram")}
            />
            <span className="checkbox-label">Tram</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.moyensDeTransport.includes("train")}
              onChange={() => handleTransportChange("train")}
            />
            <span className="checkbox-label">Train</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.moyensDeTransport.includes("souterraine")}
              onChange={() => handleTransportChange("souterraine")}
            />
            <span className="checkbox-label">Souterraine</span>
          </label>
        </div>
      )}

      <div>
        <h1>Un événement à ajouter?</h1>
        <Link id="nav-item" to="/EventForm">
          <button className="light-btn">
            Ajouter Un événement
          </button>
        </Link>
      </div>


      <h1>Ajouter des images </h1>
      <div className="image-upload">
        <input
          type="file"
          id="photos"
          multiple
          onChange={(e) =>
            setFormData({ ...formData, photos: Array.from(e.target.files) })
          }
        />
        <label htmlFor="photos">Vous pouvez ajouter une ou plusieurs images. Pour en ajouter plusieurs, vous pouvez en sélectionner plusieurs en même temps.</label>
      </div>

      <h1>Ajouter les horaires d'ouverture</h1>
      <input
        className="form-field"
        type="text"
        id="horairesOuverture"
        value={formData.horairesOuverture}
        onChange={(e) => setFormData({ ...formData, horairesOuverture: e.target.value })}
      />

      
    </>
  );


  return (
    <div className="App">
      <div className="form-container">
        <div className="step-bar">
          <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
          <div className="step-label">Informations</div>
          <div className="step-line"></div>
          <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
          <div className="step-label">Images</div>
        </div>

        <div className="Step-Container">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
        </div>

        <div className="button-container">
          {step === 2 && (
            <button className="light-btn" onClick={handlePreviousStep}>
              Précédent
            </button>
          )}

          {step === 1 && (
            <button className="light-btn" onClick={handleNextStep}>
              Suivant
            </button>
          )}

          {step === 2 && (
            <button className="light-btn" onClick={handleFormSubmit}>
              Valider
            </button>
          )}
        </div>
      </div>

      <Footer1 />
    </div>
  );
}

export default FormTest;