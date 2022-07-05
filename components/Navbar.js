import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-5 text-2xl font-semibold my-3">
      <input type="checkbox" id="hamburger"></input>

      <label htmlFor="hamburger" className="span-container">
        <span className="w-35 h-3 bg-black m-5"></span>
        <span></span>
        <span></span>
      </label>
      <Navlink href="/">Home</Navlink>
      <Navlink href="/clothes-condition/donate">Donate</Navlink>
      <Navlink href="/clothes-condition/recycle">Recycle</Navlink>
      <Navlink href="/mend-options/diy">DIY</Navlink>
      <Navlink href="/mend-options/tailors">Tailors</Navlink>
    </nav>
  );
}
