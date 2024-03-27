import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="car-image-container">
                <img src='/src/images/Lplate.png' alt="Learner Symbol" className="LPlate" />
                <div className= "BusinessName">
                    <h1>Trinity</h1>
                    <h3>Driving School</h3>
                </div>
                
            </div>
            
            

            <div className="links">
                <Link to= "/">Home</Link>
                <Link to= "/about-me">About Me</Link>
                <Link to= "/test-questions">Test Questions</Link>
                <Link to= "/FAQs">FAQs</Link>
                <Link to= "/more-schools">More Schools</Link>
                <a href= "/create">Sign In</a>
            </div>
        </nav>
    );
}


export default Navbar;