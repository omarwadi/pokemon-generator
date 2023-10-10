import { json } from "stream/consumers";

"use client";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";

interface FormProps {
  handleFormSubmit: (newResponse: JSON) => void;
}
export default function Form({ handleFormSubmit }: FormProps) {
  const [pokemonDescription, setPokemonDescription] = useState("");


  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/generate_description", {
      method: "POST",
      body: new URLSearchParams({ prompt: pokemonDescription }),
    });
    const responseData = await response.json();
    handleFormSubmit(responseData)
    return responseData
  }
  

  const Types = ["Normal","Fire","Water","Grass","Electric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"];
  const Pokemons = ["Charmander", "Squirtle", "Bulbasaur", "Pikachu"];

  return (
    <form onSubmit={handleSubmit}>
      <div id="form_div" className="form_div">
        <label className="label">Pokemon Description</label>
        <textarea
          required
          placeholder="Enter Your Pokemon Description"
          value={pokemonDescription}
          onChange={(e) => setPokemonDescription(e.target.value)}
          className="textarea"
        ></textarea>
        <div style={{display:"flex", flexDirection:'row'}}>
          <DropdownMenu options={Types} header={"Type 1"} />
          <div style={{width:"1rem"}}></div>
          <DropdownMenu options={Types} header={"Type 2"} />
        </div>

        <div style={{display:"flex", flexDirection:'row'}}>
          <DropdownMenu options={Pokemons} header={"First Pokemon"} />
          <div style={{width:"1rem"}}></div>
          <DropdownMenu options={Pokemons} header={"Second Pokemon"} />
        </div>
        <input
        type="submit"
        value="Generate"
        className="button"
        style={{width:"100%", marginTop:"1rem"}}
      ></input>
      </div>

    </form>
  );
}
