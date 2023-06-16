import Link from 'next/link';
import { allSections } from './allSections';

export interface SectionProps {
  identifier: string | null;
}

function DropdownNav({ identifier }: SectionProps) {
  if (!identifier) {
    return null;
  }

  const sectionNav =
    allSections[identifier as keyof typeof allSections];

  if (!sectionNav) {
    return null;
  }

  return (
    <div
      className="absolute h-80 px-10 pb-2 bg-gray font-title text-lg mt-5"
      style={{ width: 'calc(100vw + 120px)', marginLeft: '-120px' }}
    >
      <ul>
        {sectionNav.title && <h2 className="text-2xl">{sectionNav.title}</h2>}
        {sectionNav.links.map(({ href, label }) => (
          <li
            key={`${identifier}-${href}`}
            className="my-5"
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownNav;
