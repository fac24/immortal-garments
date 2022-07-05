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
        className="relative mx-auto mt-5 flex max-w-[25.125rem] justify-between px-[clamp(0.75rem,3.9630rem+-14.8148vw,0rem)] sm:max-w-[402px] md:mt-8 md:max-w-[800px]
      xl:max-w-[1200px] xl:px-[clamp(1.5rem,4.1667rem+-5.5556vw,0rem)] "
      >
        {/* logo */}
        <Link
          href={{
            pathname: "/",
          }}
        >
          <a
            className="LOGO z-50 grid  w-[93px] 
      place-items-center 
       md:w-[110px]
       xl:h-[clamp(3.125rem,-0.8750rem+8.3333vw,5.375rem)]
       xl:w-[clamp(6.875rem,-1.1250rem+16.6667vw,11.375rem)]
       xl:text-3xl"
            aria-label=""
          >
            LOGO
          </a>
        </Link>

        {/* burger logic */}
        <div className="absolute top-0 right-3 z-50 md:hidden ">
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
        h-[400px] 
        w-full 
        origin-top
        flex-col 
        items-start 
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
        md:items-center
        

        xl:max-w-[clamp(28.875rem,-1.9028rem+64.1204vw,46.1875rem)] 
        
        ${checked ? "scale-100" : "scale-0"}`}
        >
          <Link
            href={{
              pathname: "/",
            }}
          >
            <a
              className={` ${
                router.pathname === "/"
                  ? "border-b-4 border-solid "
                  : "hover:border-coral hover:border-b-4 hover:border-solidf"
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
              className={` ${
                router.pathname === "/clothes-condition/donate"
                  ? "border-b-4 border-solid "
                  : "hover:border-coral hover:border-b-4 hover:border-solid"
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
              className={` ${
                router.pathname === "/clothes-condition/recycle"
                  ? "border-b-4 border-solid "
                  : "hover:border-coral hover:border-b-4 hover:border-solid"
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
              className={` ${
                router.pathname === "/mend-options/diy"
                  ? "border-b-4 border-solid "
                  : "hover:border-coral hover:border-b-4 hover:border-solid"
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
              className={` ${
                router.pathname === "/mend-options/tailors"
                  ? "border-b-4 border-solid "
                  : "hover:border-coral hover:border-b-4 hover:border-solid"
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
