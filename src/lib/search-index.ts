// Site search index. Curated by hand on purpose: the whole point of search
// here is symptom keywords ("creak" -> control arms), which no auto-generated
// index can know. When a new page or blog post goes live, add one entry here
// in the same step as publishing it. Blog entries below cover only posts that
// are LIVE as of Nov 9, 2026 — dated future posts (ADAS Nov 12, coolant
// Nov 17, Sentry Nov 19, half shaft Nov 24, inspection Nov 26, body-shop
// scams Dec 1, totaled Dec 3) get an entry when they publish.

export type SearchEntry = {
  title: string;
  url: string;
  blurb: string;
  keywords: string;
};

const PAGES: SearchEntry[] = [
  { title: "Tesla Service & Collision Repair in Los Angeles", url: "/", blurb: "Family-owned Tesla service and collision repair in Sun Valley, Los Angeles.", keywords: "tesla service collision repair sun valley los angeles shop ev" },
  { title: "Tesla Service in Los Angeles", url: "/service", blurb: "Maintenance, inspections, batteries, diagnostics — everything that isn't an accident.", keywords: "tesla service maintenance inspection repair" },
  { title: "Tesla Suspension & Steering", url: "/service/suspension-steering", blurb: "Control arms, bushings, alignment — the suspension work Teslas actually need.", keywords: "suspension creak creaking squeak squeaking clunk clunking noise control arm control arms bushing alignment steering vibration wobble bumpy ride" },
  { title: "Tesla Control Arm Replacement", url: "/service/control-arm-replacement", blurb: "Full control arm replacement — never just the bushing — with a 4-wheel alignment after.", keywords: "control arm control arms creak creaking squeak squeaking clunk noise over bumps upper lower suspension" },
  { title: "Tesla 12V Battery Replacement", url: "/service/12v-battery-replacement", blurb: "12V battery service — the small battery that can strand a Tesla with no warning.", keywords: "12v 12 volt battery dead wont start won't wake up low voltage battery replacement" },
  { title: "Tesla 16V Battery Service", url: "/service/16v-battery-service", blurb: "16V low-voltage battery service for newer Teslas.", keywords: "16v 16 volt battery low voltage" },
  { title: "Tesla Drive Unit Oil Service", url: "/service/drive-unit-oil-service", blurb: "Drive unit gearbox fluid service — $300 per unit, $600 for dual-motor.", keywords: "drive unit oil gear oil differential pentosin oil change gearbox fluid" },
  { title: "Tesla Drive Unit Bushing Replacement", url: "/service/drive-unit-bushing-replacement", blurb: "Drive unit bushing replacement for vibration and noise.", keywords: "drive unit bushing vibration noise" },
  { title: "Tesla High-Voltage Battery Service", url: "/service/hv-battery-service", blurb: "High-voltage battery replacement — the big battery, replaced properly.", keywords: "high voltage hv battery battery replacement range wont charge" },
  { title: "Tesla Radiator & Condenser Cleaning", url: "/service/radiator-condenser-cleaning", blurb: "$150/year radiator and condenser cleaning — Tesla charges $330–$350 for the same job.", keywords: "radiator condenser cleaning overheating supercharging slow ac air conditioning cooling leaves debris" },
  { title: "Tesla Cabin Filter Replacement", url: "/service/cabin-filters-radiator-cleaning", blurb: "Cabin filter replacement — $115. Fixes musty AC smell and weak airflow.", keywords: "cabin filter air filter smell musty ac smell airflow" },
  { title: "Tesla Tire Rotation", url: "/service/tire-rotation", blurb: "Tire rotation — $60. EVs wear tires faster and unevenly.", keywords: "tire rotation tires rotate uneven wear" },
  { title: "Tesla Diagnostics & Error Code Testing", url: "/service/diagnostics", blurb: "Paid diagnostic — find the cause of a warning, noise, or error code.", keywords: "diagnostic error code warning light check popping sound noise error" },
  { title: "Tesla Maintenance & Free Inspections", url: "/service/maintenance-inspections", blurb: "Annual maintenance and free 1-hour inspections.", keywords: "maintenance inspection annual free inspection checkup service schedule" },
  { title: "Tesla Collision Repair in Los Angeles", url: "/collision", blurb: "Accident repair, insurance claims, photo estimates — Tesla and EV collision, done right.", keywords: "collision accident crash dent bumper paint body shop insurance claim estimate" },
  { title: "Tesla Collision Repair", url: "/collision/collision-repair", blurb: "Structural and panel repair for Tesla and other EVs.", keywords: "collision repair body repair dent panel" },
  { title: "Tesla ADAS Camera Calibration", url: "/collision/adas-calibration", blurb: "Camera and sensor calibration after body work, so Autopilot reads the road right.", keywords: "adas calibration camera autopilot sensor lane" },
  { title: "Tesla Paint & Refinishing", url: "/collision/paint-refinishing", blurb: "Factory paint matching and refinishing after collision repair.", keywords: "paint scratch refinish color match" },
  { title: "Insurance Claims — We Handle It", url: "/collision/insurance-claims", blurb: "We document the damage, coordinate with the adjuster, and file supplements.", keywords: "insurance claim geico state farm progressive supplement adjuster" },
  { title: "Gas Vehicle Collision Repair", url: "/collision/gas-vehicle-collision", blurb: "Collision repair for gas vehicles too — collision is where every make is welcome.", keywords: "gas gasoline non-tesla other car" },
  { title: "Tesla Before & After Gallery", url: "/collision/before-after-gallery", blurb: "Real Tesla repairs, before and after.", keywords: "before after photos gallery results examples" },
  { title: "Los Angeles Tesla Collision Repair", url: "/collision-repair-los-angeles", blurb: "Tesla & EV collision repair in Los Angeles — tow truck pickup, insurance handled, on-site Tesla rental.", keywords: "los angeles la collision accident" },
  { title: "Tesla Suspension Repair in Los Angeles", url: "/tesla-suspension-repair-los-angeles", blurb: "Tesla suspension repair in LA — control arms, bushings, alignment.", keywords: "los angeles suspension creak clunk" },
  { title: "Tesla Collision Repair in Glendale", url: "/collision-repair-glendale", blurb: "Tesla collision repair near Glendale — structural repair, ADAS calibration, insurance handled.", keywords: "glendale collision" },
  { title: "Tesla Collision Repair in North Hollywood", url: "/collision-repair-north-hollywood", blurb: "Tesla collision repair near North Hollywood.", keywords: "north hollywood noho collision" },
  { title: "Tesla Bumper Repair in Burbank", url: "/bumper-repair-burbank", blurb: "Tesla bumper repair near Burbank.", keywords: "burbank bumper dent" },
  { title: "Tesla Paint & Refinish in Van Nuys", url: "/paint-refinish-van-nuys", blurb: "Tesla paint and refinishing near Van Nuys.", keywords: "van nuys paint scratch" },
  { title: "Tesla 12V Battery Replacement in Burbank", url: "/tesla-12v-battery-replacement-burbank", blurb: "Tesla 12V battery replacement near Burbank.", keywords: "burbank 12v battery" },
  { title: "Tesla Collision Repair in Tujunga", url: "/collision-repair-tujunga", blurb: "Tesla collision repair near Tujunga — about 10 minutes from the shop.", keywords: "tujunga collision" },
  { title: "Tesla Collision Repair in Santa Clarita", url: "/collision-repair-santa-clarita", blurb: "Tesla collision repair near Santa Clarita — about 25 minutes down the 5.", keywords: "santa clarita valencia collision" },
  { title: "Tesla Collision Repair in Reseda", url: "/collision-repair-reseda", blurb: "Tesla collision repair near Reseda.", keywords: "reseda collision" },
  { title: "Tesla Repair in the San Fernando Valley", url: "/tesla-repair-san-fernando-valley", blurb: "Tesla repair across the San Fernando Valley.", keywords: "san fernando valley valley tesla repair" },
  { title: "EV+ Auto Rentals — Tesla Rentals", url: "/rentals", blurb: "Rent a Tesla while yours is in the shop — optional, based on availability.", keywords: "rental rent loaner tesla rental car rental" },
  { title: "Tesla USB Drives — Shop", url: "/shop", blurb: "128GB OEM Tesla USB drives for Sentry Mode and Dashcam — from $29.99.", keywords: "shop usb flash drive usb drive accessory buy" },
  { title: "Tesla 128GB USB Drive (Pre-Owned)", url: "/shop/tesla-usb-drive-128gb", blurb: "128GB OEM Tesla USB drive — $29.99 + shipping. Sentry Mode and Dashcam ready.", keywords: "usb flash drive 128gb sentry dashcam" },
  { title: "Tesla 128GB USB Drive — Flat Design (Pre-Owned)", url: "/shop/tesla-usb-drive-128gb-flat", blurb: "Flat-design 128GB Tesla USB drive — $34.99 + shipping.", keywords: "usb flash drive flat 128gb sentry" },
  { title: "About EV+ Auto Repair", url: "/about", blurb: "Family-owned shop in Sun Valley — from classic Jeep and truck restoration to Tesla and EV work.", keywords: "about family history hovik shop story" },
  { title: "EV+ Blog — Tesla Service & Repair Guides", url: "/blog", blurb: "Guides on Tesla maintenance, batteries, suspension, collision, and more.", keywords: "blog articles guides tips" },
  { title: "Book Service or an Accident Estimate", url: "/book", blurb: "Book a free inspection or start an accident estimate — photo estimate, no appointment needed to start.", keywords: "book appointment estimate free inspection schedule" },
];

const BLOG: SearchEntry[] = [
  { title: "What Does a Tesla Battery Replacement Look Like?", url: "/blog/tesla-hv-battery-replacement-what-it-looks-like", blurb: "A Tesla Model Y with its high-voltage battery removed — and what a replacement actually involves.", keywords: "blog battery hv high voltage replacement" },
  { title: "Does Your Tesla Need an Oil Change? Yes—Sort Of", url: "/blog/does-your-tesla-need-an-oil-change", blurb: "Teslas don't need engine oil — but the drive unit gearbox fluid is a real service.", keywords: "blog oil change drive unit gearbox fluid" },
  { title: "Is Tesla Drive Unit Fluid Really “Lifetime”?", url: "/blog/tesla-drive-unit-fluid-lifetime-myth", blurb: "Tesla calls it a lifetime fluid. Here's what it actually looks like at high mileage.", keywords: "blog drive unit fluid lifetime oil" },
  { title: "What's Inside Tesla Drive Unit Oil at 100K Miles?", url: "/blog/tesla-drive-unit-oil-100k-miles", blurb: "We drained drive unit oil at 100,000 miles and sent it to a lab.", keywords: "blog drive unit oil 100k lab" },
  { title: "Tesla Model 3 “Kick” or Vibration? That's Not Normal", url: "/blog/tesla-model-3-vibration-fix", blurb: "Feeling a kick or vibration in your Model 3? Here's what causes it and how we diagnose it.", keywords: "blog model 3 vibration kick shudder" },
  { title: "How Much Does a Tesla Battery Replacement Cost?", url: "/blog/tesla-battery-replacement-cost", blurb: "Battery replacement cost depends on year, model, and pack — honest breakdown.", keywords: "blog battery replacement cost price" },
  { title: "Do Teslas Need Maintenance? Yes—Just Different", url: "/blog/do-teslas-need-maintenance", blurb: "Radiator cleaning, cabin filters, 12V battery, suspension, drive unit service — the full list.", keywords: "blog maintenance service schedule" },
  { title: "Creaking Front Suspension on Your Tesla?", url: "/blog/tesla-front-suspension-creaking", blurb: "Creaking from the front suspension? Usually control arms or bushings. Free inspection.", keywords: "blog creak creaking suspension control arm bushing noise" },
  { title: "Tesla Battery Health: Charging Tips That Work", url: "/blog/tesla-battery-health-charging-tips", blurb: "Minimize supercharging, don't charge past 80% daily — simple habits.", keywords: "blog battery health charging tips supercharging" },
  { title: "Tesla Model Y Battery Warranty Explained", url: "/blog/tesla-model-y-battery-warranty", blurb: "8 years or 120,000 miles — what's covered, what's not.", keywords: "blog model y battery warranty" },
  { title: "Tesla Cabin Filter Replacement: Why It Matters", url: "/blog/tesla-cabin-filter-replacement-why-it-matters", blurb: "Musty AC smell? Weak airflow? Your cabin filter is overdue.", keywords: "blog cabin filter smell ac airflow" },
  { title: "Tesla 12V Battery Warning Signs", url: "/blog/tesla-12v-battery-warning-signs", blurb: "Your 12V battery can strand you with no warning. Learn the signs.", keywords: "blog 12v battery warning signs dead" },
  { title: "Why We Replace the Full Control Arm, Never Just the Bushing", url: "/blog/why-we-replace-the-full-control-arm", blurb: "Some shops press a new bushing into a worn control arm. Here's why we replace the full arm.", keywords: "blog control arm bushing full replacement" },
  { title: "Tesla Collision Repair: What Actually Happens After an Accident", url: "/blog/tesla-collision-repair-what-to-expect", blurb: "From estimate to insurance to paint and calibration — the real process.", keywords: "blog collision accident insurance process" },
  { title: "Why Tire Rotation Matters More on Your Tesla", url: "/blog/tesla-tire-rotation-why-evs-need-it", blurb: "EVs wear tires faster and unevenly. Tesla recommends rotation every 6,250 miles.", keywords: "blog tire rotation uneven wear" },
  { title: "Tesla Radiator & Condenser Cleaning", url: "/blog/tesla-radiator-condenser-cleaning", blurb: "Weak AC? Valley dust clogs the radiator and condenser. $150 cleaning.", keywords: "blog radiator condenser cleaning ac cooling" },
];

export const SEARCH_INDEX: SearchEntry[] = [...PAGES, ...BLOG];

function fieldMatch(haystack: string, token: string): boolean {
  if (haystack.includes(token)) return true;
  // Stem-ish: "creaking" should match keyword "creak"; "batteries" -> "battery".
  const words = haystack.split(/[^a-z0-9]+/);
  return words.some((w) => w.length >= 4 && token.includes(w));
}

export function searchSite(query: string): SearchEntry[] {
  const tokens = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1);
  if (tokens.length === 0) return [];
  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of SEARCH_INDEX) {
    const title = entry.title.toLowerCase();
    const kw = entry.keywords.toLowerCase();
    const blurb = entry.blurb.toLowerCase();
    const slug = entry.url.toLowerCase();
    let score = 0;
    let allMatch = true;
    for (const token of tokens) {
      let matched = false;
      if (title.includes(token)) { score += 3; matched = true; }
      if (fieldMatch(kw, token)) { score += 2; matched = true; }
      if (blurb.includes(token)) { score += 1; matched = true; }
      if (slug.includes(token)) { score += 1; matched = true; }
      if (!matched) { allMatch = false; break; }
    }
    if (allMatch && score > 0) scored.push({ entry, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 8).map((s) => s.entry);
}
