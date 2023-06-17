import React from 'react';
import { Link } from 'react-router-dom';

const AddCube = ({ site }) => {
  const { id, name, description } = site;
  const imageUrl = `http://localhost:8000/${site.images[0]?.image.replace('site_images/', '')}`;

  return (
    <div className="add-cube-container">
      {/* Render the first image from the images array */}
      <img
        className="add-cube-img"
        src={imageUrl}
        alt="Site Image"
        style={{ width: '250px', height: '200px' }} // Adjust the width and height as per your requirement
      />

      <div className="add-cube-title">
        <Link className="nav-item" to={{ pathname: `/details/${id}`, state: { site } }}>
          {name}
        </Link>
      </div>
      <div className="add-cube-location-icon">{/* SVG code for location icon */}</div>
    </div>
  );
};

export default AddCube;
