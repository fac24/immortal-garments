import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
import SearchResults from "../../components/SearchResults";
import ProgressBar from "../../components/ProgressBar";

import UpdateCount from "../../components/UpdateCount";
import dynamic from "next/dynamic";

//see note on recycle.js
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Tailors({ userPosition, setUserPosition }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [listCount, setListCount] = useState(7);

  const [progress, setProgress] = useState(65);

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

      <h2 className="text-2xl py-3 text-center">Tailors</h2>
      <p className="border-solid border-4 p-6">
        {" "}
        Sometimes, finding time to mend your clothes can be difficult. In
        situations such as these, you have a range of options including tailors,
        drycleaners, and seamstresses. Use our search feature to find a
        professional in your area.
      </p>
      <SearchAPI
        searchCategory="tailors"
        setData={setData}
        setError={setError}
        tailors="true"
        userPosition={userPosition}
        setUserPosition={setUserPosition}
      />
      <section className="flex flex-row gap-14 wrap-items">
        <div className="text-base py-2">
          <SearchResults
            data={data}
            error={error}
            listCount={listCount}
            setListCount={setListCount}
            tailors={true}
          />
          <UpdateCount
            // Component with a button to let users view more list items
            data={data}
            listCount={listCount}
            setListCount={setListCount}
          />
        </div>
        <div>
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
      </section>
    </>
  );
}
