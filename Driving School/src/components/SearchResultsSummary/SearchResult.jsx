import BusinessRating from "../../Business Rating/BusinessRating";

const SearchResult = (props) => {
 console.log(props, 'searchProps')

   const b = props.business; 
   if (!b) {
        return (<div>No Data Found</div>);
    }

    const tags = b.categories.map(category => (<span className = 'tag' key={b.id + category.title}>{category.title}</span>));
    const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

     
    return ( 
    

        
        <div className= "search-results">
            <img src = {b.image_url} alt='business' className="business-image" />
        

            <div className ="business-info">
                <h2 className ="business-name"> {b.name} </h2>
                <BusinessRating reviewCount={b.review_count} rating ={b.rating} />
                <p>{tags}</p>
            </div>


            <div className = "contact-info">
                <p>{b.phone}</p>
                <p>{addressLines}</p>
            </div>
            <div>
              
            
        </div>


        </div>
            

     );
}

export default SearchResult;