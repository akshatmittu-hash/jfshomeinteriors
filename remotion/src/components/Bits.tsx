import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { CREAM, FOREST_DEEP, GOLD } from "../theme";

export const KenBurns: React.FC<{
  src: string;
  from?: number;
  to?: number;
  duration: number;
  pan?: [number, number];
  opacity?: number;
}> = ({ src, from = 1.06, to = 1.18, duration, pan = [0, 0], opacity = 1 }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, duration], [from, to], { extrapolateRight: "clamp" });
  const x = interpolate(frame, [0, duration], [0, pan[0]], { extrapolateRight: "clamp" });
  const y = interpolate(frame, [0, duration], [0, pan[1]], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ overflow: "hidden", opacity }}>
      <Img
        src={staticFile(`images/${src}`)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale}) translate(${x}px, ${y}px)`,
        }}
      />
    </AbsoluteFill>
  );
};

export const Scrim: React.FC<{ strength?: number }> = ({ strength = 0.72 }) => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(180deg, rgba(21,43,33,${strength}) 0%, rgba(21,43,33,0.25) 42%, rgba(21,43,33,${strength + 0.18}) 100%)`,
    }}
  />
);

export const Rule: React.FC<{ width: number; delay?: number; color?: string }> = ({
  width,
  delay = 0,
  color = GOLD,
}) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame - delay, [0, 26], [0, width], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  return <div style={{ height: 1.5, width: w, background: color }} />;
};

export const Eyebrow: React.FC<{ children: React.ReactNode; delay?: number; color?: string }> = ({
  children,
  delay = 0,
  color = GOLD,
}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame - delay, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y = interpolate(frame - delay, [0, 22], [14, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div
      style={{
        opacity: o,
        transform: `translateY(${y}px)`,
        color,
        fontSize: 24,
        letterSpacing: 12,
        textTransform: "uppercase",
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
};

export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  dur?: number;
  distance?: number;
  blur?: boolean;
}> = ({ children, delay = 0, dur = 30, distance = 46, blur = true }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame - delay, [0, dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * distance}px)`,
        filter: blur ? `blur(${(1 - p) * 8}px)` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export const Frame: React.FC = () => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 40], [0, 0.35], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ padding: 44, pointerEvents: "none" }}>
      <div style={{ flex: 1, border: `1px solid ${CREAM}`, opacity: o }} />
    </AbsoluteFill>
  );
};

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(120% 70% at 50% 45%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)`,
      pointerEvents: "none",
    }}
  />
);

export const BG: React.FC = () => (
  <AbsoluteFill style={{ background: FOREST_DEEP }} />
);
