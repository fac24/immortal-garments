import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
import SearchResults from "../../components/SearchResults";
import dynamic from "next/dynamic";

//see note on recycle.js
const LondonMap = dynamic(() => import("../../components/Map"), { ssr: false });

export default function Donate({ userPosition, setUserPosition, listCount, setListCount }) {
  const [tailorsData, setTailorsData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <>
      <Breadcrumb />
      <h2 className="text-xl py-3">Donate</h2>
      <article>
        <p>
          Reuse is better than recycling. It requires less energy and labour to pass an item of clothing onto a new user than it does to break that item of clothing down into constituent parts.
        </p>
        <p>
          Donation does not need to be formal. We can give and receive clothes between family and friends. Many charity shops will also accept items of clothing, which they will sell. Further options include reselling your own clothes. Most charity shops will recycle clothes that they cannot sell, but it is worth asking about what they do with these clothes, as some may instead send them to landfill.
        </p>
      </article>
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
