import { ProductInterface } from '@/components/products';
import SingleTag from './singleTag';

const tagsHardCode = [
  {
    title: 'Flavors',
    text: ['Chocolate', 'Caramel', 'Vanilla'],
  },
  {
    title: 'Producer',
    text: 'Antonio Costa',
  },
  {
    title: 'Curiosities',
    text: 'O filho do produtor da uma cuspidela no vinho para dar sorte',
  },
];

function TextTags({
  products,
}: {
  products: ProductInterface;
}) {
  return (
    <div className="mt-10 border border-gray border-opacity-60">
      <ul className="divide-y divide-gray px-1">
        {tagsHardCode.map((tag, index) => {
          return (
            <SingleTag
              key={index}
              title={tag.title}
              text={tag.text}
            />
          );
        })}
        <SingleTag
          title="Description"
          text={products.description.en}
        />
      </ul>
    </div>
  );
}

export default TextTags;
