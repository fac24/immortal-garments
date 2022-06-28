import Image from 'next/image';
import Link from "next/link";

export default function Choicebutton(props) {
    return (
        <Link href={props.href}>
            <Image
                src={props.imageUrl}
                alt={props.alt}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
        </Link>
    )
}