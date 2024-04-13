import Navbar from "../Navbar"; 
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer";
import SearchResult from "../SearchResultsSummary/SearchResult";
import SubNav from "../SearchResultsSummary/SearchResultsSummary";
import { useBusinessSearch } from "../../hooks/yelp-api/useBusinessSearch";


const Search = () => {
  

  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

    return (
        <div>
          <div>
            <div className="App">
                <Navbar />
            </div>
            <div>
               <SearchBar />
               <SubNav/>
               <SearchResult businesses = {businesses}/>
               
            </div>
            </div>
            <Footer />
        </div>
        
    );
};

export default Search;

