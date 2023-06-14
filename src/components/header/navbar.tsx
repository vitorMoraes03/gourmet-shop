import Link from 'next/link';

function NavBar() {
  return (
    <div>
      <ul className='flex gap-5 font-subtitle text-xs uppercase font-semibold'>
        <li>
          <Link href={''}>Blog</Link>
        </li>
        <li>
          <Link href={''}>Vinhos</Link>
        </li>
        <li>
          <Link href={''}>Conservas</Link>
        </li>
        <li>
          <Link href={''}>Queijos</Link>
        </li>
        <li>
          <Link href={''}>Todos os produtos</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
