import React from 'react'
import TypeFilter from "./TypeFilter";

import WilayaFilter from "./WilayaFilter";
import { useState } from "react";

const FilterBar = ()=> {
  
  const [typeFilter, setTypeFilter] = useState(false);
  const [wilayaFilter, setWilayaFilter] = useState(false);
 
 
  

  const setType = event =>{
      if(!typeFilter){
        setTypeFilter(true);
        setWilayaFilter(false);
        
      }
      else{setTypeFilter(false);}
  }

  const setWilaya = event =>{
    if(!wilayaFilter){
      setTypeFilter(false);
      setWilayaFilter(true);
     
      
    }
    else{setWilayaFilter(false);}
  }
  
 
  
  
 

  
  return (
    <div id="filter-bar2">
       <button className="dark-filter-bar-btn"  onClick={setType} >Theme</button>
       <button className="dark-filter-bar-btn" onClick={setWilaya}>Catégorie</button>
       
       
       {typeFilter && ( <div> <TypeFilter/></div>)}
       {wilayaFilter && ( <div> <WilayaFilter/></div>)}
       
     
    </div>
  )
}

export default FilterBar;