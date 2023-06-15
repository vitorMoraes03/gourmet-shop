import Link from 'next/link';
import { allSections } from './allSections';

export interface SectionProps {
  identifier: string | null;
}

function Section({ identifier }: SectionProps) {
  if (!identifier) {
    return null;
  }

  if (!(identifier in allSections)) {
    throw new Error(`Invalid identifier: ${identifier}`);
  }

  const sections =
    identifier !== null
      ? allSections[identifier as keyof typeof allSections]
      : null;

  if (!sections) {
    return null;
  }

  return (
    <ul>
      {sections.map(({ href, label }) => (
        <li key={`${identifier}-${href}`}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Section;
