import AddIcon from '../icons/add';

interface MobileSelectorProps {
  first: string;
  second: string;
}

function MobileSelector({
  content,
}: {
  content: MobileSelectorProps;
}) {
  return (
    <div
      className="flex justify-center border-y 
    border-y-gray text-[8px] font-semibold"
    >
      <div className="my-[2px] w-full border-r border-r-gray p-1">
        <div className="flex items-center justify-between">
          <button className="uppercase tracking-tight">
            {content.first}
          </button>
          <AddIcon />
        </div>
        <div></div>
      </div>
      <div className="my-[2px] w-full p-1">
        <div className="flex items-center justify-between">
          <button className="uppercase tracking-tight">
            {content.second}
          </button>
          <AddIcon />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MobileSelector;
