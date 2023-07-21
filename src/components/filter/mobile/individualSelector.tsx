import { useContext, useEffect, useState } from 'react';
import AddIcon from '../../icons/add';
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
  id: 'filter' | 'sort';
}) {
  const { filters, sortOptions } =
    useContext(FilterContext);
  const [currentSelection, setCurrentSelection] =
    useState();

  function idSearch(id: string) {
    switch (id) {
      case 'filter':
        return 'filters';
      case 'sort':
        return 'selector';
    }
  }

  // OliveOil, Coffee, Italy, rating: -1, etc...

  //  ProductsProps {
  //   title: string;
  //   subtitle: string;
  //   products: {
  //     src: string;
  //     width: string;
  //     height: string;
  //     alt: string;
  //     title: string;
  //     subtitle: string;
  //     price: string;
  //     stars: string;
  //     bestSeller: string;
  //   }[];
  //   filters: {
  //     category: {
  //       title: string;
  //       options: {
  //         label: string;
  //         value: string;
  //       }[];
  //     };
  //     country: {
  //       title: string;
  //       options: {
  //         label: string;
  //         value: string;
  //       }[];
  //     };
  //   };
  //   selector: {
  //     first: string;
  //     second: string;
  //     desktop: string;
  //     mobileBtn: string;
  //     mobileSort: string;
  //     options: {
  //       label: string;
  //       value: string;
  //     }[];
  //   };
  // }

  // no lugar de id poderiamos passar

  useEffect(() => {
    let matchField = content[idSearch(id)!]
    // if(id === 'filter') matchField = matchField[category or country]
    console.log('matchField', matchField);
    // if filters(filter), if selector(sort)
    // const match = content.filters.category.options.find(
    //   (option) => {
    //     const value = Object.values(filters)[0];
    //     const firstValue = value && value[0];
    //     if (!firstValue) return;
    //     console.log('option', option);
    //     console.log('firstValue', firstValue);
    //     return option.value === value[0];
    //   }
    // );
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
      <div>{currentSelection}</div>
    </div>
  );
}

export default IndividualSelector;
