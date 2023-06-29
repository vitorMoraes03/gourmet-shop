import Link from 'next/link';
import { HeaderProps } from '../../../../messages/useContent';

// vamos precisar da prop styles mesmo?

function DropdownList({
  identifier,
  styles,
  headerText,
}: {
  identifier: keyof typeof headerText.dropdown;
  styles?: string;
  headerText: HeaderProps;
}) {
  const content = headerText.dropdown[identifier];

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

export default DropdownList;
