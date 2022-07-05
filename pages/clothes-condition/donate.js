import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
import SearchResults from "../../components/SearchResults";
import ProgressBar from "../../components/ProgressBar";
import dynamic from "next/dynamic";

//see note on recycle.js
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Donate({
  userPosition,
  setUserPosition,
  listCount,
  setListCount,
}) {
  const [tailorsData, setTailorsData] = useState(null);
  const [progress, setProgress] = useState(50);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (tailorsData) {
      setProgress(100);
    } else {
      setProgress(50);
    }
  }, [tailorsData]);

  return (
    <>
      <Breadcrumb />
      <section>
        <div>
          <ProgressBar completed={progress} aria-valuenow={progress} />
        </div>
      </section>

      <h2 className="text-xl py-3">Donate</h2>
      <p>
        Find your nearest clothing donation bank to donate your unwanted
        clothes.
      </p>
      <p>
        Please note: clothes should be in a good condition. If your items are
        still wearable then this is the perfect option for you!
      </p>
      <SearchAPI
        searchCategory="donate"
        setTailorsData={setTailorsData}
        setError={setError}
        userPosition={userPosition}
        setUserPosition={setUserPosition}
      />
      <SearchResults tailorsData={tailorsData} error={error} />
      {tailorsData ? (
        <LondonMap
          data={tailorsData.businesses}
          userPosition={userPosition}
          listCount={listCount}
        ></LondonMap>
      ) : (
        ""
      )}
    </>
  );
}
