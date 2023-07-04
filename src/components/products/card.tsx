import Image from 'next/image';

interface CardProps {
  src: string;
  width: string;
  height: string;
  alt: string;
  title: string;
  subtitle: string;
  price: string;
  stars: string;
  bestSeller: string;
}

function Card({ content }: { content: CardProps }) {
  return (
    <div className="w-1/2 border sm:w-1/3">
      <div>
        <Image
          src={content.src}
          width={Number(content.width)}
          height={Number(content.height)}
          alt={content.alt}
          className="h-36 object-cover"
        />
      </div>
      <div className="text-xs">
        <h3 className="font-title text-sm tracking-tighter">
          {content.title}
        </h3>
        <span>{content.stars}</span>
        <p className="text-darkerGray">
          {content.subtitle}
        </p>
        <p>R${content.price}</p>
      </div>
    </div>
  );
}

export default Card;
