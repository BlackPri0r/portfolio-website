import { StackBlockProps } from "../types/StackBlockProps";

export default function StackBlock({children}: StackBlockProps) {
    return(
        <span>
            {children}
        </span>
    )
}