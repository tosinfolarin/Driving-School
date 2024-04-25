// import BusinessRating from "../../Business Rating/BusinessRating";

// const SearchResult = (props) => {
//  console.log(props, 'searchProps')

//    const b = props.business; 
//    if (!b) {
//         return (<div>No Data Found</div>);
//     }

//     const tags = b.categories.map(category => (<span className = 'tag' key={b.id + category.title}>{category.title}</span>));
//     const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

     
//     return ( 
    

        
//         <div className="search-results">
//         <div className="business-image-container">
//             <img src={b.image_url} alt="business" className="business-image" />
//         </div>
    
//         <div className="business-info">
//             <h3 className="business-name">{b.name}</h3>
//             <BusinessRating reviewCount={b.review_count} rating={b.rating} />
//             <a href="https://www.yelp.co.uk/" target="_blank" rel="noopener noreferrer">
//                 <img src="src/images/yelp-logo.png" alt="yelp-logo" className="yelp-logo" />
//             </a>
//             <p>{tags}</p>
//         </div>
    
//         <div className="contact-info">
//             <p>{b.phone}</p>
//             {addressLines}
//         </div>
//     </div>
            

//      );
// }

// export default SearchResult;