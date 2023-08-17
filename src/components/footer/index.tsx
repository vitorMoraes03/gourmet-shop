import Link from 'next/link';
import { FooterProps } from '../../../messages/useContent';

function Footer({ content }: { content: FooterProps }) {
  return (
    <footer
      className="mb-2 flex w-full flex-wrap gap-3
     bg-darkerGreen px-4 py-4 text-white md:mb-6 
     md:justify-between md:px-14 md:py-2"
    >
      <div className="w-40">
        <p>
          <span className="text-sm">© 2023</span> Gourmet
        </p>
      </div>
      <div>
        <ul className="flex flex-wrap gap-1 pr-10 md:flex-none md:gap-3 md:pr-0">
          {content.links.map((item, index) => (
            <li
              key={`liFoot-${index}`}
              className='after:content-["|"] md:after:content-none'
            >
              {item.label + ' '}
              {/* <Link href={item.href}>{item.label} </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
