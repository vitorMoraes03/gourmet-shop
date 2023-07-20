/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { ProductsProps } from '../../../messages/useContent';
import DesktopSelector from './desktop/desktopSelector';
import MobileSelector from './mobile/mobileSelector';
import { FilterContext } from '@/contexts/filter';

function FilterSelectors({
  content,
  isScreenSmall,
  applyFillter,
}: {
  content: ProductsProps;
  isScreenSmall: boolean;
  applyFillter: () => void;
}) {
  const { sortOptions, setSortOptions } =
    useContext(FilterContext);
  const [currentOption, setCurrentOption] = useState(
    content.selector.options[0].value
  );

  useEffect(() => {
    switch (currentOption) {
      case 'highestPrice':
        setSortOptions({ price: -1 });
        break;
      case 'lowestPrice':
        setSortOptions({ price: 1 });
        break;
      case 'bestSeller':
        setSortOptions({ rating: -1 });
        break;
      case 'recommended':
        setSortOptions({ _id: -1 });
        break;
    }
  }, [currentOption]);

  return isScreenSmall ? (
    <MobileSelector
      content={content}
      applyFilter={applyFillter}
      setOptions={setCurrentOption}
    />
  ) : (
    <DesktopSelector
      content={content.selector}
      setOptions={setCurrentOption}
    />
  );
}

export default FilterSelectors;
