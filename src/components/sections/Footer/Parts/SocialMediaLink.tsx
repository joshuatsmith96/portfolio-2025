import { Image } from "../../../blocks/Image"
import { Link } from "@mui/material"

export const SocialLink = ({ link, src, alt }: { link: string, src: string, alt: string }) => {
    const normalizedLink = link.startsWith("http") ? link : `https://${link}`;

    return (
        <Link href={normalizedLink} target="_blank" rel="noopener noreferrer"><Image src={src} alt={alt} sx={{ width: '50px', height: '50px', borderRadius: '100px' }} /></Link>
    )
}