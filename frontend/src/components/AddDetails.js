import React from 'react'
import AddRectangle from "./AddRectangle"
import AddChat from "./AddChat"
import AddContentTable from './AddContentTable'
import AddMap from "./AddMap"

const AddDetails = ({title,price,area}) => {
  return (
    <div className="add-details-container">
        
        <div className="add-details-top-part">
            <h1>TITRE</h1>
            <hr/>
            <div className="add-view">
                <AddRectangle/>
                <AddChat/>
            </div>
        </div>
        
        <div className="add-details-middle-part">
          <h2>Description</h2>
          
          <p>Original dans son concept la Résidence l’Aube est un véritable havre de paix où l’architecture adopte un vocabulaire contemporain et vivant. La conception de L’Aube s’inscrit dans un cadre de modernité de haut standing, un confort, un bienêtre et une diversité de services, d’espaces verts et d’aires de détente offrant aux résidents un climat sécurisé, reposant et harmonieux. La résidence L’AUBE se situe à Chéraga, dans un quartier calme, proche de toutes les commodités de vie : transports en commun, commerces, écoles….. La résidence assure des logements fonctionnels, pratiques et confortables.</p>
          <br/>
          <div className="add-info-table"><AddContentTable/></div>
        </div>
        
        <div className="add-details-bottom-part">
          <AddMap/>
        </div>
    
    </div>
  )
}

export default AddDetails;