import FadeAppear from "./FadeAppear";

export default function HeroBox() {
    return(
        <FadeAppear 
            className="border-2 text-2xl p-8 mx-30"
            delay={1.5}
        >
            &gt; I do web dev
            <div>
                also unemployed D:
            </div>
        </FadeAppear>
    )
}