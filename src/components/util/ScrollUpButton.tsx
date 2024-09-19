"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollUpButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-[4rem] right-4 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-opacity duration-300 ease-in-out z-[999]"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    )
  );
};

export default ScrollUpButton;
