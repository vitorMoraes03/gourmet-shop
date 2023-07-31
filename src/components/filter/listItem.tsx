/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import CheckedIcon from '../icons/checked';
import { FilterContext } from '@/contexts/filter';
import { FiltersInterface } from '@/utils/useQuery';

// eu gosto desse ListItem assim
// mas acho que deveria ter um diferente para o Sort
// o Sort, ora funciona como um select com aparência de checkbox, ora funciona
// como um select padrão

function ListItem({
  item,
  category,
  setOptions,
}: {
  item: {
    label: string;
    value: string;
  };
  category: string;
  setOptions?: (value: string) => void;
}) {
  const [checked, setChecked] = useState(false);
  const { filters, setFilters } = useContext(FilterContext);

  useEffect(() => {
    const categoryKey = category + '.en';

    function currentValues(prev: FiltersInterface) {
      return prev[categoryKey] || [];
    }

    if (!checked) {
      setFilters((prevFilters: FiltersInterface) => {
        const updatedValues = currentValues(
          prevFilters
        ).filter((value: string) => value !== item.value);

        if (updatedValues.length === 0) {
          const { [categoryKey]: _, ...rest } = prevFilters;
          return rest;
        }

        return {
          ...prevFilters,
          [categoryKey]: updatedValues,
        };
      });
      return;
    }

    setFilters((prevFilters: FiltersInterface) => {
      const categoryKey = category + '.en';
      const updatedValues = [
        ...currentValues(prevFilters),
        item.value,
      ];

      return {
        ...prevFilters,
        [categoryKey]: updatedValues,
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
        onClick={() => setOptions && setOptions(item.value)}
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

export default ListItem;
