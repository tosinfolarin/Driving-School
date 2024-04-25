// // import Rating from "react-rating";

// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'

// const BusinessRating = (props) => {
//     return (
//       <div className="rating">
//         <Rating
        
//         value = {props.rating}
//         readOnly/>
//         <p>{props.reviewCount} Review(s)</p>
//       </div>
//     );
//   };

//   export default BusinessRating;

  


  // import { Rating } from '@smastrom/react-rating'
  // import '@smastrom/react-rating/style.css'
  
  // const BusinessRating = (props) => {
  //     return (
  //         <div className="rating">
  //             <Rating
  //                 value={props.rating || 0} // Default to 0 if rating is not provided
  //                 readOnly
  //             />
  //             {/* Adds an S if the Reviews are plural */}
  //             <p>{props.user_ratings_total} Review{props.user_ratings_total !== 1 ? 's' : ''}</p> 
  //         </div>
  //     );
  // };
  
  // export default BusinessRating;
  

  import { Rating } from '@smastrom/react-rating'
  import '@smastrom/react-rating/style.css'
  
  const BusinessRating = (props) => {
      return (
        <div className="rating">
          <Rating
            style={{ maxWidth: 180 }}
            value={props.rating}
            readOnly
          />
          <p>{props.user_ratings_total} Review(s)</p>
        </div>
      );
  };
  
  export default BusinessRating;
  
