import Link from 'next/link';

interface SectionProps {
  identifier: string;
  links: {
    href: string;
    label: string;
  }[];
}

function Section(props: SectionProps) {
  const { links } = props;
  return (
    <ul>
      {links.map(({ href, label }) => (
        <li key={`${href}${label}`}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Section;
