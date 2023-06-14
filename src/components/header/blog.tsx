import Link from 'next/link';

const linksBlog = [
  {
    href: '/blog/vinhos-nacionais',
    label: 'Top 10 vinhos nacionais',
  },
  {
    href: '/blog/festa-junina',
    label: 'Receitas de festa junina',
  },
  {
    href: '/blog/risotos',
    label: 'Risotos: os diferentes tipos de arroz',
  },
  {
    href: '/blog/conservar-alimentos',
    label: 'Como conservar seus alimentos',
  },
  {
    href: '/blog/cervejas-artesanais',
    label: 'Um guia das cervejas artesanais de Petrópolis',
  },
];

function Blog() {
  return linksBlog.map(({ href, label }) => (
    <li key={`${href}${label}`}>
      <Link href={href}>
        {label}
      </Link>
    </li>
  ));
}

export default Blog;
