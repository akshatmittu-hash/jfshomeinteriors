import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Montage } from "./scenes/Montage";
import { Shot } from "./scenes/Shot";
import { IntroCard, OfferCard, CtaCard } from "./scenes/Card";
import { Frame } from "./components/Bits";
import { FOREST_DEEP } from "./theme";

const D = { intro: 140, kitchen: 165, living: 150, bedroom: 150, offer: 160, cta: 180 };
const T = 22;
export const TOTAL =
  D.intro + D.kitchen + D.living + D.bedroom + D.offer + D.cta - T * 5;

export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{ background: FOREST_DEEP }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={D.intro}>
        <IntroCard />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.kitchen}>
        <Montage
          eyebrow="Kitchens"
          title="Hand-finished"
          italic="designer kitchens."
          caption="Shaker to handleless — premium surfaces, considered hardware."
          shots={["kitchen-sage.jpg", "kitchen-navy.jpg", "kitchen-cream.jpg"]}
          duration={D.kitchen}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.living}>
        <Shot
          src="reel-living.jpg"
          eyebrow="Living"
          title="Rooms made"
          italic="to linger in."
          caption="Deep green velvet, brass warmth and quiet built-in storage."
          duration={D.living}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-right" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.bedroom}>
        <Shot
          src="reel-bedroom.jpg"
          eyebrow="Bedrooms"
          title="Calm, considered,"
          italic="made to measure."
          caption="Soft linen tones, brass detail and fitted wardrobes built for the room."
          duration={D.bedroom}
          align="flex-end"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.offer}>
        <OfferCard />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.cta}>
        <CtaCard />
      </TransitionSeries.Sequence>
    </TransitionSeries>
    <Frame />
  </AbsoluteFill>
);
