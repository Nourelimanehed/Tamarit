import image from "./../graphics/homeImage.png" 
import SearchBar from "./SearchBar";
import NewAdds from "./NewAdds";

import Footer1 from "./Footer1"
const Home = () => {
    return (
      <div  className="background-image" >
      <img  src={image} id="back-ground-image" alt="not found"/>
      
      
      <SearchBar/>
      <NewAdds/>
      <Footer1/>
      </div>
     

      
    );
  };
  
  export default Home;