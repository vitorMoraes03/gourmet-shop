import Link from 'next/link';

function Logo({ logoText }: { logoText: string }) {
  return (
    <div className="col-span-1">
      <Link href={'/'}>
        <h1
          className="font-title font-semibold text-lg tracking-tighter
         md:mb-2 md:pl-2 md:text-3xl lg:pl-8"
        >
          {logoText}
        </h1>
      </Link>
    </div>
  );
}

export default Logo;
