import Reveal from "./components/RevealText";
import CustomCursor from "./components/CustomCursor";
import IconCloud from "./components/DynamicIconCloud";

export default function Home() {
  return (
    <div>
      <div className="*:h-dvh *:w-full *:justify-center *:flex">
        <div>
          <div className="flex flex-col justify-center items-start">
            <Reveal className="text-white bg-none text-left text-[12rem] leading-none -mx-2 -my-4">
              Lawrence Li
            </Reveal>
            <div className="flex flex-row gap-4">
              <Reveal>
                <div className="gap-1 flex flex-row">
                  <div className="text-4xl text-white">For:</div>
                  <button className="text-4xl text-white px-4 border-solid border-2 rounded-full">Students</button>
                </div>
              </Reveal>
              <Reveal className="text-white bg-none text-4xl font-medium flex">Second Year CS student @ UOA</Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
