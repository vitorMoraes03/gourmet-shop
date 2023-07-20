import { useState } from 'react';
import { FilterProps } from '../filter';
import Filter from '../filter';
import MobileModalSort from './mobileModalSort';
import ModalWrapper from './mobileModalWrapper';
import IndividualSelector from './individualSelector';
import { ProductInterface } from '@/components/products';
import { ProductsProps } from '../../../../messages/useContent';

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
      <IndividualSelector
        id="filter"
        content={content}
        setModal={setModalOpen}
        uniqueStyles={'border-r border-r-gray'}
      />
      <IndividualSelector
        id="sort"
        content={content}
        setModal={setSortModalOpen}
      />
      <ModalWrapper
        content={selectorContent}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        applyFilter={applyFilter}
      >
        <Filter content={filterContent} />
      </ModalWrapper>
      <ModalWrapper
        content={selectorContent}
        modalOpen={sortModalOpen}
        setModalOpen={setSortModalOpen}
        applyFilter={applyFilter}
      >
        <MobileModalSort
          content={selectorContent}
          setOptions={setOptions}
        />
      </ModalWrapper>
    </div>
  );
}

export default MobileSelector;
