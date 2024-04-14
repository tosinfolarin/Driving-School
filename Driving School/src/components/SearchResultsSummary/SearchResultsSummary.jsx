const SubNav = (props) => {
    let resultStats = null;
    if (props.amountResults && props.showResults) {
        resultStats = <p> Showing 1-{props.showResults} out of {props.amountResults} </p>
    }

    return ( 
        <div className ='s-container'>
            <div className="subtitle">
                <h1><strong>Driving Instructors</strong> In your area</h1>
                {resultStats}
            </div>

            <div className = 'f-container'>
            
            
                <button className="s-filters">
                    <span className="icon"><i className="fas fa-sliders-h"></i></span>
                    <span>All Filters</span>
                </button>
            

            
                <div className="buttons has-addons">
                    <button className="button">£</button>
                    <button className="button">££</button>
                    <button className="button">£££</button>
                    <button className="button">££££</button>
                </div>

                <button className="button-open">
                    <span className="icon"><i className="fas fa-clock"></i></span>
                    <span>Open Now</span>
                </button>
                <button className="button-cah">
                    <span className="icon"><i className="fas fa-dollar-sign"></i></span>
                    <span>Cashback</span>
                </button>
            </div>
            </div>
        

           
        
        
        
     );
     
}
 
export default SubNav;