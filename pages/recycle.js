import React, { useState } from "react";

export default function Recycle() {
    const [data, setData] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(null);
    let listCount = 7;
    
    const onChange = event => setUserInput(event.target.value);
    
    async function handleSearch() {
        const result = await fetch(`api/${userInput.replace(/ /g,'')}`)

        if(!result.ok) {
            setData(null)
            setError(`Oops, something went wrong: ${result.status}.`)
            return;
        }

        setError(null)
        const newdata = await result.json();
        setData(newdata.items);
    }
    
    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();
            }}>
                <label name="search">Enter your postcode...</label>
                <input type="search" name="search" onChange={onChange} value={userInput}></input>
                <button 
                type="submit" 
                onClick={handleSearch}
                >Submit</button>
            </form>
            <p>Find your nearest textile recycle point</p>
            

        {data ? data.map((item, index) => { 
           if(index < listCount)
            return (
            <div key={item.id}>
            <p>{item.name}</p> 
            <p>{item.address}</p> 
            <p>{item.distance}</p> 
            </div>
            )}): ""}

        {error ? error : ""}

        </>
    );
}