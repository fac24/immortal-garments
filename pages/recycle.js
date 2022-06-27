import React, { useState } from "react";
import data from "../data/n195sh"


export default function Recycle() {

    function handleSearch(e) {
        e.preventDefault();
        console.log(data)
    }

    // Change line 2 to `../data/${userInput}`
    // Save the user input the a variable for the dynamic string
    // Save the data we want to display to either a tider object or variables
    // Add the data to the return below to show on the page

    return (
        <>
            <form onSubmit={handleSearch}>
                <label name="search">Enter your postcode...</label>
                <input type="search" name="search"></input>
                <button type="submit">Submit</button>
            </form>
            <p>test</p>
        </>
    );
}