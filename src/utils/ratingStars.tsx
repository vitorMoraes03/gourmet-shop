import HalfStar from '@/components/icons/halfStar';
import Star from '@/components/icons/star';

function RatingStars(
  rating: number,
  id: string,
  idWhere: string
) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`${id}-${i}-full-${idWhere}`}
        fillProp={true}
      />
    );
  }

  if (halfStar) {
    stars.push(<HalfStar key={`${id}-half-${idWhere}`} />);
  }

  if (stars.length < 5) {
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <Star
          fillProp={false}
          key={`${id}-${i}-empty-${idWhere}`}
        />
      );
    }
  }

  return <>{stars}</>;
}

export default RatingStars;
