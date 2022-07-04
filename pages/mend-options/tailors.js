import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
import SearchResults from "../../components/SearchResults";
//import Image from "next/image";

export default function Tailors() {
  const [tailorsData, setTailorsData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData(x) {
    const result = await fetch(`../api/tailors?input=${x}`);
    const data = await result.json();

    // Error handling incase of a failed fetch
    if (data.error) {
      setTailorsData(null);
      setError(data.error.description);
    } else {
      setError(null);
      setTailorsData(data);
    }
  }

  return (
    <>
      <Breadcrumb />
      <h2 className="text-xl py-3">Tailors</h2>
      <p>
        Find your nearest tailors, dry cleaners or seamstress for your clothes
        repairs. The perfect option for you if you do not want to part with
        damaged items in your wardrobe!
      </p>
      <SearchAPI
        searchCategory="tailors"
        setTailorsData={setTailorsData}
        setError={setError}
      />
      <SearchResults tailorsData={tailorsData} error={error} />
    </>
  );
}
