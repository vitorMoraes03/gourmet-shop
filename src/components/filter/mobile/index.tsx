import { useState } from 'react';
import FilterList from '../filterList';
import SortModal from './modal/sortModal';
import ModalWrapper from './modal/wrapperModal';
import { ProductsProps } from '../../../../messages/useContent';
import SelectorWrapper from './selector/selectorWrapper';
import PickedFilterTags from './selector/PickedFilterTags';

export interface SelectorProps {
  first: string;
  second: string;
  desktop: string;
  mobileBtn: string;
  options: {
    label: string;
    value: string;
  }[];
}

function MobileSelector({
  content,
  applyFilter,
  setOptions,
}: {
  content: ProductsProps;
  applyFilter: () => void;
  setOptions: (value: string) => void;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const selectorContent = content.selector;
  const filterContent = content.filters;

  return (
    <div
      className="flex justify-center border-y 
    border-y-gray text-[8px] font-bold"
    >
      <SelectorWrapper
        content={selectorContent.first}
        setModal={setModalOpen}
        uniqueStyles={'border-r border-r-gray'}
      >
        <PickedFilterTags content={filterContent} />
      </SelectorWrapper>
      <SelectorWrapper
        content={selectorContent.second}
        setModal={setSortModalOpen}
      >
        {/* Aqui tem q ser algo especifico para sort */}
        {/* <PickedFilterTags content={filterContent} /> */}
      </SelectorWrapper>
      <ModalWrapper
        content={selectorContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        applyFilter={applyFilter}
      >
        <FilterList content={filterContent} />
      </ModalWrapper>
      <ModalWrapper
        content={selectorContent}
        modalOpen={sortModalOpen}
        setModalOpen={setSortModalOpen}
        applyFilter={applyFilter}
      >
        <SortModal
          content={selectorContent}
          setOptions={setOptions}
        />
      </ModalWrapper>
    </div>
  );
}

export default MobileSelector;
