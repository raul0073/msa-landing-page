import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useScrollAndScreen = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [screenLg, setScreenLg] = useState<boolean>(); // Initialize based on current width

  useEffect(() => {
    const handleScroll = debounce(() => {
      setHasScrolled(window.scrollY > 50);
    }); // Add debounce duration

    const handleResize = debounce(() => {
      setScreenLg(window.innerWidth >= 1024);
    });

    // Initial invocation to set states
    handleScroll();
    handleResize();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to avoid redundant setups

  return { hasScrolled, screenLg };
};

export default useScrollAndScreen;
