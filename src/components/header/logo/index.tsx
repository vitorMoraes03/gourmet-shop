import Link from 'next/link';

function Logo({ logoText, containerStyle }: { logoText: string, containerStyle: string}) {
  return (
    <div className={containerStyle}>
      <Link href={'/'}>
        <h1 className="font-title text-xl md:text-4xl font-semibold tracking-tight">
          {logoText}
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
