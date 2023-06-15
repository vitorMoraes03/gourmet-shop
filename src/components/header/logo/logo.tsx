import Link from 'next/link';

function Logo() {
  return (
    <div>
      <Link href={'/'}>
        <h1 className="font-title text-2xl font-semibold tracking-tight">
          Gourmet
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
