import Link from "next/link";


export default function Navlink(props) {
    return (
        <Link href={props.href}>
            <a>{props.children}</a>
        </Link>

    )
}

