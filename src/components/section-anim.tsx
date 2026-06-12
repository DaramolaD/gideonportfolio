import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export const SECTION_VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
} as const;

type SectionAnimContextValue = {
  active: boolean;
  leadDuration: number;
  registerLeadDuration: (duration: number) => void;
};

const SectionAnimContext = createContext<SectionAnimContextValue | null>(null);

export function useSectionAnim() {
  return useContext(SectionAnimContext);
}

type SectionAnimRootProps = {
  children: ReactNode;
  className?: string;
};

/** Single in-view trigger for everything inside a section. */
export function SectionAnimRoot({ children, className }: SectionAnimRootProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, SECTION_VIEWPORT);
  const [leadDuration, setLeadDuration] = useState(0);

  const registerLeadDuration = useCallback((duration: number) => {
    setLeadDuration((prev) => Math.max(prev, duration));
  }, []);

  return (
    <SectionAnimContext.Provider
      value={{
        active: reduce || inView,
        leadDuration,
        registerLeadDuration,
      }}
    >
      <div ref={ref} className={className}>
        {children}
      </div>
    </SectionAnimContext.Provider>
  );
}
