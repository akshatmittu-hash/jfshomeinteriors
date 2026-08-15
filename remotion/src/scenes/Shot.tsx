import React from "react";
import { AbsoluteFill } from "remotion";
import { BG, KenBurns, Scrim, Vignette, Reveal, Eyebrow, Rule } from "../components/Bits";
import { CREAM, GOLD } from "../theme";
import { body, display } from "../fonts";

export const Shot: React.FC<{
  src: string;
  eyebrow: string;
  title: string;
  italic: string;
  caption: string;
  duration: number;
  align?: "flex-start" | "flex-end";
}> = ({ src, eyebrow, title, italic, caption, duration, align = "flex-start" }) => (
  <AbsoluteFill>
    <BG />
    <KenBurns src={src} duration={duration} from={1.05} to={1.18} pan={[0, -16]} />
    <Scrim strength={0.62} />
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
      <Reveal delay={12} dur={34} distance={52}>
        <div style={{ fontFamily: display, color: CREAM, fontSize: 104, lineHeight: 1.03 }}>
          {title}
          <br />
          <span style={{ fontStyle: "italic", color: GOLD, fontWeight: 300 }}>{italic}</span>
        </div>
      </Reveal>
      <div style={{ height: 34, marginTop: 30, marginBottom: 26, alignSelf: align }}>
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
