const Pricing = () => {
    return (

    <div>
        <div className="Pricing">
           <h1> PRICE LIST </h1> 
           <h4> Hourly Rate: £35 per hour</h4>
        </div>

        

        
        <div className="flex-pcontainer">

            <div className="flex-pchild box1">
            
        
                <div className="p-heading">INTRODUCTION: £90 </div>
                <br/>
                <br/>
                FOUR: 45 minute lessons <br/>
                An introductory course to get you started<br/>
                (This works out to be 3 Double lessons)
            </div>
        
    
            <div className="flex-pchild box2">
                <div className="p-heading">OFFERS: BLOCK BOOKINGS</div>
                <br/><br/>
                6 Lessons - £195
                <br/>
                12 Lessons - £384
                <br/>
                20 Lessons - £630
            </div>
        
        </div>
    </div>
    );
}
 
export default Pricing;