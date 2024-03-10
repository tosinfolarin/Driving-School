const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="car-image-container">
                <img src='/src/images/Lplate.png' alt="Learner Symbol" className="LPlate" />
            </div>
            <h1>Trinity</h1>
            <h3>Driving School</h3>
            <div className="links">
                <a href= "/">Home</a>
                <a href= "/">About Me</a>
                <a href= "/">Test Questions</a>
                <a href= "/create">Sign In</a>
            </div>
        </nav>
    );
}


export default Navbar;