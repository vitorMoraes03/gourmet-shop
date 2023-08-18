import { ProductInterface } from '@/components/products';
import SingleTag from './singleTag';
import { LanguageContext } from '@/contexts/language';
import { useContext } from 'react';
import { ProductIndividualProps } from '../../../../messages/useContent';

function TextTags({
  products,
  content,
}: {
  products: ProductInterface;
  content: string;
}) {
  const { defaultLang } = useContext(LanguageContext);
  const lang = defaultLang === 'en' ? 'en' : 'pt';

  return (
    <div className="lg:mt-10 mt-6 border border-gray border-opacity-60">
      <ul className="divide-y divide-gray px-1 mb-2">
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
          title={content}
          text={products.description[lang]}
        />
      </ul>
    </div>
  );
}

export default TextTags;
