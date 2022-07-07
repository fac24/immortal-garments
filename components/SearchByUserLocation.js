export default function SearchByUserLocation({
  setData,
  setError,
  setUserInput,
}) {
  async function handleSearchFromLocation(pos) {
    const crd = pos.coords;

    let lat = crd.latitude;
    let lon = crd.longitude;

    const postcode = await fetch(
      `https://api.postcodes.io/postcodes?lon=${lon}&lat=${lat}`
    );
    const postJson = await postcode.json();
    let userPostcode = postJson.result[0].postcode;
    await setUserInput(userPostcode);

    if (!postcode.ok) {
      setData(null);
      setError(
        `Oops, looks like we can't locate you. Enter a postcode in the search bar.`
      );
      return;
    }
  }

  function geoError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    return <p>We could not locate your device. Check privacy settings.</p>;
  }

  function locator() {
    navigator.geolocation.getCurrentPosition(
      handleSearchFromLocation,
      geoError
    );
  }

  return (
    // <form
    //     onSubmit={(e) => {
    //         e.preventDefault();
    //     }}>
    <>
      <button
        className="text-base bg-eggshellWhite hover:bg-lightGray text-gray-800 px-4 border border-gray-400 rounded shadow my-2"
        onClick={() => {
          locator();
        }}
      >
        Use my current location 📌
      </button>
      {/* // </form> */}
    </>
  );
}
