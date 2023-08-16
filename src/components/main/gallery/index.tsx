/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import { GalleryProps } from '../../../../messages/useContent';
import {
  useState,
  MouseEvent,
  TouchEvent,
  useRef,
} from 'react';

type MouseOrTouchEvent = TouchEvent | MouseEvent;

function Gallery({ content }: { content: GalleryProps }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] =
    useState(0);
  const [previousTranslate, setPreviousTranslate] =
    useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleStart(e: MouseOrTouchEvent) {
    if (e.type === 'touchstart') {
      const event = e as TouchEvent;
      setStartPos(event.touches[0].clientX);
    }
    if (e.type === 'mousedown') {
      const event = e as MouseEvent;
      setStartPos(event.clientX);
    }
    setIsDragging(true);
    setPreviousTranslate(currentTranslate);
  }

  function handleDrag(e: MouseOrTouchEvent) {
    if (!isDragging) return;
    let currentPos = 0;
    if (e.type === 'touchmove') {
      const event = e as TouchEvent;
      currentPos = event.touches[0].clientX;
    }
    if (e.type === 'mousemove') {
      const event = e as MouseEvent;
      currentPos = event.clientX;
    }

    handleLimits(currentPos);
  }

  function handleLimits(currentPos: number) {
    const difference =
      previousTranslate + (currentPos - startPos);
    const limitToTheRight = -imageOutOfScreen();
    const limitToTheLeft = Math.min(0, difference);

    const maxValue = Math.max(
      limitToTheRight,
      limitToTheLeft
    );

    setCurrentTranslate(maxValue);
    return;
  }

  function imageOutOfScreen() {
    const imageWidth = imageRef.current!.clientWidth;
    const pageWidth = window.innerWidth;
    const padding = pageWidth > 768 ? 16 * 2 : 8 * 2;
    const containerWidth =
      containerRef.current!.clientWidth;

    const totalWidth =
      imageWidth * content.images.length + padding;
    const imageOutOfScreen = totalWidth - containerWidth;
    return imageOutOfScreen;
  }

  function handleEnd(e: MouseOrTouchEvent) {
    setIsDragging(false);
  }

  return (
    <div className="m-6 md:m-16">
      <div className="text-center">
        <p className="mb-2 font-semibold uppercase tracking-wider text-green">
          {content.subtitle}
        </p>
        <h1 className="font-title text-3xl tracking-tight md:text-5xl">
          {content.title}
        </h1>
      </div>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="mt-6 flex gap-2 md:mt-12 md:gap-4"
          style={{
            transform: `translateX(${currentTranslate}px)`,
          }}
        >
          {content.images.map((image, index) => (
            <div
              key={`imgGallery-${index}`}
              className="w-64 min-w-[330px] shrink-0 lg:w-1/3 "
              ref={imageRef}
              onMouseDown={(e) => handleStart(e)}
              onTouchStart={(e) => handleStart(e)}
              onMouseMove={(e) => handleDrag(e)}
              onTouchMove={(e) => handleDrag(e)}
              onMouseUp={(e) => handleEnd(e)}
            >
              <Image
                alt={image.alt}
                src={image.src}
                width={Number(image.width)}
                height={Number(image.height)}
                className="h-[468px] w-full object-cover"
                draggable={false}
              />
              {/* <Link href={'/teste'}>
                <p className="mt-3 inline-block h-7 font-title text-2xl tracking-tight hover:border-b-[1.5px] md:h-8">
                  {image.text}
                </p>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
