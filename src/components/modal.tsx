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
}

// function Portal(props: PortalProps, setModalState: SetStateAction<boolean>, modalState: boolean) {
//   const ref = useRef<Element | null>(null);
//   // const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     ref.current =
//       document.querySelector<HTMLElement>('#portal');
//   }, []);

//   return modalState && ref.current
//     ? createPortal(
//         <div
//           className="
//         fixed top-0 left-0 w-screen h-screen bg-black 
//         bg-opacity-40 overflow-auto z-20"
//         >
//           {children}
//         </div>,
//         ref.current
//       )
//     : null;
// }

const Portal = (
  { children, setModalState, modalState }: PortalProps,
) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
  }, []);

  return modalState && ref.current
    ? createPortal(
        <div
          className="
            fixed top-0 left-0 w-screen h-screen bg-black 
            bg-opacity-40 overflow-auto z-20"
        >
          {children}
        </div>,
        ref.current
      )
    : null;
};

export default Portal;
