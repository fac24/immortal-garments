import SearchPostcode from "../components/SearchPostcode";
import { useState } from "react";

export default function Tailors() {
    const [businessInfo, setBusinessInfo] = useState(null);
    async function handleSearch() {
        const result = await fetch(`https://api.yelp.com/v3/businesses/search`);
        console.log(result);
        if (!result.ok) {
            setBusinessInfo(null);
            setError(`Oops, something went wrong: ${result.status}.`);
            return;
        }

        setError(null);
        const newInfo = await result.json();
        setBusinessInfo(newInfo);
    }

    return (<>
        <SearchPostcode
            onChange={onChange}
            value={userInput}
            handleSearch={handleSearch}
        />
    </>);
}