import React, { useState } from "react";
import image from "./../graphics/Mapsicle Map.png";

function EventForm() {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    adresse: "",
    wilaya: "",
    commune: "",
    horairesOuverture: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire vers le serveur ou effectuer une autre action
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1>Ajouter un événement</h1>
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
      <h1>Horaire</h1>
      <label htmlFor="horairesOuverture">Horaire de l'événement</label>
      <input
        className="form-field"
        type="text"
        id="horairesOuverture"
        value={formData.horairesOuverture}
        onChange={(e) => setFormData({ ...formData, horairesOuverture: e.target.value })}
      />

      <label htmlFor="titre">Vous pouvez déplacer le curseur sur la map pour indiquer un emplacement précis</label>
      <img className="Map" src={image} alt="not found" />

      <div className="button-container">
        <button className="light-btn" onClick={handleFormSubmit}>Valider</button>
      </div>
    </div>
  );
}

export default EventForm;
