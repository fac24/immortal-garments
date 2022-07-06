import Navlink from "./Navlink";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Navbar() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <>
      <header
        className="relative mx-auto mt-5 mb-14  flex justify-center px-[clamp(0.75rem,3.9630rem+-14.8148vw,0rem)] md:max-w-[800px] 
      xl:max-w-[1200px] xl:px-[clamp(1.5rem,4.1667rem+-5.5556vw,0rem)] "
      >
        {/* logo */}
        <Link
          href={{
            pathname: "/",
          }}
        >
          <a
            className="LOGO z-50 grid
      place-items-center 
      absolute
      left-5
      "
            aria-label=""
          >
            <img
              src="../../images/logo.png"
              alt="Immortal Garments"
              className=" h-12 w-12
              
              "
            />
          </a>
        </Link>

        {/* burger logic */}
        <div className="absolute top-0 right-5 z-[100] md:hidden ">
          <label
            htmlFor="checkbox"
            className="relative flex h-[1.65rem] w-[2rem] flex-col justify-between  "
          >
            <input
              onChange={() => setChecked(!checked)}
              defaultChecked={checked}
              id="checkbox"
              type="checkbox"
              className="peer hidden"
            />

            <div
              className="m-0 h-[0.35rem] w-full  rounded-b-md bg-coral   transition-all
           peer-checked:scale-0 peer-checked:transition-all"
            />
            <div
              className="m-0 h-[0.35rem] w-[50%] rounded bg-coral transition-all peer-checked:absolute  peer-checked:top-[50%] 
          peer-checked:rotate-45 peer-checked:rounded peer-checked:transition-all peer-checked:bg-darkGreen peer-checked:w-full"
            />
            <div
              className="m-0 h-[0.35rem] w-full rounded-t-md bg-coral transition-all  
          peer-checked:absolute peer-checked:top-[50%] peer-checked:rotate-[-45deg] 
          peer-checked:rounded peer-checked:transition-all peer-checked:bg-darkGreen"
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
