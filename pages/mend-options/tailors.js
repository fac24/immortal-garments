import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";

async function fetchData(postcode) {
const response = await fetch(`http://localhost:3000/api/tailors?input=${postcode}`)
const data = await response.json();
console.log(data)
}

export default function Tailors() {
  const [postcode, setPostcode] = useState("")

    return (
      <>
        <Breadcrumb />
        <form onSubmit={e => {
          e.preventDefault()
          fetchData(postcode)
        }}>
          <input type="text" name="input" onChange={(e)=>setPostcode(e.target.value)}/>
          <button type="submit">search</button>
        </form>
      </>
    );
  }
