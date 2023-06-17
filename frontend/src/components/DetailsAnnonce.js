import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import image from "./../graphics/LieuImg.png";
import image1 from "./../graphics/MapLieu.png";
import image2 from "./../graphics/planner 6.png";
import image3 from "./../graphics/Heure.png";
import image4 from "./../graphics/train 1.png";
import image5 from "./../graphics/tram-car 1.png"
import image6 from "./../graphics/bus-stop 1.png"
import image7 from "./../graphics/underground 1.png"
import Footer1 from "./Footer1";
import { Link } from "react-router-dom"

const DetailsAnnonce = () => {
  const location = useLocation();
  const [site, setSite] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (location.state && location.state.site) {
      setSite(location.state.site);
    } else {
      // Fetch site details using the ID
      fetchSiteDetails();
    }
  }, [id, location.state]);

  const fetchSiteDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/sites/${id}`);
      const data = await response.json();
      setSite(data);
    } catch (error) {
      console.log('Error fetching site details:', error);
    }
  };

  if (!site) {
    return <div>Loading...</div>;
  }

  const {
    name,
    description,
    category,
    theme,
    latitude,
    longitude,
    opening_hours,
    transportation,
    images,
    event
  } = site;

  const imageUrl = `http://localhost:8000/${images[0]?.image.replace('site_images/', '')}`;

  const getDayOfWeek = (dayNumber) => {
    switch (dayNumber) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="place-details-container">
        <h1>{name}</h1>
        <div className="place-details-header">
          <img src={imageUrl} alt="Lieu touristique" style={{ width: '500px', height: '500px' }} />
        </div>
        <div className="place-details-info">
          <h1>Description</h1>
          <p>{description}</p>
          <h1>Site Details</h1>
          <table className="place-table">
            <tbody>
              <tr>
                <td>Catégorie :</td>
                <td>{category}</td>
              </tr>
              <tr>
                <td>Theme de lieu :</td>
                <td>{theme}</td>
              </tr>
              <tr>
                <td>Latitude :</td>
                <td>{latitude}</td>
              </tr>
              <tr>
                <td>Longitude :</td>
                <td>{longitude}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="place-schedule-transport">
          <div className="place-schedule">
            <h1>Horaire d'access</h1>
            {opening_hours.map((openingHour) => (
              <div key={openingHour.id}>
                <img src={image2} alt="Agenda" />
                <p>Jour: {getDayOfWeek(openingHour.day_of_week)}</p>
                <p>Heure: {openingHour.start_time}</p>
              </div>
            ))}
          </div>
          <div className="place-transport">
            <h1>Moyen de transport</h1>
            <div className="transport-item">
              <Link to="/detailsTransport">
                <img className="place-transport .transport-item img" src={image5} alt="Tram" />
              </Link>
              <Link to="/detailsTrain">
                <img src={image4} alt="Train" />
              </Link>
            </div>
            <div className="transport-item">
              <Link to="/detailsBus">
                <img className="place-transport .transport-item img" src={image6} alt="Bus" />
              </Link>
              <Link to="/detailSousTerrain">
                <img src={image7} alt="souterraine" />
              </Link>
            </div>
          </div>
        </div>
        <div className="comment-section">
          <h2>Ajouter un commentaire</h2>
          <div className="comment-box">
            <input id="msg" className="comment-box input" placeholder="Ajouter Un commentaire" />

            <button className="add-chat-btn">
              <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.33425 22.2333L24.6005 12.6756C25.634 12.2283 25.634 10.7717 24.6005 10.3244L2.33425 0.766661C1.49209 0.396106 0.560612 1.02222 0.560612 1.92944L0.547852 7.81999C0.547852 8.45888 1.01997 9.00833 1.65797 9.08499L19.6879 11.5L1.65797 13.9022C1.01997 13.9917 0.547852 14.5411 0.547852 15.18L0.560612 21.0706C0.560612 21.9778 1.49209 22.6039 2.33425 22.2333Z" fill="#85745A" />
              </svg>
            </button>
          </div>
        </div>
        <div className="upcoming-events">
          <h1>Événements à venir</h1>
          {event.map((eventItem) => (
            <div key={eventItem.id}>
              <p>Date: {eventItem.date}</p>
              <p>Name: {eventItem.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default DetailsAnnonce;
