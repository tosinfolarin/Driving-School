// import Rating from "react-rating";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const BusinessRating = (props) => {
    return (
      <div className="rating">
        <Rating
        
        value = {props.rating}
        readOnly/>
        <p>{props.reviewCount} Review(s)</p>
      </div>
    );
  };

  export default BusinessRating;