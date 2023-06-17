import React, { useState } from "react";
import Footer1 from "./Footer1";
import { Outlet, Link } from "react-router-dom"

function FormTest() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    adresse: "",
    wilaya: "",
    commune: "",
    moyensDeTransport: "",
    evenement: false,
    photos: []
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

  const renderStep1 = () => (
    <><h1>Informations</h1>
      <br/>
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
          <label   htmlFor="wilaya">Wilaya *</label>
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
      <h1>Ajouter les moyens de transports</h1>
    <div className="transport-field">
      <input
      onClick={() => setShowTransportList(!showTransportList)}
        type="text"
        id="moyensDeTransport"
        value={formData.moyensDeTransport}
        onChange={(e) =>
          setFormData({
            ...formData,
            moyensDeTransport: e.target.value.split(",").map((value) => value.trim())
          })
        }
        onFocus={() => setShowTransportList(true)}
        onBlur={() => setShowTransportList(false)}
      />
      
    </div>

    {showTransportList && (
      <select
        multiple
        value={formData.moyensDeTransport}
        onChange={(e) =>
          setFormData({
            ...formData,
            moyensDeTransport: Array.from(e.target.selectedOptions, (option) => option.value)
          })
        }
      >
        <option value="bus">Bus</option>
        <option value="metro">Métro</option>
        <option value="train">Train</option>
        <option value="souterraine">Souterraine</option>
        <option value="velo">Vélo</option>
        <option value="tram">Tram</option>
      </select>
    )}


      <div>
      <h1>  Un événement à ajouter?</h1>
      <Link id="nav-item"to="/EventForm"> 
            <button
        className="light-btn"
       
      >
        Ajouter Un événement 
      </button>
      </Link>
          </div>
        
      

      <label htmlFor="photos">Vous pouvez ajouter une ou plusieurs images en cliquant sur ce texte . Pour en ajouter plusieurs vous pouvez .
                en sélectionner plusieurs en même temps.</label>
      <input
        type="file"
        id="photos"
        multiple
        onChange={(e) =>
          setFormData({ ...formData, photos: Array.from(e.target.files) })
        }
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
