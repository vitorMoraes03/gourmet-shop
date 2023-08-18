'use client';

import Link from 'next/link';
import { FooterProps } from '../../../messages/useContent';

function Footer({ content }: { content: FooterProps }) {
  function checkIfLast(index: number) {
    if (index === content.links.length - 1) {
      return '';
    }
    return 'after:content-["|"]';
  }

  return (
    <footer
      className="mb-2 flex w-full flex-wrap gap-3
     bg-darkerGreen px-4 py-4 text-xs text-white 
     md:mb-6 md:justify-between md:px-14 md:py-2 md:text-sm"
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
              className={`${checkIfLast(
                index
              )} md:after:content-none`}
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
