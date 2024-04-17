const Pricing = () => {
    return (

    <div className = "Price-container">
        <div className="Pricing">
           <h1> PRICE LIST </h1> 
           <h4> Hourly Rate: £35 per hour</h4>
        </div>

        

        <div className="outer-pcontainer">
        <div className="flex-pcontainer">

            <div className="flex-pchild box1">
            
        
                <div className="p-heading">INTRODUCTION: £90 </div>
                <br/>
                <br/>
                FOUR: 45 minute lessons <br/>
                An introductory course to get you started<br/>
                (This works out to be 2 Double lessons)
            </div>
        
    
            <div className="flex-pchild box2">
                <div className="p-heading">OFFERS: BLOCK BOOKINGS</div>
                <br/><br/>
                6 Lessons (3 x 2 hour Lessons) - £195
                <br/>
                12 Lessons (6 x 2 hour Lessons) - £384
                <br/>
                20 Lessons (10 x 2 hour Lessons) - £630
            </div>
        
        </div>
        </div>
    </div>
    );
}
 
export default Pricing;