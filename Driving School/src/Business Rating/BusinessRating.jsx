import Rating from "react-rating";

const BusinessRating = () => {
    return (
      <div className="rating">
        <Rating
      emptySymbol="far fa-star"
      fullSymbol="fas fa-star"
      fractions={2}
      readonly
      initialRating={3}/>


        <p>725 reviews</p>
      </div>
    );
  };
  
  export default BusinessRating;
  
