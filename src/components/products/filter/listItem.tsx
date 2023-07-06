import CheckedIcon from '../../icons/checked';

function ListItem({
  item,
  index,
}: {
  item: {
    label: string;
    value: string;
  };
  index: number;
}) {
  return (
    <li>
      <input
        value={item.value}
        type="checkbox"
        name={item.value}
        style={{ opacity: 0 }}
      />
      <label
        className="flex items-center gap-1 font-light"
        htmlFor={item.value}
      >
        <div className="rounded-full bg-black p-[4px] text-white">
          <CheckedIcon />
        </div>
        {item.label}
      </label>
    </li>
  );
}

export default ListItem;
