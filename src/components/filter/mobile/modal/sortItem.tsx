import { useState } from 'react';
import CheckedIcon from '../../../icons/checked';

function SortItem({
  item,
  setOptions,
  index,
}: {
  item: {
    label: string;
    value: string;
  };
  setOptions: (value: string) => void;
  index: number;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <li
      className="-mb-3"
      onClick={() => {
        setOptions(item.value);
        setChecked(!checked);
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
