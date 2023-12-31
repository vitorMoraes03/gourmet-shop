/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { ProductsProps } from '../../../messages/useContent';
import DesktopSortSelector from './desktopSort';
import MobileSelector from './mobile';
import { FilterContext } from '@/contexts/filter';
import { translateStringToSort } from '@/utils/translateSort/stringToSort';

function FilterSelectors({
  content,
  isScreenSmall,
  applyFillter,
}: {
  content: ProductsProps;
  isScreenSmall: boolean;
  applyFillter: () => void;
}) {
  const { clearInputs, setSortOptions, setFilters } =
    useContext(FilterContext);
  const [currentOption, setCurrentOption] = useState(
    content.selector.options[0].value
  );

  useEffect(() => {
    if(!clearInputs) return;
    setFilters({});
  }, [clearInputs]);

  useEffect(() => {
    const translated = translateStringToSort(currentOption);
    setSortOptions(translated);
  }, [currentOption]);

  return isScreenSmall ? (
    <MobileSelector
      content={content}
      applyFilter={applyFillter}
      setOptions={setCurrentOption}
    />
  ) : (
    <DesktopSortSelector
      content={content.selector}
      setOptions={setCurrentOption}
    />
  );
}

export default FilterSelectors;
