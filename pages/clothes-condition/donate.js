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

      <h2 className="text-xl py-3">Donate</h2>
      <p>
        Find your nearest clothing donation bank to donate your unwanted
        clothes.
      </p>
      <p>
        Please note: clothes should be in a good condition. If your items are
        still wearable then this is the perfect option for you!
      </p>
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
