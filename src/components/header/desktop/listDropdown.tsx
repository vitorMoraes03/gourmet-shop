import Link from 'next/link';
import { HeaderProps } from '../../../../messages/useContent';

function ListDropdown({
  identifier,
  headerText,
  setLink,
  setDropdown,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
  setLink: (value: string) => void;
  setDropdown: (value: boolean) => void;
}) {
  const content = headerText.dropdown[identifier];

  return (
    <ul>
      {content.title && (
        <h2 className="mb-7 text-2xl font-semibold tracking-tight">
          {content.title}
        </h2>
      )}
      {content.links.map(({ href, label }) => (
        <li
          key={`${identifier}-${href}`}
          className="my-4 font-subtitle leading-5"
        >
          <Link
            href={'/product'}
            onClick={() => {
              setLink(label);
              setDropdown(false);
            }}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListDropdown;
