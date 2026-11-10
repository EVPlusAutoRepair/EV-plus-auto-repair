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
  { title: "Tesla Service & Collision Repair in Los Angeles", url: "/", blurb: "Family-owned Tesla service and collision repair in Sun Valley, Los Angeles.", keywords: "tesla service collision repair sun valley los angeles shop ev hours phone number address location directions contact electric open located center alternative" },
  { title: "Tesla Service in Los Angeles", url: "/service", blurb: "Maintenance, inspections, batteries, diagnostics — everything that isn't an accident.", keywords: "tesla service maintenance inspection repair cost price model 3 y s x cybertruck electric center alternative" },
  { title: "Tesla Suspension & Steering", url: "/service/suspension-steering", blurb: "Control arms, bushings, alignment — the suspension work Teslas actually need.", keywords: "suspension creak creaking squeak squeaking clunk clunking noise control arm control arms bushing alignment steering vibration wobble bumpy ride cost price model 3 y s x cybertruck" },
  { title: "Tesla Control Arm Replacement", url: "/service/control-arm-replacement", blurb: "Full control arm replacement — never just the bushing — with a 4-wheel alignment after.", keywords: "control arm control arms creak creaking squeak squeaking clunk noise over bumps upper lower suspension cost price model 3 y s x cybertruck" },
  { title: "Tesla 12V Battery Replacement", url: "/service/12v-battery-replacement", blurb: "12V battery service — the small battery that can strand a Tesla with no warning.", keywords: "12v 12 volt battery dead wont start won't wake up low voltage battery replacement cost price model 3 y s x cybertruck" },
  { title: "Tesla 16V Battery Service", url: "/service/16v-battery-service", blurb: "16V low-voltage battery service for newer Teslas.", keywords: "16v 16 volt battery low voltage cost price model 3 y s x cybertruck" },
  { title: "Tesla Drive Unit Oil Service", url: "/service/drive-unit-oil-service", blurb: "Drive unit gearbox fluid service — $300 per unit, $600 for dual-motor.", keywords: "drive unit oil gear oil differential pentosin oil change gearbox fluid cost price model 3 y s x cybertruck" },
  { title: "Tesla Drive Unit Bushing Replacement", url: "/service/drive-unit-bushing-replacement", blurb: "Drive unit bushing replacement for vibration and noise.", keywords: "drive unit bushing vibration noise cost price model 3 y s x cybertruck" },
  { title: "Tesla High-Voltage Battery Service", url: "/service/hv-battery-service", blurb: "High-voltage battery replacement — the big battery, replaced properly.", keywords: "high voltage hv battery battery replacement range wont charge cost price model 3 y s x cybertruck" },
  { title: "Tesla Radiator & Condenser Cleaning", url: "/service/radiator-condenser-cleaning", blurb: "$150/year radiator and condenser cleaning — Tesla charges $330–$350 for the same job.", keywords: "radiator condenser cleaning overheating supercharging slow ac air conditioning cooling leaves debris cost price model 3 y s x cybertruck" },
  { title: "Tesla Cabin Filter Replacement", url: "/service/cabin-filters-radiator-cleaning", blurb: "Cabin filter replacement — $115. Fixes musty AC smell and weak airflow.", keywords: "cabin filter air filter smell musty ac smell airflow cost price model 3 y s x cybertruck" },
  { title: "Tesla Tire Rotation", url: "/service/tire-rotation", blurb: "Tire rotation — $60. EVs wear tires faster and unevenly.", keywords: "tire rotation tires rotate uneven wear cost price model 3 y s x cybertruck pressure tpms sensor" },
  { title: "Tesla Diagnostics & Error Code Testing", url: "/service/diagnostics", blurb: "Free 1-hour inspection or a paid 48-hour diagnostic appointment — find the cause of a warning, noise, or error code.", keywords: "diagnostic error code warning light check popping sound noise error cost price model 3 y s x cybertruck free inspection" },
  { title: "Tesla Maintenance & Free Inspections", url: "/service/maintenance-inspections", blurb: "Annual maintenance and free 1-hour inspections.", keywords: "maintenance inspection annual free inspection checkup service schedule cost price model 3 y s x cybertruck" },
  { title: "Tesla Collision Repair in Los Angeles", url: "/collision", blurb: "Accident repair, insurance claims, photo estimates — Tesla and EV collision, done right.", keywords: "collision accident crash dent bumper paint body shop insurance claim estimate cost price model 3 y s x cybertruck warranty labor sherman oaks" },
  { title: "Tesla Collision Repair", url: "/collision/collision-repair", blurb: "Structural and panel repair for Tesla and other EVs.", keywords: "collision repair body repair dent panel cost price model 3 y s x cybertruck warranty labor" },
  { title: "Tesla ADAS Camera Calibration", url: "/collision/adas-calibration", blurb: "Camera and sensor calibration after body work, so Autopilot reads the road right.", keywords: "adas calibration camera autopilot sensor lane cost price model 3 y s x cybertruck warranty labor" },
  { title: "Tesla Paint & Refinishing", url: "/collision/paint-refinishing", blurb: "Factory paint matching and refinishing after collision repair.", keywords: "paint scratch refinish color match cost price model 3 y s x cybertruck warranty labor" },
  { title: "Insurance Claims — We Handle It", url: "/collision/insurance-claims", blurb: "We document the damage, coordinate with the adjuster, and file supplements.", keywords: "insurance claim geico state farm progressive supplement adjuster cost price model 3 y s x cybertruck warranty deductible rental labor claim denied total loss diminished value rental reimbursement out of pocket oop aaa mercury" },
  { title: "Gas Vehicle Collision Repair", url: "/collision/gas-vehicle-collision", blurb: "Collision repair for gas vehicles too — collision is where every make is welcome.", keywords: "gas gasoline non-tesla other car cost price model 3 y s x cybertruck warranty rivian lucid evs electric labor" },
  { title: "Tesla Before & After Gallery", url: "/collision/before-after-gallery", blurb: "Real Tesla repairs, before and after.", keywords: "before after photos gallery results examples cost price model 3 y s x cybertruck warranty labor" },
  { title: "Los Angeles Tesla Collision Repair", url: "/collision-repair-los-angeles", blurb: "Tesla & EV collision repair in Los Angeles — tow truck pickup, insurance handled, on-site Tesla rental.", keywords: "los angeles la collision accident cost price model 3 y s x cybertruck warranty labor sherman oaks" },
  { title: "Tesla Suspension Repair in Los Angeles", url: "/tesla-suspension-repair-los-angeles", blurb: "Tesla suspension repair in LA — control arms, bushings, alignment.", keywords: "los angeles suspension creak clunk cost price model 3 y s x cybertruck" },
  { title: "Tesla Collision Repair in Glendale", url: "/collision-repair-glendale", blurb: "Tesla collision repair near Glendale — structural repair, ADAS calibration, insurance handled.", keywords: "glendale collision cost price model 3 y s x cybertruck warranty" },
  { title: "Tesla Collision Repair in North Hollywood", url: "/collision-repair-north-hollywood", blurb: "Tesla collision repair near North Hollywood.", keywords: "north hollywood noho collision cost price model 3 y s x cybertruck warranty" },
  { title: "Tesla Bumper Repair in Burbank", url: "/bumper-repair-burbank", blurb: "Tesla bumper repair near Burbank.", keywords: "burbank bumper dent cost price model 3 y s x cybertruck" },
  { title: "Tesla Paint & Refinish in Van Nuys", url: "/paint-refinish-van-nuys", blurb: "Tesla paint and refinishing near Van Nuys.", keywords: "van nuys paint scratch cost price model 3 y s x cybertruck" },
  { title: "Tesla 12V Battery Replacement in Burbank", url: "/tesla-12v-battery-replacement-burbank", blurb: "Tesla 12V battery replacement near Burbank.", keywords: "burbank 12v battery cost price model 3 y s x cybertruck" },
  { title: "Tesla Collision Repair in Tujunga", url: "/collision-repair-tujunga", blurb: "Tesla collision repair near Tujunga — about 10 minutes from the shop.", keywords: "tujunga collision cost price model 3 y s x cybertruck warranty" },
  { title: "Tesla Collision Repair in Santa Clarita", url: "/collision-repair-santa-clarita", blurb: "Tesla collision repair near Santa Clarita — about 25 minutes down the 5.", keywords: "santa clarita valencia collision cost price model 3 y s x cybertruck warranty" },
  { title: "Tesla Collision Repair in Reseda", url: "/collision-repair-reseda", blurb: "Tesla collision repair near Reseda.", keywords: "reseda collision cost price model 3 y s x cybertruck warranty" },
  { title: "Tesla Repair in the San Fernando Valley", url: "/tesla-repair-san-fernando-valley", blurb: "Tesla repair across the San Fernando Valley.", keywords: "san fernando valley valley tesla repair cost price model 3 y s x cybertruck" },
  { title: "EV+ Auto Rentals — Tesla Rentals", url: "/rentals", blurb: "Rent a Tesla while yours is in the shop — optional, based on availability.", keywords: "rental rent loaner tesla rental car rental cost price model 3 y s x cybertruck" },
  { title: "Tesla USB Drives — Shop", url: "/shop", blurb: "128GB OEM Tesla USB drives for Sentry Mode and Dashcam — from $29.99.", keywords: "shop usb flash drive usb drive accessory buy cost price model 3 y s x cybertruck" },
  { title: "Tesla 128GB USB Drive (Pre-Owned)", url: "/shop/tesla-usb-drive-128gb", blurb: "128GB OEM Tesla USB drive — $29.99 + shipping. Sentry Mode and Dashcam ready.", keywords: "usb flash drive 128gb sentry dashcam cost price model 3 y s x cybertruck" },
  { title: "Tesla 128GB USB Drive — Flat Design (Pre-Owned)", url: "/shop/tesla-usb-drive-128gb-flat", blurb: "Flat-design 128GB Tesla USB drive — $34.99 + shipping.", keywords: "usb flash drive flat 128gb sentry cost price model 3 y s x cybertruck" },
  { title: "About EV+ Auto Repair", url: "/about", blurb: "Family-owned shop in Sun Valley — from classic Jeep and truck restoration to Tesla and EV work.", keywords: "about family history hovik shop story" },
  { title: "EV+ Blog — Tesla Service & Repair Guides", url: "/blog", blurb: "Guides on Tesla maintenance, batteries, suspension, collision, and more.", keywords: "blog articles guides tips" },
  { title: "Book Service or an Accident Estimate", url: "/book", blurb: "Book a free inspection or start an accident estimate — photo estimate, no appointment needed to start.", keywords: "book appointment estimate free inspection schedule" },
  { title: "Tesla Noises & Vibrations Fixed in LA | EV+ Auto Repair", url: "/service/tesla-noises-vibrations", blurb: "Tesla clicking, rattling, humming or shaking in Sun Valley, LA? We diagnose noises, vibrations & pulling to one side.", keywords: "Tesla noise, Tesla vibration, Tesla clicking noise, Tesla rattling, Tesla shaking, Tesla pulls to one side, Tesla grinding noise, Tesla humming noise" },
  { title: "Tesla Won't Open, Start or Drive? LA Fix | EV+ Auto Repair", url: "/service/tesla-wont-open-start-drive", blurb: "Tesla door won't open, key not detected, or car won't go into drive? Sun Valley, LA diagnostics find the fault fast.", keywords: "Tesla door won't open, Tesla won't start, Tesla won't go into drive, Tesla key not detected, Tesla phone key not working, Tesla window won't go up, Tesla won't unlock" },
  { title: "Tesla Screen & Autopilot Repair in LA | EV+ Auto Repair", url: "/service/tesla-touchscreen-autopilot-sentry", blurb: "Tesla touchscreen frozen or black, Autopilot unavailable, Sentry Mode not recording? Sun Valley, LA diagnostics.", keywords: "Tesla touchscreen frozen, Tesla screen black, Tesla screen not working, Autopilot not working, Autopilot unavailable, Sentry Mode not recording, Tesla Dashcam not recording" },
  { title: "Tesla Leak, Smell & Range Loss Diagnosis LA | EV+ Auto Repair", url: "/service/tesla-leaks-smells-range", blurb: "Tesla fluid leak, burning smell, or range dropped suddenly? Sun Valley, LA diagnostics find the cause fast.", keywords: "Tesla fluid leak, Tesla leak under car, Tesla water leak, Tesla burning smell, Tesla battery draining fast, Tesla range dropped, Tesla error message, Tesla warning message" },
  { title: "Tesla Wiper Blade Replacement in Los Angeles | EV+ Auto Repair", url: "/service/tesla-wiper-blade-replacement", blurb: "Streaking, skipping, or chattering wipers? Fresh Tesla wiper blades fitted fast in Sun Valley, LA.", keywords: "tesla wiper blade replacement, windshield wipers, wiper blades, tesla wipers, sun valley" },
  { title: "Tesla Key Fob Battery Service in Los Angeles | EV+ Auto Repair", url: "/service/tesla-key-fob-battery", blurb: "Tesla key fob not detected or range fading? Quick key fob battery replacement and key checks in Sun Valley, LA.", keywords: "tesla key fob battery, key fob, key not detected, phone key, key card, sun valley" },
  { title: "Tesla Software Update Problems in Los Angeles | EV+ Auto Repair", url: "/service/tesla-software-update", blurb: "Tesla software update stuck, failed, or car acting odd after one? Diagnostics for update problems in Sun Valley, LA.", keywords: "tesla software update, software update stuck, update failed, tesla update problems, sun valley" },
  { title: "Tesla Door Handle Repair in Los Angeles | EV+ Auto Repair", url: "/service/tesla-door-handle-repair", blurb: "Tesla door handle won't present, press, or open? Diagnosis and repair in Sun Valley, LA.", keywords: "tesla door handle repair, door handle not working, tesla door handle, sun valley" },
  { title: "Tesla Window Regulator Repair in Los Angeles | EV+ Auto Repair", url: "/service/tesla-window-regulator", blurb: "Tesla window stuck, slow, or noisy? We diagnose regulator and motor faults in Sun Valley, LA.", keywords: "tesla window regulator, window won't go up, window won't go down, slow window, sun valley" },
  { title: "Tesla Headlight Replacement in Los Angeles | EV+ Auto Repair", url: "/service/tesla-headlight-taillight", blurb: "Tesla headlight or taillight dim, dead, foggy, or crash-damaged? Replacement in Sun Valley, LA.", keywords: "tesla headlight replacement, tesla taillight replacement, headlight damage, taillight damage, condensation headlight, sun valley" },
  { title: "Tesla Charge Port Repair in Los Angeles | EV+ Auto Repair", url: "/service/tesla-charge-port", blurb: "Tesla charge port door won't open or close, or charging keeps cutting out? We diagnose the port, door, and latch first.", keywords: "Tesla charge port repair, charge port door won't open, Tesla won't charge, charge port replacement Los Angeles" },
  { title: "Tesla Frunk & Trunk Latch Repair in LA | EV+ Auto Repair", url: "/service/tesla-frunk-trunk-latch", blurb: "Tesla frunk or trunk won't open, close, or latch? Latch, striker, and strut repair in Sun Valley, LA.", keywords: "Tesla frunk won't open, Tesla trunk won't close, frunk latch repair, trunk strut replacement" },
  { title: "Tesla Model X Falcon Wing Door Repair in LA | EV+ Auto Repair", url: "/service/tesla-falcon-wing-door", blurb: "Model X only: falcon wing door won't open or close? Sensor and alignment diagnosis first, then the fix.", keywords: "Model X falcon wing door repair, falcon wing door won't open, falcon wing door sensor, Model X door alignment" },
  { title: "Tesla Brake Service & Pads in Los Angeles | EV+ Auto Repair", url: "/service/tesla-brake-service", blurb: "Tesla brake pads, rotors, squeal, or grinding? EV brakes last longer but still need service — book it right on the form.", keywords: "Tesla brake service, Tesla brake pads, Tesla brakes squealing, Tesla brake grinding" },
  { title: "Tesla AC Not Cold? Repair in Los Angeles | EV+ Auto Repair", url: "/service/tesla-ac-not-cold", blurb: "Tesla AC blowing warm or weak? Cabin filter, clogged radiator/condenser, or refrigerant — we find the cause.", keywords: "Tesla AC not cold, Tesla AC blowing warm, Tesla AC repair Los Angeles, Tesla cabin filter" },
  { title: "Tesla Coolant Leak Repair in Los Angeles | EV+ Auto Repair", url: "/service/tesla-coolant-leak", blurb: "Tesla coolant leak or low coolant warning? We pressure-test, trace the leak, and fix it before it risks the battery.", keywords: "Tesla coolant leak, Tesla low coolant warning, Tesla cooling system repair, Tesla coolant leak Los Angeles" },
  { title: "Tesla Half Shaft & CV Axle Repair in LA | EV+ Auto Repair", url: "/service/tesla-half-shaft", blurb: "Clicking when turning your Tesla? Worn half shafts / CV axles are a common cause — we diagnose first.", keywords: "Tesla half shaft, Tesla CV axle, Tesla clicking when turning, half shaft replacement" },
  { title: "Tesla Power Steering & Suspension Repair LA | EV+ Auto Repair", url: "/service/tesla-power-steering-suspension", blurb: "Tesla steering vibration, power steering, struts, shocks, or sway bars — full-system inspection, full control arm replacement only.", keywords: "Tesla power steering repair, Tesla steering wheel vibration, Tesla shock absorber, Tesla strut replacement, Tesla sway bar" },
  { title: "After an Accident: Tesla Collision Help | EV+ Auto Repair", url: "/collision/after-an-accident", blurb: "Hit in your Tesla? What to do after an accident — photo estimates, insurance and supplements, frame and airbag damage, and what a total loss means.", keywords: "after an accident Tesla, Tesla accident repair, Tesla totaled, Tesla frame damage, Tesla airbag deployed, hit and run Tesla, rear ended Tesla, hail damage Tesla" },
  { title: "Is EV+ Tesla Certified? Independent Tesla Shop in Los Angeles | EV+ Auto Repair", url: "/faq/is-ev-plus-tesla-certified", blurb: "EV+ Auto Repair is not Tesla-certified — but we are approved to order genuine Tesla parts through Tesla's EPC catalog. Independent Tesla service & collision in Sun Valley, LA.", keywords: "Tesla certified, Tesla approved, not Tesla certified, independent Tesla shop, Tesla service center alternative, Tesla EPC, genuine Tesla parts" },
  { title: "Visiting EV+ Auto Repair | Tesla Service in Sun Valley, Los Angeles", url: "/faq/visiting-ev-plus", blurb: "Hours, location, walk-ins, same-day service, and what to expect when visiting EV+ Auto Repair at 9755 Glenoaks Blvd, Sun Valley, CA 91352. Call/text (818) 281-7757.", keywords: "visiting EV+ Auto Repair, Tesla shop hours, walk-in Tesla service, same-day Tesla service, Tesla shop Sun Valley, pre-purchase inspection, pre purchase inspection, warranty inspection" },
  { title: "Tesla Toolbox Diagnostics in Los Angeles | EV+ Auto Repair", url: "/service/tesla-toolbox-diagnostics", blurb: "What is Tesla Toolbox? Tesla's own diagnostic software explained — fault codes, tests, calibration — and how Tesla diagnostics work at EV+ in LA.", keywords: "Tesla Toolbox, Toolbox, Tesla Toolbox diagnostics, toolbox connection, toolbox diagnostic, Toolbox access, diagnostic software, Tesla diagnostic tool" },
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
  // Stem-ish: "creaking" should match keyword "creak"; "pricing" should
  // match keyword "price" (they share the stem "pric"). Compare by common
  // prefix instead of substring, so "pricing" vs "price" works.
  const words = haystack.split(/[^a-z0-9]+/);
  return words.some((w) => {
    if (w.length < 4 || token.length < 4) return false;
    let common = 0;
    while (common < w.length && common < token.length && w[common] === token[common]) common++;
    return common >= 4;
  });
}

// Words customers type that carry no meaning for matching ("why is my tesla
// creaking" should search for "creaking", not fail on "why"/"is"/"my").
// Negations ("not", "no", "never") are deliberately NOT in here —
// "not Tesla certified" is a real question with a real answer.
const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "do", "does", "did",
  "how", "why", "what", "when", "where", "which", "who", "whom",
  "my", "your", "his", "her", "its", "our", "their", "i", "me", "we",
  "you", "he", "she", "it", "they", "to", "of", "in", "on", "for",
  "with", "and", "or", "but", "can", "could", "should", "would", "will",
  "be", "been", "being", "have", "has", "had", "by", "at", "from", "as",
  "if", "then", "than", "so", "such", "there", "here", "this", "that",
  "these", "those", "am", "is", "are", "just", "get", "got", "go", "going",
  // Generic filler that never discriminates on this site.
  "car", "vehicle", "auto", "near", "much", "now",
]);

// Apostrophes break matching ("won't" tokenizes to "won", but the index
// says "wont"). Strip them on both sides before comparing.
const normalize = (s: string): string => s.toLowerCase().replace(/['’]/g, "");

export function searchSite(query: string): SearchEntry[] {
  const tokens = normalize(query)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
  if (tokens.length === 0) return [];
  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of SEARCH_INDEX) {
    const title = normalize(entry.title);
    const kw = normalize(entry.keywords);
    const blurb = normalize(entry.blurb);
    const slug = normalize(entry.url);
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
