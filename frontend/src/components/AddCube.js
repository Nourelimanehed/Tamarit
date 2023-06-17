import React from 'react'
import "./../App.css"

import Jardin from "./../graphics/JardinDessai.png"
import {  Link } from "react-router-dom"
import image1 from  "./../graphics/like (1) 1.png"


const AddCube = ({title,price,area})=> {
  
  return (
    <div className="add-cube-container">
      
      
        <img className="add-cube-img" src={Jardin} id="back-ground-image" alt="not found"/>
      
      
      <div className="add-cube-title">
      <Link className="nav-item" to="/details">{title}</Link></div>
      <div className="add-cube-info">
        <div>
        
                        
                        <img src={image1} id="lIKE" alt="not found"/>
                       
                        
                   
        </div>
        <div className="add-cube-location-icon">
          <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.5 15.0312C30.5 24.2812 19.52 32.375 19.52 32.375C19.52 32.375 8.54004 24.2812 8.54004 15.0312C8.54004 9.25 13.42 4.625 19.52 4.625C25.62 4.625 30.5 9.25 30.5 15.0312Z" stroke="#9B581C" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
            <path d="M19.5199 18.5C21.5412 18.5 23.1799 16.947 23.1799 15.0312C23.1799 13.1155 21.5412 11.5625 19.5199 11.5625C17.4985 11.5625 15.8599 13.1155 15.8599 15.0312C15.8599 16.947 17.4985 18.5 19.5199 18.5Z" stroke="#9B581C" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
          </svg>
        </div>   
      </div>
    </div>
  )
}

export default AddCube;