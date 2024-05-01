import caroutlinenobackground from "@/images/caroutlinenobackground.png"

const BookNow = () => {
    return (  
        <div className="booking-container">
            <h2><a href="/book-now" className="book-now-text">Book Now</a></h2>
            <div className="car-book-container">
                <img src={caroutlinenobackground} alt="BookButton" className="car-book-image" />
                {/* 'src/images/caroutlinenobackground.png' */}
            </div>
        </div>
    );
    
}

export default BookNow;

