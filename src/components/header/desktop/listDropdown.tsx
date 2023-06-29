import Link from 'next/link';
import { HeaderProps } from '../../../../messages/useContent';

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

export default ListDropdown;
