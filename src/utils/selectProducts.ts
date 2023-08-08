import { FiltersInterface } from './query/useQuery';

export function selectProducts(
  labelStr: string
): FiltersInterface {
  console.log('labelStr', labelStr);
  switch (labelStr) {
    case 'National wines' || 'Vinhos Nacionais':
      return {
        'country.en': { $in: ['Brazil'] },
        'category.en': { $in: ['Wine'] },
      };
    case 'Old world wines' || 'Vinhos velho mundo':
      return {
        'category.en': { $in: ['Wine'] },
        'country.en': { $in: ['Italy', 'France'] },
      };
    case 'South American wines' || 'Vinhos sul americanos':
      return {
        'category.en': { $in: ['Wine'] },
        'country.en': { $in: ['Chile', 'Argentina'] },
      };
    case 'Natural wines' || 'Vinhos naturais':
      return {
        'category.en': { $in: ['Wine'] },
        'description.en': {
          $regex: 'natural',
          $options: 'i',
        },
      };
    case 'Local preserves' || 'Conservas regionais':
      return {
        'category.en': { $in: ['Preserves'] },
        'country.en': { $in: ['Brazil'] },
      };
    case 'Imported preserves' || 'Conservas importadas':
      return {
        'category.en': { $in: ['Preserves'] },
        'country.en': { $ne: 'Brazil' },
      };
    case 'Vegan preserves' || 'Conservas veganos':
      return { vegan: true };
    case 'Organic preserves' || 'Conservas orgânicos':
      return {
        'category.en': ['Preserves'],
        'description.en': {
          $regex: 'organic',
          $options: 'i',
        },
      };
    case 'National cheeses' || 'Queijos nacionais':
      return {
        'category.en': { $in: ['Cheese'] },
        'country.en': { $in: ['Brazil'] },
      };
    case 'Imported cheeses' || 'Queijos importados':
      return {
        'category.en': { $in: ['Cheese'] },
        'country.en': { $ne: 'Brazil' },
      };
    case 'Vegan cheeses' || 'Queijos veganos':
      return { vegan: true };
    case 'Blue cheeses' || 'Queijos azuis':
      return {
        'category.en': { $in: ['Cheese'] },
        'description.en': {
          $regex: 'blue',
          $options: 'i',  
        },
      };
    case 'Aged cheeses' || 'Queijos maturados':
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
