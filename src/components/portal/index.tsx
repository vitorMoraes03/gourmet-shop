import {
  useRef,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  setModalState: Dispatch<SetStateAction<boolean>>;
  modalState: boolean;
  overlayStyle: string;
}

const Portal = ({
  children,
  setModalState,
  modalState,
  overlayStyle,
}: PortalProps) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current =
      document.querySelector<HTMLElement>('#portal');
  }, []);

  return modalState && ref.current
    ? createPortal(
        <div className={overlayStyle}>{children}</div>,
        ref.current
      )
    : null;
};

export default Portal;
