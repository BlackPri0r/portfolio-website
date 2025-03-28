import FadeAppear from "./FadeAppear";

export default function HeroBox() {
    return(
        <FadeAppear 
            className="border-2 md:text-2xl p-8 md:mx-30 mx-18 min-w-64"
            delay={1.5}
        >
            &gt; I do web dev
            <div>
                also unemployed D:
            </div>
        </FadeAppear>
    )
}