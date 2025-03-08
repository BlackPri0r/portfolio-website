import { StackBlockProps } from "../types/StackBlockProps";


export default function StackBlock({children}: StackBlockProps) {
    return(
        <div className="text-lg px-3 py-0.5 rounded-lg border border-gray-300/20">
            {children}
        </div>
    )
}