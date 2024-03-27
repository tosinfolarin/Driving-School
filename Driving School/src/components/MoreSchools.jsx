import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import Footer from "./Footer";
import InputWithButton from "./YelpSearch";

const MSchools = () => {
    return (
      <div>
        <div className="App">
          <Navbar/>
          <div className="header">
            <Home/>
            <BookNow/>
          </div>
            <InputWithButton/>
          </div>
          <Footer/>
        </div>
      );
}

export default MSchools;