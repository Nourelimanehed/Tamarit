import React from "react";

const AddRectangle = () => {
    

    const scrollLeft = () =>{
      var left = document.querySelector(".add-rectangle-images");
      left.scrollBy(800,0)
    }
    const scrollRight = () =>{
      var right = document.querySelector(".add-rectangle-images");
      right.scrollBy(-800,0)
    }
     
    return (
  
      <div className="add-rectangle-container">
        
        <div className="add-rectangle-top-part">
          <div className="add-rectangle-date">15-01-2023</div>
          <button className="light-btn">supprimer</button>
        </div>

        
          
          
            <div className="add-rectangle-images">
              
              <div className="add-rectangle-image">
                <img className="image" src="images/back-ground-image.png" alt=" not found"/>
              </div>
            
              <div className="add-rectangle-image">
                <img className="image" src="images/defaultImage.png" alt=" not found"/>
              </div>
            
            </div>
          
          
          <button className="sroll-btn" id="previous-scroll-btn" onClick={scrollRight}>
            <svg width="13" height="32" viewBox="0 0 13 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8182 5.34058e-05C12.1727 5.34058e-05 12.4091 0.158316 12.6455 0.474842C13.1182 1.1079 13.1182 2.05748 12.6455 2.69054L2.83636 15.8264L12.6455 28.9623C13.1182 29.5954 13.1182 30.545 12.6455 31.178C12.1727 31.8111 11.4636 31.8111 10.9909 31.178L0.354546 16.9343C-0.118182 16.3012 -0.118182 15.3517 0.354546 14.7186L10.9909 0.474842C11.2273 0.158316 11.4636 5.34058e-05 11.8182 5.34058e-05Z" fill="#5D70D5"/>
            </svg>
          </button>
      
          <button className="sroll-btn" id="next-scroll-btn" onClick={scrollLeft}>
            <svg width="13" height="32" viewBox="0 0 13 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.18182 31.6528C0.827272 31.6528 0.590909 31.4945 0.354545 31.178C-0.118182 30.5449 -0.118182 29.5953 0.354545 28.9623L10.1636 15.8264L0.354545 2.69049C-0.118182 2.05743 -0.118182 1.10785 0.354545 0.474792C0.827273 -0.158264 1.53636 -0.158264 2.00909 0.474792L12.6455 14.7185C13.1182 15.3516 13.1182 16.3012 12.6455 16.9342L2.00909 31.178C1.77273 31.4945 1.53636 31.6528 1.18182 31.6528Z" fill="#5D70D5"/>
            </svg>
          </button>

      </div>
    );
  };
  
  

export default AddRectangle;