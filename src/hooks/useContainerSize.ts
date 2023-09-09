import { useState, useEffect } from 'react';

export type SizeProps = {
  width: number;
  height: number;
};

export default function useContainerSize() {
  const [size, setSize] = useState<SizeProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeHandler = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return size;
}
