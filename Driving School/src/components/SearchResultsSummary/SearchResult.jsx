const SearchResult = () => {
    return ( 
        <div className= "search-results">
            <img src = 'https://placehold.co/210x210' alt='business' className="business-image" />
            <div className ="business-info">
                <h2 className ="business-name"> Driving Place </h2>
                
                <p>Rating</p>
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