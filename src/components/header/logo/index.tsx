import Link from 'next/link';

function Logo({ logoText }: { logoText: string }) {
  return (
    <div className="col-span-1">
      <Link href={'/'}>
        <h1
          className="font-title text-xl md:text-4xl 
        font-semibold tracking-tight md:pl-10 md:mb-1"
        >
          {logoText}
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
