import Navbar from "./Navbar";
import BookNow from "./BookNow";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Footer from "./Footer";


const FAQQs = () => {
    return (
      <div>
        <div className="App">
          <Navbar/>
          <div className="header">
            <Home/>
          </div>
            <BookNow/>
          </div>
            <AboutMe/>
            <Footer/>
        </div>
      );
}
 
export default FAQQs;