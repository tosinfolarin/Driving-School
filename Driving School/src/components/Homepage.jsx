import BookNow from "./BookNow";
import Home from "./Home";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Tesimonials from "./Testomonials";
import BusinessInfo from "./BusinessInfo";
import Steps from "./Steps";


const Homepage = () => {
    return (
      <div>
        <div className="App">
          <Navbar/>
          <div className="header">
            <Home/>
          </div>
            <BookNow/>
            <BusinessInfo/>
            <Steps/>
            <Tesimonials/>
          
          </div>
          <Pricing/>
          <Footer/>
        </div>
      );
}
 
export default Homepage;