import Reveal from "./components/RevealText";
import CustomCursor from "./components/CustomCursor";
import IconCloud from "./components/DynamicIconCloud";

export default function Home() {
  return (
    <div>
      <div className="*:h-dvh *:w-full *:justify-center *:flex">
        <div>
          <div className="flex flex-col justify-center z-10 items-start overflow-x-auto">
            <Reveal className="text-black text-left text-[12rem] leading-none -mx-2">
              Lawrence Li
            </Reveal>
            <div className="text-4xl font-medium flex">
              <Reveal className="">Second Year CS student @ UOA</Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
