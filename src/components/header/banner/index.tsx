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
    <div className="bg-black py-2 text-center">
      <Link href={''} className="text-white">
        <span className="font-bold uppercase">
          {bannerText.span}:
        </span>
        {` ${bannerText.text}`}
      </Link>
    </div>
  );
}

export default Banner;
