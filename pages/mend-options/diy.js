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
  const [category, setCategory] = useState("all");

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
        <p>
          <span className="text-base font-medium">Key:</span>{" "}
          <span className="text-sm">
            (click on key icon to filter by catergory)
          </span>
        </p>
        <span onClick={() => setCategory("video")}>
          <Image src={video} alt="video camera" width={20} height={20} />{" "}
        </span>
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
        <br></br>
        <div aria-hidden="true" className="flex">
          <p>
            <span className=" px-2.5 py-px mr-2 rounded-lg grey border shadow-sm">
              {" "}
            </span>
            Stain removal
          </p>
          <p>
            <span className=" px-2.5 py-px mx-2 rounded-lg pink shadow-sm border">
              {" "}
            </span>
            Material care
          </p>
          <p>
            <span className=" px-2.5 py-px mx-2 rounded-lg green outline-dashed shadow-sm">
              {" "}
            </span>
            Sewing and craft
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        {resources
          .filter((item) =>
            category === "all"
              ? item
              : category === "video"
              ? (item.type = "video")
              : (item.type = "article")
          )
          .filter((item) =>
            item.title.toLowerCase().includes(userInput.toLowerCase())
          )
          .map((item) => {
            return (
              <Link key={item.title} href={item.url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    item.category === "sew"
                      ? "green outline-dashed outline-2"
                      : item.category === "care"
                      ? "pink border"
                      : "grey border"
                  } block p-6 w-40 h-40 rounded-lg shadow-md cursor-pointer m-4 relative`}
                >
                  <p className="font-medium">{item.title}</p>
                  {/* next Image needs to be in a realive div to have tailwind classes */}
                  <div className="absolute h-6 w-6 bottom-2 right-2">
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
