import Link from "next/link";

export default function Navlink(props) {
  return (
    <Link href={props.href}>
      <a className="hover:underline decoration-coral underline-offset-4">
        {props.children}
      </a>
    </Link>
  );
}
