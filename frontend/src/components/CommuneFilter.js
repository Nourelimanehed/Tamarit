import React from "react";
import { useState } from "react";
import {Communes} from "./Communes"

const CommuneFilter = () => {
    
  const [query,setQuery] = useState("");
  const [value,setValue] = useState();
  return (
    <div className="filter" >
      <div className="filter-title" >WILAYA</div>
      <input className="date-field" type="text" value={value} onClick={(e)=>setValue()} placeholder="Sélectioner une wilaya" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
      <hr/>
      <select className="list" size={6}>
       {Communes.filter(commune=>commune.name.toLowerCase().includes(query)
       ).map((commune)=>(
        <option className="list-item" value={commune.id} onClick={(e)=>setValue(commune.name)}>{commune.name}</option>
       ))}
      </select>
      <div className="filter-btn">
        <button className="light-btn" >Valider</button>
      </div>
    </div>);
  };
  
export default CommuneFilter;