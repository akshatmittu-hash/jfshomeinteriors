import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { BG, KenBurns, Scrim, Vignette, Reveal, Eyebrow, Rule } from "../components/Bits";
import { CREAM, GOLD } from "../theme";
import { body, display } from "../fonts";

type Props = {
  eyebrow: string;
  title: string;
  italic: string;
  caption: string;
  shots: string[];
  duration: number;
  align?: "flex-start" | "flex-end";
};

const Shot: React.FC<{ src: string; len: number; i: number }> = ({ src, len, i }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 10, len - 10, len], [0, 1, 1, 0], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ opacity: o }}>
      <KenBurns
        src={src}
        duration={len}
        from={i % 2 === 0 ? 1.05 : 1.18}
        to={i % 2 === 0 ? 1.18 : 1.05}
        pan={[i % 2 === 0 ? -18 : 18, 10]}
      />
    </AbsoluteFill>
  );
};

export const Montage: React.FC<Props> = ({
  eyebrow,
  title,
  italic,
  caption,
  shots,
  duration,
  align = "flex-start",
}) => {
  const len = Math.floor(duration / shots.length) + 10;
  return (
    <AbsoluteFill>
      <BG />
      {shots.map((s, i) => (
        <Sequence key={s} from={i * (len - 10)} durationInFrames={len}>
          <Shot src={s} len={len} i={i} />
        </Sequence>
      ))}
      <Scrim strength={0.6} />
      <Vignette />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: align,
          textAlign: align === "flex-end" ? "right" : "left",
          padding: 110,
          paddingBottom: 190,
        }}
      >
        <div style={{ fontFamily: body }}>
          <Eyebrow delay={4}>{eyebrow}</Eyebrow>
        </div>
        <div style={{ height: 26 }} />
        <Reveal delay={12} dur={34} distance={54}>
          <div style={{ fontFamily: display, color: CREAM, fontSize: 108, lineHeight: 1.02 }}>
            {title}
            <br />
            <span style={{ fontStyle: "italic", color: GOLD, fontWeight: 300 }}>{italic}</span>
          </div>
        </Reveal>
        <div style={{ height: 30, alignSelf: align }}>
          <Rule width={140} delay={40} />
        </div>
        <Reveal delay={48} dur={30}>
          <div
            style={{
              fontFamily: body,
              color: "rgba(250,247,240,0.85)",
              fontSize: 30,
              fontWeight: 300,
              lineHeight: 1.5,
              maxWidth: 680,
            }}
          >
            {caption}
          </div>
        </Reveal>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
