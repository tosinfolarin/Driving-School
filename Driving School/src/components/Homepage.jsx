import BookNow from "./BookNow";
import Home from "./Home";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Testimonials from "./Testomonials";
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
            <Testimonials/>
            <Steps/>
          </div>
            <Pricing/>
            <Footer/>
        </div>
      );
}
 
export default Homepage;