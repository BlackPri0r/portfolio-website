import { StackBlockProps } from "../types/StackBlockProps";


export default function StackBlock({children}: StackBlockProps) {
    return(
        <div className="text-lg px-4 py-1 border-2">
            {children}
        </div>
    )
}