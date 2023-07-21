import AddIcon from '@/components/icons/add';
import { SelectorProps } from './mobileSelector';

function SelectorWrapper({
  content,
  setModal,
  uniqueStyles,
  children,
}: {
  content: SelectorProps;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueStyles?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`my-[2px] w-full p-1 ${uniqueStyles}`}>
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setModal(true)}
      >
        <button className="uppercase tracking-wider">
          {content.second}
        </button>
        <AddIcon />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default SelectorWrapper;
