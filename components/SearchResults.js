export default function SearchResults({
  data,
  error,
  listCount,
  setListCount,
}) {
  // The API gives us distance in meters, getMiles converts it to miles and trims it to 2 decimal places
  const getMiles = (meters) => Number(meters * 0.000621371192).toFixed(2);

  return (
    <div>
      {error ? error : ""}
      {data
        ? data.businesses.map((place, index) => {
            if (index < listCount) {
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
                    <p>{getMiles(place.distance)} miles</p>
                    {data ? <p>{place.price}</p> : null}
                  </section>
                </div>
              );
            }
          })
        : ""}
    </div>
  );
}
