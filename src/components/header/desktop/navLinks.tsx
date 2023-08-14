import Link from 'next/link';

function NavLinks({
  id,
  value,
  setDropdownSelected,
  setDropdown,
  setLink,
}: {
  id: string;
  value: string;
  setDropdownSelected: (value: string) => void;
  setDropdown: (value: boolean) => void;
  setLink: (link: string) => void;
}) {
  return (
    <li
      className={styleLi}
      onMouseEnter={() => {
        setDropdownSelected(`${id}`);
        setDropdown(true);
      }}
      onMouseLeave={() => setDropdown(false)}
      onClick={() => {
        setDropdown(false);
        setLink(value);
      }}
    >
      <Link href={'/product'}>{value}</Link>
    </li>
  );
}

export const styleLi =
  'md:custom-border mb-2 flex items-center justify-between px-4 md:mb-0 md:flex-none md:px-2';

export default NavLinks;
