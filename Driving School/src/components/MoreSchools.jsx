import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import GoogleSearchResults from "./googleMapsApi/Googleresults";


const MSchools = (props) => {
  
 
  return (
    <div>
      <div className="App">
        <Navbar/>
        <div className="header">
          <Home/>
        </div>
          <GoogleSearchResults/>
        </div>
          <Footer/>
    </div>
  );
}

export default MSchools;