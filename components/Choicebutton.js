import Image from 'next/image';
import Link from "next/link";

export default function Choicebutton(props) {
    return (
        <Link href={props.href}>
            <Image
                src={props.src}
                alt={props.alt}
                width={100}
                height={100}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
        </Link>
    )
}