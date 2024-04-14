import SearchResult from "./SearchResult";


const SearchResults = (props) => {
    console.log(props,'SEARCH RESULTS');
    

    if (!props.businesses || !props.businesses.length) {
        return (<div>No Search Results Found</div>);
    }

    const searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>)
    
    
    return ( 
        <div className = "search-results">
            {searchResults}
        </div>
     );
}
 
export default SearchResults;


// import BusinessRating from './BusinessRating'; // Assuming this component is imported from the correct location

// const SearchResult = (props) => {
//     const b = props.business;

//     if (!b) {
//         return (<div />);
//     }

//     const tags = b.categories.map(category => (<span className={`tag ${styles['business-tag']}`} key={b.id + category.title}>{category.title}</span>));
//     const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

//     return (
//         <div className='search-result'>
//             <img src={b.image_url} alt='business' className='business-image'/>
//             <div className='business-info'>
//                 <h2 className="subtitle">{b.name}</h2>
//                 <BusinessRating reviewCount={b.review_count} rating={b.rating} />
//                 <p>{b.price} {tags}</p>
//             </div>
//             <div className='contact-info'>
//                 <p>{b.phone}</p>
//                 {addressLines}
//             </div>
//         </div>
//     );
// }

// export default SearchResult;