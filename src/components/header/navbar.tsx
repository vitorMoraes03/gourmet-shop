import Link from 'next/link';
import isSmallScreen from '@/utils/isSmallScreen';
import CloseIcon from '../icons/close';

function List() {
  return (
    <>
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
    </>
  );
}

function NavBar() {
  return (
    <div>
      
    </div>
  );
}

export default NavBar;
