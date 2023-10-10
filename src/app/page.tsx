'use client'
import { useState } from 'react';
import Form from './components/Form'

export default function Home() {

  const [response, setresponse] = useState<any>()
  const [isLoading, setIsLoading] = useState(true);

  const handleFormResponse = (newResponse: any) => {
    setresponse(newResponse)
    setIsLoading(false)
  }

  return (
    <div style={{display:"flex", flexDirection:"row", height:"100%",}} >
      <Form handleFormSubmit={handleFormResponse}/>
      <div style={{height:"auto", borderRight:"1.3px solid lightgray", margin:'3rem 1rem 0rem 1rem'}}></div>
      <div style={{display:'flex', flexDirection:'column' , padding:"1rem", width:"50%", overflowWrap:"anywhere", alignItems:'center', justifyContent:'center'}}>
        {isLoading?
        <>
        <h1>Pokemon Generator</h1>
        <p>Dream it, Catch it, Craft it – Your Pokémon Journey Starts Here.</p>
        </>:<div>{response.name}{response.name_origin}</div>}
      </div>

    </div>
  )
}
