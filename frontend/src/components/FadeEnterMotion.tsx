import { MotionAdvancedProps, motion } from "framer-motion";

interface FadeEnterMotionProps extends MotionAdvancedProps {
  children: JSX.Element | JSX.Element[];
  delay: number;
}

export function FadeEnterMotion({ children, delay, ...rest }: FadeEnterMotionProps) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
