import { SortOptionsInterface } from '@/contexts/filter';

export function translateStringToSort(
  str: string
): SortOptionsInterface {
  if (str === 'highestPrice') return { price: -1 };
  if (str === 'lowestPrice') return { price: 1 };
  if (str === 'bestSeller') return { rating: -1 };
  if (str === 'recommended') return { _id: -1 };
  return {};
}
