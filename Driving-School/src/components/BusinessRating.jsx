import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';

const BusinessRating = (props) => {
  const fullStars = Math.floor(props.rating);
  const remainder = props.rating - fullStars;
  
  // This finds whether the output should be half star or full star
  let hasHalfStar = false;
  if (remainder >= 0.25 && remainder < 0.75) {
    hasHalfStar = true;
  }

  const stars = [];

  // Adds full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
  }

  // Adds half star if its applicable
  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key="half" icon={halfStar} />);
  }

  // Calculate total number of stars (including full stars and a possible half star)
  const totalStars = Math.ceil(props.rating);
  
  // should add empty stars to fill remaining space
  for (let i = stars.length; i < totalStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
  }

  return (
    <div className="ratingstar">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      <p>{props.user_ratings_total} Review{props.user_ratings_total !== 1 ? 's' : ''}</p> 
    </div>
  );
};

export default BusinessRating;
