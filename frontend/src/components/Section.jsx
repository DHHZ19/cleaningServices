import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import houseKeeping from "../assets/houseKeeping.svg";
import badge from "../assets/badge.gif";
import pricing from "../assets/pricing.svg";
import scheduled from "../assets/scheduling-cleanings.svg";

const features = [
  {
    name: "Deep Cleanings",
    description:
      "Restore that just‑moved‑in feel with a meticulous, room‑by‑room scrub: baseboards, vents, grout, inside cabinets, and more. Perfect for spring cleaning, move‑ins/move‑outs, or before guests arrive.",
    icon: houseKeeping,
  },
  {
    name: "Quality Cleaning Guaranteed",
    description:
      "Your satisfaction is our priority—if you’re not thrilled, we’ll make it right with a free re‑clean within 24 hours. Fully insured, background‑checked pros using kid‑ and pet‑safe, eco‑friendly products.",
    icon: badge,
  },
  {
    name: "Fair Pricing",
    description:
      "Simple, transparent rates with no surprise fees. Choose flat‑rate packages or hourly service—get an instant quote based on home size and priorities",
    icon: pricing,
  },
  {
    name: "Scheduled Cleanings",
    description:
      "Book once and relax with weekly, bi‑weekly, or monthly service. Automated reminders, easy rescheduling, and the same trusted team whenever possible.",
    icon: scheduled,
  },
];

export default function Section() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            A cleaner home, happier life.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need for home and office cleaning
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Spend time on what matters; we’ll handle the rest with thorough,
            top‑to‑bottom cleaning tailored to your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                    <img src={feature.icon.src} alt="icon" className="size-9" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
