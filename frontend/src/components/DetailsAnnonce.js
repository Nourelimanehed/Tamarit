import React from 'react';
import image from "./../graphics/LieuImg.png";
import image1 from "./../graphics/MapLieu.png";
import image2 from "./../graphics/planner 6.png";
import image3 from "./../graphics/Heure.png";
import image4 from "./../graphics/train 1.png";
import image5 from "./../graphics/tram-car 1.png"
import image6 from "./../graphics/bus-stop 1.png"
import image7 from "./../graphics/underground 1.png"
import Footer1 from "./Footer1";
import {  Link } from "react-router-dom"


const DetailsAnnonce = () => {
  return (
    <div>
      <div className="place-details-container">
        <h1>Notre Dame D'affrique</h1>
        <div className="place-details-header">
          <img src={image} alt="Lieu touristique" />
          <div className="place-map">
            <img src={image1} alt="Map touristique" />
          </div>
        </div>
        <div className="place-details-info">
          <h1>Description</h1>
          <table className="place-table">
            <tbody>
              <tr>
                <td>Date :</td>
                <td>01/07/2023</td>
              </tr>
              <tr>
                <td>Catégorie :</td>
                <td>Monument</td>
              </tr>
              <tr>
                <td>Type de lieu :</td>
                <td>Historique</td>
              </tr>
            </tbody>
          </table>
          <div className="place-description">
            {/* Description du lieu */}
            <p className="description-text">Description et Hisorique </p>
          </div>
          <div className="place-schedule-transport">
            <div className="place-schedule">
              <h1>Horaire d'ouverture</h1>
              <div className="schedule-item">
                <img src={image2} alt="Agenda" />
                <span>Dates:</span>
                <span>16/06/2023</span>
              </div>
              <div className="schedule-item">
                <img src={image3} alt="Heure" />
                <span>Heure:</span>
                <span>3.00-3.30pm</span>
              </div>
            </div>
            <div className="place-transport">
              <h1>Moyen de transport</h1>
              <div className="transport-item">
              <Link  to="/detailsTransport">
                <img  className="place-transport .transport-item img"src={image5} alt="Tram" />
                </Link>
                <Link  to="/detailsTrain">
                <img src={image4} alt="Train" />
                </Link>
              </div>
              <div className="transport-item">
              <Link  to="/detailsBus">
                <img  className="place-transport .transport-item img" src={image6} alt="Bus" />
              </Link>
              <Link  to="/detailSousTerrain">
                <img src={image7} alt="souterraine" />
                </Link>
              </div>
            </div>
          </div>
          <div className="comment-section">
                <h1>Ajouter un commentaire</h1>
                      <div className="comment-box">
                         <input  id="msg" className="comment-box input"  placeholder="Ajouter Un commentaire"/>
            
                        <button className="add-chat-btn" >
                           <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33425 22.2333L24.6005 12.6756C25.634 12.2283 25.634 10.7717 24.6005 10.3244L2.33425 0.766661C1.49209 0.396106 0.560612 1.02222 0.560612 1.92944L0.547852 7.81999C0.547852 8.45888 1.01997 9.00833 1.65797 9.08499L19.6879 11.5L1.65797 13.9022C1.01997 13.9917 0.547852 14.5411 0.547852 15.18L0.560612 21.0706C0.560612 21.9778 1.49209 22.6039 2.33425 22.2333Z" fill="#85745A"/>
                             </svg>
                        </button>
                        </div>
                    </div>
          </div>
          <div className="upcoming-events">
              <h1>Événements à venir</h1>
                   <ul>
                    <li>
                         <span className="event-date">25/06/2023</span>
                        <span className="event-description">Description de l'événement 1</span>
                    </li>
                  <li>
                 <span className="event-date">28/06/2023</span>
                   <span className="event-description">Description de l'événement 2</span>
                 </li>
   
                  </ul>
        </div>
        </div>
        <Footer1/>
    </div>
  );
};

export default DetailsAnnonce;
