import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
import SearchResults from "../../components/SearchResults";
import ProgressBar from "../../components/ProgressBar";
import UpdateCount from "../../components/UpdateCount";
import dynamic from "next/dynamic";

//see note on recycle.js
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Donate({ userPosition, setUserPosition }) {
  const [progress, setProgress] = useState(65);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [listCount, setListCount] = useState(7);

  useEffect(() => {
    if (data) {
      setProgress(100);
    } else {
      setProgress(65);
    }
  }, [data]);

  return (
    <>
      <Breadcrumb />
      <section>
        <div>
          <ProgressBar completed={progress} aria-valuenow={progress} />
        </div>
      </section>
      <h2 className="text-2xl py-3 text-center">Donate</h2>
      <div className="border-solid border-4 p-6">
        <h3 className="text-xl pb-1 font-semibold">
          Why should I donate my old clothes?
        </h3>
        <ul
          role="list"
          className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
        >
          <li>
            Donating your clothes is a great way to get rid of clothes you do
            not wear or which no longer fit. With donation, you can give them to
            a cause that is meaningful to you.
          </li>
          <li>
            It keeps textiles out of the bin and gives your unwanted items the
            chance to have a second life.
          </li>
          <li>
            Charity shops play a key role in shifting the fashion industry
            towards a more circular model.
          </li>
          <li>
            They encourage people to buy second hand, and give space to a
            seasonless, slow fashion model.{" "}
          </li>
        </ul>
        <h3 className="text-xl pb-1 font-semibold mt-2">
          What should I do with my clothes before donating them?
        </h3>
        <p className="mb-3">
          Before donating your clothing, make sure all items are clean, dry and
          sealed in a bag or container specified by the charity you are donating
          to. If you have recently worn something that you are now donating,
          wash it before you put it in the donation bag.
        </p>

        <h3 className="text-xl pb-1 font-semibold">
          How can I donate my clothes?
        </h3>
        <p>
          Use our search feature to find your nearest clothing donation bank to
          donate your unwanted clothes.
        </p>
      </div>
      <div>
        <SearchAPI
          searchCategory="donate"
          setData={setData}
          setError={setError}
          userPosition={userPosition}
          setUserPosition={setUserPosition}
        />
        <div className="flex gap-10 wrap-items">
          <div>
            <SearchResults
              data={data}
              error={error}
              listCount={listCount}
              setListCount={setListCount}
            />
          </div>

          <div className="w-2/3">
            {data ? (
              <LondonMap
                data={data.businesses}
                userPosition={userPosition}
                listCount={listCount}
              ></LondonMap>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <UpdateCount
        data={data}
        listCount={listCount}
        setListCount={setListCount}
      />
    </>
  );
}
