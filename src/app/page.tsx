import Form from './components/Form'

export default function Home() {
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <Form />
      <div style={{height:"5rem", borderRight:"1.3px solid lightgray", margin:'0rem 1rem 0rem 1rem'}}></div>
      <div style={{display:'flex', flexDirection:'column', padding:"1rem", margin:"0.5", width:"50%", overflowWrap:"anywhere" }}>
        Test
      </div>
    </div>
  )
}
