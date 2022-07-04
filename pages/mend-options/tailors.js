import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
//import Image from "next/image";
import SearchAPI from "../../components/SearchAPI";

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
      <SearchAPI setTailorsData={setTailorsData} setError={setError} />
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
