import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '../../../../messages/useContent';

function DropdownNav({
  identifier,
  headerText,
  setHover,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (!identifier) {
    return null;
  }

  const sectionNav = headerText.dropdown[identifier];

  return (
    <div
      // className="absolute gap-40 flex space h-96 px-10 py-3 bg-gray font-title text-lg"
      className="absolute bg-gray flex w-screen h-96 px-20 py-6 font-title text-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(true)} //false
    >
      <ul>
        {sectionNav.title && (
          <h2 className="text-2xl mb-5 font-semibold">
            {sectionNav.title}
          </h2>
        )}
        {sectionNav.links.map(({ href, label }) => (
          <li
            key={`${identifier}-${href}`}
            className="my-2 font-subtitle"
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
      {sectionNav.image && (
        // Não gostei da ml-80 aqui! 
        <div className="flex items-center gap-6 ml-64">
          <div>
            <Image
              src={sectionNav.image.src}
              alt={sectionNav.image.alt}
              width={Number(sectionNav.image.width)}
              height={Number(sectionNav.image.height)}
              className="w-96 h-60"
            />
          </div>
          <div className="flex flex-col w-1/4 text-center gap-2">
            <p className="text-xs font-subtitle text-green font-bold uppercase">
              {sectionNav.image.subtitle}
            </p>
            <h3 className="font-semibold text-xl">
              {sectionNav.image.title}
            </h3>
            <p className="text-base font-subtitle mt-1">
              {sectionNav.image.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownNav;
