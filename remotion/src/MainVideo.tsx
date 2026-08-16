import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Montage } from "./scenes/Montage";

import { IntroCard, OfferCard, CtaCard } from "./scenes/Card";
import { Frame } from "./components/Bits";
import { FOREST_DEEP } from "./theme";

const D = { intro: 165, kitchen: 195, living: 175, bedroom: 175, offer: 170, cta: 190 };
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
        <Montage
          eyebrow="Living"
          title="Rooms made"
          italic="to linger in."
          caption="Alcove joinery, media walls and libraries — sage, navy or warm neutral."
          shots={["living-sage.jpg", "living-navy.jpg", "living-lounge-1.jpg"]}
          duration={D.living}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-right" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.bedroom}>
        <Montage
          eyebrow="Bedrooms"
          title="Fitted wardrobes,"
          italic="made to measure."
          caption="Walnut, gloss white or hand-painted — built to the exact geometry of your room."
          shots={["bedroom-walnut.jpg", "bedroom-blue.jpg", "bedroom-white.jpg"]}
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
