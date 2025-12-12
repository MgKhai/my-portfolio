'use client';

import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

export const FloatingDock = ({
  items,
  floatingClassname = '',
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  floatingClassname?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={floatingClassname} />
    </>
  );
};


const FloatingDockDesktop = ({
  items,
  className = '',
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
    onMouseMove={(e) => mouseX.set(e.pageX)}
    onMouseLeave={() => mouseX.set(Infinity)}
    className={`flex h-16 w-fit mx-0 md:gap-4 gap-3 items-end rounded-xl bg-white/10 dark:bg-neutral-900/30 px-4 pb-3 border border-white/20 backdrop-blur-md ${className}`}
  >
    {items.map((item) => (
      <IconContainer mouseX={mouseX} key={item.title} {...item} />
    ))}
  </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthI = useSpring(widthIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightI = useSpring(heightIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href} target="_blank">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/10 dark:bg-neutral-900/50 border border-white/30 flex items-center justify-center relative cursor-pointer shadow-lg"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs rounded-md bg-white/10 dark:bg-neutral-900/50 border border-white/30 text-white border-gray-200  whitespace-pre"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div style={{ width: widthI, height: heightI }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}

