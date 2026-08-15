import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BG, KenBurns, Reveal, Rule, Scrim, Vignette, Eyebrow } from "../components/Bits";
import { CREAM, GOLD } from "../theme";
import { body, display } from "../fonts";

export const Reviews: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const count = interpolate(frame, [10, 46], [0, 4.9], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <BG />
      <KenBurns src="bedroom-hero-b.jpg" duration={duration} from={1.2} to={1.06} opacity={0.35} />
      <Scrim strength={0.8} />
      <Vignette />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 110, textAlign: "center" }}>
        <div style={{ fontFamily: body }}>
          <Eyebrow delay={2}>Rated by our clients</Eyebrow>
        </div>
        <div style={{ display: "flex", gap: 18, marginTop: 44 }}>
          {[0, 1, 2, 3, 4].map((i) => {
            const s = spring({ frame: frame - 8 - i * 5, fps, config: { damping: 9, stiffness: 160 } });
            return (
              <div key={i} style={{ transform: `scale(${s})`, color: GOLD, fontSize: 62, lineHeight: 1 }}>
                ★
              </div>
            );
          })}
        </div>
        <div
          style={{
            fontFamily: display,
            color: CREAM,
            fontSize: 230,
            lineHeight: 1.05,
            marginTop: 20,
          }}
        >
          {count.toFixed(1)}
        </div>
        <Rule width={220} delay={44} />
        <div style={{ height: 34 }} />
        <Reveal delay={50} dur={30}>
          <div style={{ fontFamily: body, color: "rgba(250,247,240,0.8)", fontSize: 28, letterSpacing: 4 }}>
            56 VERIFIED GOOGLE REVIEWS
          </div>
        </Reveal>
        <div style={{ height: 60 }} />
        <Reveal delay={62} dur={34}>
          <div
            style={{
              fontFamily: display,
              fontStyle: "italic",
              color: GOLD,
              fontSize: 52,
              lineHeight: 1.35,
              maxWidth: 760,
            }}
          >
            “Great price, quality and workmanship. Highly recommend.”
          </div>
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
