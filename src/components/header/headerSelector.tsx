'use client';

import { HeaderProps } from '../../../messages/useContent';
import HeaderDesktop from './desktop';
import HeaderMobile from './mobile';
import useIsSmallScreen from '@/utils/isSmallScreen';

function HeaderScreenSelector({
  headerContent,
}: {
  headerContent: HeaderProps;
}) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <HeaderMobile header={headerContent} />
      ) : (
        <HeaderDesktop header={headerContent} />
      )}
    </>
  );
}

export default HeaderScreenSelector;
