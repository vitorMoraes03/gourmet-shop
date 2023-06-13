import Link from "next/link";

function NavBar() {
  return (
    <ul>
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
  )
};

export default NavBar;
