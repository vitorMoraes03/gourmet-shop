// 'use client';

// function isSmallScreen() {
//   const mediaQuery = window.matchMedia(
//     '(max-width: 600px)'
//   );
//   if (mediaQuery.matches) {
//     return true;
//   }
//   return false;
// }

// export default isSmallScreen;

import { useEffect, useState } from 'react';

// quando eu Buildo o projeto, essa fn esta dando alguns erros, por causa do 
// objeto window esta rodando no servidor

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    function checkIsSmallScreen() {
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      setIsSmall(mediaQuery.matches);
    }

    if (typeof window !== 'undefined') {
      checkIsSmallScreen();
      window.addEventListener('resize', checkIsSmallScreen);

      return () => {
        window.removeEventListener('resize', checkIsSmallScreen);
      };
    }
  }, []);

  return isSmall;
}

export default useIsSmallScreen;

