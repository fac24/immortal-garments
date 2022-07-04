import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import SearchAPI from "../../components/SearchAPI";
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
        Find your nearest clothing tailors, dry cleaners or seamstress for your
        clothes repairs. The perfect option for you if you do not want to part
        with damaged item!
      </p>
      <SearchAPI
        searchCategory="tailors"
        setTailorsData={setTailorsData}
        setError={setError}
      />
      <div>
        {error ? error : ""}
        {tailorsData
          ? tailorsData.businesses.map((place) => {
              return (
                <div key={place.id} className="flex m-10">
                  <section>
                    <img
                      src={
                        place.image_url.length > 1
                          ? place.image_url
                          : "https://thumbs.dreamstime.com/z/tailor-made-icon-vector-illustration-tailor-made-icon-vector-illustration-white-background-119861864.jpg"
                      }
                      alt={place.name}
                      className="h-20"
                    />
                  </section>

                  <section>
                    <p>{place.name}</p>
                    <p>
                      {place.location.address1}, {place.location.city},{" "}
                      {place.location.zip_code}
                    </p>
                    <p>{place.phone}</p>
                    <p>{place.price}</p>
                  </section>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
