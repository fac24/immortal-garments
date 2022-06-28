import Navlink from "./Navlink"

export default function Navbar() {
    return (<nav>

        <Navlink href='/'>Home</Navlink>
        <Navlink href='/donate'>Donate</Navlink>
        <Navlink href='/recycle'>Recycle</Navlink>
        <Navlink href='/diy'>DIY</Navlink>
        <Navlink href='/tailors'>Tailors</Navlink>

    </nav>);
}