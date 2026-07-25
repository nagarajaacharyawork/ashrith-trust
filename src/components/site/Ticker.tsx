const items = [
  "DIPLOMA IN MEDICAL LAB TECHNOLOGY (DMLT)",
  "DIPLOMA IN OPERATION THEATER & ANAESTHESIA TECHNOLOGY (DOT & AT)",
  "ADMISSIONS OPEN FOR 2026-27 ACADEMIC YEAR",
  "GNM & B.Sc NURSING — APPLY TODAY",
  "PRE-UNIVERSITY SCIENCE (PCMB / PCMC) INTAKE OPEN",
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
