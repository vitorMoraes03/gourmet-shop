import { FiltersInterface } from './query/useQuery';

export function selectProducts(
  labelStr: string
): FiltersInterface {
  // console.log('labelStr', labelStr);
  switch (labelStr) {
    case 'National wines':
    case 'Vinhos nacionais':
      return {
        'country.en': { $in: ['Brazil'] },
        'category.en': { $in: ['Wine'] },
      };
    case 'Old world wines':
    case 'Vinhos velho mundo':
      return {
        'category.en': { $in: ['Wine'] },
        'country.en': { $in: ['Italy', 'France'] },
      };
    case 'South American wines':
    case 'Vinhos sul americanos':
      return {
        'category.en': { $in: ['Wine'] },
        'country.en': { $in: ['Chile', 'Argentina'] },
      };
    case 'Natural wines':
    case 'Vinhos naturais':
      return {
        'category.en': { $in: ['Wine'] },
        'description.en': {
          $regex: 'natural',
          $options: 'i',
        },
      };
    case 'Local preserves':
    case 'Conservas locais':
      return {
        'category.en': { $in: ['Preserves'] },
        'country.en': { $in: ['Brazil'] },
      };
    case 'Imported preserves':
    case 'Conservas importados':
      return {
        'category.en': { $in: ['Preserves'] },
        'country.en': { $ne: 'Brazil' },
      };
    case 'Vegan preserves':
    case 'Conservas veganos':
      return {
        'category.en': { $in: ['Preserves'] },
        vegan: true,
      };
    case 'Organic preserves':
    case 'Conservas orgânicos':
      return {
        'category.en': ['Preserves'],
        'description.en': {
          $regex: 'organic',
          $options: 'i',
        },
      };
    case 'National cheeses':
    case 'Queijos nacionais':
      return {
        'category.en': { $in: ['Cheese'] },
        'country.en': { $in: ['Brazil'] },
      };
    case 'Imported cheeses':
    case 'Queijos importados':
      return {
        'category.en': { $in: ['Cheese'] },
        'country.en': { $ne: 'Brazil' },
      };
    case 'Vegan cheeses':
    case 'Queijos veganos':
      return { vegan: true };
    case 'Blue cheeses':
    case 'Queijos azuis':
      return {
        'category.en': { $in: ['Cheese'] },
        'description.en': {
          $regex: 'blue',
          $options: 'i',
        },
      };
    case 'Aged cheeses':
    case 'Queijos maturados':
      return {
        'category.en': { $in: ['Cheese'] },
        'description.en': {
          $regex: 'aged',
          $options: 'i',
        },
      };
    default:
      return {};
  }
}
