import { useEffect, useState } from 'react';

function useScreenSmallerThen({
  width,
}: {
  width: number;
}) {
  const [isSmaller, setIsSmaller] = useState(false);

  useEffect(() => {
    function checkIsSmallScreen() {
      const mediaQuery = window.matchMedia(
        `(max-width: ${width}px)`
      );
      console.log('mediaQuery.matches', mediaQuery.matches);
      setIsSmaller(mediaQuery.matches);
    }

    if (typeof window !== 'undefined') {
      checkIsSmallScreen();
      window.addEventListener('resize', checkIsSmallScreen);

      return () => {
        window.removeEventListener(
          'resize',
          checkIsSmallScreen
        );
      };
    }
  }, []);

  return isSmaller;
}

export default useScreenSmallerThen;
