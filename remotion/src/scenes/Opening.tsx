import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BG, KenBurns, Scrim, Vignette, Rule, Reveal, Eyebrow } from "../components/Bits";
import { CREAM, GOLD } from "../theme";
import { body, display } from "../fonts";

export const Opening: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 40) * 4;
  const lineO = interpolate(frame, [8, 34], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  return (
    <AbsoluteFill>
      <BG />
      <KenBurns src="hero-wardrobe.jpg" duration={duration} from={1.04} to={1.2} pan={[0, -24]} />
      <Scrim strength={0.66} />
      <Vignette />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 100,
          textAlign: "center",
          transform: `translateY(${drift}px)`,
        }}
      >
        <div style={{ fontFamily: body }}>
          <Eyebrow delay={6}>UK · Bespoke Interiors</Eyebrow>
        </div>
        <div style={{ height: 40 }} />
        <Reveal delay={14} dur={40} distance={60}>
          <div style={{ fontFamily: display, color: CREAM, fontSize: 210, lineHeight: 0.9, letterSpacing: -4 }}>
            JFS
          </div>
          <div
            style={{
              fontFamily: display,
              color: GOLD,
              fontSize: 86,
              fontStyle: "italic",
              fontWeight: 300,
              marginTop: 8,
            }}
          >
            Home Interiors
          </div>
        </Reveal>
        <div style={{ height: 44, opacity: lineO }}>
          <Rule width={200} delay={34} />
        </div>
        <Reveal delay={54} dur={34}>
          <div
            style={{
              fontFamily: body,
              color: "rgba(250,247,240,0.88)",
              fontSize: 34,
              fontWeight: 300,
              lineHeight: 1.5,
              maxWidth: 720,
            }}
          >
            Bespoke fitted bedrooms & kitchens,
            <br /> hand-crafted across the UK.
          </div>
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
