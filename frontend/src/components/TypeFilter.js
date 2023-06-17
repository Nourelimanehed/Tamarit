import React from "react";

const TypeFilter = () => {
    return (
      <div className="filter">
        <div className="filter-title">Theme</div>
        <hr/>
        <div >
          <input type="radio" id="terrain" name="type-choice" />
          <label for="terrain">Histoire et patrimoine culturel</label>
          <br/>
          <input type="radio" id="terrain-Agricole" name="type-choice" />
          <label for="terrain-Agricole">Art et culture</label>
          <br/>
          <input type="radio" id="appartement" name="type-choice" />
          <label for="appartement">Nature et environnement</label>
          <br/>
          <input type="radio" id="maison" name="type-choice" />
          <label for="maison">Science et technologie</label>
          <br/>
          <input type="radio" id="bangalow" name="type-choice"/>
          <label for="bangalow">Divertissement et loisirs</label>
        </div>
        <div className="filter-btn">
          <button className="light-btn" >Valider</button>
        </div>
      </div>
    );
  };
  
export default TypeFilter;