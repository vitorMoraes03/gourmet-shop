import Link from 'next/link';

function NavLinks({
  id,
  value,
  setDropdownSelected,
}: {
  id: string;
  value: string;
  setDropdownSelected: (value: string) => void;
}) {
  return (
    <li
      className="px-4 md:px-2 md:custom-border mb-2 
      md:mb-0 flex items-center md:flex-none justify-between"
    >
      <Link
        href={id}
        onMouseEnter={() => setDropdownSelected(`${id}`)}
      >
        {value}
      </Link>
    </li>
  );
}

export default NavLinks;
