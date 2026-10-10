export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "myth"; label: string; text: string };

export interface Post {
  slug: string;
  title: string;
  h1: string;
  description: string;
  tag: string;
  date: string;
  excerpt: string;
  videoUrl?: string;
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
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery service & replacement" },
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
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery service & replacement" },
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
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery service & replacement" },
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
    serviceLink: { href: "/service/hv-battery-service", label: "HV battery service & replacement" },
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelated(slug: string, count = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  const others = POSTS.filter((p) => p.slug !== slug);
  const sameTag = others.filter((p) => p.tag === current.tag);
  const rest = others.filter((p) => p.tag !== current.tag);
  return [...sameTag, ...rest].slice(0, count);
}
