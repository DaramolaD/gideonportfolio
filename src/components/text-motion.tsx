import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SECTION_VIEWPORT, useSectionAnim } from "@/components/section-anim";

const ease = [0.22, 1, 0.36, 1] as const;
const WORD_STAGGER = 0.07;
const WORD_DURATION = 0.45;
const CHAR_MS = 26;
const LINE_GAP_MS = 180;

type WordToken = { text: string; highlight: boolean };

function normalizePhrase(phrase: string) {
  return phrase.replace(/[.,!?;:]+$/, "").trim();
}

function tokenizeTitle(title: string, highlights: string[] = []): WordToken[] {
  const words = title.split(" ");
  const tokens: WordToken[] = [];
  let i = 0;

  while (i < words.length) {
    let matched = false;
    for (const phrase of highlights) {
      const phraseWords = phrase.split(" ");
      const slice = words.slice(i, i + phraseWords.length).join(" ");
      if (normalizePhrase(slice) === normalizePhrase(phrase)) {
        tokens.push({ text: slice, highlight: true });
        i += phraseWords.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      tokens.push({ text: words[i], highlight: false });
      i += 1;
    }
  }

  return tokens;
}

function TitleWord({
  text,
  highlight,
  index,
  total,
  active,
  reduce,
}: {
  text: string;
  highlight: boolean;
  index: number;
  total: number;
  active: boolean;
  reduce: boolean | null;
}) {
  return (
    <motion.span
      custom={index}
      initial={reduce ? false : "hidden"}
      animate={active ? "visible" : "hidden"}
      variants={wordVariants}
      className="inline-block overflow-visible"
    >
      {highlight ? <span className="highlight-mark">{text}</span> : text}
      {index < total - 1 ? "\u00a0" : ""}
    </motion.span>
  );
}

const wordVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: WORD_DURATION, ease, delay: i * WORD_STAGGER },
  }),
};

export function headingIntroStartDelay(wordCount: number) {
  return wordCount * WORD_STAGGER + WORD_DURATION + 0.15;
}

export function estimateTypewriterDuration(lines: string[]) {
  if (!lines.length) return 0;
  return lines.reduce((total, line, i) => {
    total += line.length * CHAR_MS;
    if (i < lines.length - 1) total += LINE_GAP_MS;
    return total;
  }, 0) / 1000;
}

export function estimateSectionLeadDuration(title: string, lines: string[] = []) {
  const wordCount = title.split(/\s+/).filter(Boolean).length;
  return headingIntroStartDelay(wordCount) + estimateTypewriterDuration(lines);
}

type MultiLineTypewriterProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  charMs?: number;
  lineGapMs?: number;
  active: boolean;
  startDelay?: number;
};

/** One continuous typewriter across multiple lines — single cursor, line by line. */
function MultiLineTypewriter({
  lines,
  className,
  lineClassName,
  charMs = CHAR_MS,
  lineGapMs = LINE_GAP_MS,
  active,
  startDelay = 0,
}: MultiLineTypewriterProps) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [charsPerLine, setCharsPerLine] = useState<number[]>(() => lines.map((l) => l.length));
  const [activeLine, setActiveLine] = useState(-1);
  const [finished, setFinished] = useState(!!reduce);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    if (reduce) {
      setCharsPerLine(lines.map((l) => l.length));
      setActiveLine(lines.length);
      setFinished(true);
      return;
    }

    if (!active) return;

    setCharsPerLine(lines.map(() => 0));
    setActiveLine(0);
    setFinished(false);

    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const sync = (typingLine: number, done: boolean) => {
      setCharsPerLine(
        lines.map((line, i) => {
          if (i < lineIdx) return line.length;
          if (i === lineIdx) return charIdx;
          return 0;
        }),
      );
      setActiveLine(done ? lines.length : typingLine);
      setFinished(done);
    };

    const tick = () => {
      if (cancelled) return;

      const current = lines[lineIdx];
      if (charIdx < current.length) {
        charIdx += 1;
        sync(lineIdx, false);
        timer = setTimeout(tick, charMs);
        return;
      }

      if (lineIdx < lines.length - 1) {
        sync(lineIdx, false);
        lineIdx += 1;
        charIdx = 0;
        timer = setTimeout(tick, lineGapMs);
        return;
      }

      sync(lineIdx, true);
    };

    timer = setTimeout(tick, startDelay * 1000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [ready, active, lines, charMs, lineGapMs, startDelay, reduce]);

  const showCursor = ready && !reduce && active && !finished && activeLine < lines.length;

  return (
    <div className={className}>
      {lines.map((full, i) => {
        const count = charsPerLine[i] ?? 0;
        const isTyping = showCursor && i === activeLine;

        return (
          <p key={i} className={lineClassName}>
            <span className="sr-only">{full}</span>
            <span aria-hidden={ready && !reduce}>{full.slice(0, count)}</span>
            {isTyping && (
              <span className="ml-0.5 inline-block animate-pulse text-ink" aria-hidden>
                |
              </span>
            )}
          </p>
        );
      })}
    </div>
  );
}

type TypewriterTextProps = {
  text: string;
  className?: string;
  delay?: number;
  charMs?: number;
  active: boolean;
};

export function TypewriterText({ text, className, delay = 0, charMs = CHAR_MS, active }: TypewriterTextProps) {
  return (
    <MultiLineTypewriter
      lines={[text]}
      lineClassName={className}
      charMs={charMs}
      active={active}
      startDelay={delay}
    />
  );
}

type HeadingWithIntroProps = {
  as?: "h1" | "h2";
  title: string;
  highlights?: string[];
  /** @deprecated Use `paragraphs` for multi-line copy */
  intro?: string;
  paragraphs?: string[];
  titleClassName?: string;
  introClassName?: string;
  paragraphWrapperClassName?: string;
  trigger?: "mount" | "inView";
  /** Kicker line above the heading (synced with section in-view). */
  kicker?: string;
  kickerClassName?: string;
};

export function HeadingWithIntro({
  as = "h2",
  title,
  highlights = [],
  intro,
  paragraphs,
  titleClassName,
  introClassName,
  paragraphWrapperClassName,
  trigger = "inView",
  kicker,
  kickerClassName = "text-xs font-medium uppercase tracking-[0.18em] text-ink-soft",
}: HeadingWithIntroProps) {
  const reduce = useReducedMotion();
  const section = useSectionAnim();
  const ref = useRef<HTMLDivElement>(null);
  const fallbackInView = useInView(ref, { ...SECTION_VIEWPORT, amount: 0.35 });
  const tokens = useMemo(() => tokenizeTitle(title, highlights), [title, highlights]);
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  const lines = paragraphs ?? (intro?.trim() ? [intro] : []);
  const introDelay = headingIntroStartDelay(tokens.length);
  const leadDuration = useMemo(
    () => estimateSectionLeadDuration(title, lines),
    [title, lines],
  );

  const active =
    reduce ||
    trigger === "mount" ||
    section?.active ||
    (!section && trigger === "inView" && fallbackInView);

  useLayoutEffect(() => {
    if (section) section.registerLeadDuration(leadDuration);
  }, [section, leadDuration]);

  return (
    <div ref={ref}>
      {kicker && (
        <motion.p
          className={kickerClassName}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease }}
        >
          {kicker}
        </motion.p>
      )}
      <Heading className={titleClassName}>
        {tokens.map((token, i) => (
          <TitleWord
            key={`${token.text}-${i}`}
            text={token.text}
            highlight={token.highlight}
            index={i}
            total={tokens.length}
            active={active}
            reduce={reduce}
          />
        ))}
      </Heading>
      {lines.length > 0 && (
        <MultiLineTypewriter
          lines={lines}
          className={paragraphWrapperClassName ?? (lines.length > 1 ? "mt-6 space-y-4" : undefined)}
          lineClassName={introClassName}
          active={active}
          startDelay={reduce ? 0 : introDelay}
        />
      )}
    </div>
  );
}

type SectionHeadingProps = {
  kicker: string;
  title: string;
  intro?: string;
  highlights?: string[];
};

type TypewriterSequenceProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  charMs?: number;
  lineGapMs?: number;
  startDelay?: number;
};

export function TypewriterSequence({
  lines,
  className,
  lineClassName,
  charMs = CHAR_MS,
  lineGapMs = LINE_GAP_MS,
  startDelay = 0,
}: TypewriterSequenceProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25, margin: "0px 0px -10% 0px" });
  const active = reduce || inView;

  return (
    <div ref={ref}>
      <MultiLineTypewriter
        lines={lines}
        className={className}
        lineClassName={lineClassName}
        charMs={charMs}
        lineGapMs={lineGapMs}
        active={active}
        startDelay={reduce ? 0 : startDelay}
      />
    </div>
  );
}

export function SectionHeading({ kicker, title, intro, highlights }: SectionHeadingProps) {
  return (
    <header className="max-w-2xl">
      <HeadingWithIntro
        as="h2"
        kicker={kicker}
        title={title}
        highlights={highlights}
        intro={intro?.trim() ? intro : undefined}
        titleClassName="mt-3 text-3xl md:text-5xl"
        introClassName="mt-4 text-base text-ink-soft md:text-lg"
        trigger="inView"
      />
    </header>
  );
}
