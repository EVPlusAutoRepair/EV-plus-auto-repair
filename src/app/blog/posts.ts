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
  /** ISO date (YYYY-MM-DD) when the post becomes visible. Absent = always visible. */
  publishDate?: string;
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
    date: "October 29, 2026",
    publishDate: "2026-10-29",
    excerpt:
      "That musty smell when the AC kicks on is your cabin filter begging for retirement. Here's what it does, when to replace it, and what the service looks like at our Sun Valley shop.",
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
    date: "November 12, 2026",
    publishDate: "2026-11-12",
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
    date: "November 26, 2026",
    publishDate: "2026-11-26",
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
    date: "December 10, 2026",
    publishDate: "2026-12-10",
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
    slug: "rent-a-tesla-while-yours-is-in-the-shop",
    title: "In the Shop? Rent a Tesla and Keep Moving | EV+ Auto Repair",
    h1: "Drop Off Your Tesla, Drive Off in a Tesla",
    description:
      "While your Tesla is being repaired at EV+ Auto Repair, rent one of our Teslas. Subject to availability — perfect during multi-day collision repairs.",
    tag: "Rentals",
    date: "December 24, 2026",
    publishDate: "2026-12-24",
    excerpt:
      "Nobody wants to be without a car while theirs is in the shop. Our Tesla rentals keep you moving while we handle the repair.",
    body: [
      {
        type: "p",
        text: "Here is the part of car repair nobody talks about: the repair itself might be straightforward, but being without your car for days is the real headache. Work, school runs, errands — life does not pause because your Tesla is on a lift. We see it every day, which is exactly why we keep Teslas available to rent while yours is with us.",
      },
      { type: "h2", text: "Why a Tesla rental just makes sense" },
      {
        type: "p",
        text: "If you drive a Tesla every day, switching to some random gas rental for a week is miserable. Different charging, different driving, different everything. Staying in a Tesla means zero learning curve — you already know how it drives, where to charge, and how your phone key works. It is the closest thing to not having your car in the shop at all.",
      },
      { type: "h2", text: "Perfect for repairs that take days" },
      {
        type: "p",
        text: "This matters most during collision repairs, which can take several days while panels are ordered, painted, and fitted. Instead of piecing together rides or paying for a rental car company, you drop off your Tesla and drive off in a Tesla. Ask about a rental when you book — rentals are subject to availability, so the earlier you mention it, the better.",
      },
      {
        type: "myth",
        label: "The myth busted",
        text: "People assume a shop rental means getting stuck with whatever is left on the lot. Our rentals are Teslas, maintained by the same techs who work on your car. You are not downgrading for the week.",
      },
      { type: "h2", text: "How it works" },
      {
        type: "p",
        text: "It is simple. When you schedule your repair, let us know you will need a rental. Bring proof of full-coverage insurance when you drop off your car, and we will get you set up in a rental Tesla for the duration of the repair. When your car is done, you swap back. One trip, no juggling.",
      },
      {
        type: "p",
        text: "Not sure what your Tesla needs yet? Start with our free 1-hour inspection. We will diagnose the issue, give you a straight answer on the repair, and sort out a rental at the same time if the job is going to take a few days. Call (818) 281-7757 or book online.",
      },
    ],
    faqs: [
      {
        q: "How do I reserve a rental Tesla?",
        a: "Mention it when you book your repair. Rentals are subject to availability, so booking early gives you the best shot.",
      },
      {
        q: "Do I need insurance to take a rental?",
        a: "Yes. You will need to show proof of full-coverage insurance when you pick up the rental.",
      },
      {
        q: "How long can I keep the rental?",
        a: "For the duration of your repair. When your Tesla is finished, you bring the rental back and drive yours home.",
      },
      {
        q: "What if no rentals are available?",
        a: "We will tell you upfront when you book. Availability changes week to week, so it is always worth asking.",
      },
    ],
    serviceLink: { href: "/rentals", label: "Tesla rentals" },
  },
  {
    slug: "tesla-tire-rotation-why-evs-need-it",
    title: "Why Tire Rotation Matters More on Your Tesla | EV+ Auto Repair",
    h1: "Your Tesla Eats Tires Faster Than You Think",
    description:
      "EVs wear tires faster and unevenly thanks to instant torque and battery weight. Tesla recommends rotation every 6,250 miles. Here is why it matters.",
    tag: "Maintenance",
    date: "January 7, 2027",
    publishDate: "2027-01-07",
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
