import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { Reveal, Rule, Eyebrow } from "../components/Bits";
import { CREAM, GOLD } from "../theme";
import { body, display } from "../fonts";

export const CARD_BG = "#163321";

const Bloom: React.FC = () => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 60], [0.35, 0.7], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(70% 40% at 82% 12%, rgba(216,178,106,${0.22 * o}) 0%, rgba(216,178,106,0) 70%),
                     radial-gradient(60% 35% at 12% 92%, rgba(216,178,106,${0.14 * o}) 0%, rgba(216,178,106,0) 70%)`,
      }}
    />
  );
};

export const Mark: React.FC<{ width?: number; delay?: number }> = ({ width = 640, delay = 0 }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame - delay, [0, 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Img
      src={staticFile("images/jfs-mark.png")}
      style={{ width, opacity: o, display: "block" }}
    />
  );
};

export const CardShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 46) * 4;
  return (
    <AbsoluteFill style={{ background: CARD_BG }}>
      <Bloom />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 110,
          transform: `translateY(${drift}px)`,
        }}
      >
        {children}
      </AbsoluteFill>
      <AbsoluteFill style={{ padding: 70, justifyContent: "flex-start", alignItems: "center" }}>
        <div
          style={{
            fontFamily: body,
            color: "rgba(250,247,240,0.7)",
            fontSize: 26,
            letterSpacing: 6,
          }}
        >
          @jfshomeinteriors
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const IntroCard: React.FC = () => (
  <CardShell>
    <Mark width={720} delay={4} />
    <div style={{ height: 90 }} />
    <Reveal delay={26} dur={38} distance={54}>
      <div
        style={{
          fontFamily: display,
          color: CREAM,
          fontSize: 116,
          lineHeight: 1.06,
          letterSpacing: 1,
        }}
      >
        A NEW ADDRESS
        <br />
        <span style={{ fontStyle: "italic", color: GOLD, fontWeight: 300 }}>in London</span>
      </div>
    </Reveal>
    <div style={{ height: 56 }} />
    <Rule width={240} delay={58} />
  </CardShell>
);

export const OfferCard: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 15) * 0.015;
  return (
    <CardShell>
      <div style={{ fontFamily: body }}>
        <Eyebrow delay={2}>Opening week only</Eyebrow>
      </div>
      <div style={{ height: 50 }} />
      <Reveal delay={12} dur={36} distance={56}>
        <div
          style={{
            fontFamily: display,
            color: GOLD,
            fontSize: 300,
            lineHeight: 0.9,
            transform: `scale(${pulse})`,
            fontFeatureSettings: '"lnum" 1',
          }}
        >
          10%
        </div>
        <div
          style={{
            fontFamily: display,
            color: CREAM,
            fontSize: 96,
            letterSpacing: 10,
            marginTop: 6,
          }}
        >
          OFF
        </div>
      </Reveal>
      <div style={{ height: 54 }} />
      <Rule width={220} delay={48} />
      <div style={{ height: 54 }} />
      <Reveal delay={56} dur={30}>
        <div
          style={{
            fontFamily: body,
            color: "rgba(250,247,240,0.86)",
            fontSize: 34,
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          For every customer who visits
          <br /> after watching this reel.
        </div>
      </Reveal>
    </CardShell>
  );
};

export const CtaCard: React.FC = () => (
  <CardShell>
    <div style={{ fontFamily: body }}>
      <Eyebrow delay={2}>Visit us</Eyebrow>
    </div>
    <div style={{ height: 46 }} />
    <Reveal delay={10} dur={34} distance={50}>
      <div style={{ fontFamily: display, color: CREAM, fontSize: 78, lineHeight: 1.25, fontFeatureSettings: '"lnum" 1' }}>
        67 Cove Road
        <br />
        <span style={{ fontStyle: "italic", color: GOLD, fontWeight: 300 }}>
          Farnborough GU14 0EX
        </span>
      </div>
    </Reveal>
    <div style={{ height: 56 }} />
    <Rule width={260} delay={44} />
    <div style={{ height: 66 }} />
    <Reveal delay={52} dur={30}>
      <Mark width={680} />
    </Reveal>
    <div style={{ height: 70 }} />
    <Reveal delay={68} dur={28}>
      <div
        style={{
          fontFamily: body,
          color: "rgba(250,247,240,0.86)",
          fontSize: 32,
          lineHeight: 1.6,
          letterSpacing: 2,
        }}
      >
        jfshomeinteriors.london
        <br />
        <span style={{ color: GOLD }}>Link in bio</span>
      </div>
    </Reveal>
  </CardShell>
);
