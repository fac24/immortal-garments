import Breadcrumb from "../../components/Breadcrumb";
import React, { useState, useEffect } from "react";
import { resources } from "../../data/diy-resources";
import Link from "next/link";
import Image from "next/image";
import ProgressBar from "../../components/ProgressBar";
import Search from "../../components/FilterDIY";
import article from "../../public/images/article.png";
import video from "../../public/images/video.png";

export default function Diy() {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <Breadcrumb />
      <section>
        <div>
          <ProgressBar completed={100} aria-valuenow={100} />
        </div>
      </section>

      <h2 className="text-2xl py-3 text-center">DIY</h2>
      <div className="border-solid border-4 p-6">
        <h3 className="text-xl pb-1 font-semibold">
          What are the benefits of making or mending my clothes?
        </h3>
        <ul
          role="list"
          className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
        >
          <li>
            Making your own clothes is an environmentally friendly alternative
            because you only use the amount of each material that you need and
            can be sure that you will wear each garment.
          </li>
          <li>
            You can personalise the look of garments and design them to fit your
            specific body type exactly.
          </li>
          <li>You can express your personality in every fiber.</li>
          <li>
            Aside from the ethical and personal benefits, being able to make and
            repair your own clothes is a calming and useful hobby.
          </li>
        </ul>
      </div>
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
