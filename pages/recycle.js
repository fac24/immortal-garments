import React, { useState } from "react";
import SearchPostcode from "../components/Searchpostcode";


export default function Recycle() {
    const [data, setData] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(null);
    let listCount = 7;

    const onChange = (event) => setUserInput(event.target.value);

    async function handleSearch() {
        const result = await fetch(`api/${userInput.replace(/ /g, "")}`);
        console.log("reached handleSearch");
        if (!result.ok) {
            setData(null);
            setError(`Oops, something went wrong: ${result.status}.`);
            return;
        }

        setError(null);
        const newdata = await result.json();
        setData(newdata.items);
    }

    return (
        <>
            <SearchPostcode
                onChange={onChange}
                value={userInput}
                handleSearch={handleSearch}
            />

            <p>Find your nearest textile recycle point</p>

            {data
                ? data.map((item, index) => {
                    if (index < listCount)
                        return (
                            <ul key={item.id}>
                                <li>
                                    {item.name} <br />
                                    {item.address} <br />
                                    {item.distance} <br />
                                </li>
                            </ul>
                        );
                })
                : ""}

            {error ? error : ""}
        </>
    );
}
