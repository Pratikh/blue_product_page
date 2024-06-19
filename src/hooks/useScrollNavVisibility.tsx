import { useEffect, useRef, useState } from 'react';

export function useScrollNavVisibility() {
  const refCurrentScrollPos = useRef(0);
  // eslint-disable-next-line react/hook-use-state
  const [isNavbarVisible, setNavBarVisbility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = refCurrentScrollPos.current > currentScrollPos;

      refCurrentScrollPos.current = currentScrollPos;
      setNavBarVisbility(visible);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isNavbarVisible;
}
