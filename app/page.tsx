import Image from "next/image";
import Reveal from "./components/RevealText";

export default function Home() {
  return (
    <div>
      <div className="h-dvh w-full justify-center flex items-center">
        <Reveal className="text-white text-center text-9xl">Lawrence Li</Reveal>
      </div>
    </div>
  );
}
