import Link from 'next/link';

function Logo({ logoText }: { logoText: string}) {
  return (
    <div>
      <Link href={'/'}>
        <h1 className="font-title text-2xl font-semibold tracking-tight">
          {logoText}
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
