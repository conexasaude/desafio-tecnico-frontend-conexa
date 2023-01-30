import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimateNumber({ from, to }) {
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        if (ref?.current) {
          ref.current.textContent = value?.toFixed(0);
        }
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <p className="font-bold" ref={ref} />;
}
