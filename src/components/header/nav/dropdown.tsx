import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '../../../../messages/useContent';

function DropdownNav({
  identifier,
  headerText,
  setHover,
  containerStyle,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
  containerStyle: string;
}) {
  if (!identifier) {
    return null;
  }

  const sectionNav = headerText.dropdown[identifier];

  return (
    <div
      className={`${containerStyle} absolute bg-gray font-title text-lg`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(true)} //false
    >
      <ul>
        {sectionNav.title && (
          <h2 className="text-2xl mb-7 font-semibold tracking-tight">
            {sectionNav.title}
          </h2>
        )}
        {sectionNav.links.map(({ href, label }) => (
          <li
            key={`${identifier}-${href}`}
            className="my-4 font-subtitle leading-5"
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
      {sectionNav.image && (
        <div
          className="col-span-2 grid gap-4 h-fit justify-end"
          style={{ gridTemplateColumns: '380px 250px' }}
        >
          <div>
            <Image
              src={sectionNav.image.src}
              alt={sectionNav.image.alt}
              width={Number(sectionNav.image.width)}
              height={Number(sectionNav.image.height)}
              className="w-96 h-60"
            />
          </div>
          <div className="flex flex-col text-center justify-center gap-1">
            <p className="text-sm font-subtitle text-green font-bold uppercase tracking-wider">
              {sectionNav.image.subtitle}
            </p>
            <h3 className="font-semibold text-2xl tracking-tight">
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
