import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useReducedMotion, r as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { _ as ClipboardList, a as Plus, b as ArrowUpRight, c as Minus, d as Mail, f as Linkedin, g as Clock, h as Heart, i as ShieldCheck, l as Megaphone, m as Instagram, n as Users, o as PenLine, p as Layers, r as Sparkles, s as Palette, t as Zap, u as MapPin, v as Check, y as Calendar } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B96QH_mW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var SECTION_VIEWPORT = {
	once: true,
	amount: .2,
	margin: "0px 0px -10% 0px"
};
var SectionAnimContext = (0, import_react.createContext)(null);
function useSectionAnim() {
	return (0, import_react.useContext)(SectionAnimContext);
}
/** Single in-view trigger for everything inside a section. */
function SectionAnimRoot({ children, className }) {
	const reduce = useReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, SECTION_VIEWPORT);
	const [leadDuration, setLeadDuration] = (0, import_react.useState)(0);
	const registerLeadDuration = (0, import_react.useCallback)((duration) => {
		setLeadDuration((prev) => Math.max(prev, duration));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionAnimContext.Provider, {
		value: {
			active: reduce || inView,
			leadDuration,
			registerLeadDuration
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className,
			children
		})
	});
}
var ease$1 = [
	.22,
	1,
	.36,
	1
];
var CARD_STAGGER = .1;
var CARD_BUFFER = .12;
var sectionVariantsReduced = {
	hidden: {},
	visible: { transition: {
		staggerChildren: 0,
		delayChildren: 0
	} }
};
function staggerVariants(reduce, delayChildren) {
	return {
		hidden: {},
		visible: { transition: {
			staggerChildren: reduce ? 0 : CARD_STAGGER,
			delayChildren: reduce ? 0 : delayChildren
		} }
	};
}
function itemVariants(reduce, fadeOnly) {
	if (reduce) return {
		hidden: {
			opacity: 1,
			y: 0
		},
		visible: {
			opacity: 1,
			y: 0
		}
	};
	if (fadeOnly) return {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: .55,
				ease: ease$1
			}
		}
	};
	return {
		hidden: {
			opacity: 0,
			y: 16
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .55,
				ease: ease$1
			}
		}
	};
}
function RevealSection({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionAnimRoot, {
		className,
		children
	});
}
function useStaggerParent(afterContent) {
	const reduce = useReducedMotion();
	const section = useSectionAnim();
	return {
		reduce,
		active: section?.active ?? false,
		variants: staggerVariants(reduce, afterContent ? (section?.leadDuration ?? 0) + CARD_BUFFER : CARD_BUFFER)
	};
}
function RevealStagger({ children, className, afterContent = true }) {
	const { reduce, active, variants } = useStaggerParent(afterContent);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		animate: active ? "visible" : "hidden",
		variants: reduce ? sectionVariantsReduced : variants,
		children
	});
}
function RevealStaggerList({ children, className, afterContent = true }) {
	const { reduce, active, variants } = useStaggerParent(afterContent);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ol, {
		className,
		initial: "hidden",
		animate: active ? "visible" : "hidden",
		variants: reduce ? sectionVariantsReduced : variants,
		children
	});
}
function RevealStaggerUl({ children, className, afterContent = true }) {
	const { reduce, active, variants } = useStaggerParent(afterContent);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
		className,
		initial: "hidden",
		animate: active ? "visible" : "hidden",
		variants: reduce ? sectionVariantsReduced : variants,
		children
	});
}
function RevealItem({ children, className, fadeOnly = false }) {
	const reduce = useReducedMotion();
	const section = useSectionAnim();
	if (section) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		animate: section.active ? "visible" : "hidden",
		variants: itemVariants(reduce, fadeOnly),
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: itemVariants(reduce, fadeOnly),
		children
	});
}
var ROTATE_DEG = {
	"rotate-l": -1.5,
	"rotate-r": 1.5,
	"rotate-l-2": -3,
	"rotate-r-2": 3
};
function parseTilt(className = "") {
	for (const [cls, deg] of Object.entries(ROTATE_DEG)) if (className.includes(cls)) return deg;
	return 0;
}
function withoutRotate(className = "") {
	return className.replace(/\brotate-(l|r)(-2)?\b/g, "").replace(/\s+/g, " ").trim();
}
function paperCardVariants(reduce, tilt) {
	if (reduce) return {
		hidden: {
			opacity: 1,
			rotate: tilt,
			y: 0
		},
		visible: {
			opacity: 1,
			rotate: tilt,
			y: 0
		}
	};
	return {
		hidden: {
			opacity: 0,
			rotate: 0,
			y: 30,
			scale: .98
		},
		visible: {
			opacity: 1,
			rotate: tilt,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 90,
				damping: 17,
				mass: .95
			}
		}
	};
}
function RevealPaperCard({ children, className, as = "article" }) {
	const reduce = useReducedMotion();
	const tilt = parseTilt(className);
	const cleanClass = withoutRotate(className);
	const Component = {
		article: motion.article,
		li: motion.li,
		figure: motion.figure,
		div: motion.div
	}[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		className: cleanClass,
		style: { transformOrigin: "50% 80%" },
		variants: paperCardVariants(reduce, tilt),
		whileHover: reduce ? void 0 : {
			y: -4,
			rotate: 0,
			transition: {
				duration: .35,
				ease: ease$1
			}
		},
		children
	});
}
var heroVariants = {
	hidden: {},
	visible: { transition: {
		staggerChildren: .12,
		delayChildren: .2
	} }
};
function RevealHero({ children, className }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		animate: "visible",
		variants: reduce ? sectionVariantsReduced : heroVariants,
		children
	});
}
var ease = [
	.22,
	1,
	.36,
	1
];
var WORD_STAGGER = .07;
var WORD_DURATION = .45;
var CHAR_MS = 26;
var LINE_GAP_MS = 180;
function normalizePhrase(phrase) {
	return phrase.replace(/[.,!?;:]+$/, "").trim();
}
function tokenizeTitle(title, highlights = []) {
	const words = title.split(" ");
	const tokens = [];
	let i = 0;
	while (i < words.length) {
		let matched = false;
		for (const phrase of highlights) {
			const phraseWords = phrase.split(" ");
			const slice = words.slice(i, i + phraseWords.length).join(" ");
			if (normalizePhrase(slice) === normalizePhrase(phrase)) {
				tokens.push({
					text: slice,
					highlight: true
				});
				i += phraseWords.length;
				matched = true;
				break;
			}
		}
		if (!matched) {
			tokens.push({
				text: words[i],
				highlight: false
			});
			i += 1;
		}
	}
	return tokens;
}
function TitleWord({ text, highlight, index, total, active, reduce }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
		custom: index,
		initial: reduce ? false : "hidden",
		animate: active ? "visible" : "hidden",
		variants: wordVariants,
		className: "inline-block overflow-visible",
		children: [highlight ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "highlight-mark",
			children: text
		}) : text, index < total - 1 ? "\xA0" : ""]
	});
}
var wordVariants = {
	hidden: {
		opacity: 0,
		y: 22
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: WORD_DURATION,
			ease,
			delay: i * WORD_STAGGER
		}
	})
};
function headingIntroStartDelay(wordCount) {
	return wordCount * WORD_STAGGER + WORD_DURATION + .15;
}
function estimateTypewriterDuration(lines) {
	if (!lines.length) return 0;
	return lines.reduce((total, line, i) => {
		total += line.length * CHAR_MS;
		if (i < lines.length - 1) total += LINE_GAP_MS;
		return total;
	}, 0) / 1e3;
}
function estimateSectionLeadDuration(title, lines = []) {
	const wordCount = title.split(/\s+/).filter(Boolean).length;
	return headingIntroStartDelay(wordCount) + estimateTypewriterDuration(lines);
}
/** One continuous typewriter across multiple lines — single cursor, line by line. */
function MultiLineTypewriter({ lines, className, lineClassName, charMs = CHAR_MS, lineGapMs = LINE_GAP_MS, active, startDelay = 0 }) {
	const reduce = useReducedMotion();
	const [ready, setReady] = (0, import_react.useState)(false);
	const [charsPerLine, setCharsPerLine] = (0, import_react.useState)(() => lines.map((l) => l.length));
	const [activeLine, setActiveLine] = (0, import_react.useState)(-1);
	const [finished, setFinished] = (0, import_react.useState)(!!reduce);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
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
		let timer;
		const sync = (typingLine, done) => {
			setCharsPerLine(lines.map((line, i) => {
				if (i < lineIdx) return line.length;
				if (i === lineIdx) return charIdx;
				return 0;
			}));
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
		timer = setTimeout(tick, startDelay * 1e3);
		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, [
		ready,
		active,
		lines,
		charMs,
		lineGapMs,
		startDelay,
		reduce
	]);
	const showCursor = ready && !reduce && active && !finished && activeLine < lines.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: lines.map((full, i) => {
			const count = charsPerLine[i] ?? 0;
			const isTyping = showCursor && i === activeLine;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: lineClassName,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: full
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": ready && !reduce,
						children: full.slice(0, count)
					}),
					isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-0.5 inline-block animate-pulse text-ink",
						"aria-hidden": true,
						children: "|"
					})
				]
			}, i);
		})
	});
}
function HeadingWithIntro({ as = "h2", title, highlights = [], intro, paragraphs, titleClassName, introClassName, paragraphWrapperClassName, trigger = "inView", kicker, kickerClassName = "text-xs font-medium uppercase tracking-[0.18em] text-ink-soft" }) {
	const reduce = useReducedMotion();
	const section = useSectionAnim();
	const ref = (0, import_react.useRef)(null);
	const fallbackInView = useInView(ref, {
		...SECTION_VIEWPORT,
		amount: .35
	});
	const tokens = (0, import_react.useMemo)(() => tokenizeTitle(title, highlights), [title, highlights]);
	const Heading = as === "h1" ? motion.h1 : motion.h2;
	const lines = paragraphs ?? (intro?.trim() ? [intro] : []);
	const introDelay = headingIntroStartDelay(tokens.length);
	const leadDuration = (0, import_react.useMemo)(() => estimateSectionLeadDuration(title, lines), [title, lines]);
	const active = reduce || trigger === "mount" || section?.active || !section && trigger === "inView" && fallbackInView;
	(0, import_react.useLayoutEffect)(() => {
		if (section) section.registerLeadDuration(leadDuration);
	}, [section, leadDuration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [
			kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: kickerClassName,
				initial: reduce ? false : {
					opacity: 0,
					y: 8
				},
				animate: active ? {
					opacity: 1,
					y: 0
				} : {
					opacity: 0,
					y: 8
				},
				transition: {
					duration: .4,
					ease
				},
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				className: titleClassName,
				children: tokens.map((token, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleWord, {
					text: token.text,
					highlight: token.highlight,
					index: i,
					total: tokens.length,
					active,
					reduce
				}, `${token.text}-${i}`))
			}),
			lines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiLineTypewriter, {
				lines,
				className: paragraphWrapperClassName ?? (lines.length > 1 ? "mt-6 space-y-4" : void 0),
				lineClassName: introClassName,
				active,
				startDelay: reduce ? 0 : introDelay
			})
		]
	});
}
function SectionHeading({ kicker, title, intro, highlights }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadingWithIntro, {
			as: "h2",
			kicker,
			title,
			highlights,
			intro: intro?.trim() ? intro : void 0,
			titleClassName: "mt-3 text-3xl md:text-5xl",
			introClassName: "mt-4 text-base text-ink-soft md:text-lg",
			trigger: "inView"
		})
	});
}
var heroImg_default = "/assets/heroImg-lgBlWM-o.jpeg";
var Gideon_default = "/assets/Gideon-BUoiLUgp.png";
var case_skincare_default = "/assets/case-skincare-CbyZjvnU.jpg";
var case_restaurant_default = "/assets/case-restaurant-BuorHj7Z.jpg";
var case_coach_default = "/assets/case-coach-WZPp953j.jpg";
var case_brand_default = "/assets/case-brand-DTlbXaqd.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tools, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyMe, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		className: "sticky top-4 z-50 mx-auto max-w-6xl px-4",
		initial: reduce ? false : {
			opacity: 0,
			y: -10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			delay: .15,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "paper-card flex items-center justify-between gap-4 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hand text-2xl text-ink",
						children: "Gideon"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-xs text-muted-foreground sm:inline",
						children: "/ creative ops"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-7 text-sm text-ink-soft md:flex",
					children: [
						{
							href: "#services",
							label: "Services"
						},
						{
							href: "#work",
							label: "Work"
						},
						{
							href: "#about",
							label: "About"
						},
						{
							href: "#faq",
							label: "FAQ"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "transition-colors hover:text-ink",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "rounded-full bg-ink px-5 text-primary-foreground hover:bg-ink/90",
						children: "Work with me"
					})
				})
			]
		})
	});
}
var HERO_TITLE = "Your brand, consistently online, without you lifting a finger.";
var HERO_INTRO = "I'm Gideon, a creative virtual assistant, social media manager, and graphic designer for founders who'd rather build their business than babysit their inbox or their feed.";
var HERO_LEAD = estimateSectionLeadDuration(HERO_TITLE, [HERO_INTRO]);
function Hero() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative mx-auto max-w-6xl px-4 pt-10 pb-16 md:pt-16 md:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealHero, {
			className: "grid items-center gap-10 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-paper-mint/70 px-3 py-1 text-xs font-medium text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-500" }), "Available for new clients · Remote worldwide"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadingWithIntro, {
						as: "h1",
						trigger: "mount",
						title: HERO_TITLE,
						highlights: ["consistently online"],
						intro: HERO_INTRO,
						titleClassName: "mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl",
						introClassName: "mt-5 max-w-xl text-base text-ink-soft md:text-lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-7 flex flex-wrap items-center gap-3",
						initial: reduce ? false : {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: reduce ? 0 : HERO_LEAD + .12,
							duration: .5,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								className: "rounded-full bg-ink text-primary-foreground hover:bg-ink/90",
								children: "Work with me"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#work",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								className: "rounded-full border-ink/20 bg-card",
								children: "See recent work"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-8 flex flex-wrap items-center gap-5 text-sm text-ink-soft",
						initial: reduce ? false : {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: reduce ? 0 : HERO_LEAD + .28,
							duration: .5,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Based in Nigeria · Working globally"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), " Replies within 24h"]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
				className: "relative md:col-span-5",
				fadeOnly: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "paper-card paper-card-lg rotate-r overflow-hidden p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tape left-1/2 -top-3 -translate-x-1/2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: heroImg_default,
									alt: "Portrait of Gideon, freelance creative virtual assistant",
									width: 1024,
									height: 1024,
									className: "aspect-[4/5] w-full rounded-lg object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between px-1 pb-1 text-xs text-ink-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hand text-base text-ink",
										children: "Hi, I'm Gideon"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "est. 2021" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "paper-card absolute -bottom-6 -left-6 rotate-l-2 bg-paper-yellow px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hand text-lg text-ink",
								children: "+38 brands"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-ink-soft",
								children: "supported since 2021"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "paper-card absolute -right-4 top-10 rotate-r-2 bg-paper-pink px-3 py-2 text-xs float-slow",
							style: { ["--r"]: "6deg" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " on-brand always"]
							})
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}) }) })]
	});
}
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-16 border-y border-ink/10 py-4 text-sm text-ink-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hand text-base text-ink",
				children: "Trusted by:"
			}), [
				"Skincare brands",
				"Wellness coaches",
				"Restaurants",
				"SaaS founders",
				"Boutique studios",
				"E-commerce",
				"Authors"
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "opacity-80",
				children: i
			}, i))]
		})
	});
}
var services = [
	{
		color: "bg-paper-pink",
		rotate: "rotate-l",
		icon: Megaphone,
		title: "Social Media Management",
		desc: "I run your feed so you can stop opening five apps a day to post, schedule, and reply.",
		deliverables: [
			"Monthly content calendar",
			"12 to 20 designed posts",
			"Captions and hashtags",
			"DM and comment care"
		],
		tools: [
			"Meta Business Suite",
			"Canva",
			"Notion",
			"CapCut"
		],
		benefit: "Show up daily without you touching Canva."
	},
	{
		color: "bg-paper-blue",
		rotate: "rotate-r",
		icon: ClipboardList,
		title: "Virtual Assistance",
		desc: "The behind-the-scenes support that frees up 10+ hours a week, from inbox triage to client onboarding.",
		deliverables: [
			"Inbox and calendar management",
			"Client onboarding",
			"Research and data entry",
			"SOPs and file organization"
		],
		tools: [
			"Google Workspace",
			"Notion",
			"Trello",
			"Slack"
		],
		benefit: "Reclaim 10+ hours weekly so admin stops eating your day."
	},
	{
		color: "bg-paper-yellow",
		rotate: "rotate-l",
		icon: Palette,
		title: "Graphic Design",
		desc: "Polished, on-brand visuals for everything your business needs to look good, online and in print.",
		deliverables: [
			"Social graphics and carousels",
			"Flyers and menus",
			"Brand kits and guidelines",
			"Pitch and presentation decks"
		],
		tools: [
			"Figma",
			"Canva",
			"Adobe Express"
		],
		benefit: "Look like the brand you're charging premium prices for."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "What I do",
			title: "Three ways I help you grow",
			intro: "Each engagement is tailored: pick one, mix and match, or hand me the whole creative ops stack."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStagger, {
			className: "mt-12 grid gap-8 md:grid-cols-3",
			children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
				className: `paper-card hover-lift relative p-6 ${s.color} ${s.rotate}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-white/70 p-2.5 text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-ink-soft",
							children: ["0", services.indexOf(s) + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-2xl",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: s.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium uppercase tracking-wide text-ink-soft",
							children: "Deliverables"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5 text-sm",
							children: s.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0" }),
									" ",
									d
								]
							}, d))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: s.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/80 px-2.5 py-0.5 text-xs text-ink-soft",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t border-ink/10 pt-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hand text-lg text-ink",
							children: "→ "
						}), s.benefit]
					})
				]
			}, s.title))
		})] })
	});
}
var projects = [
	{
		img: case_skincare_default,
		color: "bg-paper-pink",
		rotate: "rotate-l",
		tag: "Social Media Design",
		title: "Instagram content redesign for Lumière Skincare",
		problem: "Inconsistent feed and dropping reach during a product launch.",
		solution: "Rebuilt the visual system around editable Canva templates, dropped a 6-week content plan with reels, carousels, and stories.",
		tools: [
			"Canva",
			"CapCut",
			"Notion"
		],
		result: "+62% reach, +34% saves, fully booked launch waitlist."
	},
	{
		img: case_restaurant_default,
		color: "bg-paper-yellow",
		rotate: "rotate-r",
		tag: "Social Media Management",
		title: "Full-service social management for Casa Olivar",
		problem: "Owner had no time to plan posts or reply to DMs during dinner service.",
		solution: "Took over scheduling, weekly photo direction, story templates, and inbox triage with same-day responses.",
		tools: [
			"Meta Business Suite",
			"Canva",
			"Google Workspace"
		],
		result: "3x weekend reservations within 90 days."
	},
	{
		img: case_coach_default,
		color: "bg-paper-blue",
		rotate: "rotate-l",
		tag: "Canva Template System",
		title: "Template library for a life coach launch",
		problem: "Coach was reinventing every post from scratch.",
		solution: "Designed a 40-template Canva system with brand fonts, color presets, and easy carousel setup.",
		tools: ["Canva", "Figma"],
		result: "Cut content creation time from 6 hours to 45 minutes weekly."
	},
	{
		img: case_brand_default,
		color: "bg-paper-mint",
		rotate: "rotate-r",
		tag: "Brand Identity + VA Setup",
		title: "Brand identity and ops setup for a boutique studio",
		problem: "New studio needed a brand kit and an evolving backstage before opening.",
		solution: "Delivered logo system, color palette, social templates, and set up Notion CRM + client onboarding flow.",
		tools: [
			"Figma",
			"Notion",
			"Trello"
		],
		result: "Launched on schedule with 11 paying clients in month one."
	}
];
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Selected work",
			title: "Real projects, real outcomes",
			intro: "A glimpse into how I partner with founders. Every project starts with their problem and ends with measurable lift."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStagger, {
			className: "mt-12 grid gap-8 md:grid-cols-2",
			children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
				className: `paper-card hover-lift overflow-hidden p-5 ${p.color} ${i % 2 ? "rotate-r" : "rotate-l"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-lg bg-white/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							width: 1024,
							height: 1024,
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink",
							children: p.tag
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-xl",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseRow, {
								label: "Problem",
								value: p.problem
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseRow, {
								label: "Solution",
								value: p.solution
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseRow, {
								label: "Tools",
								value: p.tools.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseRow, {
								label: "Result",
								value: p.result,
								accent: true
							})
						]
					})
				]
			}, p.title))
		})] })
	});
}
function CaseRow({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[88px_1fr] gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs uppercase tracking-wide text-ink-soft",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: accent ? "font-medium text-ink" : "text-ink-soft",
			children: value
		})]
	});
}
var ABOUT_INTRO = "I help founders and growing brands stay consistent online through creative design, social media support, and organized virtual assistance.";
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, {
			className: "grid items-center gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
				className: "relative md:col-span-5",
				fadeOnly: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "paper-card paper-card-lg rotate-l overflow-hidden p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tape left-6 -top-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Gideon_default,
						alt: "Gideon working at his desk",
						width: 1024,
						height: 1024,
						loading: "lazy",
						className: "aspect-square w-full rounded-lg object-cover"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "paper-card absolute -bottom-5 -right-3 rotate-r-2 bg-paper-blue px-4 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hand text-lg",
						children: "organized · creative · kind"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadingWithIntro, {
					as: "h2",
					kicker: "About",
					title: "A reliable creative partner for busy founders.",
					paragraphs: [
						ABOUT_INTRO,
						"For four years I've worked remotely with skincare brands, coaches, restaurants, and SaaS founders, quietly running the systems and visuals that make small teams look bigger and more put-together than they actually are.",
						"My favorite kind of work? The kind that gives a founder their Sunday evening back."
					],
					titleClassName: "mt-3 text-3xl md:text-5xl",
					paragraphWrapperClassName: "mt-6 space-y-4",
					introClassName: "text-base text-ink-soft md:text-lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStagger, {
					className: "mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4",
					children: [
						["4+ yrs", "remote"],
						["38+", "clients"],
						["<24h", "reply time"],
						["95%", "client retention"]
					].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
						className: "paper-card bg-paper-cream px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xl font-semibold text-ink",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-ink-soft",
							children: l
						})]
					}, l))
				})]
			})]
		})
	});
}
var experience = [
	{
		when: "2024 to Present",
		role: "Lead Creative VA · Independent",
		body: "Retainer work for 6 recurring clients across wellness, hospitality, and SaaS, managing social, design, and operations.",
		color: "bg-paper-blue"
	},
	{
		when: "2023 to 2024",
		role: "Social Media Manager · Casa Olivar (Restaurant)",
		body: "Owned content planning, weekly photo direction, and inbox response. Grew weekend reservations by 3x in 90 days.",
		color: "bg-paper-yellow"
	},
	{
		when: "2022 to 2023",
		role: "Virtual Assistant · Various startup founders",
		body: "Built Notion systems, onboarded clients, managed inboxes, and ran CRM hygiene for a portfolio of early-stage founders.",
		color: "bg-paper-pink"
	},
	{
		when: "2021 to 2022",
		role: "Freelance Graphic Designer",
		body: "Started freelancing with brand kits, social graphics, and Canva template systems for small businesses.",
		color: "bg-paper-mint"
	}
];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Experience",
			title: "A short, useful timeline",
			intro: "Four years of remote work with founders who needed both creativity and reliability, usually at the same time."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStaggerList, {
			className: "mt-12 space-y-5",
			children: experience.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
				as: "li",
				className: `paper-card hover-lift grid gap-2 p-6 md:grid-cols-[180px_1fr] ${e.color} ${i % 2 ? "rotate-r" : "rotate-l"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium text-ink",
					children: e.when
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg",
					children: e.role
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink-soft",
					children: e.body
				})] })]
			}, e.role))
		})] })
	});
}
var tools = [
	"Canva",
	"Figma",
	"Adobe Express",
	"Notion",
	"Trello",
	"Meta Business Suite",
	"CapCut",
	"Google Workspace",
	"Slack",
	"ChatGPT",
	"Buffer",
	"Later"
];
function Tools() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Stack",
			title: "Tools I work in every day",
			intro: "If you already use these, we'll move fast. If you don't, I'll set them up properly."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStaggerUl, {
			className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
			children: tools.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
				as: "li",
				className: `paper-card hover-lift flex items-center gap-3 px-4 py-3 text-sm ${i % 4 === 0 ? "bg-paper-pink" : i % 4 === 1 ? "bg-paper-yellow" : i % 4 === 2 ? "bg-paper-blue" : "bg-paper-mint"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-8 w-8 place-items-center rounded-lg bg-white/80 text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-ink",
					children: t
				})]
			}, t))
		})] })
	});
}
var reasons = [
	{
		icon: Zap,
		title: "Fast, clear communication",
		body: "You'll never wonder where things stand. Same-day replies, weekly updates by default."
	},
	{
		icon: ShieldCheck,
		title: "Reliable delivery",
		body: "If I commit to a date, it lands on that date, usually a day early."
	},
	{
		icon: PenLine,
		title: "Attention to detail",
		body: "Brand kits get followed. Typos get caught. Spreadsheets actually balance."
	},
	{
		icon: Sparkles,
		title: "Proactive thinking",
		body: "I'll flag what's coming, suggest what to test, and quietly fix what's broken."
	},
	{
		icon: Users,
		title: "Built for remote teams",
		body: "Async-friendly, time-zone aware, and comfortable in Slack, Notion, and Loom."
	},
	{
		icon: Heart,
		title: "Warm, founder-friendly",
		body: "I treat your business like it's mine, without ever forgetting it's yours."
	}
];
function WhyMe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Why work with me",
			title: "The kind of teammate I am",
			intro: "A creative who also loves a tidy folder."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStaggerUl, {
			className: "mt-12 grid gap-5 md:grid-cols-3",
			children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
				as: "li",
				className: "paper-card hover-lift p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-paper-yellow text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-lg",
						children: r.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: r.body
					})
				]
			}, r.title))
		})] })
	});
}
var testimonials = [
	{
		name: "Sofia Andrade",
		role: "Founder, Lumière Skincare",
		color: "bg-paper-pink",
		rotate: "rotate-l",
		quote: "Gideon rebuilt our entire content system in two weeks. Our launch sold out and our DMs finally got answered the same day."
	},
	{
		name: "Daniel Cruz",
		role: "Owner, Casa Olivar",
		color: "bg-paper-yellow",
		rotate: "rotate-r",
		quote: "I stopped touching our Instagram and our reservations went up. That's about the highest praise I can give."
	},
	{
		name: "Priya Menon",
		role: "Life coach",
		color: "bg-paper-blue",
		rotate: "rotate-l",
		quote: "The Canva templates she made are the reason I post consistently now. Easily the best investment of my year."
	},
	{
		name: "Marco Tan",
		role: "Co-founder, SaaS startup",
		color: "bg-paper-mint",
		rotate: "rotate-r",
		quote: "She's organized, kind, and weirdly good at anticipating what we need before we ask. Genuinely an extension of our team."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "Kind words",
			title: "What clients say",
			intro: "A few notes from founders I've worked with recently."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStagger, {
			className: "mt-12 grid gap-6 md:grid-cols-2",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
				as: "figure",
				className: `paper-card hover-lift p-6 ${t.color} ${t.rotate}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "text-lg leading-relaxed text-ink",
					children: [
						"“",
						t.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-white/80 font-semibold text-ink",
						children: t.name[0]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium text-ink",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-ink-soft",
						children: t.role
					})] })]
				})]
			}, t.name))
		})] })
	});
}
var faqs = [
	{
		q: "What services do you offer?",
		a: "Three core services: social media management, virtual assistance, and graphic design. I work with clients on a monthly retainer, but project-based work is available too."
	},
	{
		q: "Do you work remotely?",
		a: "Yes, fully remote and async-friendly. I'm based in Nigeria, currently overlap comfortably with US, UK, and Australian hours, and reply within 24 hours."
	},
	{
		q: "What tools do you use?",
		a: "Canva, Figma, Adobe Express, Notion, Trello, Meta Business Suite, CapCut, Google Workspace, Slack, ChatGPT, Buffer, Later. If you use something else, I'll pick it up."
	},
	{
		q: "How do we start working together?",
		a: "A short call to talk through what you need, then I'll send a simple proposal with scope and timeline. No surprises, no hidden fees."
	},
	{
		q: "What industries do you work with?",
		a: "Mostly skincare and beauty, wellness and coaching, restaurants and hospitality, SaaS, and boutique studios, but the systems transfer well to most small service businesses."
	},
	{
		q: "What are your pricing options?",
		a: "Monthly retainers start at $750 for social-only and $1,400/mo for full creative ops (social + virtual assistance + design). One-off projects are quoted per scope."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "mx-auto max-w-3xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealSection, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			kicker: "FAQ",
			title: "Good questions, honest answers"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStaggerUl, {
			className: "mt-10 space-y-3",
			children: faqs.map((f, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
					as: "li",
					className: "paper-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
						"aria-expanded": isOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-medium text-ink md:text-lg",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper-yellow text-ink",
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
						})]
					}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pb-5 text-sm text-ink-soft md:text-base",
						children: f.a
					})]
				}, f.q);
			})
		})] })
	});
}
function ContactActions() {
	const reduce = useReducedMotion();
	const section = useSectionAnim();
	const delay = (section?.leadDuration ?? 0) + .12;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "mt-7 flex flex-wrap gap-3",
		initial: reduce ? false : {
			opacity: 0,
			y: 12
		},
		animate: section?.active ? {
			opacity: 1,
			y: 0
		} : {
			opacity: 0,
			y: 12
		},
		transition: {
			delay: reduce ? 0 : delay,
			duration: .5,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "mailto:hello@gideon.co",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				className: "rounded-full bg-ink text-primary-foreground hover:bg-ink/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-1" }), " hello@gideon.co"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "lg",
				variant: "outline",
				className: "rounded-full border-ink/20 bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "mr-1" }), " Book a call"]
			})
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "mx-auto max-w-6xl px-4 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
			fadeOnly: true,
			className: "paper-card paper-card-lg relative overflow-hidden bg-paper-cream p-8 md:p-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tape -top-3 left-12" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tape -top-3 right-12 bg-paper-pink-deep" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadingWithIntro, {
							as: "h2",
							kicker: "Let's work together",
							title: "Let's help your brand stay organized, creative, and consistent.",
							highlights: ["organized, creative, and consistent."],
							intro: "Tell me a little about your business and what you need help with. I'll reply within 24 hours with next steps.",
							titleClassName: "mt-3 text-3xl md:text-5xl",
							introClassName: "mt-5 max-w-xl text-base text-ink-soft md:text-lg"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactActions, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealStaggerUl, {
						className: "grid gap-3 md:col-span-5",
						children: [
							{
								icon: Mail,
								label: "Email",
								value: "hello@gideon.co"
							},
							{
								icon: Linkedin,
								label: "LinkedIn",
								value: "/in/gideon"
							},
							{
								icon: Instagram,
								label: "Instagram",
								value: "@gideoncreates"
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealPaperCard, {
							as: "li",
							className: "paper-card flex items-center justify-between gap-4 bg-white px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-lg bg-paper-blue text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-ink-soft",
									children: c.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium text-ink",
									children: c.value
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-ink-soft" })]
						}, c.label))
					})]
				})
			]
		}) })
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mx-auto max-w-6xl px-4 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealSection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
			className: "flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-ink-soft md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Gideon · Creative VA & Social Media Designer"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hand text-base text-ink",
				children: "made with care, one paper card at a time"
			})]
		}) })
	});
}
//#endregion
export { Index as component };
