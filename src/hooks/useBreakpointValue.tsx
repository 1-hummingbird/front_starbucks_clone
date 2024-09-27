import { useEffect, useMemo, useState } from 'react';

interface ValuesByBreakpoints<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const useBreakpointValue = <T,>(
  values: ValuesByBreakpoints<T>,
  fallback?: T,
) => {
  const [width, setWidth] = useState(-1);

  useEffect(() => {
    const cb = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', cb);
    return () => {
      window.removeEventListener('resize', cb);
    };
  }, []);

  const value = useMemo(() => {
    if (width === -1) return fallback;
    else if (width < breakpoints.sm) return values.xs;
    else if (width < breakpoints.md) return values.sm;
    else if (width < breakpoints.lg) return values.md;
    else if (width < breakpoints.xl) return values.lg;
    else return values.xl;
  }, [width]);

  return value ?? fallback;
};

export default useBreakpointValue;
