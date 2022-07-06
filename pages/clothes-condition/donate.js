import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
import SearchResults from "../../components/SearchResults";
import UpdateCount from "../../components/UpdateCount";
import dynamic from "next/dynamic";

//see note on recycle.js
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Donate({ userPosition, setUserPosition }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [listCount, setListCount] = useState(7);

  return (
    <>
      <Breadcrumb />
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
        setData={setData}
        setError={setError}
        userPosition={userPosition}
        setUserPosition={setUserPosition}
      />
      <SearchResults
        data={data}
        error={error}
        listCount={listCount}
        setListCount={setListCount}
      />
      <UpdateCount
        data={data}
        listCount={listCount}
        setListCount={setListCount}
      />
      {data ? (
        <LondonMap
          data={data.businesses}
          userPosition={userPosition}
          listCount={listCount}
        ></LondonMap>
      ) : (
        ""
      )}
    </>
  );
}
