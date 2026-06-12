import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail, Linkedin, Instagram, MapPin, ArrowUpRight,
  Calendar, Users, ClipboardList,
  Sparkles, Layers, Palette, Megaphone, PenLine,
  Plus, Minus, Check, Clock, Heart, Zap, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  RevealSection,
  RevealStagger,
  RevealItem,
  RevealPaperCard,
  RevealHero,
  RevealStaggerList,
  RevealStaggerUl,
} from "@/components/reveal";
import { estimateSectionLeadDuration, HeadingWithIntro, SectionHeading } from "@/components/text-motion";
import { useSectionAnim } from "@/components/section-anim";
import portrait from "@/assets/heroImg.jpeg";
import aboutImg from "@/assets/Gideon.png";
import caseSkincare from "@/assets/case-skincare.jpg";
import caseRestaurant from "@/assets/case-restaurant.jpg";
import caseCoach from "@/assets/case-coach.jpg";
import caseBrand from "@/assets/case-brand.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gideon, Creative VA & Social Media Designer" },
      { name: "description", content: "Freelance creative operator helping founders stay organized, visible, and on-brand through social media, virtual assistance, and design." },
      { property: "og:title", content: "Gideon, Creative VA & Social Media Designer" },
      { property: "og:description", content: "Freelance creative operator helping founders stay organized, visible, and on-brand." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <About />
      <Experience />
      <Tools />
      <WhyMe />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const reduce = useReducedMotion();
  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <motion.header
      className="sticky top-4 z-50 mx-auto max-w-6xl px-4"
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="paper-card flex items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="hand text-2xl text-ink">Gideon</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">/ creative ops</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="transition-colors hover:text-ink">{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact">
          <Button className="rounded-full bg-ink px-5 text-primary-foreground hover:bg-ink/90">Work with me</Button>
        </a>
      </nav>
    </motion.header>
  );
}

/* ---------- HERO ---------- */
const HERO_TITLE = "Your brand, consistently online, without you lifting a finger.";
const HERO_INTRO =
  "I'm Gideon, a creative virtual assistant, social media manager, and graphic designer for founders who'd rather build their business than babysit their inbox or their feed.";
const HERO_LEAD = estimateSectionLeadDuration(HERO_TITLE, [HERO_INTRO]);

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pt-10 pb-16 md:pt-16 md:pb-24">
      <RevealHero className="grid items-center gap-10 md:grid-cols-12">
        <RevealItem className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-paper-mint/70 px-3 py-1 text-xs font-medium text-ink">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for new clients · Remote worldwide
          </div>
          <HeadingWithIntro
            as="h1"
            trigger="mount"
            title={HERO_TITLE}
            highlights={["consistently online"]}
            intro={HERO_INTRO}
            titleClassName="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
            introClassName="mt-5 max-w-xl text-base text-ink-soft md:text-lg"
          />
          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : HERO_LEAD + 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact"><Button size="lg" className="rounded-full bg-ink text-primary-foreground hover:bg-ink/90">Work with me</Button></a>
            <a href="#work"><Button size="lg" variant="outline" className="rounded-full border-ink/20 bg-card">See recent work</Button></a>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-ink-soft"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : HERO_LEAD + 0.28, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Based in Nigeria · Working globally</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> Replies within 24h</span>
          </motion.div>
        </RevealItem>

        <RevealItem className="relative md:col-span-5" fadeOnly>
          <div className="relative mx-auto max-w-sm">
            <div className="paper-card paper-card-lg rotate-r overflow-hidden p-3">
              <span className="tape left-1/2 -top-3 -translate-x-1/2" />
              <img
                src={portrait}
                alt="Portrait of Gideon, freelance creative virtual assistant"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full rounded-lg object-cover"
              />
              <div className="mt-3 flex items-center justify-between px-1 pb-1 text-xs text-ink-soft">
                <span className="hand text-base text-ink">Hi, I'm Gideon</span>
                <span>est. 2021</span>
              </div>
            </div>
            <div className="paper-card absolute -bottom-6 -left-6 rotate-l-2 bg-paper-yellow px-4 py-3 text-sm">
              <div className="hand text-lg text-ink">+38 brands</div>
              <div className="text-xs text-ink-soft">supported since 2021</div>
            </div>
            <div className="paper-card absolute -right-4 top-10 rotate-r-2 bg-paper-pink px-3 py-2 text-xs float-slow" style={{ ['--r' as never]: '6deg' }}>
              <span className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> on-brand always</span>
            </div>
          </div>
        </RevealItem>
      </RevealHero>

      <RevealSection>
        <RevealItem>
          <Marquee />
        </RevealItem>
      </RevealSection>
    </section>
  );
}

function Marquee() {
  const items = ["Skincare brands", "Wellness coaches", "Restaurants", "SaaS founders", "Boutique studios", "E-commerce", "Authors"];
  return (
    <div className="mt-16 border-y border-ink/10 py-4 text-sm text-ink-soft">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        <span className="hand text-base text-ink">Trusted by:</span>
        {items.map((i) => <span key={i} className="opacity-80">{i}</span>)}
      </div>
    </div>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  {
    color: "bg-paper-pink",
    rotate: "rotate-l",
    icon: Megaphone,
    title: "Social Media Management",
    desc: "I run your feed so you can stop opening five apps a day to post, schedule, and reply.",
    deliverables: ["Monthly content calendar", "12 to 20 designed posts", "Captions and hashtags", "DM and comment care"],
    tools: ["Meta Business Suite", "Canva", "Notion", "CapCut"],
    benefit: "Show up daily without you touching Canva.",
  },
  {
    color: "bg-paper-blue",
    rotate: "rotate-r",
    icon: ClipboardList,
    title: "Virtual Assistance",
    desc: "The behind-the-scenes support that frees up 10+ hours a week, from inbox triage to client onboarding.",
    deliverables: ["Inbox and calendar management", "Client onboarding", "Research and data entry", "SOPs and file organization"],
    tools: ["Google Workspace", "Notion", "Trello", "Slack"],
    benefit: "Reclaim 10+ hours weekly so admin stops eating your day.",
  },
  {
    color: "bg-paper-yellow",
    rotate: "rotate-l",
    icon: Palette,
    title: "Graphic Design",
    desc: "Polished, on-brand visuals for everything your business needs to look good, online and in print.",
    deliverables: ["Social graphics and carousels", "Flyers and menus", "Brand kits and guidelines", "Pitch and presentation decks"],
    tools: ["Figma", "Canva", "Adobe Express"],
    benefit: "Look like the brand you're charging premium prices for.",
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection>
        <SectionHeading kicker="What I do" title="Three ways I help you grow" intro="Each engagement is tailored: pick one, mix and match, or hand me the whole creative ops stack." />
        <RevealStagger className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <RevealPaperCard key={s.title} className={`paper-card hover-lift relative p-6 ${s.color} ${s.rotate}`}>
            <div className="flex items-start justify-between">
              <div className="rounded-xl bg-white/70 p-2.5 text-ink"><s.icon className="h-5 w-5" /></div>
              <span className="text-xs text-ink-soft">0{services.indexOf(s) + 1}</span>
            </div>
            <h3 className="mt-5 text-2xl">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{s.desc}</p>

            <div className="mt-5">
              <div className="text-xs font-medium uppercase tracking-wide text-ink-soft">Deliverables</div>
              <ul className="mt-2 space-y-1.5 text-sm">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" /> {d}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {s.tools.map((t) => (
                <span key={t} className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs text-ink-soft">{t}</span>
              ))}
            </div>

            <div className="mt-6 border-t border-ink/10 pt-4 text-sm">
              <span className="hand text-lg text-ink">→ </span>{s.benefit}
            </div>
          </RevealPaperCard>
        ))}
        </RevealStagger>
      </RevealSection>
    </section>
  );
}

/* ---------- WORK ---------- */
const projects = [
  {
    img: caseSkincare, color: "bg-paper-pink", rotate: "rotate-l",
    tag: "Social Media Design",
    title: "Instagram content redesign for Lumière Skincare",
    problem: "Inconsistent feed and dropping reach during a product launch.",
    solution: "Rebuilt the visual system around editable Canva templates, dropped a 6-week content plan with reels, carousels, and stories.",
    tools: ["Canva", "CapCut", "Notion"],
    result: "+62% reach, +34% saves, fully booked launch waitlist.",
  },
  {
    img: caseRestaurant, color: "bg-paper-yellow", rotate: "rotate-r",
    tag: "Social Media Management",
    title: "Full-service social management for Casa Olivar",
    problem: "Owner had no time to plan posts or reply to DMs during dinner service.",
    solution: "Took over scheduling, weekly photo direction, story templates, and inbox triage with same-day responses.",
    tools: ["Meta Business Suite", "Canva", "Google Workspace"],
    result: "3x weekend reservations within 90 days.",
  },
  {
    img: caseCoach, color: "bg-paper-blue", rotate: "rotate-l",
    tag: "Canva Template System",
    title: "Template library for a life coach launch",
    problem: "Coach was reinventing every post from scratch.",
    solution: "Designed a 40-template Canva system with brand fonts, color presets, and easy carousel setup.",
    tools: ["Canva", "Figma"],
    result: "Cut content creation time from 6 hours to 45 minutes weekly.",
  },
  {
    img: caseBrand, color: "bg-paper-mint", rotate: "rotate-r",
    tag: "Brand Identity + VA Setup",
    title: "Brand identity and ops setup for a boutique studio",
    problem: "New studio needed a brand kit and an evolving backstage before opening.",
    solution: "Delivered logo system, color palette, social templates, and set up Notion CRM + client onboarding flow.",
    tools: ["Figma", "Notion", "Trello"],
    result: "Launched on schedule with 11 paying clients in month one.",
  },
];

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection>
        <SectionHeading kicker="Selected work" title="Real projects, real outcomes" intro="A glimpse into how I partner with founders. Every project starts with their problem and ends with measurable lift." />
        <RevealStagger className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <RevealPaperCard key={p.title} className={`paper-card hover-lift overflow-hidden p-5 ${p.color} ${i % 2 ? 'rotate-r' : 'rotate-l'}`}>
            <div className="relative overflow-hidden rounded-lg bg-white/40">
              <img src={p.img} alt={p.title} width={1024} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">{p.tag}</span>
            </div>
            <h3 className="mt-5 text-xl">{p.title}</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <CaseRow label="Problem" value={p.problem} />
              <CaseRow label="Solution" value={p.solution} />
              <CaseRow label="Tools" value={p.tools.join(" · ")} />
              <CaseRow label="Result" value={p.result} accent />
            </dl>
          </RevealPaperCard>
        ))}
        </RevealStagger>
      </RevealSection>
    </section>
  );
}

function CaseRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-3">
      <dt className="text-xs uppercase tracking-wide text-ink-soft">{label}</dt>
      <dd className={accent ? "font-medium text-ink" : "text-ink-soft"}>{value}</dd>
    </div>
  );
}

/* ---------- ABOUT ---------- */
const ABOUT_INTRO =
  "I help founders and growing brands stay consistent online through creative design, social media support, and organized virtual assistance.";

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection className="grid items-center gap-12 md:grid-cols-12">
        <RevealItem className="relative md:col-span-5" fadeOnly>
          <div className="paper-card paper-card-lg rotate-l overflow-hidden p-3">
            <span className="tape left-6 -top-3" />
            <img src={aboutImg} alt="Gideon working at his desk" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-lg object-cover" />
          </div>
          <div className="paper-card absolute -bottom-5 -right-3 rotate-r-2 bg-paper-blue px-4 py-3">
            <div className="hand text-lg">organized · creative · kind</div>
          </div>
        </RevealItem>
        <div className="md:col-span-7">
          <HeadingWithIntro
            as="h2"
            kicker="About"
            title="A reliable creative partner for busy founders."
            paragraphs={[
              ABOUT_INTRO,
              "For four years I've worked remotely with skincare brands, coaches, restaurants, and SaaS founders, quietly running the systems and visuals that make small teams look bigger and more put-together than they actually are.",
              "My favorite kind of work? The kind that gives a founder their Sunday evening back.",
            ]}
            titleClassName="mt-3 text-3xl md:text-5xl"
            paragraphWrapperClassName="mt-6 space-y-4"
            introClassName="text-base text-ink-soft md:text-lg"
          />
          <RevealStagger className="mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {[
              ["4+ yrs", "remote"],
              ["38+", "clients"],
              ["<24h", "reply time"],
              ["95%", "client retention"],
            ].map(([n, l]) => (
              <RevealPaperCard key={l} className="paper-card bg-paper-cream px-4 py-3">
                <div className="text-xl font-semibold text-ink">{n}</div>
                <div className="text-xs text-ink-soft">{l}</div>
              </RevealPaperCard>
            ))}
          </RevealStagger>
        </div>
      </RevealSection>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
const experience = [
  {
    when: "2024 to Present",
    role: "Lead Creative VA · Independent",
    body: "Retainer work for 6 recurring clients across wellness, hospitality, and SaaS, managing social, design, and operations.",
    color: "bg-paper-blue",
  },
  {
    when: "2023 to 2024",
    role: "Social Media Manager · Casa Olivar (Restaurant)",
    body: "Owned content planning, weekly photo direction, and inbox response. Grew weekend reservations by 3x in 90 days.",
    color: "bg-paper-yellow",
  },
  {
    when: "2022 to 2023",
    role: "Virtual Assistant · Various startup founders",
    body: "Built Notion systems, onboarded clients, managed inboxes, and ran CRM hygiene for a portfolio of early-stage founders.",
    color: "bg-paper-pink",
  },
  {
    when: "2021 to 2022",
    role: "Freelance Graphic Designer",
    body: "Started freelancing with brand kits, social graphics, and Canva template systems for small businesses.",
    color: "bg-paper-mint",
  },
];

function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection>
        <SectionHeading kicker="Experience" title="A short, useful timeline" intro="Four years of remote work with founders who needed both creativity and reliability, usually at the same time." />
        <RevealStaggerList className="mt-12 space-y-5">
        {experience.map((e, i) => (
          <RevealPaperCard key={e.role} as="li" className={`paper-card hover-lift grid gap-2 p-6 md:grid-cols-[180px_1fr] ${e.color} ${i % 2 ? 'rotate-r' : 'rotate-l'}`}>
            <div className="text-sm font-medium text-ink">{e.when}</div>
            <div>
              <h3 className="text-lg">{e.role}</h3>
              <p className="mt-1 text-sm text-ink-soft">{e.body}</p>
            </div>
          </RevealPaperCard>
        ))}
        </RevealStaggerList>
      </RevealSection>
    </section>
  );
}

/* ---------- TOOLS ---------- */
const tools = [
  "Canva", "Figma", "Adobe Express", "Notion", "Trello",
  "Meta Business Suite", "CapCut", "Google Workspace", "Slack", "ChatGPT",
  "Buffer", "Later",
];
function Tools() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection>
        <SectionHeading kicker="Stack" title="Tools I work in every day" intro="If you already use these, we'll move fast. If you don't, I'll set them up properly." />
        <RevealStaggerUl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {tools.map((t, i) => (
          <RevealPaperCard key={t} as="li" className={`paper-card hover-lift flex items-center gap-3 px-4 py-3 text-sm ${i % 4 === 0 ? 'bg-paper-pink' : i % 4 === 1 ? 'bg-paper-yellow' : i % 4 === 2 ? 'bg-paper-blue' : 'bg-paper-mint'}`}>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/80 text-ink">
              <Layers className="h-4 w-4" />
            </span>
            <span className="font-medium text-ink">{t}</span>
          </RevealPaperCard>
        ))}
        </RevealStaggerUl>
      </RevealSection>
    </section>
  );
}

/* ---------- WHY ME ---------- */
const reasons = [
  { icon: Zap, title: "Fast, clear communication", body: "You'll never wonder where things stand. Same-day replies, weekly updates by default." },
  { icon: ShieldCheck, title: "Reliable delivery", body: "If I commit to a date, it lands on that date, usually a day early." },
  { icon: PenLine, title: "Attention to detail", body: "Brand kits get followed. Typos get caught. Spreadsheets actually balance." },
  { icon: Sparkles, title: "Proactive thinking", body: "I'll flag what's coming, suggest what to test, and quietly fix what's broken." },
  { icon: Users, title: "Built for remote teams", body: "Async-friendly, time-zone aware, and comfortable in Slack, Notion, and Loom." },
  { icon: Heart, title: "Warm, founder-friendly", body: "I treat your business like it's mine, without ever forgetting it's yours." },
];
function WhyMe() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection>
        <SectionHeading kicker="Why work with me" title="The kind of teammate I am" intro="A creative who also loves a tidy folder." />
        <RevealStaggerUl className="mt-12 grid gap-5 md:grid-cols-3">
        {reasons.map((r) => (
          <RevealPaperCard key={r.title} as="li" className="paper-card hover-lift p-6">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-paper-yellow text-ink"><r.icon className="h-5 w-5" /></div>
            <h3 className="mt-4 text-lg">{r.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{r.body}</p>
          </RevealPaperCard>
        ))}
        </RevealStaggerUl>
      </RevealSection>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { name: "Sofia Andrade", role: "Founder, Lumière Skincare", color: "bg-paper-pink", rotate: "rotate-l",
    quote: "Gideon rebuilt our entire content system in two weeks. Our launch sold out and our DMs finally got answered the same day." },
  { name: "Daniel Cruz", role: "Owner, Casa Olivar", color: "bg-paper-yellow", rotate: "rotate-r",
    quote: "I stopped touching our Instagram and our reservations went up. That's about the highest praise I can give." },
  { name: "Priya Menon", role: "Life coach", color: "bg-paper-blue", rotate: "rotate-l",
    quote: "The Canva templates she made are the reason I post consistently now. Easily the best investment of my year." },
  { name: "Marco Tan", role: "Co-founder, SaaS startup", color: "bg-paper-mint", rotate: "rotate-r",
    quote: "She's organized, kind, and weirdly good at anticipating what we need before we ask. Genuinely an extension of our team." },
];
function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection>
        <SectionHeading kicker="Kind words" title="What clients say" intro="A few notes from founders I've worked with recently." />
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <RevealPaperCard key={t.name} as="figure" className={`paper-card hover-lift p-6 ${t.color} ${t.rotate}`}>
            <blockquote className="text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/80 font-semibold text-ink">{t.name[0]}</span>
              <span>
                <span className="block text-sm font-medium text-ink">{t.name}</span>
                <span className="block text-xs text-ink-soft">{t.role}</span>
              </span>
            </figcaption>
          </RevealPaperCard>
        ))}
        </RevealStagger>
      </RevealSection>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "What services do you offer?", a: "Three core services: social media management, virtual assistance, and graphic design. I work with clients on a monthly retainer, but project-based work is available too." },
  { q: "Do you work remotely?", a: "Yes, fully remote and async-friendly. I'm based in Nigeria, currently overlap comfortably with US, UK, and Australian hours, and reply within 24 hours." },
  { q: "What tools do you use?", a: "Canva, Figma, Adobe Express, Notion, Trello, Meta Business Suite, CapCut, Google Workspace, Slack, ChatGPT, Buffer, Later. If you use something else, I'll pick it up." },
  { q: "How do we start working together?", a: "A short call to talk through what you need, then I'll send a simple proposal with scope and timeline. No surprises, no hidden fees." },
  { q: "What industries do you work with?", a: "Mostly skincare and beauty, wellness and coaching, restaurants and hospitality, SaaS, and boutique studios, but the systems transfer well to most small service businesses." },
  { q: "What are your pricing options?", a: "Monthly retainers start at $750 for social-only and $1,400/mo for full creative ops (social + virtual assistance + design). One-off projects are quoted per scope." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <RevealSection>
        <SectionHeading kicker="FAQ" title="Good questions, honest answers" />
        <RevealStaggerUl className="mt-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <RevealPaperCard key={f.q} as="li" className="paper-card overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-ink md:text-lg">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper-yellow text-ink">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && <div className="px-5 pb-5 text-sm text-ink-soft md:text-base">{f.a}</div>}
            </RevealPaperCard>
          );
        })}
        </RevealStaggerUl>
      </RevealSection>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactActions() {
  const reduce = useReducedMotion();
  const section = useSectionAnim();
  const delay = (section?.leadDuration ?? 0) + 0.12;

  return (
    <motion.div
      className="mt-7 flex flex-wrap gap-3"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={section?.active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ delay: reduce ? 0 : delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="mailto:hello@gideon.co"><Button size="lg" className="rounded-full bg-ink text-primary-foreground hover:bg-ink/90"><Mail className="mr-1" /> hello@gideon.co</Button></a>
      <a href="#"><Button size="lg" variant="outline" className="rounded-full border-ink/20 bg-card"><Calendar className="mr-1" /> Book a call</Button></a>
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <RevealSection>
        <RevealItem fadeOnly className="paper-card paper-card-lg relative overflow-hidden bg-paper-cream p-8 md:p-14">
        <span className="tape -top-3 left-12" />
        <span className="tape -top-3 right-12 bg-paper-pink-deep" />
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <HeadingWithIntro
              as="h2"
              kicker="Let's work together"
              title="Let's help your brand stay organized, creative, and consistent."
              highlights={["organized, creative, and consistent."]}
              intro="Tell me a little about your business and what you need help with. I'll reply within 24 hours with next steps."
              titleClassName="mt-3 text-3xl md:text-5xl"
              introClassName="mt-5 max-w-xl text-base text-ink-soft md:text-lg"
            />
            <ContactActions />
          </div>
          <RevealStaggerUl className="grid gap-3 md:col-span-5">
            {[
              { icon: Mail, label: "Email", value: "hello@gideon.co" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/gideon" },
              { icon: Instagram, label: "Instagram", value: "@gideoncreates" },
            ].map((c) => (
              <RevealPaperCard key={c.label} as="li" className="paper-card flex items-center justify-between gap-4 bg-white px-4 py-3">
                <span className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-paper-blue text-ink"><c.icon className="h-4 w-4" /></span>
                  <span>
                    <span className="block text-xs text-ink-soft">{c.label}</span>
                    <span className="block text-sm font-medium text-ink">{c.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-soft" />
              </RevealPaperCard>
            ))}
          </RevealStaggerUl>
        </div>
        </RevealItem>
      </RevealSection>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10">
      <RevealSection>
      <RevealItem className="flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-sm text-ink-soft md:flex-row">
        <span>© {new Date().getFullYear()} Gideon · Creative VA & Social Media Designer</span>
        <span className="hand text-base text-ink">made with care, one paper card at a time</span>
      </RevealItem>
      </RevealSection>
    </footer>
  );
}

