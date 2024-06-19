import { useEffect, useRef, useState } from "react";

export default function useBarVisibility(initalValue: boolean) {
  return useState(initalValue);
}

export function useScrollNavVisibility() {
  const [isNavbarVisible, setNavBarVisbility] = useBarVisibility(true);
  const refCurrentScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = refCurrentScrollPos.current > currentScrollPos;

      refCurrentScrollPos.current = currentScrollPos;
      setNavBarVisbility(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isNavbarVisible;
}
