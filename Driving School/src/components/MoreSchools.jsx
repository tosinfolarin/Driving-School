import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import Footer from "./Footer";
import InputWithButton from "./YelpSearchBar";
import SResults from "./SearchResultsSummary/SearchResultsSummary";
import SearchResult from "./SearchResultsSummary/SearchResult";
import SearchBar from "./SearchBar/SearchBar";






const MSchools = ({history}) => {

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
  }

  



    return (
      <div>
        <div className="App">
          <Navbar/>
          <div className="header">
            <Home/>
            <BookNow/>
          </div>
            <InputWithButton/>
            <SearchBar search = {search}/>
            <SResults/>
            <SearchResult/>
            <SearchResult/>
            
          
          
          </div>
          <Footer/>
         
        </div>
       
        
      
      );
}

export default MSchools;