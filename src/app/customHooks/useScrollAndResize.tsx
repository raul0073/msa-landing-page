import { useState, useEffect } from "react";
import { debounce } from "lodash"; 

const useScrollAndScreen = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [screenLg, setScreenLg] = useState<boolean>(false);

  // Handle scroll updates
  const handleScroll = debounce(() => {
    setHasScrolled(window.scrollY > 50);
  });

  // Handle screen size updates
  const handleResize = debounce(() => {
    setScreenLg(window.innerWidth >= 1024);
  });

  useEffect(() => {
    // Add listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Clean up listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { hasScrolled, screenLg };
};

export default useScrollAndScreen;
