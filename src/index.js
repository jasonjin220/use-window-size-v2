import { useEffect, useState } from "react";

const useWindowSize = (delay = 0) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Debounce function to delay updating the window size
    const debounce = (func, delay) => {
      let timer;

      return function debouncedFunc() {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func();
        }, delay);
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
