import Image from "next/image"
import simpleLogo from "../public/images/simple-logo.png";

export default function Loader() {



    return (
        <Image
            src={simpleLogo}
            alt="Loading..."
            width={200}
            height={200}
            animation={loader}
        />
    )
}