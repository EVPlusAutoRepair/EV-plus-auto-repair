export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "myth"; label: string; text: string };

import { shop2 } from "../img/shop-2";
import { shop3 } from "../img/shop-3";
import { shop4 } from "../img/shop-4";
import { shopSign, usbDrive } from "../img/shop-sign";
import { whySign } from "../img/why-sign";
import { rentalsTeslas } from "../img/rentals";

export interface Post {
  slug: string;
  title: string;
  h1: string;
  description: string;
  tag: string;
  date: string;
  /** ISO date (YYYY-MM-DD) when the post becomes visible. Absent = always visible. */
  publishDate?: string;
  excerpt: string;
  videoUrl?: string;
  /** Data-URI or path for the post hero image. */
  image?: string;
  /** Descriptive alt text for the hero image (SEO). */
  imageAlt?: string;
  body: Block[];
  faqs: { q: string; a: string }[];
  serviceLink: { href: string; label: string };
}

export const POSTS: Post[] = [
  {
    slug: "tesla-hv-battery-replacement-what-it-looks-like",
    title: "What Does a Tesla Battery Replacement Look Like? | EV+ Auto Repair",
    h1: "When You Charge Your Tesla, This Is the Battery You're Charging",
    description:
      "See a Tesla Model Y with its high-voltage battery removed—and what a replacement actually involves at EV+ Auto Repair in Sun Valley, Los Angeles.",
    tag: "Battery",
    date: "April 2, 2026",
    excerpt:
      "Most Tesla owners never see their high-voltage battery—it spans nearly the entire floor of the car. We pulled one from a Model Y, and here's what a replacement actually involves.",
    videoUrl: "https://www.instagram.com/reel/DWqJHtADUF_/",
    body: [
      {
        type: "p",
        text: "When you plug in your Tesla, you're charging a battery pack roughly the size of the entire car. Most owners never see it—it sits flat under the floor, spanning nearly the full footprint of the vehicle. It gives the car its range and runs everything electrical.",
      },
      {
        type: "p",
        text: "This Model Y came into our shop because its high-voltage battery wasn't charging. With the pack removed, the whole underside of the car is empty—that open bay is where the battery lives. In this case, we replaced it with a used pack with verified mileage and health history.",
      },
      {
        type: "p",
        text: "A high-voltage battery replacement is one of the biggest jobs a Tesla can need, and it's one of the most misunderstood. Owners hear \"battery replacement\" and assume the car is totaled or the bill is catastrophic. The reality: a good used pack with verified health can be a smart, cost-effective fix—and a shop that does these regularly can turn it around far faster than most people expect.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "A dead high-voltage battery does not mean the end of your Tesla. Battery swaps are a routine, well-understood procedure at a Tesla-specialized shop.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my Tesla's high-voltage battery is failing?",
        a: "Warning signs include failure to charge, sudden range drops, and battery-related error messages. A diagnostic scan confirms it—we offer free inspections.",
      },
      {
        q: "Is a used battery pack a safe replacement?",
        a: "A used pack with verified mileage and health history is a proven, cost-effective option. We source packs we can stand behind.",
      },
      {
        q: "How long does a Tesla battery replacement take?",
        a: "It depends on the model and parts availability, but a specialized shop works far faster than a general repair shop figuring it out for the first time.",
      },
    ],
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery replacement" },
  },
  {
    slug: "does-your-tesla-need-an-oil-change",
    title: "Does Your Tesla Need an Oil Change? Yes—Sort Of | EV+ Auto Repair",
    h1: "Did You Know Your Tesla Needs an Oil Change?",
    description:
      "Teslas don't need engine oil—but the drive unit gearbox fluid is a real service. Here's what Tesla won't tell you. EV+ Auto Repair, Sun Valley.",
    tag: "Maintenance",
    date: "June 11, 2026",
    excerpt:
      "No engine means no engine oil—but your Tesla's drive unit runs in oil just like a transmission does. Here's the fluid service Tesla doesn't put on a schedule.",
    videoUrl: "https://www.instagram.com/reel/DZcBMaKtCmn/",
    body: [
      {
        type: "p",
        text: "\"No maintenance\" is the biggest myth in Tesla ownership. Teslas don't need engine oil changes—there's no engine. But they absolutely have fluids that wear out, and the most overlooked one is the drive unit gearbox fluid.",
      },
      {
        type: "p",
        text: "Your Tesla's drive unit (the motor + gearbox assembly) runs in oil, just like a transmission does. Over tens of thousands of miles, that fluid collects metal particles and breaks down. Tesla calls it a \"lifetime fluid\"—but whose lifetime? We've drained fluid at high mileage that came out black and contaminated. No fluid survives forever in a mechanical gearbox.",
      },
      {
        type: "p",
        text: "At EV+ Auto Repair, drive-unit oil service is one of our signature jobs: drain the old fluid, replace it with the correct Tesla-spec fluid, and replace the drive-unit oil filter where applicable. It's inexpensive preventive maintenance that protects one of the most expensive components in the car.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "\"Teslas need no maintenance.\" They need different maintenance—and ignoring the gearbox fluid is how a cheap service becomes an expensive repair.",
      },
    ],
    faqs: [
      {
        q: "How often should Tesla drive unit oil be serviced?",
        a: "It depends on model, mileage, and driving conditions. Bring it in and we'll check the fluid condition—inspections are free.",
      },
      {
        q: "Does servicing the drive unit void my Tesla warranty?",
        a: "Under federal warranty law, proper maintenance with correct-spec parts and fluids can't by itself void your warranty. Ask us about your specific model and warranty status.",
      },
      {
        q: "What are signs my Tesla's gearbox fluid needs attention?",
        a: "Unusual whining or grinding from the drive unit, and high mileage without a prior service, are the main indicators.",
      },
    ],
    serviceLink: { href: "/service/drive-unit-oil-service", label: "Drive-unit oil service" },
  },
  {
    slug: "tesla-drive-unit-fluid-lifetime-myth",
    title: 'Is Tesla Drive Unit Fluid Really "Lifetime"? | EV+ Auto Repair',
    h1: 'Tesla Says the Drive Unit Gearbox Fluid Is a "Lifetime Fluid"—But Is It Really?',
    description:
      'Tesla calls drive unit gearbox fluid a "lifetime fluid." We show you what it actually looks like at high mileage—you decide. Sun Valley, Los Angeles.',
    tag: "Maintenance",
    date: "June 11, 2026",
    excerpt:
      "Tesla's official line: the drive unit fluid never needs changing. Our experience in the shop tells a different story—here's the honest nuance.",
    videoUrl: "https://www.instagram.com/reel/DZdboHvyaxH/",
    body: [
      {
        type: "p",
        text: "\"Lifetime fluid\" is one of the most debated phrases in Tesla ownership. Tesla's official line: the drive unit gearbox fluid never needs changing. Our experience in the shop tells a different story.",
      },
      {
        type: "p",
        text: "We've drained drive-unit fluid from high-mileage Teslas and seen what comes out: dark, contaminated oil carrying fine metal particles from normal gear wear. That's what \"lifetime\" looks like inside a mechanical gearbox—fluid doing its job until it can't anymore.",
      },
      {
        type: "p",
        text: "Here's the honest nuance: we're not telling every owner to service their drive unit on a fixed schedule regardless of circumstances. Every Tesla, drive unit, mileage range, and service history is different. What we are saying is that \"lifetime\" deserves a question mark, and the fluid's actual condition—which we can check—should drive the decision, not a marketing phrase.",
      },
      {
        type: "p",
        text: "If your Tesla is out of its drive-unit warranty period or approaching high mileage, a fluid inspection is cheap insurance for an expensive component.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "That \"lifetime fluid\" means \"never think about it.\" It means \"we didn't set an interval\"—not \"it's immortal.\"",
      },
    ],
    faqs: [
      {
        q: "What does old Tesla drive unit fluid look like?",
        a: "Dark and contaminated, often with visible metal particles—dramatically different from fresh fluid. We documented the comparison in our lab-testing series.",
      },
      {
        q: "Should I service my drive unit before the warranty ends?",
        a: "We're not recommending a one-size-fits-all answer. It depends on your model, mileage, and service history—get the fluid checked and decide on evidence.",
      },
      {
        q: "Which fluid does my Tesla need?",
        a: "Tesla specifies different approved gearbox fluids depending on drive unit and model year. Using the correct spec matters—we use Tesla-appropriate fluids and filters.",
      },
    ],
    serviceLink: { href: "/service/drive-unit-oil-service", label: "Drive-unit oil service" },
  },
  {
    slug: "tesla-drive-unit-oil-100k-miles",
    title: "What's Inside Tesla Drive Unit Oil at 100K Miles? | EV+ Auto Repair",
    h1: "What Is Actually Inside Your Tesla's Drive Unit Oil After 100,000 Miles?",
    description:
      "We drained Tesla drive unit oil at 100,000 miles and sent it to a lab. Here's what was actually in it—and what it means for your Tesla.",
    tag: "Maintenance",
    date: "August 25, 2026",
    excerpt:
      "Instead of arguing about \"lifetime fluid\" in theory, we got evidence: we drained the drive-unit oil at 100,000 miles and sent it to a lab.",
    videoUrl: "https://www.instagram.com/reel/DcfY3G-Nf7N/",
    body: [
      {
        type: "p",
        text: "Instead of arguing about \"lifetime fluid\" in theory, we decided to get evidence. We drained the drive-unit gearbox oil from a Tesla with 100,000 miles on it and sent a sample to a lab for analysis.",
      },
      {
        type: "p",
        text: "What came out of that drive unit didn't look like oil anymore. It was dark, thick with contamination, and carrying the metal wear particles you'd expect from 100,000 miles of gears meshing under load. Fresh Tesla drive-unit fluid, by comparison, is clean and translucent—we filmed the side-by-side so you can see the difference yourself.",
      },
      {
        type: "p",
        text: "The lab analysis confirmed the story: elevated wear metals and degraded fluid condition consistent with extended use without service. This is what \"lifetime\" means in practice. The fluid did its job for 100,000 miles, and by the end it was spent. No fluid—synthetic or otherwise—survives that duty cycle unchanged.",
      },
      {
        type: "p",
        text: "This is why we offer drive-unit oil service with the correct Tesla-spec fluid and filter: it's a straightforward maintenance job that protects the drive unit, one of the priciest components in the car, for a fraction of replacement cost.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "That fluid condition is a matter of opinion. It's a matter of chemistry—and we have the lab report.",
      },
    ],
    faqs: [
      {
        q: "What did the lab find in the 100,000-mile fluid?",
        a: "The analysis showed elevated wear metals and degraded fluid condition consistent with extended use without service—exactly what you'd expect from 100,000 miles of gear wear with no change interval.",
      },
      {
        q: "How does new Tesla drive unit fluid compare?",
        a: "Dramatically cleaner—fresh fluid is translucent versus the dark, particle-laden used sample. We show both in the video.",
      },
      {
        q: "At what mileage should I have my drive unit oil checked?",
        a: "There's no official Tesla interval, which is exactly the problem. If you're approaching high mileage, get it inspected—it's free at our shop.",
      },
    ],
    serviceLink: { href: "/service/drive-unit-oil-service", label: "Drive-unit oil service" },
  },
  {
    slug: "tesla-model-3-vibration-fix",
    title: 'Tesla Model 3 "Kick" or Vibration? That\'s Not Normal | EV+ Auto Repair',
    h1: 'Feeling a "Kick" or Vibration in Your Tesla Model 3? That\'s NOT Normal',
    description:
      "Feeling a kick or vibration in your Tesla Model 3? It's not normal—here's what causes it and how we diagnose it in Sun Valley, Los Angeles.",
    tag: "Suspension",
    date: "April 21, 2026",
    excerpt:
      "A lot of Model 3 owners feel a \"kick\" or shudder and assume it's just how the car drives. It isn't—a healthy Model 3 drives smooth, and vibration is information.",
    videoUrl: "https://www.instagram.com/reel/DXYnU2EDWLh/",
    body: [
      {
        type: "p",
        text: "A lot of Model 3 owners feel an occasional \"kick,\" shudder, or vibration—especially under acceleration or at certain speeds—and assume it's just how the car drives. It isn't. A healthy Model 3 drives smooth; a kick or vibration is a symptom, and symptoms have causes.",
      },
      {
        type: "p",
        text: "Common culprits we've seen in the shop: suspension component wear (control arm bushings are a known Model 3 wear item), wheel/tire issues including balance and alignment, and in some cases drive-unit concerns. The tricky part is that a vibration felt in the seat can originate from the front suspension, the rear, or the wheels—proper diagnosis means getting the car on a lift and checking systematically, not guessing.",
      },
      {
        type: "p",
        text: "This is exactly the kind of issue our free inspection is for. If your Model 3 kicks, shudders, or vibrates, don't normalize it—get it checked before a worn bushing becomes a worn tire, or a small issue becomes a suspension rebuild.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "\"It's just how Teslas drive.\" No—smooth is normal. Vibration is information.",
      },
    ],
    faqs: [
      {
        q: "What causes a kicking sensation in a Tesla Model 3?",
        a: "Most often suspension wear (control arm bushings), wheel balance/alignment issues, or tire problems. A lift inspection pinpoints it.",
      },
      {
        q: "Is it safe to keep driving with the vibration?",
        a: "It depends on the cause, but vibrations accelerate wear on tires and suspension parts. Get it diagnosed sooner rather than later.",
      },
      {
        q: "How much does it cost to diagnose?",
        a: "Our inspection is free—we'll identify the cause and give you a straight answer before any work begins.",
      },
    ],
    serviceLink: { href: "/service/suspension-steering", label: "Suspension & steering" },
  },
  {
    slug: "tesla-battery-replacement-cost",
    title: "How Much Does a Tesla Battery Replacement Cost? | EV+ Auto Repair",
    h1: "The Cost of a Tesla Battery Replacement Depends on the Year, Model, and…",
    description:
      "Tesla battery replacement cost depends on year, model, and pack—plus new vs. used options. Honest breakdown from EV+ Auto Repair, Sun Valley.",
    tag: "Battery",
    date: "April 8, 2026",
    excerpt:
      "\"What does a Tesla battery replacement cost?\" is the question every EV owner dreads—and the honest answer is: it depends. Here's what actually moves the number.",
    videoUrl: "https://www.instagram.com/reel/DW5PNHaDTP1/",
    body: [
      {
        type: "p",
        text: "\"What does a Tesla battery replacement cost?\" is the question every EV owner dreads asking—and the honest answer is: it depends. Year, model, battery pack size, and whether you go new, remanufactured, or used all move the number significantly.",
      },
      { type: "h2", text: "What actually drives the cost" },
      {
        type: "p",
        text: "Model and pack: a Model S/X pack is a different job (and price) than a Model 3/Y pack. Larger, older packs cost more. New vs. used: a brand-new pack from Tesla is the most expensive route. A quality used pack with verified mileage and health can cut the cost dramatically while delivering years of service. Labor and expertise: a shop that does battery swaps regularly does them faster and with fewer surprises than a shop figuring it out for the first time. Specialization saves you money twice—on the bill and on downtime.",
      },
      {
        type: "p",
        text: "Anyone quoting you a single flat number without knowing your model, year, and pack is guessing. The right move is a diagnostic and a straight conversation about your options—new, used, and what each means for your car's future.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "That battery replacement has one scary price. It has a range—and the smart options are more affordable than most owners fear.",
      },
    ],
    faqs: [
      {
        q: "What's the cheapest safe way to replace a Tesla battery?",
        a: "A verified used pack with documented mileage and health history, installed by a Tesla-specialized shop. Ask us about current availability.",
      },
      {
        q: "Does a used battery come with any warranty?",
        a: "Ask about the specific pack—terms vary. We'll give you the straight terms before you commit.",
      },
      {
        q: "Will a replacement battery last?",
        a: "A healthy pack—new or quality used—delivers years of service. Battery health, not just age, is what matters, and we verify it.",
      },
    ],
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery replacement" },
  },
  {
    slug: "do-teslas-need-maintenance",
    title: "Do Teslas Need Maintenance? Yes—Just Different | EV+ Auto Repair",
    h1: "Do Teslas Need Maintenance? Yes—Just Not the Same Maintenance as a Gas Car",
    description:
      "Teslas skip oil changes but still need maintenance: radiator cleaning, cabin filters, 12V battery, suspension, drive unit service. Full list here.",
    tag: "Maintenance",
    date: "October 2, 2026",
    excerpt:
      "\"No maintenance\" is Tesla's most successful marketing line—and its most misunderstood. Here's the real maintenance list your Tesla actually needs.",
    videoUrl: "https://www.instagram.com/reel/DeBDJDJtFmV/",
    body: [
      {
        type: "p",
        text: "\"No maintenance\" is Tesla's most successful marketing line—and its most misunderstood. Teslas don't need oil changes, spark plugs, or transmission services. But they have their own maintenance list, and ignoring it is expensive.",
      },
      { type: "h2", text: "What a Tesla actually needs" },
      {
        type: "p",
        text: "Radiator and cooling system cleaning: leaves and debris clog the front radiator intake, hurting cooling efficiency—more often than you'd think. Cabin air filters: same as any car; neglected filters mean weak airflow and smells. 12V battery: yes, Teslas have one, and when it dies the car can lock you out or throw confusing errors. Suspension: control arms, bushings, and alignment wear like any car; Teslas are heavy, which accelerates it. Drive unit gearbox fluid service: the \"lifetime fluid\" that isn't. Tire rotation: instant torque eats tires; rotation intervals matter more on a Tesla, not less.",
      },
      {
        type: "p",
        text: "None of this requires a dealership. It requires a shop that knows Teslas specifically—which fluids, which filters, which wear patterns, and what \"normal\" actually looks like on each model.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "\"Maintenance-free.\" The truth: different maintenance, on a different schedule, with Tesla-specific knowledge.",
      },
    ],
    faqs: [
      {
        q: "What maintenance does a Tesla need yearly?",
        a: "Cabin filters, a cooling-system check/cleaning, tire rotation, and a general inspection (suspension, 12V health, brakes). We bundle this into our maintenance inspections.",
      },
      {
        q: "Can any mechanic service a Tesla?",
        a: "Basic items, maybe—but Tesla-specific systems (drive unit, HV battery, software-linked components) need a Tesla-specialized shop. Wrong fluids or procedures cause real damage.",
      },
      {
        q: "How do I know what my Tesla is due for?",
        a: "Mileage, age, and model. Call or text us with your model and mileage and we'll tell you straight—inspections are free.",
      },
    ],
    serviceLink: { href: "/service", label: "Tesla Service Center" },
  },
  {
    slug: "tesla-front-suspension-creaking",
    title: "Creaking Front Suspension on Your Tesla? | EV+ Auto Repair",
    h1: "Do You Hear Creaking From the Front Suspension of Your Tesla?",
    description:
      "Creaking from the front suspension of your Tesla? Usually control arms or bushings. Here's how we diagnose it—free inspection, Sun Valley.",
    tag: "Suspension",
    date: "May 29, 2026",
    excerpt:
      "That creak from the front end when you turn or hit a bump is one of the most common Tesla complaints we see. It's usually wear talking—here's how we diagnose it.",
    videoUrl: "https://www.instagram.com/reel/DY81pygtUH8/",
    body: [
      {
        type: "p",
        text: "That creak or groan from the front end when you turn, go over a bump, or pull out of the driveway—Tesla owners hear it a lot, and it's one of the most common complaints we see in the shop.",
      },
      {
        type: "p",
        text: "The usual suspects: front upper control arms and their bushings. Teslas are heavy cars with instant torque, and the front suspension takes the punishment. Worn bushings creak before they fail—the noise is your early warning system. Left alone, it progresses to clunking, uneven tire wear, and alignment that won't hold.",
      },
      {
        type: "p",
        text: "Diagnosis is straightforward on a lift: we check the control arms, bushings, ball joints, and related components, and show you exactly what's worn. In many cases the fix is replacing the worn arms—a routine job at a Tesla shop, and far cheaper than the tires you'll burn through ignoring it.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "\"Creaks are just normal Tesla noises.\" Some Teslas are chatty, but front-end creaking is wear talking—listen to it early and it's a small job.",
      },
    ],
    faqs: [
      {
        q: "Do you replace the whole control arm or just the bushing?",
        a: "The whole arm—that's the proper repair, and we'll show you the worn part so you can see why.",
      },
      {
        q: "How urgent is a creaking suspension?",
        a: "It's a \"soon, not someday\" issue. It won't strand you tomorrow, but it chews through tires and gets more expensive the longer it waits.",
      },
      {
        q: "Does the fix require an alignment?",
        a: "Yes—any front suspension work should be followed by an alignment, which we handle in-house.",
      },
    ],
    serviceLink: { href: "/service/suspension-steering", label: "Suspension & steering" },
  },
  {
    slug: "tesla-battery-health-charging-tips",
    title: "Tesla Battery Health: Charging Tips That Work | EV+ Auto Repair",
    h1: "Minimize Supercharging—and Don't Charge Past 80%",
    description:
      "Extend your Tesla battery's life: minimize supercharging, don't charge past 80% daily. Simple habits from EV+ Auto Repair, Sun Valley.",
    tag: "Battery",
    date: "April 14, 2026",
    excerpt:
      "Your Tesla's battery is its most expensive component, and two daily habits matter more than everything else for keeping it healthy. Here's what battery engineers point to first.",
    videoUrl: "https://www.instagram.com/reel/DXIFdwZEts0/",
    body: [
      {
        type: "p",
        text: "Your Tesla's high-voltage battery is its most expensive component, and how you charge it every day determines how long it stays healthy. Two habits matter more than everything else.",
      },
      { type: "h2", text: "1. Minimize supercharging" },
      {
        type: "p",
        text: "DC fast charging is hard on battery chemistry—it's heat and high current, both of which accelerate degradation. Superchargers are for road trips, not daily routines. For everyday charging, slower Level 2 charging at home or work is far gentler on the pack.",
      },
      { type: "h2", text: "2. Don't charge past 80% for daily use" },
      {
        type: "p",
        text: "Lithium batteries degrade fastest at the top of their charge range. Charging to 100% regularly keeps the pack sitting at high voltage, which ages the cells. Set your daily limit to 80% (or lower if your commute allows) and only charge to 100% right before a long trip.",
      },
      {
        type: "p",
        text: "These aren't exotic tips—they're the two behaviors battery engineers point to first. Owners who follow them see measurably slower degradation over years of ownership. Owners who supercharge daily to 100% learn the expensive lesson.",
      },
      {
        type: "p",
        text: "One note: LFP (lithium iron phosphate) packs have different guidance—Tesla recommends charging those to 100% periodically. Know your pack type, and when in doubt, ask us.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "\"Just plug it in and don't think about it.\" Five seconds of charge-limit settings is the highest-ROI maintenance you can do.",
      },
    ],
    faqs: [
      {
        q: "Is it bad to supercharge my Tesla?",
        a: "Occasional supercharging is fine—it's what the network is for. Daily supercharging as your primary charging accelerates battery degradation.",
      },
      {
        q: "Why 80% and not 100%?",
        a: "Battery chemistry degrades fastest at high states of charge. 80% is the sweet spot for daily driving; save 100% for road-trip mornings.",
      },
      {
        q: "Does this apply to all Tesla battery types?",
        a: "LFP (lithium iron phosphate) packs have different guidance—Tesla recommends charging those to 100% periodically. Know your pack type.",
      },
    ],
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery replacement" },
  },
  {
    slug: "tesla-model-y-battery-warranty",
    title: "Tesla Model Y Battery Warranty Explained | EV+ Auto Repair",
    h1: "Your Tesla Model Y Comes With 8-Year / 120,000-Mile Battery Warranty Coverage",
    description:
      "Tesla Model Y battery warranty: 8 years or 120,000 miles. What's covered, what's not, and when you're on your own—Sun Valley, Los Angeles.",
    tag: "Battery",
    date: "April 6, 2026",
    excerpt:
      "The Model Y's battery warranty is one of the strongest in the industry—and a lot of owners don't know exactly what it covers, or when the clock runs out.",
    videoUrl: "https://www.instagram.com/reel/DW0fDtKDYe4/",
    body: [
      {
        type: "p",
        text: "The Tesla Model Y's high-voltage battery and drive unit are covered for 8 years or 120,000 miles, whichever comes first. That's one of the strongest EV warranties in the industry—and a lot of owners don't know exactly what it covers.",
      },
      { type: "h2", text: "What's covered" },
      {
        type: "p",
        text: "Defects in the battery pack and drive unit, and excessive degradation—Tesla guarantees a minimum capacity retention over the warranty period. If your pack degrades beyond the threshold or fails due to a defect, it's Tesla's bill.",
      },
      { type: "h2", text: "What's not covered" },
      {
        type: "p",
        text: "Damage from accidents, flooding, unauthorized modifications, or using the car outside its intended operation. And critically—the warranty has an expiration date. Once you're past 8 years or 120,000 miles, battery work is on you, which is exactly when maintenance habits (charging practices, drive-unit service) start paying off.",
      },
      { type: "h2", text: "The part owners miss" },
      {
        type: "p",
        text: "Warranty coverage doesn't mean \"don't think about the battery.\" The habits that keep a pack healthy during the warranty period are the same habits that keep it alive after—and a well-maintained pack at 119,000 miles is worth far more than a neglected one.",
      },
      {
        type: "p",
        text: "If you're approaching the end of your warranty, get the battery health checked before it expires. That's a free inspection at our shop, and it can be the difference between Tesla's bill and yours.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "\"The warranty means the battery is Tesla's problem.\" It's shared responsibility—and the clock is ticking whether you watch it or not.",
      },
    ],
    faqs: [
      {
        q: "What is Tesla's Model Y battery warranty?",
        a: "8 years or 120,000 miles (whichever comes first) on the high-voltage battery and drive unit, covering defects and excessive degradation.",
      },
      {
        q: "Does the warranty cover normal battery degradation?",
        a: "Only degradation beyond Tesla's minimum retention threshold. Normal gradual capacity loss is expected and not covered.",
      },
      {
        q: "What should I do before my battery warranty expires?",
        a: "Get a battery health diagnostic. If there's a covered issue, you want it found while Tesla is still paying. Our inspections are free.",
      },
    ],
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery replacement" },
  },
  {
    slug: "tesla-cabin-filter-replacement-why-it-matters",
    title: "Tesla Cabin Filter Replacement: Why It Matters | EV+ Auto Repair",
    h1: "Your Tesla's Cabin Filter Matters More Than You Think",
    description:
      "Musty AC smell? Weak airflow? Your Tesla's cabin filter is overdue. Here's why it matters, how often to replace it, and what the service involves.",
    tag: "Maintenance",
    date: "October 16, 2026",
    publishDate: "2026-10-16",
    image: shop3,
    imageAlt: "Tesla cabin filter replacement at EV+ Auto Repair in Sun Valley",
    excerpt:
      "That musty smell when the AC kicks on is your cabin filter begging for retirement. Here's what it does, when to replace it, and what the service looks like at our Sun Valley shop.",
    videoUrl: "https://www.instagram.com/reel/DWYKoe_jbqu/",
    body: [
      {
        type: "p",
        text: "You know that sour, locker-room smell when the AC kicks on? We hear about it every week. Nine times out of ten, it's a cabin filter that's been in there way too long. Your Tesla's cabin filter is the only thing standing between you and everything floating around outside — Valley dust, freeway exhaust, wildfire smoke, pollen. When it's clogged, you breathe all of it.",
      },
      { type: "h2", text: "What the cabin filter actually does" },
      {
        type: "p",
        text: "The cabin filter scrubs the air coming through your HVAC system before it reaches your face. A fresh filter means cleaner air, stronger airflow, and an AC that doesn't have to fight to push air through a wall of dust. A clogged one means weak airflow, stale smells, and a blower motor working overtime.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "Some owners assume cabin air quality doesn't matter because the car 'filters everything.' It doesn't — the cabin filter is the filter, and once it's saturated, everything it was catching goes straight into your lungs.",
      },
      { type: "h2", text: "How often should you replace it?" },
      {
        type: "p",
        text: "Tesla recommends replacing the cabin filter every 2 years. In the San Fernando Valley, we'd nudge you toward the sooner end of that — dust season and wildfire smoke load these filters up fast. If your allergies flare up every time you drive, that's your filter talking.",
      },
      { type: "h2", text: "What the service involves" },
      {
        type: "p",
        text: "On Model 3 and Model Y, the filters sit behind a cover in the passenger footwell. We pull the cover, slide out the old filters, and install fresh ones — no drama, no upsell. While we're in there, we check the blower and the evaporator area for anything that needs attention. If your Tesla's AC smells off or the airflow feels weak, don't wait for it to get worse — book our free 1-hour inspection and we'll check the cabin filter along with the rest of the car.",
      },
    ],
    faqs: [
      {
        q: "How do I know my cabin filter needs replacing?",
        a: "The classic signs: a musty or sour smell when the AC runs, noticeably weaker airflow from the vents, and allergy symptoms that show up when you drive. If any of those sound familiar, the filter is overdue.",
      },
      {
        q: "Can I replace the cabin filter myself?",
        a: "You can — the filters are behind a panel in the passenger footwell on Model 3 and Model Y. But the trim clips are easy to break if you haven't done it before, and a shop visit lets us check the blower and evaporator at the same time. Most owners decide it's worth having us handle it.",
      },
      {
        q: "Does Tesla's warranty cover the cabin filter?",
        a: "No — it's a wear item, like wiper blades. Replacement is routine maintenance, and it's quick.",
      },
      {
        q: "Do Model 3 and Model Y use the same filter setup?",
        a: "They use the same style of setup — two filter elements on most model years. Bring it in and we'll make sure the right filters go in your specific car.",
      },
    ],
    serviceLink: { href: "/service/cabin-filters-radiator-cleaning", label: "Cabin filter replacement" },
  },
  {
    slug: "tesla-12v-battery-warning-signs",
    title: "Tesla 12V Battery Warning Signs | EV+ Auto Repair",
    h1: "Your Tesla's 12V Battery Is Trying to Tell You Something",
    description:
      "Your Tesla's 12V battery can strand you with no warning. Learn the warning signs, what to do when it dies, and why replacing it early beats a tow.",
    tag: "Battery",
    date: "October 20, 2026",
    publishDate: "2026-10-20",
    image: shop4,
    imageAlt: "Tesla 12V battery warning signs — service at EV+ Auto Repair Sun Valley",
    excerpt:
      "The battery that strands Tesla owners isn't the big one — it's the little 12V. Here's how to spot trouble before you're locked out of a dead car.",
    body: [
      {
        type: "p",
        text: "Everybody worries about the big high-voltage battery. But the battery that actually strands Tesla owners is the little 12V one under the frunk. It runs your locks, your windows, your computers — everything that has to work before the car can even wake up. When it dies, you're not driving anywhere.",
      },
      { type: "h2", text: "The warning your Tesla gives you" },
      {
        type: "p",
        text: "Most of the time, the car tells you: a '12V battery needs service' alert pops up on the screen, sometimes with a 'schedule service soon' message. Take it seriously. That alert means the battery is on its way out, and the clock is ticking — days or weeks, not months.",
      },
      { type: "h2", text: "When there's no warning at all" },
      {
        type: "p",
        text: "Here's the part that catches people: sometimes the 12V just quits. You walk up to the car and nothing happens — doors won't unlock, the app won't connect, the screens stay dark. On Model 3 and Model Y, the fix starts with popping the small tow-eye cover on the front bumper and applying 12V to the leads behind it to release the frunk, so you can reach the battery and jump it. It works, but it's not how you want to start your morning.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "A lot of owners assume the big battery keeps the 12V charged forever, so it never needs attention. The car does top up the 12V while it can — but the 12V is still a regular battery with a finite life. It ages out just like the one in a gas car, usually in 2 to 4 years.",
      },
      { type: "h2", text: "Proactive replacement beats a tow" },
      {
        type: "p",
        text: "A 12V battery that's three or more years old — or one that's already thrown the service alert — is living on borrowed time. Replacing it on your schedule, in our shop, takes a fraction of the time and hassle of a dead car in a parking structure, a tow truck, and a ruined day. If you've seen the 12V warning, or you can't remember the last time the battery was touched, bring the car in — our free 1-hour inspection includes a 12V health check, and we'll take care of it before it takes care of your schedule.",
      },
    ],
    faqs: [
      {
        q: "How long does a Tesla 12V battery last?",
        a: "Typically 2 to 4 years, depending on climate and use. Heat is hard on them, so Valley summers don't do them any favors. If yours is past year three, have it tested.",
      },
      {
        q: "Will my Tesla always warn me before the 12V dies?",
        a: "Usually — the '12V battery needs service' alert is the common heads-up. But not always, which is exactly why a sudden no-start still surprises owners. Don't treat the absence of a warning as a clean bill of health on an old battery.",
      },
      {
        q: "Can you jump-start a Tesla like a gas car?",
        a: "The 12V battery itself can be jumped once you can reach it. The trick is getting the frunk open when the car is dead — on Model 3 and Model Y that means the tow-eye cover procedure. If that sounds like a hassle, that's the point: replace the battery before it comes to that.",
      },
      {
        q: "Does a 12V replacement affect my Tesla's warranty?",
        a: "The 12V battery is a wear item and isn't covered under the vehicle warranty. Replacing it is routine maintenance — and it has nothing to do with your high-voltage battery or drive unit coverage.",
      },
    ],
    serviceLink: { href: "/service/12v-battery-replacement", label: "12V battery replacement" },
  },
  {
    slug: "why-we-replace-the-full-control-arm",
    title: "Why We Replace the Full Control Arm, Never Just the Bushing | EV+ Auto Repair",
    h1: "Why We Replace the Full Control Arm (Never Just the Bushing)",
    description:
      "Some shops press a new bushing into a worn control arm and call it fixed. Here's why EV+ Auto Repair replaces the full arm on Teslas, every time.",
    tag: "Suspension",
    date: "October 22, 2026",
    publishDate: "2026-10-22",
    image: whySign,
    imageAlt: "Tesla control arm replacement at EV+ Auto Repair — full arm, never just the bushing",
    videoUrl: "https://www.instagram.com/reel/DZ4LdI1tAM8/",
    excerpt:
      "A new bushing in a worn arm is a shortcut that doesn't last. Here's why we replace the full control arm on your Tesla — and why it matters.",
    body: [
      {
        type: "p",
        text: "Creaking, clunking, or a loose feeling over bumps on your Tesla usually means a control arm is worn out. When we give you the estimate, you'll see a full control arm on it — not a bushing. That's deliberate, and it's one of the things we're strictest about in the shop.",
      },
      { type: "h2", text: "The bushing is pressed into the arm" },
      {
        type: "p",
        text: "The bushing is a rubber insert pressed into the control arm itself. It can only be replaced by pressing the old one out and forcing a new one in — and that pressing is exactly the problem. It stresses the arm, and it assumes the arm is still in good shape. On a Tesla with real miles on it, it usually isn't.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "A bushing-only replacement doesn't save you money — it buys you the same repair twice. The arm keeps wearing, the noise comes back, and you pay for the labor all over again.",
      },
      { type: "h2", text: "The arm itself wears out too" },
      {
        type: "p",
        text: "Control arms take every pothole, speed bump, and hard turn your Tesla sees. Ball joints loosen, the metal fatigues, and the mounting points wear. Swapping a bushing into that arm is like putting a new hinge on a rotten door. We see bushing-only jobs come back to us from other shops — the customer paid once for the shortcut, then pays again for the real fix.",
      },
      { type: "h2", text: "What a full replacement gets you" },
      {
        type: "p",
        text: "A new control arm means new bushings, new ball joints, and straight, unworn metal — everything in that corner of the suspension back to spec at once. Then we align it, road test it, and back the labor with our 6-12 month labor warranty. It's the repair done once, done right.",
      },
      {
        type: "p",
        text: "If your Tesla is creaking or clunking up front, don't guess. Book our free 1-hour inspection at EV+ Auto Repair in Sun Valley — we'll put it on the lift, show you exactly what's worn, and tell you straight whether it's the control arms or something else. Call (818) 281-7757 or book online.",
      },
    ],
    faqs: [
      {
        q: "Why won't you just replace the bushing?",
        a: "Because the bushing is pressed into the arm, and the arm itself wears. A bushing-only job leaves worn ball joints and fatigued metal in place, so the noise and play come back. We replace the full arm so the repair lasts.",
      },
      {
        q: "How do I know if my control arms are worn?",
        a: "The classic signs are creaking or clunking from the front over bumps, a loose or wandering feeling in the steering, and uneven tire wear. A lift inspection confirms it — which is why our 1-hour inspection is free.",
      },
      {
        q: "Is the repair covered by a warranty?",
        a: "Yes. Our labor is backed by a 6-12 month labor warranty, depending on the job. We'll tell you exactly what yours covers before any work starts.",
      },
      {
        q: "Do you work on non-Tesla vehicles?",
        a: "Our service and maintenance work is Tesla-only. If your suspension concern is on another EV or a gas vehicle, that's something our collision center may be able to look at — call us and we'll tell you straight.",
      },
    ],
    serviceLink: { href: "/service/suspension-steering", label: "Suspension & steering" },
  },
  {
    slug: "tesla-collision-repair-what-to-expect",
    title: "Tesla Collision Repair: What Actually Happens After an Accident | EV+ Auto Repair",
    h1: "What Actually Happens After Your Tesla Is in an Accident",
    description:
      "From estimate to insurance to paint and calibration — here's the real Tesla collision repair process, and what to ask any shop before you hand over the keys.",
    tag: "Collision",
    date: "October 27, 2026",
    publishDate: "2026-10-27",
    image: shopSign,
    imageAlt: "Tesla collision repair at EV+ Auto Repair in Sun Valley, Los Angeles",
    excerpt:
      "Estimate, insurance, parts, paint, calibration — here's the real step-by-step of Tesla collision repair and what to ask before you hand over your keys.",
    body: [
      {
        type: "p",
        text: "An accident is stressful enough without wondering what happens to your car next. Here's the honest step-by-step of how collision repair works at a Tesla-focused shop like ours — so you know what's supposed to happen, and you can spot it when a shop skips steps.",
      },
      { type: "h2", text: "Step 1: The estimate" },
      {
        type: "p",
        text: "We inspect the damage in person — not just from photos — and write a detailed estimate. On Teslas, hidden damage is common: a bumper that looks scuffed can hide a damaged sensor, a bent bracket, or a cracked mounting tab underneath. A proper estimate accounts for what we can see and flags what we need to check once panels come off.",
      },
      { type: "h2", text: "Step 2: Insurance coordination" },
      {
        type: "p",
        text: "We work directly with your insurance company on the claim — sending the estimate, documenting the damage, and handling supplements if we find more once teardown starts. You don't have to play middleman between the shop and the adjuster. That's our job.",
      },
      { type: "h2", text: "Step 3: Parts, repair, and paint" },
      {
        type: "p",
        text: "Tesla parts come through proper channels, and panels are repaired or replaced to spec — no bondo mountains, no close-enough fits. Paint is matched to your car, not just to the color code, because factory paint fades and shifts over time. A good match means blending into the surrounding panels so the repair disappears.",
      },
      { type: "h2", text: "Step 4: Calibration and final checks" },
      {
        type: "p",
        text: "This is the step cheap shops skip. Teslas are full of cameras and sensors — Autopilot cameras, parking sensors, radar — and any of them can need recalibration after body work, even if they weren't directly hit. We verify every system reads correctly before the car goes back to you, then road test it.",
      },
      { type: "h2", text: "What to ask any collision shop" },
      {
        type: "p",
        text: "Before you hand over the keys anywhere, ask three things: do they document hidden damage or just quote what's visible, do they handle the insurance supplements themselves, and do they calibrate cameras and sensors after the repair. If a shop stumbles on any of those, keep looking.",
      },
      {
        type: "p",
        text: "One more thing worth knowing: our collision center isn't Tesla-only. While our service and maintenance work is strictly Tesla, the collision side also handles other EVs and gas vehicles. So if the accident involved a second car in the family, we can likely take care of both. Call EV+ Auto Repair at (818) 281-7757 or start your claim online — and if you're not sure how bad the damage is, our free 1-hour inspection applies here too.",
      },
    ],
    faqs: [
      {
        q: "Do you work with my insurance company?",
        a: "Yes. We coordinate directly with your insurer — estimate, documentation, and supplements — so you don't have to manage the back-and-forth yourself.",
      },
      {
        q: "Do you only repair Teslas?",
        a: "Our service and maintenance work is Tesla-only, but our collision center also repairs other EVs and gas vehicles. If you have questions about a specific car, call us at (818) 281-7757.",
      },
      {
        q: "Will my Tesla's cameras and sensors work properly after repair?",
        a: "They should — but only if they're recalibrated after body work. We check and calibrate cameras, parking sensors, and related systems as part of every collision repair, then verify them before delivery.",
      },
      {
        q: "Is the repair work warrantied?",
        a: "Yes. Our collision work is backed by our 6-12 month labor warranty. We'll go over exactly what's covered for your repair before we start.",
      },
    ],
    serviceLink: { href: "/collision", label: "Collision center" },
  },
  {
    slug: "tesla-tire-rotation-why-evs-need-it",
    title: "Why Tire Rotation Matters More on Your Tesla | EV+ Auto Repair",
    h1: "Your Tesla Eats Tires Faster Than You Think",
    description:
      "EVs wear tires faster and unevenly thanks to instant torque and battery weight. Tesla recommends rotation every 6,250 miles. Here is why it matters.",
    tag: "Maintenance",
    date: "November 3, 2026",
    publishDate: "2026-11-03",
    image: shop2,
    imageAlt: "Tesla tire rotation service at EV+ Auto Repair Sun Valley",
    excerpt:
      "Instant torque and a heavy battery pack mean your Tesla wears tires harder than any gas car you have owned. Rotation is not optional — it is how you protect your range and your wallet.",
    body: [
      {
        type: "p",
        text: "We see Teslas come in every week with tires worn down thousands of miles early, and the owner had no idea anything was wrong. No warning light, no noise — just rubber quietly disappearing. On a gas car you might get away with skipping rotations. On a Tesla, it costs you real money.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "Some owners assume EVs are low-maintenance enough that tire rotation does not matter. The opposite is true. A Tesla is heavier than a comparable gas car and puts down instant torque from a stop, which chews through tread faster and far less evenly. Rotation matters more on your Tesla, not less.",
      },
      { type: "h2", text: "Why EVs are so hard on tires" },
      {
        type: "p",
        text: "Two things work against your tires. First, weight: the battery pack alone can add hundreds of pounds compared to a gas equivalent, and every pound presses down on the contact patch. Second, torque: an electric motor delivers full power the instant you touch the pedal, which scrubs the driven tires every time you accelerate. The result is wear that is both faster and more uneven than what most drivers are used to.",
      },
      { type: "h2", text: "What happens when you skip it" },
      {
        type: "p",
        text: "Uneven wear does more than shorten tire life. As tread wears unevenly, rolling resistance goes up — and on an EV, rolling resistance comes straight out of your range. We have seen owners lose noticeable range to nothing more than neglected rotations. Past a point, uneven wear also means replacing tires in pairs or full sets instead of getting the full life out of all four.",
      },
      {
        type: "p",
        text: "Tesla recommends rotating your tires every 6,250 miles. That is more often than most gas cars, and it is not a suggestion to ignore. When you bring your Tesla to us, we check tread depth and wear patterns as part of the visit and rotate on that schedule so all four tires wear evenly and last as long as they should.",
      },
      {
        type: "p",
        text: "Not sure where your tires stand? Our free 1-hour inspection includes a tread and wear check. We will tell you straight whether a rotation is due or your tires have something else going on. Call (818) 281-7757 or book online — it takes an hour and it could save you a set of tires.",
      },
    ],
    faqs: [
      {
        q: "How often should I rotate my Tesla's tires?",
        a: "Tesla recommends every 6,250 miles. Because EVs wear tires faster and more unevenly, sticking to that interval matters more than it would on a gas car.",
      },
      {
        q: "Does skipping rotation really hurt my range?",
        a: "Yes. Uneven tread increases rolling resistance, and on an EV that resistance comes directly out of your driving range.",
      },
      {
        q: "Can I rotate the tires myself?",
        a: "Some owners do, but Teslas with staggered wheel setups cannot be rotated the usual front-to-back way. We will check your setup and wear pattern first so the rotation actually helps.",
      },
      {
        q: "How do I know if my tires are already unevenly worn?",
        a: "Look for one edge of the tread wearing faster than the other, or the front tires looking very different from the rears. If you are not sure, our free inspection includes a tread depth and wear check.",
      },
    ],
    serviceLink: { href: "/service/tire-rotation", label: "Tire rotation" },
  },
  {
    slug: "tesla-radiator-condenser-cleaning",
    title: "Tesla Radiator & Condenser Cleaning | EV+ Auto Repair",
    h1: "Your Tesla's Radiator Is Choking on Valley Dust",
    description: "Weak Tesla AC? Valley dust clogs the radiator and condenser, hurting cooling and battery health. $150 radiator cleaning in Sun Valley — (818) 281-7757.",
    tag: "Maintenance",
    date: "November 5, 2026",
    publishDate: "2026-11-05",
    excerpt: "Your Tesla's radiator sits low behind the bumper, collecting Valley dust that chokes AC performance and battery cooling. Our $150 cleaning, roughly once a year, keeps it breathing.",
    image: shop3,
    imageAlt: "Tesla radiator and condenser cleaning service in the San Fernando Valley",
    videoUrl: "https://www.instagram.com/reel/DX_IzPwtCrl/",
    body: [
      { type: "p", text: "Your Tesla's radiator and condenser sit low behind the front bumper, right where the road throws everything: dust, leaves, cottonwood fluff, plastic bags, and the fine grit the San Fernando Valley is famous for. Every mile packs more of it into the fins, and airflow drops a little more. On a Tesla, that radiator is not cooling an engine — it is cooling your battery, your drive unit, your power electronics, and the cabin AC. Most owners never look down there until something goes wrong, which is a shame, because what goes wrong is entirely preventable." },
      { type: "h2", text: "Why the Valley is especially rough on radiators" },
      { type: "p", text: "Most places get one debris season. The Valley gets several: spring winds, summer dust, Santa Ana season blowing everything sideways, and wildfire smoke and ash in bad years — the same stuff that loads up cabin filters loads up radiators. Add construction grit from every widened freeway and the leaf drop from street trees, and a Tesla driven here can pack its condenser solid in a single year. If you park under trees or commute the 101 daily, yours fills up even faster. Cars in milder climates can go longer between cleanings. Yours probably cannot." },
      { type: "h2", text: "What a clogged condenser actually does" },
      { type: "p", text: "When airflow through the condenser drops, your AC works harder for less cooling. The classic complaint is AC that feels weak at idle or in stop-and-go traffic but fine on the freeway — at speed, ram air compensates; at a standstill, nothing does. Less obvious is what happens to the battery. The thermal management system shares that cooling loop, so a clogged radiator means the car works harder to keep the battery at temperature. That costs efficiency every single day, and over time the battery spends more hours outside its ideal temperature range. The cooling fan also runs louder and longer trying to compensate, which is why 'my Tesla sounds like a jet preparing for takeoff' is a sentence we hear every summer." },
      { type: "myth", label: "The myth, busted", text: "Radiators are a gas-car thing. A Tesla has no engine to overheat, but it has plenty of heat to reject — from the battery, the drive unit, and the power electronics. The radiator and condenser work every time you drive. Ignore them and the entire thermal system pays for it." },
      { type: "p", text: "The signs are straightforward: weak AC, especially at low speeds; the cooling fan roaring constantly; visible debris packed in the lower grille; in bad cases, thermal warnings on the screen. But by the time you notice symptoms, airflow has been restricted for a while — which is why we recommend cleaning roughly once a year, ideally in spring before AC season hits. Our radiator and condenser cleaning is $150. We remove the front ducting, clear the debris packed between the condenser and radiator where a hose cannot reach, straighten bent fins, and verify fan operation. It is something we check during the free 1-hour inspection, so if you are already coming in, we will tell you honestly whether yours needs it. No upsell — if it is clean, we will tell you it is clean. The work carries our 6–12 month labor warranty." },
      { type: "p", text: "If your AC is not what it used to be, or it has been a year since the last cleaning, book a free inspection online or call us at (818) 281-7757. Family-owned in Sun Valley since 2016, Tesla is all we do. It is a small service that protects very expensive parts." },
    ],
    faqs: [
      { q: "How often should the radiator be cleaned?", a: "Roughly once a year in the San Fernando Valley — dust, leaves, and wind-blown debris pack in fast here. If you park under trees or drive the freeway daily, you may need it sooner. We check the radiator's condition during every free inspection, so you will always know where yours stands." },
      { q: "Can I just hose it out myself?", a: "You can rinse the surface, but the real blockage packs between the condenser and the radiator where a hose cannot reach. Getting to it means removing ducting and trim, and done wrong you bend the fins and make airflow worse. The $150 service exists because the proper way takes actual disassembly." },
      { q: "Does a dirty radiator hurt the battery?", a: "Indirectly, yes. The battery thermal management system rejects heat through that same radiator. Restricted airflow means the system works harder and the battery spends more time outside its ideal temperature range. It is not an emergency, but it is not nothing either." },
      { q: "Is the cleaning included in the free inspection?", a: "The inspection includes checking the radiator's condition and telling you whether it needs cleaning. The $150 cleaning itself is a separate service. If yours is clean, we will say so and you will pay nothing." },
    ],
    serviceLink: { href: "/service/cabin-filters-radiator-cleaning", label: "Cabin Filters & Radiator Cleaning" },
  },
  
  {
    slug: "tesla-adas-camera-calibration",
    title: "Tesla ADAS Camera Calibration Explained | EV+ Auto Repair",
    h1: "Your Tesla's Cameras Are Blind After Body Work",
    description:
      "Tesla cameras need recalibration after body work or glass replacement. Here's what ADAS calibration involves — and what goes wrong when a shop skips it.",
    tag: "Collision",
    date: "November 12, 2026",
    publishDate: "2026-11-12",
    excerpt:
      "Your Tesla came back from the body shop looking perfect. But the cameras behind that fresh paint are pointing somewhere they shouldn't be — and every safety system that depends on them is compromised. That's what ADAS calibration fixes.",
    image: shop3,
    imageAlt: "Tesla ADAS camera calibration after collision repair at EV+ Auto Repair",
    videoUrl: "https://www.instagram.com/reel/DVsVUETjT1Z/",
    body: [
      {
        type: "p",
        text: "Your Tesla sees the world through cameras: three facing forward behind the windshield, one in each B-pillar, one in each front fender, and one at the rear. Autopilot, lane keeping, automatic emergency braking, blind-spot monitoring — all of it depends on those cameras agreeing precisely about where everything is. Now imagine a fender gets replaced, a bumper gets repainted, or a windshield comes out. The cameras go back on, but they sit a millimeter or two off from where they were. To you, the car looks perfect. To the car, the world just shifted. Every distance estimate, every lane position, every closing-speed calculation now starts from a wrong assumption. That's why calibration isn't a nice-to-have — it's the difference between safety systems that work and ones that quietly don't.",
      },
      { type: "h2", text: "Why a Tesla's cameras care about body work" },
      {
        type: "p",
        text: "Cameras don't have opinions — they have geometry. Each camera's view has to line up with the others and with the car's actual dimensions, so the software can judge distances, lane positions, and closing speeds. Move a camera even slightly during a repair and that geometry breaks. The car might think a lane line sits six inches from where it really is, or misjudge how fast the car ahead is slowing down. This applies to more repairs than most owners expect: bumper covers, fenders, doors with B-pillar cameras, windshields, roof glass, even side mirrors on some models. And it's not only collision work — any glass replacement near a camera triggers the same requirement. If a repair touched anything near a camera, calibration belongs on the work order. Skipping it doesn't trigger a check-engine light — the car has no way to tell you its eyes are misaligned.",
      },
      { type: "h2", text: "What calibration actually involves" },
      {
        type: "p",
        text: "Tesla's calibration is a drive-based procedure. The car is put into calibration mode and driven on well-marked roads, so the cameras can relearn their positions against real lane lines and landmarks. The touchscreen shows calibration progress as it happens, and Autopilot features stay limited until the procedure completes. The whole process typically takes one drive cycle on suitable roads, though heavy traffic or poorly marked streets can extend it. A proper shop doesn't just send you driving and hope for the best — we initiate the procedure correctly, drive a suitable calibration route, and verify it finished with every camera reporting properly before the car goes back to you. Then we confirm Autopilot, lane keeping, and emergency braking are fully functional again. Calibration isn't done when the car looks done. It's done when we've verified it.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "The car calibrates itself, so the shop doesn't need to do anything. The car does run the calibration routine — but only if someone initiates it properly, drives the right kind of roads, and verifies it finished. 'The car figures it out' is how cars leave shops with blind cameras and owners who never know.",
      },
      { type: "h2", text: "What happens when a shop skips it" },
      {
        type: "p",
        text: "Here's the unsettling part: a Tesla with uncalibrated cameras usually still drives fine. What breaks is quieter. Autopilot may refuse to engage. Lane keeping can wander. Blind-spot warnings might cry wolf — or stay silent when they matter most. Automatic emergency braking can't be trusted to judge distances it's mismeasuring. Sometimes the car throws camera-related warnings; sometimes it throws nothing at all while its safety systems quietly underperform. If your Tesla has had body work, glass replacement, or any repair near a camera, ask the shop directly whether calibration was performed and verified — and don't accept a vague answer. At EV+, ADAS calibration is part of every qualifying repair: not an add-on, not a surprise line item. Our collision center handles all EVs plus gas vehicles, every job carries our 6–12 month labor warranty, and if your car needs to stay with us, we have Tesla rentals available on-site, subject to availability. Call (818) 281-7757 or book a free inspection online.",
      },
    ],
    faqs: [
      {
        q: "What is ADAS calibration?",
        a: "ADAS (advanced driver-assistance systems) calibration is the process of realigning your Tesla's cameras after a repair, so Autopilot, lane keeping, emergency braking, and blind-spot monitoring work correctly. Without it, the cameras' geometry is off and the safety systems can't be trusted.",
      },
      {
        q: "Which repairs require camera calibration on a Tesla?",
        a: "Windshield or roof glass replacement, bumper or fender work, door repairs near the B-pillar cameras, and side mirror replacement, among others. The rule is simple: if a repair touched anything near a camera, calibration belongs on the work order.",
      },
      {
        q: "How do I know if my Tesla's cameras are calibrated?",
        a: "After a proper calibration, the car completes its calibration routine — visible as progress on the touchscreen — and all driver-assistance features return to full function. If Autopilot won't engage or you're seeing camera warnings after body work, the calibration was likely skipped or left incomplete. Bring it in and we'll check.",
      },
      {
        q: "Can any body shop calibrate Tesla cameras?",
        a: "In theory, any shop can run the drive procedure — but in practice, many skip it entirely or never verify it completed. A Tesla-specialized collision shop knows which repairs trigger calibration, how to initiate it properly, and how to verify every camera before the car leaves. That's the difference.",
      },
    ],
    serviceLink: { href: "/collision/adas-calibration", label: "ADAS Calibration" },
  },
  {
    slug: "tesla-coolant-leak-supermanifold",
    title: "Tesla Coolant Leak: Symptoms & Repair | EV+ Auto Repair",
    h1: "A Tesla Coolant Leak Is Never 'Just a Little Leak'",
    description:
      "Tesla coolant leak symptoms: low coolant warnings, visible leaks, overheating. What the Supermanifold is and how we fix it. Sun Valley: (818) 281-7757.",
    tag: "Maintenance",
    date: "November 17, 2026",
    publishDate: "2026-11-17",
    excerpt:
      "That low coolant warning on your Tesla is telling you something specific — usually a leak at a fitting, a hose, or the Supermanifold itself. Here's how we find it and fix it.",
    image: shop4,
    imageAlt: "Tesla coolant leak repair — Supermanifold service at EV+ Auto Repair Sun Valley",
    videoUrl: "https://www.instagram.com/reel/DcxjJcDtRtD/",
    body: [
      {
        type: "p",
        text: "Teslas don't have engines, but they absolutely have coolant — and coolant leaks are one of the sneakiest problems these cars develop. The car has no oil dipstick for you to check and no temperature gauge climbing into the red like an old gas car. What you get instead is a warning message, a puddle where you parked, or a cooling fan working harder than it should. Catching a coolant leak early is the difference between a hose or a fitting and a repair that touches the battery cooling loop. Ignore it long enough and the car protects itself by limiting power — or worse, it doesn't protect itself in time.",
      },
      { type: "h2", text: "The symptoms owners actually notice" },
      {
        type: "p",
        text: "The most common sign is a low coolant warning on the screen. It might come and go at first — coolant level drops, you add some, the warning disappears for a while, then it's back. That's the signature of a slow leak, and it's the one that tricks people into treating the symptom instead of the cause. Other signs: a sweet-smelling puddle under the front of the car (Tesla coolant smells faintly sweet, like any glycol coolant), visible wetness around the frunk area, the cooling fan running loud and long on drives where it used to be quiet, or reduced Supercharging speed — the thermal system throttles charging when it can't keep temperatures where they belong. If you're seeing any of these, stop topping off the coolant and get the leak found. Topping off without finding the leak is how a $300 repair becomes a $3,000 one.",
      },
      {
        type: "p",
        text: "On Model 3 and Model Y, the coolant system runs through a single central assembly Tesla calls the Supermanifold — a compact octovalve block that routes coolant between the battery, the drive units, the cabin heat pump, and the power electronics. It's an elegant piece of engineering: one component doing the work that used to take a maze of separate valves and hoses. But elegant doesn't mean indestructible. Leaks develop at hose connections, at the fittings where lines meet the manifold, and occasionally in the pipes themselves — road debris, heat cycling, and age all take their toll. Diagnosing it means pressure-testing the system, tracing the wet trail with the frunk trim out, and confirming exactly which joint or pipe is weeping before anything gets replaced.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "Coolant leaks are a gas-car problem. A Tesla's thermal system is arguably more important than a gas car's — it protects the battery, and the battery is the most expensive part of the vehicle. A leak that a gas car would shrug off for months can put a Tesla into reduced-power mode on a hot Valley afternoon.",
      },
      { type: "h2", text: "How the repair works" },
      {
        type: "p",
        text: "Once we find the leak, the fix is usually straightforward: replace the damaged pipe, hose, or fitting, refill the system with the correct coolant, bleed the air out properly, and verify the repair holds under pressure. The critical part is the diagnosis — coolant travels, so the wettest spot isn't always the source, and guessing means replacing parts until the leak stops. Our $180 diagnostic applies here, and it's credited toward the repair. The work carries our 6–12 month labor warranty. If your car needs to stay with us, we have Tesla rentals available on-site, subject to availability.",
      },
      {
        type: "p",
        text: "If you're getting low coolant warnings or you've spotted fluid under the front of your Tesla, book a free 1-hour inspection online or call us at (818) 281-7757. Family-owned in Sun Valley since 2016, Tesla is all we do. Coolant leaks don't fix themselves — but they do get found, and found early they're a routine repair.",
      },
    ],
    faqs: [
      {
        q: "Can I just keep topping off the coolant?",
        a: "You can, but you're treating the symptom while the leak gets worse — and coolant loss can put the car into reduced-power mode without much warning. Finding the leak now is cheaper than finding it after the thermal system has been stressed for months.",
      },
      {
        q: "What does a Tesla coolant leak smell or look like?",
        a: "The coolant is a glycol-based fluid with a faintly sweet smell, usually visible as a clear or slightly colored puddle under the front of the car. Don't confuse it with plain water from the AC drain, which is normal — coolant has that sweet scent and a slightly oily feel.",
      },
      {
        q: "Is a coolant leak dangerous to drive with?",
        a: "A small leak is usually safe for a short drive to the shop, but it's not something to live with. Low coolant can trigger reduced power, limit Supercharging, and in a bad case stress the battery thermal system. Get it checked promptly.",
      },
      {
        q: "How long does a coolant leak repair take?",
        a: "Most are same-week appointments at our Sun Valley shop. Diagnosis first — we confirm the exact source with a pressure test — then the repair, refill, bleed, and a pressure verification. Book online or call (818) 281-7757.",
      },
    ],
    serviceLink: { href: "/service/diagnostics", label: "Diagnostics" },
  },
  {
    slug: "tesla-sentry-mode-dashcam-usb-setup",
    title: "Tesla Sentry Mode & Dashcam USB Setup Guide | EV+ Auto Repair",
    h1: "Your Tesla's Cameras Record Nothing Without This",
    description:
      "Your Tesla's cameras record nothing without a USB drive in the glovebox port. Setup steps, formatting tips, and the 128GB OEM drive we sell for $29.99.",
    tag: "Accessories",
    date: "November 19, 2026",
    publishDate: "2026-11-19",
    excerpt:
      "Sentry Mode and Dashcam are useless without a USB drive in the glovebox port. Here's the five-minute setup — and the drive we recommend.",
    image: usbDrive,
    imageAlt: "128GB Tesla USB drive for Sentry Mode and Dashcam recording",
    videoUrl: "https://www.instagram.com/reel/DcSrHeCNYP1/",
    body: [
      {
        type: "p",
        text: "Your Tesla has cameras watching in every direction — while you drive and while it's parked. But here's what most owners don't realize until they need the footage: those cameras record nothing unless a USB drive is plugged into the glovebox port. No drive, no Dashcam clips. No drive, no Sentry Mode events. The car won't warn you loudly about it, either. If you've never set this up, your Tesla's cameras are currently just expensive decorations.",
      },
      { type: "h2", text: "What Dashcam and Sentry Mode actually record" },
      {
        type: "p",
        text: "Dashcam records while you drive, keeping roughly the last hour of footage in a rolling buffer. Tap the dashcam icon — or honk, if you've enabled 'save on honk' — and it locks in the last ten minutes permanently. Sentry Mode is the parked guard: when the car is locked and someone gets close or disturbs it, the cameras record the event and the screen warns them they're being filmed. Both features write to the same USB drive, and both silently do nothing without one. After a hit-and-run or a parking lot ding, that footage is often the only evidence you'll ever get.",
      },
      { type: "h2", text: "Setting it up takes five minutes" },
      {
        type: "p",
        text: "Plug the drive into the USB port inside the glovebox — that's the designated port for Dashcam and Sentry, and it's lockable, which matters if the footage ever becomes evidence. Then go to Controls, then Safety, and tap Format USB Drive; the car formats it correctly itself, so you don't need a computer. Finally, make sure Dashcam and Sentry Mode are enabled in your settings. Use a drive with enough capacity — 128GB is the sweet spot, holding weeks of Sentry events and plenty of Dashcam clips — and a quality drive, because this drive is writing nearly every time the car is on or disturbed.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "Any cheap flash drive will not cut it. Dashcam and Sentry write constantly, and bargain drives overheat, corrupt footage, or die within months. Spend the extra few dollars on a proper drive — like the OEM Tesla drive — instead of a bargain-bin stick. It's the difference between evidence and a corrupted file when it matters.",
      },
      {
        type: "p",
        text: "One more habit worth building: when something happens — a near-miss, a parking lot scrape, anything — save the footage immediately. Dashcam's rolling buffer overwrites itself, and Sentry events pile up until old ones are pushed out. The drivers who get their insurance claims paid smoothly are the ones who pull the drive, copy the clips to their phone or computer, and have video ready before anyone asks for it.",
      },
      {
        type: "p",
        text: "We sell the 128GB OEM Tesla USB drive for $29.99 — pick one up at our Sun Valley shop or have it shipped to you. And if you ever need footage pulled or explained after an incident, that's the kind of thing we're happy to help with at your free inspection.",
      },
    ],
    faqs: [
      {
        q: "What size USB drive do I need for Tesla Dashcam and Sentry Mode?",
        a: "128GB is the sweet spot — it holds weeks of Sentry events and plenty of Dashcam clips without filling up. Smaller drives work but fill fast; bigger ones are fine but unnecessary for most drivers.",
      },
      {
        q: "Which USB port should I plug the drive into?",
        a: "The glovebox USB port — it's the designated port for Dashcam and Sentry Mode, and the glovebox locks, which matters if the footage ever becomes evidence.",
      },
      {
        q: "How do I format a USB drive for my Tesla?",
        a: "Plug it in, then go to Controls, then Safety, and tap Format USB Drive. The car handles the formatting itself — no computer needed.",
      },
      {
        q: "Where can I buy the right USB drive?",
        a: "We sell the 128GB OEM Tesla USB drive for $29.99 at EV+ Auto Repair in Sun Valley — pick it up in person or have it shipped to you.",
      },
    ],
    serviceLink: { href: "/shop/tesla-usb-drive-128gb", label: "128GB Tesla USB Drive" },
  },
  {
    slug: "tesla-half-shaft-axle-clicking-noise",
    title: "Tesla Clicking Noise When Turning? Half Shaft | EV+ Auto Repair",
    h1: "That Clicking Noise When You Turn Is Your Half Shaft Talking",
    description:
      "Clicking or tapping noise when turning your Tesla? It's usually a worn half shaft (CV axle). How we diagnose and replace it. Sun Valley: (818) 281-7757.",
    tag: "Maintenance",
    date: "November 24, 2026",
    publishDate: "2026-11-24",
    excerpt:
      "A clicking or tapping sound from the front end when you turn — especially at low speed — is the classic sign of a worn half shaft. Here's what's happening and how we fix it.",
    image: shop2,
    imageAlt: "Tesla half shaft axle replacement at EV+ Auto Repair Sun Valley",
    videoUrl: "https://www.instagram.com/reel/DXBTphsjcZV/",
    body: [
      {
        type: "p",
        text: "You back out of a parking spot, turn the wheel, and hear it — click, click, click from the front end, in rhythm with the wheels. Turn the wheel back straight and it disappears. If that sounds familiar, you're hearing a worn half shaft, also called a CV axle. It's one of the most recognizable sounds a Tesla makes, and it's telling you something specific: the constant-velocity joint on one of your front axles has worn past the point where it can do its job quietly. It won't fix itself, and it only gets louder — but the good news is it's a well-understood repair with a clear diagnosis.",
      },
      { type: "h2", text: "Why Teslas wear half shafts" },
      {
        type: "p",
        text: "The half shaft connects the drive unit to the wheel, delivering power through a joint that has to flex as the wheel turns and the suspension moves. On a Tesla, that joint works harder than on most gas cars for two reasons: instant electric torque hits the joint with full force from a standstill, and the front drive unit on dual-motor cars is always engaged, so the front axles never get a rest. Over tens of thousands of miles the joint's internal bearings and races wear, the grease breaks down or escapes past a torn boot, and metal starts moving against metal. The clicking you hear is the worn joint articulating under load — quiet when driving straight, loud the moment the wheel turns and the joint has to bend.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "A clicking axle just needs grease. Once a CV joint is clicking, the internal surfaces are already worn — regreasing a damaged joint is like putting oil on a worn-out bearing. The joint is done. Replacement is the honest fix, and it's the only one that lasts.",
      },
      { type: "h2", text: "How we diagnose it" },
      {
        type: "p",
        text: "Diagnosis starts with the sound itself — a rhythmic click that appears when turning and changes with wheel speed is a half shaft until proven otherwise. We confirm it on the lift: checking the axle boots for tears and grease spray, feeling for play in the joint, and inspecting the companion side, because when one half shaft is worn, the other has lived the same life. We don't guess and replace — we verify which axle is the culprit before quoting anything. Our $180 diagnostic is credited toward the repair, so the diagnosis costs you nothing if you have us do the work.",
      },
      { type: "h2", text: "What replacement involves" },
      {
        type: "p",
        text: "We remove the worn half shaft and install a replacement axle, torque everything to spec, and road-test to confirm the noise is gone. It's a same-week job in most cases. The work carries our 6–12 month labor warranty, and our service center is Tesla-only — half shafts are something we do regularly, not a job we're figuring out on your car. If your Tesla needs to stay with us, we have Tesla rentals available on-site, subject to availability.",
      },
      {
        type: "p",
        text: "If your Tesla clicks when you turn, don't wait for it to get worse — a failing joint puts extra stress on everything around it. Book a free 1-hour inspection online or call us at (818) 281-7757. Family-owned in Sun Valley since 2016. Ten minutes on the lift and we'll tell you exactly what you're hearing.",
      },
    ],
    faqs: [
      {
        q: "Is it safe to drive with a clicking half shaft?",
        a: "For a short time, usually — but a worn joint only deteriorates, and in a worst case it can fail completely and leave you stranded. Get it diagnosed soon rather than driving on it for months.",
      },
      {
        q: "Does the clicking always mean the half shaft?",
        a: "Clicking that appears when turning and follows wheel speed is a half shaft in the large majority of cases. Other front-end noises — clunks over bumps, creaks at low speed — point to suspension instead, which is why we verify on the lift before quoting.",
      },
      {
        q: "Should I replace both half shafts at once?",
        a: "Not automatically. We replace the failed one and inspect the other — if it shows the same wear, we'll tell you honestly and let you decide. No pressure either way.",
      },
      {
        q: "How long does half shaft replacement take?",
        a: "It's typically a same-week appointment at our Sun Valley shop. Book a free inspection first and we'll confirm the diagnosis, quote the repair, and get you scheduled.",
      },
    ],
    serviceLink: { href: "/service/suspension-steering", label: "Suspension & Steering" },
  },
  {
    slug: "tesla-inspection-vs-diagnostic",
    title: "Tesla Inspection vs Diagnostic: Which Do You Need? | EV+ Auto Repair",
    h1: "Free Inspection or Paid Diagnostic? Here's How to Choose",
    description:
      "EV+ offers a free 1-hour Tesla inspection and a $180 diagnostic. They do different jobs. Here's what each covers and which one to book. Sun Valley, LA.",
    tag: "Service",
    date: "November 26, 2026",
    publishDate: "2026-11-26",
    excerpt:
      "We get this question every day: should I book the free inspection or the diagnostic? They're not the same appointment — here's exactly what each one does.",
    image: whySign,
    imageAlt: "Tesla inspection vs diagnostic — which appointment to book at EV+ Auto Repair",
    videoUrl: "https://www.instagram.com/reel/DeGWlVMNrl1/",
    body: [
      {
        type: "p",
        text: "Two of our most-booked appointments sound similar, and people mix them up constantly: the free 1-hour inspection and the $180 diagnostic. They are not the same thing, they are not interchangeable, and booking the wrong one wastes your time. So here is the plain-English difference, what each one actually covers, and how to know which one your situation calls for.",
      },
      { type: "h2", text: "The free 1-hour inspection: a full walkaround" },
      {
        type: "p",
        text: "The inspection is our eyes-and-hands look at your whole car. We check tires and brakes — tread depth, wear patterns, pad and rotor condition. We check the suspension for play and wear, because front-end creaks and clunks are some of the most common Tesla complaints we see. We test the 12V battery's health, check the cabin filters, look over the cooling system for debris and leaks, and run a scan for stored warnings and fault codes — including ones that haven't lit up your dashboard yet. It takes about an hour, it costs nothing, and you get a straight report: what needs attention now, what can wait, and what's fine. If your Tesla is fine, we will tell you it's fine and send you home. That is not a sales pitch. Most of our best long-term customers started with an inspection where we told them everything looked good.",
      },
      { type: "h2", text: "The $180 diagnostic: going deeper" },
      {
        type: "p",
        text: "Sometimes a walkaround isn't enough. A warning light is on and the cause isn't obvious. The car is doing something strange electrically — glitchy screen, phantom warnings, a system that misbehaves intermittently. Something the inspection flagged needs a deeper look before anyone can quote a repair. That is what the diagnostic is for: methodical, step-by-step troubleshooting with proper equipment, tracing the actual root cause instead of guessing. Electrical diagnosis in particular can take real time — pulling codes is the easy part; figuring out whether the fault is the module, the wiring, the connector, or the software is the actual work. The $180 fee covers that labor, and it is credited toward the repair if you have us do the work. You are never paying for the diagnosis and then paying full price on top of it.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "A free inspection is a funnel into expensive repairs. If that were true, it would be a terrible business model for a shop that lives on repeat customers and referrals. An inspection that finds nothing still earns us something — your trust. And a diagnostic fee isn't a surcharge; it's skilled labor with proper equipment, and we credit it toward the fix.",
      },
      { type: "h2", text: "Which one should you book?" },
      {
        type: "p",
        text: "Book the free inspection when: you hear a new noise and want it identified, you want a general checkup or a pre-purchase look at a used Tesla, your tires are wearing unevenly, or it's just been a while and you want to know where your car stands. Book the diagnostic when: a warning light is on and won't clear, the car has an electrical gremlin that comes and goes, a previous inspection flagged something that needs deeper investigation, or another shop already guessed at the problem and you want a real answer. And when in doubt, start with the free inspection — if what we find needs the deeper dive, we'll tell you exactly why before anything costs you a dollar. That is how the two appointments are designed to work together.",
      },
      {
        type: "p",
        text: "Booking either one takes about a minute online, or call us at (818) 281-7757 and we'll help you pick. We're family-owned in Sun Valley since 2016, our service center is Tesla-only, and every repair carries our 6–12 month labor warranty. If the car needs to stay with us, we have Teslas available to rent on-site, subject to availability. Come in, get answers, and drive out knowing exactly where you stand.",
      },
    ],
    faqs: [
      {
        q: "Is the free inspection really free, with no catch?",
        a: "Yes — one full hour, no charge, no obligation. If your car is fine, we say so. If something needs a deeper look, we explain why before the $180 diagnostic ever comes up.",
      },
      {
        q: "When is the diagnostic fee credited toward the repair?",
        a: "Always, when you have us do the repair the diagnostic identified. The $180 covers the troubleshooting labor; once we fix the problem, that amount comes off your repair bill.",
      },
      {
        q: "Can the free inspection find electrical problems?",
        a: "It can find the symptoms — stored fault codes, warning histories, things that show up on a scan. But tracing an intermittent electrical fault to its root cause is diagnostic work, and that's what the $180 appointment is for.",
      },
      {
        q: "I already know what's wrong. Do I still need either appointment?",
        a: "If you're confident about the problem, call us at (818) 281-7757 and tell us what's going on — we may be able to quote the repair directly. But if there's any doubt, the free inspection confirms it before you spend anything.",
      },
    ],
    serviceLink: { href: "/book", label: "Book Your Appointment" },
  },
  {
    slug: "how-to-choose-tesla-body-shop-avoid-scams",
    title: "How to Choose a Tesla Body Shop (Avoid Scams) | EV+ Auto Repair",
    h1: "5 Signs a Body Shop Is Scamming You — and How to Pick an Honest One",
    description:
      "A client came to us after another body shop scammed them. Here are the 5 warning signs of a dishonest shop and what to research before handing over your Tesla.",
    tag: "Collision",
    date: "December 1, 2026",
    publishDate: "2026-12-01",
    excerpt:
      "We see the aftermath of body-shop scams more often than we'd like — inflated bills, hostage cars, work that was never needed. Here's how to protect yourself.",
    image: shopSign,
    imageAlt: "How to choose an honest Tesla body shop — EV+ Auto Repair Sun Valley",
    videoUrl: "https://www.instagram.com/reel/DYIiUPtya8o/",
    body: [
      {
        type: "p",
        text: "A client came to us recently after a nightmare at another body shop — a bill that kept growing, work they never approved, and weeks of getting the runaround trying to get their own car back. It was not the first time we've seen it, and it won't be the last. After an accident you're stressed, you're in a hurry, and you're trusting strangers with a very expensive car. That is exactly when dishonest shops do their best work. So here are the five warning signs we tell everyone to watch for, and what to research before you hand over your keys.",
      },
      { type: "h2", text: "Sign 1: The estimate that keeps growing" },
      {
        type: "p",
        text: "The classic bait: a quote far below everyone else's to win your business, then a parade of 'surprises' once your car is apart. Some cost growth is legitimate — hidden damage does get found during teardown, and honest shops document it with photos and call you before proceeding. The scam version never calls first. It just bills. Protect yourself by getting the estimate in writing, asking what's included and what could change, and being deeply suspicious of any quote dramatically lower than the rest. In body work, the cheapest estimate is very often the most expensive bill.",
      },
      { type: "h2", text: "Sign 2: Urgent work you never asked about" },
      {
        type: "p",
        text: "Fear is a sales tool. 'Your frame is bent, it's unsafe to drive, we need to start today' — delivered with urgency and no evidence. A legitimate safety concern comes with photos, measurements, and an explanation you can understand. A pressure tactic comes with a clipboard and a pen. Any shop that won't show you the damage, explain it plainly, and give you time to think is a shop you should walk away from. Your car survived the accident; it can survive you taking a day to get a second opinion.",
      },
      { type: "h2", text: "Sign 3: They won't let you take your car back" },
      {
        type: "p",
        text: "This is the one that traps people. The shop has your car disassembled, the bill has ballooned, and when you say you want to take it elsewhere, suddenly there are 'storage fees,' 'teardown fees,' and delays. A reputable shop gives you a written authorization before touching your car that spells out exactly what happens if you change your mind — including any diagnostic or teardown charge, agreed up front. Never sign a blank work order. Never authorize repairs verbally without a written estimate. And know this: in California, a shop cannot hold your car hostage over a disputed bill without following proper lien procedures — which most scam shops are counting on you not knowing.",
      },
      { type: "h2", text: "Sign 4: No itemized invoice, ever" },
      {
        type: "p",
        text: "An honest repair produces paperwork: a written estimate before work starts, a supplement record if hidden damage is found, and an itemized final invoice showing parts, labor hours, materials, and sublet work like calibration. If a shop hands you a single number on a napkin — or worse, gets annoyed when you ask for an itemized bill — that is not a paperwork preference. That is concealment. You have every right to know what you paid for, part by part and hour by hour.",
      },
      { type: "h2", text: "Sign 5: Your insurer picks the shop for you" },
      {
        type: "p",
        text: "This one isn't the shop's scam — it's your insurer's. 'We recommend you use one of our network shops' sounds helpful. In California, you have the legal right to choose your own repair shop, and an insurer steering you to theirs is illegal. Network shops aren't necessarily bad, but the arrangement exists to control the insurer's costs, not to get you the best repair. For a Tesla — aluminum panels, specific repair procedures, cameras and sensors that must be recalibrated — you want the shop that's best at Teslas, not the one that's cheapest for your insurer.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "All body shops are basically the same, so just pick the cheapest or closest. A Tesla is not a Camry with a different badge — aluminum body work, parts lead times, and ADAS calibration make shop expertise the single biggest variable in your repair. The shop matters more than the estimate.",
      },
      { type: "h2", text: "What to research before you hand over the keys" },
      {
        type: "p",
        text: "Read the reviews — not just the stars, the actual words, especially how the shop handles problems. Ask how often they work on Teslas specifically, and what their process is for camera and sensor calibration after structural or glass work. Ask whether they use OEM parts and how they handle supplements with your insurer. Ask about the warranty on their work. And get everything in writing before the first bolt comes off. A good shop welcomes all of these questions. A bad shop gets defensive about every single one — which tells you everything you need to know.",
      },
      {
        type: "p",
        text: "If your Tesla needs body work, bring it to us for a free inspection at our Sun Valley shop. We document everything with photos, give written estimates, handle the insurance paperwork and supplements directly, and calibrate ADAS systems as part of the repair. Our collision center handles all EVs plus gas vehicles, and if your car needs to stay with us, we have Tesla rentals available on-site, subject to availability. Call (818) 281-7757 or book online.",
      },
    ],
    faqs: [
      {
        q: "What should I do if a shop is holding my car over a disputed bill?",
        a: "Don't pay under pressure just to get your car back — document everything in writing first. In California, shops must follow proper lien procedures and can't simply keep your car over a disagreement. If you're in this situation, you may want to consult a consumer attorney; the Bureau of Automotive Repair also takes complaints.",
      },
      {
        q: "Is it normal for a body-shop estimate to increase after teardown?",
        a: "Some increase can be legitimate — hidden damage is real, especially behind bumpers and panels. The difference is documentation: an honest shop photographs the hidden damage, calls you with a revised written estimate, and waits for your approval before proceeding.",
      },
      {
        q: "Should I use my insurance company's recommended shop?",
        a: "You don't have to. In California, the choice of repair shop is legally yours. Insurer-recommended shops aren't automatically bad, but get your own estimate from a Tesla-experienced shop and compare before deciding.",
      },
      {
        q: "What paperwork should I get from a body shop?",
        a: "A written estimate before work begins, written authorization that you sign, photo documentation of damage found during teardown, supplement records for any additional work, and an itemized final invoice. If a shop resists any of this, walk away.",
      },
    ],
    serviceLink: { href: "/collision", label: "Collision Center" },
  },
  {
    slug: "tesla-total-loss-vs-repairable",
    title: "Is My Tesla Totaled? Total Loss vs Repairable | EV+ Auto Repair",
    h1: "Totaled or Repairable? How the Decision Actually Works",
    description:
      "How insurers decide whether your Tesla is a total loss — the cost threshold, why Teslas total more easily, and your rights after the decision. EV+ explains.",
    tag: "Collision",
    date: "December 3, 2026",
    publishDate: "2026-12-03",
    excerpt:
      "Your Tesla looks fixable to you, but the insurer says it's totaled — or the other way around. Here's the math behind the decision and what you can do about it.",
    image: whySign,
    imageAlt: "Tesla total loss vs repairable — how the decision works, EV+ Auto Repair",
    videoUrl: "https://www.instagram.com/reel/DY6Ux0xNaPc/",
    body: [
      {
        type: "p",
        text: "After an accident, one question hangs over everything: is my car totaled? Sometimes the answer surprises people in both directions — a car that looks destroyed gets repaired, or a car that looks fixable gets declared a total loss. The decision isn't about how the car looks. It's math, and once you understand the math, the outcome stops feeling arbitrary — and you know what leverage you actually have.",
      },
      { type: "h2", text: "The math: repair cost vs. actual cash value" },
      {
        type: "p",
        text: "An insurer declares a total loss when the cost to repair approaches the car's actual cash value — what it was worth the moment before the crash. The exact threshold varies by insurer and state, but it typically lands around 70 to 75 percent of the car's value. So a Tesla worth $30,000 with $23,000 in estimated repairs is likely totaled; the same damage on a $50,000 car probably isn't. Note the word estimated — the insurer works from their adjuster's number, which is exactly why getting your own estimate from a qualified shop matters. Two estimates on the same car can land on different sides of that line.",
      },
      { type: "h2", text: "Why Teslas total more easily than you'd expect" },
      {
        type: "p",
        text: "Several things stack against Teslas in this math. Aluminum body panels cost more to repair or replace than steel, and they require specific procedures not every shop can do. Parts can carry real lead times, and every week of delay adds rental or storage costs to the claim. Then there's the battery: if the high-voltage pack is damaged or even suspect, that alone can push a repair over the threshold — battery packs are enormously expensive. Add ADAS camera and sensor calibration after structural work, and a repair estimate climbs fast. None of this means your Tesla is fragile. It means the economics of repairing one are different from a steel-bodied gas car, and the total-loss line gets crossed sooner.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "If the insurer totals it, the car must have been destroyed. Plenty of totaled Teslas look surprisingly intact — a straight-looking car with battery damage or extensive aluminum panel replacement can cross the threshold while a crumpled-looking gas car gets fixed. Total loss is a financial decision, not a damage report.",
      },
      { type: "h2", text: "What happens after the total-loss decision" },
      {
        type: "p",
        text: "The insurer pays you the actual cash value of the car, minus your deductible — and that valuation is negotiable, which most people don't realize. If their number looks low, bring comparable listings for the same model, year, mileage, and trim in your area; insurers adjust valuations when presented with real comps. If you owe more than the payout, gap insurance covers the difference — worth checking whether you have it. You generally also have the option to keep the car as owner-retained salvage: the insurer deducts the salvage value from your payout and you keep the vehicle, which then gets a salvage title. That can make sense in narrow cases, but a salvage-titled Tesla comes with real complications — insurance, resale, and Supercharging access can all be affected — so go in with eyes open.",
      },
      { type: "h2", text: "Your rights in the process" },
      {
        type: "p",
        text: "You have more leverage than the process suggests. You can dispute the valuation with comparable sales data. You can get your own repair estimate from a shop you trust — in California, you choose the shop, not the insurer — and a thorough shop estimate sometimes comes in under the threshold where the adjuster's didn't. You can request the full valuation report showing how they arrived at their number. And you don't have to accept the first offer; total-loss settlements are negotiations, not verdicts. The owners who get fair outcomes are the ones who treat it that way.",
      },
      {
        type: "p",
        text: "If your Tesla has been in an accident and you're facing this decision, bring it to us for a free inspection at our Sun Valley shop. We'll give you an honest, thorough estimate — documented with photos — that you can put next to the insurer's numbers. We handle insurance claims directly, including supplements and valuation questions, and our collision center repairs all EVs plus gas vehicles. If the car needs to stay with us, we have Tesla rentals available on-site, subject to availability. Call (818) 281-7757 or book online.",
      },
    ],
    faqs: [
      {
        q: "At what point does an insurer total a Tesla?",
        a: "Typically when estimated repairs reach about 70 to 75 percent of the car's actual cash value, though the exact threshold varies by insurer and state. Because Teslas have expensive aluminum panels, costly parts, and battery considerations, they can cross that line with less visible damage than you'd expect.",
      },
      {
        q: "Can I dispute a total-loss valuation?",
        a: "Yes. Bring comparable listings for the same model, year, mileage, and trim in your area, and request the insurer's full valuation report. Insurers do adjust valuations when presented with solid comparable data.",
      },
      {
        q: "What does owner-retained salvage mean?",
        a: "You keep the totaled car instead of surrendering it — the insurer deducts its salvage value from your payout. The car gets a salvage title, which can complicate insurance, resale, and in some cases Supercharging access. It occasionally makes sense, but understand the tradeoffs first.",
      },
      {
        q: "Should I get my own estimate even if the insurer already did one?",
        a: "Absolutely. In California you choose the repair shop, and an independent shop estimate is your best check on the insurer's numbers. A thorough estimate from a Tesla-experienced shop sometimes lands on a different side of the total-loss threshold.",
      },
    ],
    serviceLink: { href: "/collision/insurance-claims", label: "Insurance Claims" },
  },

];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** True when the post should be publicly visible (publish date reached). */
export function isPublished(post: Post): boolean {
  if (!post.publishDate) return true;
  return post.publishDate <= new Date().toISOString().slice(0, 10);
}

/** Posts visible right now, newest first (dated posts by publish date, then the rest in array order). */
export function getPublishedPosts(): Post[] {
  const dated = POSTS.filter((p) => p.publishDate && isPublished(p)).sort((a, b) =>
    (b.publishDate as string) < (a.publishDate as string) ? -1 : 1
  );
  const undated = POSTS.filter((p) => !p.publishDate);
  return [...dated, ...undated];
}

export function getRelated(slug: string, count = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  const others = getPublishedPosts().filter((p) => p.slug !== slug);
  const sameTag = others.filter((p) => p.tag === current.tag);
  const rest = others.filter((p) => p.tag !== current.tag);
  return [...sameTag, ...rest].slice(0, count);
}
