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
    <div
      className="col-span-2 grid gap-4 h-fit justify-end"
      style={{ gridTemplateColumns: '380px 250px' }}
    >
      <div>
        <Image
          src={content.image.src}
          alt={content.image.alt}
          width={Number(content.image.width)}
          height={Number(content.image.height)}
          className="w-96 h-60"
        />
      </div>
      <div className="flex flex-col text-center justify-center gap-2">
        <p className="text-sm font-subtitle text-green font-bold uppercase tracking-wider">
          {content.image.subtitle}
        </p>
        <h3 className="font-semibold text-xl tracking-tight leading-tight">
          {content.image.title}
        </h3>
        <p className="text-sm font-subtitle mt-1 leading-snug">
          {content.image.text}
        </p>
      </div>
    </div>
  );
}

export default ImageDropdown;
