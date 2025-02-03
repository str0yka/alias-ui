import { useCallback, useRef } from 'react';

export const useEvent = <Params extends unknown[], Return>(
  callback: (...args: Params) => Return
): ((...args: Params) => Return) => {
  const callbackRef = useRef<typeof callback>(callback);
  callbackRef.current = callback;

  return useCallback((...args) => {
    const fn = callbackRef.current;
    return fn(...args);
  }, []);
};
