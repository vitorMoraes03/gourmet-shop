import Link from 'next/link';
import { allSections } from './allSections';
import Image from 'next/image';

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

  // precisamos substituir o sectionNav
  // o que vai ser necessário? 
  // title, image: src, width, height, alt, links
  // mas traduzido? title, image: alt, links

  return (
    <div
      className="absolute gap-40 flex space h-96 px-10 pb-2 bg-gray font-title text-lg mt-5"
      style={{
        width: 'calc(100vw + 120px)',
        marginLeft: '-120px',
      }}
    >
      <ul className="w-1/5">
        {sectionNav.title && (
          <h2 className="text-2xl">{sectionNav.title}</h2>
        )}
        {sectionNav.links.map(({ href, label }) => (
          <li
            key={`${identifier}-${href}`}
            className="my-5"
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
      {sectionNav.image && (
        <div className="flex items-center">
          <Image
            src={sectionNav.image.src}
            alt="ada"
            width={sectionNav.image.width}
            height={sectionNav.image.height}
            className="w-96 h-60"
          />
        </div>
      )}
    </div>
  );
}

export default DropdownNav;
