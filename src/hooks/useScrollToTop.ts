import { useCallback, useEffect, useRef } from 'react';

export function useScrollToTop() {
  const shouldScrollRef = useRef(false);

  useEffect(() => {
    if (shouldScrollRef.current) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      shouldScrollRef.current = false;
    }
  });

  return useCallback(() => {
    shouldScrollRef.current = true;
  }, []);
}