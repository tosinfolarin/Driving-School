import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import Footer from "./Footer";
// import InputWithButton from "./SearchBar/YelpSearchBar";
import SubNav from "./SearchResultsSummary/SearchResultsSummary";
// import SearchResult from "./SearchResultsSummary/SearchResult";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResultsSummary/SearchResults";


const MSchools = () => {
  
  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    window.location.href = `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`;
  }

  return (
    <div>
      <div className="App">
        <Navbar/>
        <div className="header">
          <Home/>
          <BookNow/>
        </div>
        {/* <InputWithButton/> */}
        <SearchBar search={search}/>
        <SubNav/>
        {/* <SearchResult/> */}
        <SearchResults/>
      </div>
      <Footer/>
    </div>
  );
}

export default MSchools;