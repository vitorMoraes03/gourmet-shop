import { FiltersInterface } from './query/useQuery';

export function selectProducts(
  labelStr: string
): FiltersInterface {
  switch (labelStr) {
    case 'Vinhos':
    case 'Wines':
      return {
        'category.en': { $in: ['Wine'] },
      };
    case 'Conservas':
    case 'Preserves':
      return {
        'category.en': { $in: ['Preserves'] },
      };
    case 'Queijos':
    case 'Cheeses':
      return {
        'category.en': { $in: ['Cheese'] },
      };
    case 'French wines':
    case 'Vinhos franceses':
      return {
        'country.en': { $in: ['France'] },
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
    case 'Organic wines':
    case 'Vinhos orgânicos':
      return {
        'category.en': { $in: ['Wine'] },
        'description.en': {
          $regex: 'organic',
          $options: 'i',
        },
      };
    case 'Local preserves':
    case 'Conservas regionais':
      return {
        'category.en': { $in: ['Preserves'] },
        'country.en': { $in: ['Brazil'] },
      };
    case 'Imported preserves':
    case 'Conservas importadas':
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
