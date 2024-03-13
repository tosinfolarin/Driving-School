import BookNow from "./BookNow";
import Home from "./Home";
import Navbar from "./Navbar";
// import Footer from "./Footer";


const Homepage = () => {
    return (
      <div>
        <div className="App">
          <Navbar/>
          <div className="header">
            <Home/>
          </div>
            <BookNow/>
          </div>
            {/* <Footer/> */}

        </div>
      );
}
 
export default Homepage;