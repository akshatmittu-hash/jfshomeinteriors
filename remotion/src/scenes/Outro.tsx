import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BG, KenBurns, Reveal, Rule, Scrim, Vignette, Eyebrow } from "../components/Bits";
import { CREAM, FOREST_DEEP, GOLD } from "../theme";
import { body, display } from "../fonts";

export const Outro: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 14) * 0.012;
  const drift = interpolate(frame, [0, duration], [0, -18]);
  return (
    <AbsoluteFill>
      <BG />
      <KenBurns src="kitchen-sage.jpg" duration={duration} from={1.06} to={1.16} opacity={0.42} />
      <Scrim strength={0.85} />
      <Vignette />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 110,
          textAlign: "center",
          transform: `translateY(${drift}px)`,
        }}
      >
        <div style={{ fontFamily: body }}>
          <Eyebrow delay={2}>Free home survey</Eyebrow>
        </div>
        <div style={{ height: 34 }} />
        <Reveal delay={10} dur={36} distance={52}>
          <div style={{ fontFamily: display, color: CREAM, fontSize: 118, lineHeight: 1.05 }}>
            Start your
            <br />
            <span style={{ fontStyle: "italic", color: GOLD, fontWeight: 300 }}>project.</span>
          </div>
        </Reveal>
        <div style={{ height: 40 }} />
        <Rule width={260} delay={40} />
        <div style={{ height: 54 }} />
        <Reveal delay={48} dur={30}>
          <div
            style={{
              fontFamily: body,
              background: GOLD,
              color: FOREST_DEEP,
              padding: "30px 62px",
              fontSize: 40,
              letterSpacing: 3,
              fontWeight: 500,
              transform: `scale(${pulse})`,
            }}
          >
            07412 569827
          </div>
        </Reveal>
        <div style={{ height: 46 }} />
        <Reveal delay={62} dur={30}>
          <div style={{ fontFamily: body, color: "rgba(250,247,240,0.78)", fontSize: 28, lineHeight: 1.6 }}>
            67 Cove Road, Farnborough GU14 0EX
            <br />
            Bedrooms · Kitchens · Living
          </div>
        </Reveal>
        <div style={{ height: 70 }} />
        <Reveal delay={74} dur={28}>
          <div style={{ fontFamily: display, color: CREAM, fontSize: 54 }}>
            JFS <span style={{ color: GOLD, fontStyle: "italic" }}>Home Interiors</span>
          </div>
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
