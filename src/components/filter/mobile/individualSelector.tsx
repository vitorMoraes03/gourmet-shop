import { useContext, useEffect } from 'react';
import AddIcon from '../../icons/add';
import { SelectorProps } from './mobileSelector';
import { FilterContext } from '@/contexts/filter';
import { ProductsProps } from '../../../../messages/useContent';

function IndividualSelector({
  content,
  setModal,
  uniqueStyles,
  id,
}: {
  content: ProductsProps;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueStyles?: string;
  id: string;
}) {
  const { filters, sortOptions } =
    useContext(FilterContext);

  useEffect(() => {
    console.log('filters', filters);
    console.log('sortOptions', sortOptions);
  }, [filters, sortOptions]);

  return (
    <div className={`my-[2px] w-full p-1 ${uniqueStyles}`}>
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setModal(true)}
      >
        <button className="uppercase tracking-wider">
          {content.selector.second}
        </button>
        <AddIcon />
      </div>
      <div></div>
    </div>
  );
}

export default IndividualSelector;
