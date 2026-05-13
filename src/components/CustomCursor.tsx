import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springX = useSpring(0, { stiffness: 100, damping: 20 });
  const springY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName) || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [springX, springY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-rose-gold rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-rose-gold rounded-full pointer-events-none z-[9998] hidden lg:block"
        style={{ x: springX.get() - 24, y: springY.get() - 24 }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: 1
        }}
      />
    </>
  );
}
