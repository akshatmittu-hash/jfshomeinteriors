import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { Opening } from "./scenes/Opening";
import { Montage } from "./scenes/Montage";
import { Reviews } from "./scenes/Reviews";
import { Outro } from "./scenes/Outro";
import { Frame } from "./components/Bits";
import { FOREST_DEEP } from "./theme";

const D = { open: 150, bedrooms: 165, kitchens: 165, living: 140, reviews: 150, outro: 165 };
const T = 24;
export const TOTAL =
  D.open + D.bedrooms + D.kitchens + D.living + D.reviews + D.outro - T * 5;

export const MainVideo: React.FC = () => (
  <AbsoluteFill style={{ background: FOREST_DEEP }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={D.open}>
        <Opening duration={D.open} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.bedrooms}>
        <Montage
          eyebrow="Bedrooms"
          title="Fitted wardrobes,"
          italic="made to measure."
          caption="Floor-to-ceiling storage tailored to the exact geometry of your room."
          shots={["bedroom-hero-a.jpg", "bedroom-blue.jpg", "bedroom-walnut.jpg"]}
          duration={D.bedrooms}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.kitchens}>
        <Montage
          eyebrow="Kitchens"
          title="Hand-finished"
          italic="designer kitchens."
          caption="Shaker to handleless — premium surfaces, considered hardware."
          shots={["kitchen-sage.jpg", "kitchen-navy.jpg", "kitchen-cream.jpg"]}
          duration={D.kitchens}
          align="flex-end"
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-right" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.living}>
        <Montage
          eyebrow="Living"
          title="Studies, media walls"
          italic="& quiet storage."
          caption="Built around the way you work and live."
          shots={["living-lounge-1.jpg", "living-office-1.jpg"]}
          duration={D.living}
        />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.reviews}>
        <Reviews duration={D.reviews} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-bottom" })}
        timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
      />

      <TransitionSeries.Sequence durationInFrames={D.outro}>
        <Outro duration={D.outro} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
    <Frame />
  </AbsoluteFill>
);
