"use client";

import { cn } from "@/lib/utils";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  const primary = toRgb(colors[0] ?? [0, 255, 255]);
  const secondary = toRgb(colors[1] ?? colors[0] ?? [0, 255, 255]);
  const size = `${dotSize ?? 3}px`;
  const duration = `${Math.max(1.6, 6 / Math.max(animationSpeed, 0.1))}s`;

  return (
    <div className={cn("h-full relative overflow-hidden bg-gray-950 w-full", containerClassName)}>
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(${primary}, 0.9) ${size}, transparent ${size})`,
          backgroundSize: "18px 18px",
          animation: `canvas-reveal-drift ${duration} linear infinite`,
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            `radial-gradient(circle at 22% 30%, rgba(${primary}, 0.55), transparent 34%), ` +
            `radial-gradient(circle at 78% 70%, rgba(${secondary}, 0.42), transparent 38%)`,
          animation: `canvas-reveal-pulse ${duration} ease-in-out infinite alternate`,
        }}
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/35 to-transparent" />
      )}
      <style jsx>{`
        @keyframes canvas-reveal-drift {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(18px, 18px, 0);
          }
        }

        @keyframes canvas-reveal-pulse {
          from {
            transform: scale(1);
            opacity: 0.52;
          }
          to {
            transform: scale(1.08);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

function toRgb(color: number[]) {
  return color.slice(0, 3).map((value) => Math.max(0, Math.min(255, value))).join(", ");
}
