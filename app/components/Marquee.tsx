const ITEMS = [
  "FLAME GRILLED",
  "STALL FRESH",
  "NO FREEZERS",
  "MADE TO ORDER",
  "LOCAL SPICES",
  "OPEN TILL LATE",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden">
      {/* Split background so the tilted strip crosses the section seam cleanly */}
      <div className="absolute inset-0 flex flex-col" aria-hidden>
        <div className="flex-1 bg-pine-950" />
        <div className="flex-1 bg-offwhite" />
      </div>

      <div className="relative py-10">
        {/* Wider than the viewport so the rotated ends bleed off-screen */}
        <div className="-rotate-1 w-[110vw] -ml-[5vw] bg-amber py-4 shadow-[0_20px_50px_-25px_rgba(217,119,6,0.6)]">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
            {[...track, ...track].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="font-display font-extrabold uppercase text-pine-950 text-xl lg:text-2xl tracking-tight">
                  {item}
                </span>
                <span className="text-pine-950/50 text-xl">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
