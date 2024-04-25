import Navbar from "./Navbar";
import Home from "./Home";
// import BookNow from "./BookNow";
import Footer from "./Footer";
// import SubNav from "./SearchResultsSummary/SearchResultsSummary";
import SearchBar from "./SearchBar/SearchBar";
// import SearchResults from "./SearchResultsSummary/SearchResults";
import GoogleSearchResults from "./googleMapsApi/googleresults";


const MSchools = (props) => {
  
  // function search(term, location) {
  //   const urlEncodedTerm = encodeURI(term);
  //   const urlEncodedLocation = encodeURI(location);
  //   window.location.href = `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`;
  // }

  return (
    <div>
      <div className="App">
        <Navbar/>
        <div className="header">
          <Home/>
          {/* <BookNow/> */}
        </div>
        {/* <SearchBar term={props.term} location={props.location}  search={search}/> */}
        {/* <SubNav/> */}
        <GoogleSearchResults/>
        {/* <SearchResult/> */}
        {/* <SearchResults/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default MSchools;