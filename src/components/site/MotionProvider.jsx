import React, { createContext, useCallback, useContext, useRef } from 'react';

const MotionContext = createContext(null);

export const useMotion = () => useContext(MotionContext);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function MotionProvider({ children }) {
  const videos = useRef(new Set());

  const register = useCallback((element) => {
    if (!element) return undefined;

    if (prefersReducedMotion()) {
      element.pause();
    } else {
      element.play().catch(() => {});
    }

    videos.current.add(element);
    return () => videos.current.delete(element);
  }, []);

  return <MotionContext.Provider value={{ register }}>{children}</MotionContext.Provider>;
}