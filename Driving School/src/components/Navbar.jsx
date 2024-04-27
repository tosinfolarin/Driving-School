import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
           
                <div className="logo-container">
             <Link to="/">
                <img src='/src/images/Lplate.png' alt="Learner Symbol" className="LPlate" />
           
                <div className= "BusinessName">
                    <h1>Trinity</h1>
                    <h1 className="driving-school">Driving School</h1>
                </div>
                 </Link>
            </div>
            
            

            <div className="links">
                <Link to= "/">Home</Link>
                <Link to= "/about-me">About Me</Link>
                <Link to= "/test-questions">Test Questions</Link>
                <Link to= "/FAQs">FAQs</Link>
                <Link to= "/more-schools">More Schools</Link>
                <Link to= "/book-now">Book Now</Link>
            </div>
        </nav>
    );
}


export default Navbar;