import type { Metadata } from "next";
import CityServicePage, { type CityPageData } from "@/components/CityServicePage";

export const metadata: Metadata = {
  title: "Tesla 12V Battery Replacement in Burbank | EV+ Auto Repair",
  description:
    "Tesla 12V battery testing & replacement near Burbank — warning signs, dead-car help, quick in-shop swap. Free inspection includes a 12V health check. (818) 281-7757.",
};

const data: CityPageData = {
  crumbLabel: "Tesla 12V Battery Replacement in Burbank",
  kicker: "About 10 minutes from Burbank",
  h1: "Tesla 12V Battery Replacement in Burbank",
  lede: "Your Tesla's big battery gets all the attention, but the little 12V battery is the one that strands people in Burbank parking structures. It runs the locks, screens, and computers that wake the car up. When it dies — usually at 2 to 4 years old — nothing works. We test and replace 12V batteries in Sun Valley, about 10 minutes from Burbank, and our free inspection includes a 12V health check.",
  sections: [
    {
      kicker: "The warning signs",
      heading: "Your car usually tells you first.",
      paragraphs: [
        "Most of the time, a '12V battery needs service' alert appears on the screen, sometimes with a 'schedule service soon' message. Take it seriously — that alert means days or weeks of life left, not months. Slow wake-ups and odd electrical glitches can be early hints too.",
        "And sometimes there's no warning at all: you walk up, the doors won't unlock, the app won't connect, the screens stay dark. If that happens in Burbank, call us — on Model 3 and Y there's a way to release the frunk from the front bumper leads and jump the car, and we'll talk you through whether to jump it or tow it.",
      ],
    },
    {
      kicker: "The replacement",
      heading: "A quick job — if you do it before it dies.",
      paragraphs: [
        "Swapping a 12V battery in the shop is one of the fastest services we offer, and it beats the dead-car version every time: no tow truck, no parking-structure rescue, no ruined morning. If your battery is three or more years old, or the alert has appeared, replacing it on your schedule is simply the cheaper day.",
      ],
      ticks: [
        "Free 12V health check with every free 1-hour inspection",
        "Replacement for Model 3, Y, S, and X 12V batteries",
        "Newer 16V lithium systems serviced too",
        "Most replacements done the same visit",
        "6-12 months labor warranty",
        "Family-owned Tesla specialists since 2016",
      ],
    },
    {
      kicker: "From Burbank",
      heading: "Ten minutes up the 5.",
      paragraphs: [
        "We're at 9755 Glenoaks Blvd in Sun Valley — an easy hop from Burbank via I-5 North. Book a free inspection, we'll test the 12V while we look the car over, and you'll leave knowing exactly how much life it has left.",
      ],
    },
  ],
  faqs: [
    {
      q: "How long does a Tesla 12V battery last?",
      a: "Typically 2 to 4 years. Cars that sit for long stretches or live in Valley heat tend toward the shorter end. If yours is over three years old, it's worth a free health check before it surprises you.",
    },
    {
      q: "My Tesla is completely dead in a parking structure. What do I do?",
      a: "Call us at (818) 281-7757. On Model 3 and Y, the frunk can be released using the leads behind the front bumper tow-eye cover, which lets you jump the 12V. Depending on the situation we'll walk you through a jump or arrange a tow to the shop.",
    },
    {
      q: "How long does replacement take?",
      a: "It's one of our quickest services — usually handled within the same visit. No need to leave the car for days over a battery.",
    },
    {
      q: "My car has the newer lithium battery, not a 12V. Can you help?",
      a: "Yes. Newer Model 3 and Y use a 16V lithium-ion low-voltage battery instead of the traditional 12V. We service those as well — the warning signs are similar, and so is the advice: don't wait for the no-start morning.",
    },
    {
      q: "What does a 12V replacement cost?",
      a: "Pricing depends on your model. Call or text (818) 281-7757 for an exact quote — and remember the health check itself is free with an inspection, so you'll know whether you even need one.",
    },
  ],
  related: [
    { href: "/service/12v-battery-replacement", label: "12V battery replacement" },
    { href: "/blog/tesla-12v-battery-warning-signs", label: "12V battery warning signs (blog)" },
    { href: "/tesla-suspension-repair-sherman-oaks", label: "Suspension Repair in Sherman Oaks" },
    { href: "/service", label: "Tesla Service Center" },
  ],
  ctaHeading: "Seen the 12V warning? Don't wait for the dead-car morning.",
  bookHref: "/book?lane=service&service=inspection",
  bookLabel: "Book free inspection",
};

export default function Page() {
  return <CityServicePage data={data} />;
}
