import Appear from "./Appear";
import { ContactUs } from "./ContactUs";
import Reveal from "./RevealText";

export default function Contact() {
    return(
        <section className="max-w-6xl w-full pt-20">
            <div className="flex items-center gap-10 w-full mb-20">
                <div className="flex-grow h-[2px] bg-gray-300"></div>
                <Reveal className="text-7xl font-bold">Contact</Reveal>
                <div className="flex-grow h-[2px] bg-gray-300"></div>
            </div>
            <Appear className="justify-center flex">
                <ContactUs/>
            </Appear>
        </section>
    )
}