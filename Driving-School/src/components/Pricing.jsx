const Pricing = () => {
    return (

    <div className = "Price-container">
        <div className="Pricing">
           <h1> PRICE LIST </h1>
           <h2> Lesson Price - £76 </h2> 
           <h3> Note that each lesson is 2 hours </h3> 
           <h4> Hourly Rate: £38 per hour</h4>
        </div>

        

        <div className="outer-pcontainer">
        <div className="flex-pcontainer">

            <div className="flex-pchild box1">
            
        
                <div className="p-heading">INTRODUCTION: £100 </div>
                <br/>
                <br/>
                TWO X 1.5 Hour Lessons <br/>
                An introductory course to get you started<br/>
                (For beginners only. This works out to be 2 Double lessons)
            </div>
        
    
            <div className="flex-pchild box2">
                <div className="p-heading">OFFERS: BLOCK BOOKINGS</div>
                <br/><br/>
                3 Lessons (3 x 2 hour Lessons) - £220
                <br/>
                5 Lessons (6 x 2 hour Lessons) - £350
                <br/>
                8 Lessons (10 x 2 hour Lessons) - £545
                <br/>
                10 Lessons (6 x 2 hour Lessons) - £660
                <br/>
                
            </div>
        
        </div>
        </div>
    </div>
    );
}
 
export default Pricing;