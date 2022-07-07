import Image from "next/image";
import Link from "next/link";

export default function ChoiceButton(props) {
  return (
    <div className="flex justify-center">
      <Link href={props.href}>
        <Image
          src={props.src}
          alt={props.alt}
          width={150}
          height={150}
          className="cursor-pointer"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </Link>
    </div>
  );
}
