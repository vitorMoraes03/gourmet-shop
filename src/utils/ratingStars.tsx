import HalfStar from '@/components/icons/halfStar';
import Star from '@/components/icons/star';

function RatingStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} />);
  }

  if (halfStar) {
    stars.push(<HalfStar key={fullStars} />);
  }

  return <>{stars}</>;
}

export default RatingStars;
