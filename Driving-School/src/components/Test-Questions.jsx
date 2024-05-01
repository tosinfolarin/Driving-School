import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import ShowMeTellMe from "./SmeTme";
import Footer from "./Footer";


const TestQuestions = () => {
    return (
      <div>
        <div className="App">
          <Navbar/>
          <div className="header">
            <Home/>
            <BookNow/>
          </div>
            <ShowMeTellMe/>
          </div>
            <Footer/>
        </div>
      );
}
 
export default TestQuestions;