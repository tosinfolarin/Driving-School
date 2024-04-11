import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import Footer from "./Footer";
import InputWithButton from "./YelpSearchBar";
import SResults from "./SearchResultsSummary/SearchResultsSummary";
import SearchResult from "./SearchResultsSummary/SearchResult";


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
            <SResults/>
            <SearchResult/>
            <SearchResult/>
          
          
          </div>
          <Footer/>
         
        </div>
       
        
      
      );
}

export default MSchools;