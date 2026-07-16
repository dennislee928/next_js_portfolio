"use client";

const arcs = [
  { top: "18%", left: "18%", width: "46%", rotate: "28deg" },
  { top: "36%", left: "28%", width: "50%", rotate: "-18deg" },
  { top: "55%", left: "18%", width: "58%", rotate: "16deg" },
  { top: "25%", left: "44%", width: "36%", rotate: "54deg" },
  { top: "48%", left: "42%", width: "42%", rotate: "-44deg" },
];

const points = [
  { top: "28%", left: "25%" },
  { top: "42%", left: "62%" },
  { top: "58%", left: "35%" },
  { top: "66%", left: "70%" },
  { top: "34%", left: "78%" },
  { top: "22%", left: "52%" },
];

const GridGlobe = () => {
  return (
    <div className="absolute -left-5 top-28 md:top-32 flex h-72 w-full items-center justify-center overflow-hidden">
      <div className="relative h-64 w-64 rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_30%_25%,rgba(125,211,252,0.42),rgba(14,116,144,0.22)_38%,rgba(15,23,42,0.96)_72%)] shadow-[0_0_80px_rgba(34,211,238,0.22)]">
        <div className="absolute inset-4 rounded-full border border-white/10" />
        <div className="absolute inset-10 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-3 h-[calc(100%-1.5rem)] w-px -translate-x-1/2 bg-cyan-100/15" />
        <div className="absolute left-3 top-1/2 h-px w-[calc(100%-1.5rem)] -translate-y-1/2 bg-cyan-100/15" />

        {arcs.map((arc, index) => (
          <span
            key={index}
            className="absolute h-px origin-left rounded-full bg-gradient-to-r from-cyan-300/0 via-cyan-200/85 to-indigo-300/0"
            style={{
              top: arc.top,
              left: arc.left,
              width: arc.width,
              transform: `rotate(${arc.rotate})`,
              animation: `globe-arc 2.8s ease-in-out ${index * 0.24}s infinite alternate`,
            }}
          />
        ))}

        {points.map((point, index) => (
          <span
            key={index}
            className="absolute h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(125,211,252,0.9)]"
            style={{
              top: point.top,
              left: point.left,
              animation: `globe-point 1.8s ease-in-out ${index * 0.18}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 h-28 w-full bg-gradient-to-b from-transparent to-black-100" />
      <style jsx>{`
        @keyframes globe-arc {
          from {
            opacity: 0.34;
            filter: saturate(0.85);
          }
          to {
            opacity: 1;
            filter: saturate(1.3);
          }
        }

        @keyframes globe-point {
          from {
            transform: scale(0.78);
            opacity: 0.62;
          }
          to {
            transform: scale(1.25);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default GridGlobe;
