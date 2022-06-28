import React, { useState } from "react";

export default function Recycle() {
    const [data, setData] = useState(null);
    let listCount = 7;
    
    async function handleSearch() {
        const result = await fetch(`api/n195sh`)
        const newdata = await result.json();
        setData(newdata.items);
    }
    
    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();

            }}>
                <label name="search">Enter your postcode...</label>
                <input type="search" name="search"></input>
                <button type="submit" onClick={handleSearch}>Submit</button>
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

        </>
    );
}