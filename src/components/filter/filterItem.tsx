/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import CheckedIcon from '../icons/checked';
import { FilterContext } from '@/contexts/filter';
import { FiltersInterface } from '@/utils/useQuery';
import { handleUncheckFilter } from '@/utils/handleFilter/handleUncheck';
import { handleCheckFilter } from '@/utils/handleFilter/handleCheck';

export interface ItemInterface {
  label: string;
  value: string;
}

function FilterItem({
  item,
  category,
}: {
  item: ItemInterface;
  category: string;
}) {
  const [checked, setChecked] = useState(false);
  const { setFilters, filters } = useContext(FilterContext);

  useEffect(() => {
    if (!checked) {
      setFilters((prevFilters: FiltersInterface) => {
        return handleUncheckFilter(
          category,
          item,
          prevFilters
        );
      });
      return;
    }

    setFilters((prevFilters: FiltersInterface) => {
      return handleCheckFilter(category, item, prevFilters);
    });
  }, [checked]);

  useEffect(() => {
    const keyAcess = category + '.en';
    if (filters[keyAcess]) {
      const filter = filters[keyAcess].find(
        (filterItem: string) => filterItem === item.value
      );
      if (filter) {
        setChecked(true);
      }
    }
  }, []);

  return (
    <li
      onClick={() => {
        setChecked(!checked);
      }}
      className="-mb-3"
    >
      <input
        value={item.value}
        type="checkbox"
        name={item.value}
        style={{ opacity: 0, height: 0, width: 0 }}
      />
      <label
        className="flex cursor-pointer items-center gap-1 font-light"
        htmlFor={item.value}
      >
        <div
          className={`h-5 w-5 rounded-full ${
            checked && 'bg-black'
          } border border-black p-[4px] text-white`}
        >
          {checked && <CheckedIcon />}
        </div>
        {item.label}
      </label>
    </li>
  );
}

export default FilterItem;
