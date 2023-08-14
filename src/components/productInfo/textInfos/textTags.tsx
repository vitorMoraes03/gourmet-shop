import { ProductInterface } from '@/components/products';
import SingleTag from './singleTag';
import { LanguageContext } from '@/contexts/language';
import { useContext } from 'react';

function TextTags({
  products,
}: {
  products: ProductInterface;
}) {
  const { defaultLang } = useContext(LanguageContext);
  const lang = defaultLang === 'en' ? 'en' : 'pt';

  return (
    <div className="mt-10 border border-gray border-opacity-60">
      <ul className="divide-y divide-gray px-1">
        {Object.keys(products.tags).map((key) => {
          const typedKey =
            key as keyof typeof products.tags;
          const tag = products.tags[typedKey];
          return (
            <SingleTag
              key={`${key}-tags}`}
              title={tag.label[lang]}
              text={tag.content[lang]}
            />
          );
        })}
        <SingleTag
          title="Description"
          text={products.description[lang]}
        />
      </ul>
    </div>
  );
}

export default TextTags;
