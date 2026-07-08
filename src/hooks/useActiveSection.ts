import { useEffect, useState } from "react";

const sections = ["home", "about", "portfolio", "contact"];

const useActiveSection = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActive(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
};

export default useActiveSection;