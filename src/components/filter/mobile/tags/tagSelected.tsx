import CloseIcon from '@/components/icons/close';
import { ItemInterface } from '../../filterItem';

function TagSelected({
  item,
  index,
  applyFilter,
}: {
  item: ItemInterface;
  index: number;
  applyFilter: () => void;
}) {
  return (
    <div
      key={`${item}-${index}`}
      className="flex w-full items-center justify-between 
  border border-gray p-1"
    >
      <p className="font-normal">{item.label}</p>
      <button onClick={() => applyFilter()}>
        <CloseIcon styles="w-3" />
      </button>
    </div>
  );
}

export default TagSelected;
