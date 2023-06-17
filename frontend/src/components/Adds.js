
import React, { useState, useEffect } from 'react';
import SearchBar2 from './SearchBar2';
import FilterBar2 from './FilterBar2';
import AddCube from './AddCube';

const Help = () => {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    // Fetch site data from the backend API endpoint
    fetch('http://localhost:8000/sites/')
      .then((response) => response.json())
      .then((data) => setSiteData(data.sites))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="adds-container">
      <div className="adds-top-part">
        <h1>Découvrez l'Algérie</h1>
        <SearchBar2 />
      </div>
      <div className="adds-middle-part">
        <hr style={{ margin: '10px' }} />
        <FilterBar2 />
      </div>
      <div className="adds-bottom-part">
        {siteData.map((site) => (
          <AddCube key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
};

export default Help;
