
import React, { useState } from "react";

export async function getServerSideProps() {
    async function handleSearch() {
        console.log(9)
        const result = await fetch(`https://rl.recyclenow.com/widget/londonrecycles.co.uk/locations/SW15%203QG?limit=30&radius=25&materials%5B%5D=57&callback=jQuery35105193289468312947_1656342986710&_=1656342986717`)



        // const result = await fetch('https://immortal-garments.vercel.app/api/n195sh', {
        //     // method: "GET",
        //     mode: 'no-cors',
        //     // headers: { "Content-type": "application/json;charset=UTF-8" }
        // });
        // const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(11)
        console.log(result);
        const newdata = await result;

        console.log(14);
        console.log(newdata)
        setData(newdata);
        console.log(data);
    }

}




export default function Recycle() {
    const [data, setData] = useState(null);


    //create use state for search term
    //entered text is matched against postcode we have (n195sh)
    //generate list based on postcode or return an error message




    //    async function getData(postcode){

    //          const data = await `www.fdjkkdjgjkdl${postcode}dkfjkdsfdkl`

    //     }

    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();

            }}>
                <label name="search">Enter your postcode...</label>
                <input type="search" name="search"></input>
                <button type="submit" onClick={handleSearch}>Submit</button>
            </form>
            <p>test</p>
        </>
    );
}