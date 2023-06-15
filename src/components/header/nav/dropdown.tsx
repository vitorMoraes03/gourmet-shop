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
    <div className="w-full bg-gray font-title text-lg absolute mt-5">
      <ul>
        <h2 className="text-2xl">Ajustar!</h2>
        {sectionNav.map(({ href, label }) => (
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
