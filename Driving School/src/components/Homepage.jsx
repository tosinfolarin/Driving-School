import BookNow from "./BookNow";
import Home from "./Home";
import Navbar from "./Navbar";


const Homepage = () => {
    return (
        <div className="App">
          <Navbar/>
          <div className="header">
            <Home/>
          </div>
          <BookNow/>
        
        </div>
         
        
      );
}
 
export default Homepage;