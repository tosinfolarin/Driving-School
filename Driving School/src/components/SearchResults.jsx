import SResults from "./SResultBar";

const SearchResults = () => {
    if (!props.businesses || !props.businesses.length){
    return (<div></div>);
    }

    const searchResults = props.businesses.map(b => <SResults key={b.id} businesses= {b}/>)
    
    return (
       <div className = "search-results">
        {SearchResults}
        </div>
     );
}
 
export default SearchResults;