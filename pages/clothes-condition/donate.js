import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
import SearchResults from "../../components/SearchResults";
import ProgressBar from "../../components/ProgressBar";

export default function Donate() {
  const [tailorsData, setTailorsData] = useState(null);
  const [progress, setProgress] = useState(75);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (tailorsData) {
      setProgress(100);
    } else {
      setProgress(75);
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
      />
      <SearchResults tailorsData={tailorsData} error={error} />
    </>
  );
}
