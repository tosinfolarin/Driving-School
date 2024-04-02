import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import Footer from "./Footer";
import InputWithButton from "./YelpSearch";
import SResults from "./SResultBar";
import SearchResults from "./SearchResults/SResultss";
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";



const Search = () => {
    const {location} = useReactRouter
    const params = new URLSearchParam(location.search)
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch()

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
          <SearchResults businesses = {businesses} />
          </div>
          <Footer/>
          
        </div>
)};

export default Search;