

export default function SearchByUserLocation({ setData, setError, setUserInput }) {

    async function handleSearchFromLocation(pos) {
        const crd = pos.coords;

        let lat = crd.latitude;
        let lon = crd.longitude;

        const postcode = await fetch(`https://api.postcodes.io/postcodes?lon=${lon}&lat=${lat}`);
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
    }

    function locator() {
        navigator.geolocation.getCurrentPosition(handleSearchFromLocation, geoError);
    }

    return (
        // <form
        //     onSubmit={(e) => {
        //         e.preventDefault();
        //     }}>
        <>
            <button onClick={() => { locator() }}>Search by my location</button>
            {/* // </form> */}
        </>
    )
}