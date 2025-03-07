import { StackBlockProps } from "../types/StackBlockProps";


export default function StackBlock({children}: StackBlockProps) {
    return(
        <div className="border-1 border-white text-lg px-3 py-0.5 rounded-lg ">
            {children}
        </div>
    )
}