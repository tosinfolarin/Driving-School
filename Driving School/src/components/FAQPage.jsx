import Navbar from "./Navbar";
import BookNow from "./BookNow";
import Home from "./Home";
import FAQs from "./FAQs";
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
          <FAQs/>
          <Footer/>
        </div>
      );
}
 
export default FAQQs;