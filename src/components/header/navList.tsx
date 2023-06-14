import Link from 'next/link';

const linksNav = [
  { href: '/blog', label: 'Blog' },
  { href: '/vinhos', label: 'Vinhos' },
  { href: '/conservas', label: 'Conservas' },
  { href: '/queijos', label: 'Queijos' },
  {
    href: '/todos-os-produtos',
    label: 'Todos os produtos',
  },
];

function NavList() {
  return (
    <ul className="font-title p-3">
      {linksNav.map(({ href, label }) => (
        <li key={`${href}${label}`} className='mb-2 pl-3'>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
