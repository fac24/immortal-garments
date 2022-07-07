import Navlink from "./Navlink";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Navbar() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <>
      <Link
        href={{
          pathname: "/",
        }}
      >
        <a
          className="LOGO z-50 grid
      place-items-center 
      absolute
      left-10
      top-2
      
      "
          aria-label=""
        >
          <img
            src="../../images/logo.png"
            alt="Immortal Garments"
            className=" w-[70px] md:w-[91px]
              
              "
          />
        </a>
      </Link>
      <header
        className="relative mx-auto mt-5 mb-20  flex justify-center px-[clamp(0.75rem,3.9630rem+-14.8148vw,0rem)] md:max-w-[800px] 
      xl:max-w-[1200px] xl:px-[clamp(1.5rem,4.1667rem+-5.5556vw,0rem)] "
      >
        {/* logo */}

        {/* burger logic */}
        <div className="absolute top-0 right-5 z-[100] md:hidden ">
          <label
            htmlFor="checkbox"
            className="relative flex h-[1.65rem] w-[2rem] flex-col justify-between  "
          >
            <input
              onClick={() => setChecked(!checked)}
              defaultChecked={checked}
              id="checkbox"
              type="checkbox"
              className="hidden"
            />

            <div
              className={`m-0 h-[0.35rem] w-full  rounded-b-md bg-coral   transition-all ${
                checked ? "scale-0 transition-all" : ""
              }`}
            />

            <div
              className={`m-0 h-[0.35rem]  rounded bg-coral transition-all  ${
                checked
                  ? "absolute  top-[50%] rotate-45 rounded transition-all bg-darkGreen w-full"
                  : "w-[50%]"
              }`}
            />
            <div
              className={`m-0 h-[0.35rem] w-full rounded-t-md bg-coral transition-all  ${
                checked
                  ? "absolute top-[50%] rotate-[-45deg]  rounded transition-all bg-darkGreen "
                  : ""
              }`}
            />
          </label>
        </div>
        {/* burger logic */}

        <nav
          className={` 
        absolute
        top-[120%] 
        z-50 
        flex 
        h-[300px] 
        w-full 
        origin-top
        flex-col 
        items-center 
        justify-between 
        pt-6 
        text-2xl
    
        md:static 
        md:left-[unset] 
        md:top-[unset]  
        md:right-[unset]
        md:m-0 
        md:flex
        md:h-[auto] 
        md:w-full 
        md:max-w-[500px]
        md:scale-100
        md:flex-row 
        md:pt-0
        

       
        
        ${checked ? "scale-100" : "scale-0"}`}
        >
          <Link
            href={{
              pathname: "/",
            }}
          >
            <a
              onClick={() => setChecked(!checked)}
              className={`decoration-coral underline-offset-4 ${
                router.pathname === "/" ? "underline " : "hover:underline"
              }`}
              aria-label=""
            >
              Home
            </a>
          </Link>
          <Link
            href={{
              pathname: "/clothes-condition/donate",
            }}
          >
            <a
              onClick={() => setChecked(!checked)}
              className={` decoration-coral underline-offset-4 ${
                router.pathname === "/clothes-condition/donate"
                  ? "underline "
                  : "hover:underline"
              }`}
              aria-label=""
            >
              Donate
            </a>
          </Link>
          <Link
            href={{
              pathname: "/clothes-condition/recycle",
            }}
          >
            <a
              onClick={() => setChecked(!checked)}
              className={`decoration-coral underline-offset-4 ${
                router.pathname === "/clothes-condition/recycle"
                  ? "underline "
                  : "hover:underline"
              }`}
              aria-label=""
            >
              Recycle
            </a>
          </Link>
          <Link
            href={{
              pathname: "/mend-options/diy",
            }}
          >
            <a
              onClick={() => setChecked(!checked)}
              className={`decoration-coral underline-offset-4 ${
                router.pathname === "/mend-options/diy"
                  ? "underline "
                  : "hover:underline"
              }`}
              aria-label=""
            >
              DIY
            </a>
          </Link>
          <Link
            href={{
              pathname: "/mend-options/tailors",
            }}
          >
            <a
              onClick={() => setChecked(!checked)}
              className={`decoration-coral underline-offset-4 ${
                router.pathname === "/mend-options/tailors"
                  ? "underline "
                  : "hover:underline"
              }`}
              aria-label=""
            >
              Tailors
            </a>
          </Link>
        </nav>
      </header>

      <div
        className={`md:hidden ${
          checked
            ? "absolute top-0 right-[0] left-[-0px] z-40 h-screen w-screen scale-100 bg-white"
            : "scale-0"
        }`}
      />
    </>
  );
}
