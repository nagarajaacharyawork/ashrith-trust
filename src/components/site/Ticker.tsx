const items = [
  "DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY (DMLT)",
  "DIPLOMA IN OPERATION THEATRE & ANAESTHESIA TECHNOLOGY (DOT & AT)",
  "ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-27",
  "PRE-UNIVERSITY SCIENCE — PCMB / PCMC COMBINATIONS",
  "B.Sc NURSING & SCHOOL OF NURSING — APPLY TODAY",
];

export function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-primary py-3 text-white">
      <div className="mx-auto flex max-w-full">
        <span className="mr-6 shrink-0 rounded-r-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest">Latest</span>
        <div className="flex overflow-hidden">
          <div className="ticker-track flex shrink-0 gap-10 whitespace-nowrap text-sm font-medium">
            {doubled.map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
