import Image from "next/image";
import Reveal from "./components/RevealText";
import CustomCursor from "./components/CustomCursor";
import IconCloud from "./components/DynamicIconCloud";

export default function Home() {
  return (
    <div>
      <div className="h-dvh w-full justify-center flex items-center">
        <Reveal className="text-black text-center text-9xl">Lawrence Li</Reveal>
        {/* <CustomCursor></CustomCursor> */}
        <IconCloud iconSlugs={
        ["wix", 
          "react", 
          "typescript", 
          "python", 
          "godot", 
          "github", 
          "godotengine", 
          "dotnet",
          "git",
          "java",
          "c",
          "leagueoflegends",
          "tailwindcss",
          "html5",
          "css3",
          "javascript",
          "trello",
          "jira",
          "unity",
          "csharp",
          "cplusplus",
          "linux",
          "dota2",
          "ubuntu",
          "flask"
        ]}/>
      </div>
    </div>
  );
}
