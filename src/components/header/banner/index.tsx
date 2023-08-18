/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { HeaderProps } from '../../../../messages/useContent';
import { setTimeout } from 'timers';
import Link from 'next/link';

interface BannerObject {
  span: string;
  text: string;
}

function Banner({
  headerText,
}: {
  headerText: HeaderProps;
}) {
  const { banner } = headerText;
  const [bannerText, setBannerText] =
    useState<BannerObject>(banner[0]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const index = banner.indexOf(bannerText);
      const newIndex =
        index + 1 === banner.length ? 0 : index + 1;
      setBannerText(banner[newIndex]);
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, [bannerText]);

  if (!bannerText) return null;

  return (
    <div className="flex h-12 items-center justify-center overflow-hidden bg-black px-4 text-xs text-white">
      <div>
        {/* <Link href={'/future'}"> */}
        <span className="font-bold uppercase">
          {bannerText.span}:
        </span>
        {` ${bannerText.text}`}
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Banner;
