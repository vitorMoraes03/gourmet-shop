import ListItem from '../../listItem';
import SortItem from './sortItem';
import { SelectorProps } from '..';
import { useState } from 'react';

function SortModal({
  content,
  setOptions,
}: {
  content: SelectorProps;
  setOptions: (value: string) => void;
}) {
  const [indexChecked, setIndexChecked] = useState<
    number | null
  >(null);

  console.log('indexChecked', indexChecked);

  return (
    <div className="mb-5 tracking-tight">
      <h3 className="text-xl font-semibold">
        {content.desktop}
      </h3>
      <ul className="pb-4 text-lg">
        {content.options.map((item, index) => (
          <SortItem
            key={`${item.label}-${index}`}
            item={item}
            index={index}
            setOptions={setOptions}
          />
        ))}
      </ul>
    </div>
  );
}

export default SortModal;
