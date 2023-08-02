import { SortOptionsInterface } from '@/contexts/filter';

export function translateSortToString(
  obj: SortOptionsInterface
) {
  const { price, rating, _id } = obj;
  if (price === -1) {
    return 'highestPrice';
  }
  if (price === 1) {
    return 'lowestPrice';
  }
  if (rating === -1) {
    return 'bestSeller';
  }
  if (_id === -1) {
    return 'recommended';
  }
  return '';
}
