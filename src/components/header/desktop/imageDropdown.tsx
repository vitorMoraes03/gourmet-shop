import Image from 'next/image';
import { HeaderProps } from '../../../../messages/useContent';

function ImageDropdown({
  identifier,
  headerText,
}: {
  identifier: keyof typeof headerText.dropdown;
  headerText: HeaderProps;
}) {
  const content = headerText.dropdown[identifier];

  if (!content) return null;

  return (
    <div className="col-span-2 grid h-fit grid-cols-5 justify-end gap-4">
      <div className="col-span-3">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          width={Number(content.image.width)}
          height={Number(content.image.height)}
          className="h-40 w-64 object-cover px-2 lg:h-60 lg:w-96"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-1 text-center lg:gap-2">
        <p className="font-subtitle text-sm font-bold uppercase tracking-wider text-green">
          {content.image.subtitle}
        </p>
        <h3 className="text-xl font-semibold leading-tight tracking-tight">
          {content.image.title}
        </h3>
        <p className="mt-1 font-subtitle text-sm leading-snug">
          {content.image.text}
        </p>
      </div>
    </div>
  );
}

export default ImageDropdown;
