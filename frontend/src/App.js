import Header from "./components/Header";
import Home from "./components/Home";
import Help from "./components/Help";
import Adds from "./components/Adds";
import MyOffers from "./components/MyOffers";
import MyAddsFav from "./components/MyAdds";
import NoPage from "./components/NoPage"
import AddDetails from "./components/AddDetails";
import DetailsAnn from "./components/DetailsAnn";
import DetailsTransport from "./components/DetailsTransport";

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormTest from "./components/test";
import DetailsBus from "./components/DetailsBus";
import DetailsTrain from "./components/DetailsTrain";
import DetailsSousTerrain from "./components/DeailSousTerrain";
import ContactUs from "./components/ContacterNous";
import EventForm from "./components/EventForm";



function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>} />
          <Route path="aide" element={<Help/>} />
          <Route path="annonces" element={<Adds/>} />
          <Route path="messervices" element={<MyOffers/>} />
          <Route path="mesFavoris" element={<MyAddsFav/>} />
          <Route path="detailesAnnonce" element={<AddDetails/>}/>
          <Route path="mesOffres" element={<MyOffers/>} />
          <Route path="details/:id" element={<DetailsAnn/>} />
          <Route path="detailsTransport" element={<DetailsTransport/>} />
          <Route path="detailsBus" element={<DetailsBus/>} />
          <Route path="detailsTrain" element={<DetailsTrain/>} />
          <Route path="detailSousTerrain" element={<DetailsSousTerrain/>} />
          <Route path="ContactUs" element={<ContactUs/>} />
          <Route path="monforme" element={<FormTest/>}/>
          <Route path="EventForm" element={<EventForm/>}/>
          <Route path="*" element={<NoPage />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
    );
    
  }

  export default App;