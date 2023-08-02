import { ItemInterface } from '@/components/filter/filterItem';
import { FilterProps } from '@/components/filter/filterList';

function getAllOptions(content: FilterProps) {
  const allOptions: ItemInterface[] = [];
  Object.entries(content).forEach(([_, value]) => {
    allOptions.push(...value.options);
  });
  return allOptions;
}

export default getAllOptions;
