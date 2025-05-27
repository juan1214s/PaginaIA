import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animate } from "framer-motion";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scroll = { y: window.scrollY };

    // Animamos desde el scroll actual hasta 0 (tope de la página)
    animate(scroll, { y: 0 }, {
      duration: 1.0, // Duración de la animación en segundos
      ease: "easeInOut",
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      }
    });
  }, [pathname]);

  return null;
}
