import { useEffect, useRef } from "react";

const useHorizontalScroll = () => {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const handleWheel = (event) => {
        if (event.deltaY !== 0) {
          event.preventDefault();
          el.scrollLeft += event.deltaY;
        }
      };

      el.addEventListener("wheel", handleWheel);
      return () => el.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return elRef;
};

export default useHorizontalScroll;
