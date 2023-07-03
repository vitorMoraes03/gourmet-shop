'use client';

import { HeaderProps } from '../../../messages/useContent';
import HeaderDesktop from './desktop';
import HeaderMobile from './mobile';
import useScreenSmallerThen from '@/utils/useScreenSize';

function HeaderScreenSelector({
  headerContent,
}: {
  headerContent: HeaderProps;
}) {
  const isScreenSmallerThen = useScreenSmallerThen({width: 800});

  console.log('isScreenSmallerThen', isScreenSmallerThen);

  return (
    <>
      {isScreenSmallerThen ? (
        <HeaderMobile header={headerContent} />
      ) : (
        <HeaderDesktop header={headerContent} />
      )}
    </>
  );
}

export default HeaderScreenSelector;
