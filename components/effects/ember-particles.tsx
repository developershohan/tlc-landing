// Pure CSS animation — no client JS needed
const EMBERS = [
  { left: "11%",  bottom: "0%",  delay: "0s",    dur: "9s",   size: 2.5 },
  { left: "24%",  bottom: "4%",  delay: "2.6s",  dur: "11s",  size: 2   },
  { left: "43%",  bottom: "0%",  delay: "1.2s",  dur: "8.5s", size: 3   },
  { left: "60%",  bottom: "6%",  delay: "3.8s",  dur: "10s",  size: 2   },
  { left: "74%",  bottom: "1%",  delay: "0.7s",  dur: "12s",  size: 2.5 },
  { left: "88%",  bottom: "0%",  delay: "2.1s",  dur: "9.5s", size: 2   },
];

export function EmberParticles({ count = 5 }: { count?: number }) {
  return (
    <>
      {EMBERS.slice(0, count).map((e, i) => (
        <div
          key={i}
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: e.left,
            bottom: e.bottom,
            width:  `${e.size}px`,
            height: `${e.size}px`,
            borderRadius: "50%",
            background: "var(--color-ember)",
            boxShadow: `0 0 ${e.size * 3}px ${e.size * 2}px color-mix(in srgb, var(--color-ember) 25%, transparent)`,
            animation: `ember-rise ${e.dur} ${e.delay} ease-in infinite`,
            opacity: 0,
          }}
        />
      ))}
    </>
  );
}
