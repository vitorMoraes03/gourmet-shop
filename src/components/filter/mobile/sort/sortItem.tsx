/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import CheckedIcon from '../../../icons/checked';
import { FilterContext } from '@/contexts/filter';

function SortItem({
  item,
  setOptions,
}: {
  item: {
    label: string;
    value: string;
  };
  setOptions: (value: string) => void;
}) {
  const [checked, setChecked] = useState(false);
  const { sortOptions } = useContext(FilterContext);

  function translateSortOptions(obj: {
    [key: string]: number;
  }) {
    const { price, rating, _id } = obj;
    if (price === -1) {
      return 'highestPrice';
    }
    if (price === 1) {
      return 'lowestPrice';
    }
    if (rating === -1) {
      return 'bestSeller';
    }
    if (_id === -1) {
      return 'recommended';
    }
  }

  useEffect(() => {
    const translation = translateSortOptions(sortOptions);
    if (translation === item.value) {
      setChecked(true);
      return;
    }
    setChecked(false);
  }, [sortOptions]);

  return (
    <li
      className="-mb-3"
      onClick={() => {
        setOptions(item.value);
      }}
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

export default SortItem;
