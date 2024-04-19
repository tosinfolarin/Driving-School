import Navbar from "../Navbar"; 
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer";
import SearchResults from "../SearchResultsSummary/SearchResults";
import SubNav from "../SearchResultsSummary/SearchResultsSummary";
import { useBusinessSearch } from "../../hooks/yelp-api/useBusinessSearch";



const Search = () => {
  

  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

  if (!term || !locationParam)
    {window.location.href = '/more-schools'};


  function search(term, location) {
    console.log('I am called');
    searchParams({term, location });
  }



    return (
        <div>
          <div>
            <div className="App">
                <Navbar />
            </div>
            <div>
              
               <SearchBar term={term} location={locationParam} search={search}/>
               <SubNav term={term} 
               location={locationParam} 
               amountResults={amountResults}
               showResults={businesses ? businesses.length : 0}/>
               <SearchResults businesses={businesses} className="search-rendered"/>
               
            </div>
            </div>
            <Footer />
        </div>
        
    );
};

export default Search;

