import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Pricing from "./Pricing";
import BookingForm from "./BookingForm";
import BForm from "./BForm";




const BookingPage = () => {
    return (
       <div>
        <Navbar/>
        <Home/>
        <Pricing/>
        {/* <BookingForm/> */}
        <BForm/>
        <Footer/> 
       
    
    </div>
    );
    
}
 
export default BookingPage;
