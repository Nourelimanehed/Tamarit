import React from "react";

const PeriodeFilter = () => {
    return (<div className="filter">
    <div className="filter-title">PERIODE</div>
    <hr/>
    <div>
      <label for="date-min">Date min</label>
      <input type="text" id="date-min" className="date-field" placeholder="jj/mm/aaaa"/>
      <label for="date-max">Date max</label>
      <input type="text" id="date-max" className="date-field" placeholder="jj/mm/aaaa"/>
    </div>
    <div className="filter-btn">
    <br/>
      <button className="light-btn" >Valider</button>
    </div>
  </div>);
  };
  
export default PeriodeFilter;