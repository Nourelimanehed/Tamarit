import React, { useState , useEffect } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import customIcon from "./marker.png";


import LeafletGeocoder from './LeafletGeocoder';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

function Carte() {
  const [sites, setSites] = useState([]);

  const position = [36.7525000, 3.0419700];
  let defaultIcon = L.icon({
    iconUrl: customIcon,
    iconSize: [20, 20],
  });

  L.Marker.prototype.options.icon = defaultIcon;

  useEffect(() => {
    axios.get('/api/sites/')
      .then(response => setSites(response.data.sites))
      .catch(error => console.error('Erreur lors de la récupération des sites :', error));
  }, []);

  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Tamarit </a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sites.map(site => (
        <Marker key={site.id} position={[site.latitude, site.longitude]}>
          <Popup className="custom-popup" maxWidth={400}>
            <div>
              <h2 className="custom-title">{site.name}</h2>
              {/* Le reste du contenu de la popup */}
            </div>
          </Popup>
        </Marker>
      ))}
      <LeafletGeocoder />
    </MapContainer>
  );
}

export default Carte;
