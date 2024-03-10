const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Trinity</h1>
            <h3>Driving School</h3>
            <div className="links">
                <a href= "/">Home</a>
                <a href= "/">About Me</a>
                <a href= "/">Test Questions</a>
                <a href= "/create" style= {{
                    color: "white", 
                    backgroundColor: "#ff0000",
                    borderRadius: '8px',
            
                    }}>Sign In</a>
            </div>
        </nav>
    );
}


export default Navbar;