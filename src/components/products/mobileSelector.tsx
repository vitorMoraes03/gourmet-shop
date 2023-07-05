import { useEffect, useState } from 'react';
import AddIcon from '../icons/add';
import Portal from '../portal';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [delayedTransform, setDelayedTransform] = useState(
    'translate-y-full'
  );

  useEffect(() => {
    if (modalOpen) {
      setDelayedTransform('translate-y-0');
    }
  }, [modalOpen]);

  return (
    <div
      className="flex justify-center border-y 
    border-y-gray text-[8px] font-bold"
    >
      <div className="my-[2px] w-full border-r border-r-gray p-1">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setModalOpen(true)}
        >
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
      <Portal modalState={modalOpen}>
        <div
          // className={`h-screen bg-white transition-transform duration-1000 ${
          //   modalOpen ? 'translate-y-0' : 'translate-y-full'
          // }`}
          className={`h-screen bg-white transition-transform duration-1000 ${delayedTransform}`}
        >
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Rem molestias beatae est quae
          vero explicabo, recusandae earum assumenda,
          suscipit, incidunt quod fugiat nesciunt laborum
          dicta hic! Delectus, explicabo laudantium. Natus.
        </div>
      </Portal>
    </div>
  );
}

export default MobileSelector;
