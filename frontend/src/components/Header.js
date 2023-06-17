import React from 'react'
import { Outlet, Link } from "react-router-dom"
import image from "./../graphics/logotamarit.png"
import image1 from  "./../graphics/like (1) 1.png"
import  image2 from './../graphics/login 1.png'
import image3  from './../graphics/read-more 1.png'




const Header = () => {
    return(
    <>
      <nav>
        <div className="flex-container">
            <ul id="nav-part1" className='nav-part1'>
                <li>
                    <Link to="/ ">
                        
                        <img src={image} id="logotamarit" alt="Logo tamarit"/>
                       
                        
                    </Link>
                </li>
                
                
            </ul>
           
            <ul  id="nav-part2" className='nav-part2'>
                <li id="nav-part2 li" className='nav-part2 li'>
                    <Link className="nav-item" to="/details">Cartes</Link>
                </li>
                <li id="nav-part2 li" className='nav-part2 li'>
                    <Link className="nav-item"  to="/annonces">Sites </Link>
                </li>
                <li id="nav-part2 li" className='nav-part2 li'>
                    <Link className="nav-item"  to="/aide">Nos services</Link>
                </li>
                <li>
                <Link id="nav-item"to="/monforme">
                        <button className="light-btn" to="/monforme">Déposer annonce</button>
                    </Link>
                 </li>
               
            </ul>
            <ul id="nav-part3" className='nav-part3'>
            <li>
                <Link className='nav-item nav-item-like"' to="/mesFavoris ">
                        
                        <img src={image1} id="lIKE" alt="not found"/>
                       
                        
                    </Link>
                </li>
                <li>
                <Link className='nav-item nav-item-like"' to="/aide ">
                        
                        <img src={image2} id="login 1" alt="not found"/>
                       
                        
                    </Link>
                </li>
                <li>
                <Link className='nav-item nav-item-like"' to="/mesOffres ">
                        
                        <img src={image3} id="read-more 1" alt="not found"/>
                       
                        
                    </Link>
                </li>
            </ul>
                
        </div>
      </nav>
      <Outlet />
    </> 
    );
}

export default Header;