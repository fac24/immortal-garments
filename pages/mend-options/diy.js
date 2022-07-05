import Breadcrumb from "../../components/Breadcrumb";
import React, { useState } from "react";
import { resources } from "../../data/diy-resources";
import Link from "next/link";
import Image from "next/image";
import Search from "../../components/FilterDIY";
import article from "../../public/images/article.png";
import video from "../../public/images/video.png";

export default function Diy() {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <Breadcrumb />
      <h2 className="text-xl py-3">DIY</h2>
      <p>
        We probably want to add some text here. Do you have some cothes to mend
        or upcycle? And some info why, the benifits...
      </p>
      <Search
        value={userInput}
        setUserInput={setUserInput}
        labelText={"Enter a keyword"}
      />
      <div>
        <p className="text-base font-medium">Key:</p>
        <Image src={video} alt="video camera" width={20} height={20} />{" "}
        <span>
          {" "}
          Resourse will take you to a new page with a video tutorial.
        </span>
        <br></br>
        <Image
          src={article}
          alt="an article on paper"
          width={20}
          height={20}
        />{" "}
        <span> Resourse will take you to a new page with article.</span>
      </div>
      <div className="flex flex-wrap">
        {resources
          .filter((item) =>
            item.title.toLowerCase().includes(userInput.toLowerCase())
          )
          .map((item) => {
            return (
              <Link key={item.title} href={item.url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-${
                    item.type === "video" ? "darkGreen" : "pistachioGreen"
                  } block p-6 max-w-sm rounded-lg border shadow-md cursor-pointer m-4`}
                >
                  <p className="diy-link">{item.title}</p>
                  {/* next Image needs to be in a realive div to have tailwind classes */}
                  <div className="relative h-6 w-6 float-right mt-4">
                    <Image
                      src={item.type === "video" ? video : article}
                      alt={item.type}
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            );
          })}
      </div>
    </>
  );
}
