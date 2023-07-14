import { useState } from 'react';
import CheckedIcon from '../icons/checked';

function ListItem({
  item,
  category
}: {
  item: {
    label: string;
    value: string;
  };
  category: string;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <li onClick={() => {
      setChecked(!checked)
      }}>
      <input
        value={item.value}
        type="checkbox"
        name={item.value}
        style={{ opacity: 0 }}
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

export default ListItem;
