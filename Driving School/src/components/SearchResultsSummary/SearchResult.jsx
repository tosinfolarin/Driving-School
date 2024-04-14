import BusinessRating from "../../Business Rating/BusinessRating";

// const SearchResult = () => {


//     return ( 
//         <div className= "search-results">
//             <img src = 'https://placehold.co/210x210' alt='business' className="business-image" />
//             <div className ="business-info">
//                 <h2 className ="business-name"> Driving Place </h2>
//                 <BusinessRating/>
        
//                 <p>££ <span className="tag is-light">Drivers</span> <span className="tag is-light">Nearby</span></p>
//             </div>
//             <div className = "contact-info">
//                 <p>+127394850034</p>
//                 <p>Example street 2</p>
//                 <p>SE10 9AN</p>
//             </div>
            
//         </div>
            

//      );
// }
 
// export default SearchResult;


const SearchResult = (props) => {
 console.log(props, 'searchProps')

   const b = props.business; 
   if (!b) {
        return (<div>No Data Found</div>);
    }

    return ( 
        <div className= "search-results">
            <img src = {b.image_url} alt='business' className="business-image" />
            <div className ="business-info">
                <h2 className ="business-name"> {b.name} </h2>
                <BusinessRating reviewCount={b.review_count} rating ={b.rating} />
        
                <p>££ <span className="tag is-light">Drivers</span> <span className="tag is-light">Nearby</span></p>
            </div>
            <div className = "contact-info">
                <p>+127394850034</p>
                <p>Example street 2</p>
                <p>SE10 9AN</p>
            </div>
            
        </div>
            

     );
}

export default SearchResult;