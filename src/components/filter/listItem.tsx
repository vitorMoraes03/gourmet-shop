import { useContext, useEffect, useState } from 'react';
import CheckedIcon from '../icons/checked';
import { FilterContext } from '@/contexts/filter';

function ListItem({
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
  const { filters, setFilters } = useContext(FilterContext);

  // se nao for checkado, remover do filters
  // se for checkado, adicionar ao array de filter da categoria

  // primeiro adicao basica
  // adicao multiplos itens

  // fn check if already exist
  // filter.key comparado com category+.en

  useEffect(() => {
    if (!checked) {
      return;
    }

    const keys = filters.map((filter) => Object.keys(filter)[0]);

    setFilters([
      ...filters,
      { [category + '.en']: [item.value] },
    ]);
  }, [checked]);

  return (
    <li
      onClick={() => {
        setChecked(!checked);
      }}
    >
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
