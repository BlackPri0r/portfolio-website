import FadeAppear from "./FadeAppear";
import Sectioner from "./Sectioner";

export default function HeroSectioner() {
    return(
        <FadeAppear delay={1} className="flex gap-4">
            <Sectioner></Sectioner>
            <Sectioner></Sectioner>
            <Sectioner></Sectioner>
        </FadeAppear>
    )
}