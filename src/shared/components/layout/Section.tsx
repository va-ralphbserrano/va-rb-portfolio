import React from 'react';
import { motion, HTMLMotionProps, VariantLabels, TargetAndTransition, Target, Variants, easeOut } from 'framer-motion';
import { classNames } from '@/shared/utils/helpers';

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  animate?: boolean;
  initial?: boolean | Target | VariantLabels;
  whileInView?: VariantLabels | TargetAndTransition;
  viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all"; root?: React.RefObject<Element>; };
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
} as const;

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.section
      id={props.id}
      initial={props.animate ? "hidden" as const : false}
      whileInView={props.animate ? "visible" as const : { opacity: 1 }}
      viewport={props.animate ? { once: true, margin: '-100px' } : { once: true }}
      variants={sectionVariants}
      className={classNames(
        'relative',
        !props.noPadding && 'py-12 sm:py-16 md:py-20 lg:py-24',
        !props.fullWidth && 'container mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
};

Section.displayName = 'Section';

export default Section;
