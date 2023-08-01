/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import CheckedIcon from '../icons/checked';
import { FilterContext } from '@/contexts/filter';
import { FiltersInterface } from '@/utils/useQuery';

function FilterItem({
  item,
  category,
}: {
  item: {
    label: string;
    value: string;
  };
  category: string;
}) {
  const [checked, setChecked] = useState(false);
  const { setFilters } = useContext(FilterContext);

  useEffect(() => {
    const categoryKeyAcess = category + '.en';

    function getObjValuesByCategory(
      prev: FiltersInterface
    ) {
      return prev[categoryKeyAcess] || [];
    }

    if (!checked) {
      setFilters((prevFilters: FiltersInterface) => {
        const valuesAfterUncheck = getObjValuesByCategory(
          prevFilters
        ).filter((value: string) => value !== item.value);

        if (valuesAfterUncheck.length === 0) {
          const {
            [categoryKeyAcess]: _,
            ...otherCategories
          } = prevFilters;
          return otherCategories;
        }

        return {
          ...prevFilters,
          [categoryKeyAcess]: valuesAfterUncheck,
        };
      });
      return;
    }

    setFilters((prevFilters: FiltersInterface) => {
      // const categoryKey = category + '.en';
      const updatedValues = [
        ...getObjValuesByCategory(prevFilters),
        item.value,
      ];

      return {
        ...prevFilters,
        [categoryKeyAcess]: updatedValues,
      };
    });
  }, [checked]);

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
