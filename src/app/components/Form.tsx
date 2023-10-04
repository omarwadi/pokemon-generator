'use client'
import React, { useEffect, useState } from 'react'

export default function Form() {

    const [pokemonDescription, setPokemonDescription] = useState('');

    async function submitForm() {
        const response = await fetch('http://localhost:8000/generate_description',{
            method: 'POST',
            body:new URLSearchParams({ prompt: pokemonDescription})
            }
        )
        
        const resp = await response.json()
        console.log(response)
    }

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        submitForm();
    }

       
      
    return (
        <form onSubmit={handleSubmit}>
                <div id='form_div' className='form_div'>
                    <label>
                      Pokemon Description
                    </label>
                    <textarea placeholder="Enter Your Pokemon Description" value={pokemonDescription} onChange={(e) => setPokemonDescription(e.target.value)}>

                    </textarea>
                </div>
                <input type='submit'></input>
        </form>
  )
}

