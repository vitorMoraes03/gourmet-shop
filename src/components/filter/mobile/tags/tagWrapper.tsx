import CloseIcon from '@/components/icons/close';

function TagWrapper({
  item,
  index,
}: {
  item: string;
  index: number;
}) {
  return (
    <div
      key={`${item}-${index}`}
      className="flex w-full items-center justify-between 
  border border-gray p-1"
    >
      <p className="font-normal">{item}</p>
      <CloseIcon styles="w-3" />
    </div>
  );
}

export default TagWrapper;
