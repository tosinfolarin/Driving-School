const BookNow = () => {
    return (  
        <div className="booking-container">
            {/* <h2 className="book-now-text">Book Now</h2> */}
            <h2><a href="/" className="book-now-text">Book Now</a></h2>
            <div className="car-image-container">
                <img src='src/images/CarBook.jpg' alt="BookButton" className="car-book-image" />
            </div>
        </div>
    );
}

export default BookNow;

