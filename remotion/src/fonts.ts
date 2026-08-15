import { loadFont as loadDisplay } from "@remotion/google-fonts/CormorantGaramond";
import { loadFont as loadBody } from "@remotion/google-fonts/Inter";

export const display = loadDisplay("normal", { weights: ["300", "400", "600"], subsets: ["latin"] }).fontFamily;
export const body = loadBody("normal", { weights: ["300", "400", "500"], subsets: ["latin"] }).fontFamily;
