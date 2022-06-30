import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
//import Image from "next/image";

export default function Tailors() {
  const [postcode, setPostcode] = useState("");
  const [tailorsData, setTailorsData] = useState(null);

  async function fetchData(x) {
    const response = await fetch(`/api/tailors?input=${x}`);
    const data = await response.json();
    setTailorsData(data);
  }

  return (
    <>
      <Breadcrumb />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(postcode);
        }}
      >
        <input
          type="text"
          name="input"
          onChange={(e) => setPostcode(e.target.value)}
        />
        <button type="submit">search</button>
        <div>
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
      </form>
    </>
  );
}
