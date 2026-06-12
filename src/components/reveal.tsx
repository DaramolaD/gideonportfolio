import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { SectionAnimRoot, useSectionAnim } from "@/components/section-anim";

const ease = [0.22, 1, 0.36, 1] as const;

const CARD_STAGGER = 0.1;
const CARD_BUFFER = 0.12;

const sectionVariantsReduced: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
};

function staggerVariants(reduce: boolean | null, delayChildren: number): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : CARD_STAGGER,
        delayChildren: reduce ? 0 : delayChildren,
      },
    },
  };
}

function itemVariants(reduce: boolean | null, fadeOnly: boolean): Variants {
  if (reduce) {
    return { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
  }
  if (fadeOnly) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.55, ease } },
    };
  }
  return {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  };
}

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
};

export function RevealSection({ children, className }: RevealSectionProps) {
  return <SectionAnimRoot className={className}>{children}</SectionAnimRoot>;
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  /** Wait for heading + typewriter before cards animate. */
  afterContent?: boolean;
};

function useStaggerParent(afterContent: boolean) {
  const reduce = useReducedMotion();
  const section = useSectionAnim();
  const active = section?.active ?? false;
  const delayChildren = afterContent
    ? (section?.leadDuration ?? 0) + CARD_BUFFER
    : CARD_BUFFER;

  return {
    reduce,
    active,
    variants: staggerVariants(reduce, delayChildren),
  };
}

export function RevealStagger({ children, className, afterContent = true }: RevealStaggerProps) {
  const { reduce, active, variants } = useStaggerParent(afterContent);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={reduce ? sectionVariantsReduced : variants}
    >
      {children}
    </motion.div>
  );
}

export function RevealStaggerList({ children, className, afterContent = true }: RevealStaggerProps) {
  const { reduce, active, variants } = useStaggerParent(afterContent);

  return (
    <motion.ol
      className={className}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={reduce ? sectionVariantsReduced : variants}
    >
      {children}
    </motion.ol>
  );
}

export function RevealStaggerUl({ children, className, afterContent = true }: RevealStaggerProps) {
  const { reduce, active, variants } = useStaggerParent(afterContent);

  return (
    <motion.ul
      className={className}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={reduce ? sectionVariantsReduced : variants}
    >
      {children}
    </motion.ul>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  fadeOnly?: boolean;
};

export function RevealItem({ children, className, fadeOnly = false }: RevealItemProps) {
  const reduce = useReducedMotion();
  const section = useSectionAnim();

  if (section) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate={section.active ? "visible" : "hidden"}
        variants={itemVariants(reduce, fadeOnly)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className} variants={itemVariants(reduce, fadeOnly)}>
      {children}
    </motion.div>
  );
}

const ROTATE_DEG: Record<string, number> = {
  "rotate-l": -1.5,
  "rotate-r": 1.5,
  "rotate-l-2": -3,
  "rotate-r-2": 3,
};

function parseTilt(className = ""): number {
  for (const [cls, deg] of Object.entries(ROTATE_DEG)) {
    if (className.includes(cls)) return deg;
  }
  return 0;
}

function withoutRotate(className = "") {
  return className.replace(/\brotate-(l|r)(-2)?\b/g, "").replace(/\s+/g, " ").trim();
}

function paperCardVariants(reduce: boolean | null, tilt: number): Variants {
  if (reduce) {
    return { hidden: { opacity: 1, rotate: tilt, y: 0 }, visible: { opacity: 1, rotate: tilt, y: 0 } };
  }
  return {
    hidden: { opacity: 0, rotate: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      rotate: tilt,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 17, mass: 0.95 },
    },
  };
}

type RevealPaperCardProps = RevealItemProps & {
  as?: "article" | "li" | "figure" | "div";
};

export function RevealPaperCard({ children, className, as = "article" }: RevealPaperCardProps) {
  const reduce = useReducedMotion();
  const tilt = parseTilt(className);
  const cleanClass = withoutRotate(className);
  const tags = {
    article: motion.article,
    li: motion.li,
    figure: motion.figure,
    div: motion.div,
  };
  const Component = tags[as];

  return (
    <Component
      className={cleanClass}
      style={{ transformOrigin: "50% 80%" }}
      variants={paperCardVariants(reduce, tilt)}
      whileHover={reduce ? undefined : { y: -4, rotate: 0, transition: { duration: 0.35, ease } }}
    >
      {children}
    </Component>
  );
}

const heroVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

type RevealHeroProps = {
  children: ReactNode;
  className?: string;
};

export function RevealHero({ children, className }: RevealHeroProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={reduce ? sectionVariantsReduced : heroVariants}
    >
      {children}
    </motion.div>
  );
}
