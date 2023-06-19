import Link from 'next/link';

function Logo({ titleText }: { titleText: string}) {
  return (
    <div>
      <Link href={'/'}>
        <h1 className="font-title text-2xl font-semibold tracking-tight">
          {titleText}
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
