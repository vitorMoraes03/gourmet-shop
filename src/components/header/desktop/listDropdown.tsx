import Link from 'next/link';
import { HeaderProps } from '../../../../messages/useContent';
import { FiltersInterface } from '@/utils/query/useQuery';

function ListDropdown({
  identifier,
  headerText,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
}) {
  const content = headerText.dropdown[identifier];

  if (!content) return null;

  return (
    <ul>
      {content.title && (
        <h2 className="text-2xl mb-7 font-semibold tracking-tight">
          {content.title}
        </h2>
      )}
      {content.links.map(({ href, label }) => (
        <li
          key={`${identifier}-${href}`}
          className="my-4 font-subtitle leading-5"
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

function selectProducts(
  labelStr: string
): FiltersInterface {
  console.log('labelStr', labelStr);
  switch (labelStr) {
    case 'National wines' || 'Vinhos Nacionais':
      return {
        'country.en': ['Italy'],
        'category.en': ['Wine'],
      };
    case 'Old world wines' || 'Vinhos velho mundo':
      return { 'category.en': ['Wine'] };
    case 'New world wines' || 'Vinhos novo mundo':
      return { 'category.en': ['Beer'] };
    case 'South American wines' || 'Vinhos sul americanos':
      return { 'category.en': ['Spirits'] };
    case 'Natural wines' || 'Vinhos naturais':
      return { 'category.en': ['Sake'] };
    case 'Accessories':
      return { 'category.en': ['Accessories'] };
    case 'National preserves' || 'Conservas nacionais':
      return { 'category.en': ['National preserves'] };
    case 'Imported preserves' || 'Conservas importadas':
      return { 'category.en': ['Imported preserves'] };
    case 'Vegan preserves' || 'Conservas veganos':
      return { 'vegan': true };
    case 'Organic preserves' || 'Conservas orgânicos':
      return { 'category.en': ['Organic preserves'] };
    case 'Vegetarian preserves' || 'Conservas vegetarianos':
      return { 'category.en': ['Vegetarian preserves'] };

    default:
      return { 'category.en': ['Beer'] };
  }
}

export default ListDropdown;
