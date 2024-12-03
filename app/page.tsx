import Image from "next/image";
import Reveal from "./components/RevealText";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div>
      <div className="h-dvh w-full justify-center flex items-center">
        <Reveal className="text-black text-center text-9xl">Lawrence Li</Reveal>
        {/* <CustomCursor></CustomCursor> */}
      </div>
    </div>
  );
}
