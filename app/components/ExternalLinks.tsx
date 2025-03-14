import { ExternalLinkProps } from "../types/NavbarProps";

export default function ExternalLink ({children, link}: ExternalLinkProps) {
    return(
        <a className="mx-2 text-2xl border-2 px-9 py-1 holographic-card" href={link}>{children}</a>
    )
}