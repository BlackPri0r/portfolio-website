import Reveal from "./components/RevealText";
import CustomCursor from "./components/CustomCursor";
import IconCloud from "./components/DynamicIconCloud";

export default function Home() {
  return (
    <div>
      <div className="*:h-dvh *:w-full *:justify-center *:flex">
        <div>
          <div className="flex flex-col justify-center items-start">
            <Reveal className="text-white text-left text-[12rem] leading-none -mx-2 -my-4">
              Lawrence Li
            </Reveal>
            <Reveal className="text-white text-4xl font-medium flex">Second Year CS student @ UOA</Reveal>
          </div>
        </div>
      </div>
    </div>
  );
  
}
