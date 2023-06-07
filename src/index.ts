import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (delay: number = 0): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Debounce function to delay updating the window size
    const debounce = (callback: () => void, delay: number) => {
      let timer: ReturnType<typeof setTimeout>;

      return function debouncedFunc() {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
      };
    };

    // Update window size
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, delay);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]);

  return windowSize;
};

export default useWindowSize;
