import AddIcon from '../icons/add';

export interface SelectorProps {
  first: string;
  second: string;
  desktop: string;
  desktopOptions: {
    label: string;
    value: string;
  }[];
}

function MobileSelector({
  content,
}: {
  content: SelectorProps;
}) {
  return (
    <div
      className="flex justify-center border-y 
    border-y-gray text-[8px] font-bold"
    >
      <div className="my-[2px] w-full border-r border-r-gray p-1">
        <div className="flex items-center justify-between">
          <button className="uppercase tracking-wider">
            {content.first}
          </button>
          <AddIcon />
        </div>
        <div></div>
      </div>
      <div className="my-[2px] w-full p-1">
        <div className="flex items-center justify-between">
          <button className="uppercase tracking-wider">
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
