import { useRef, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  modalState: boolean;
}

const Portal = ({ children, modalState }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const overlayStyles =
    'fixed left-0 top-0 z-50 h-screen w-screen bg-white bg-opacity-30';

  useEffect(() => {
    ref.current =
      document.querySelector<HTMLElement>('#portal');
  }, []);

  return modalState && ref.current
    ? createPortal(
        <div className={overlayStyles}>{children}</div>,
        ref.current
      )
    : null;
};

export default Portal;
