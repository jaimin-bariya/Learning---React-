import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import { Form } from "./Form"
import { Card } from './Cards'


const data = {
  p1: {
    name: "jaimin",
    img: "https://picsum.photos/200/200",
    call: "90990"
  },
    
  p2: {
    name: "Hanu",
    img: "https://picsum.photos/200/200",
    call: "+90990"
  }
  
  
}






ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />

    <br />

    <Form />

    <br/>


    {Object.keys(data).map(p => (
      <Card key={p} {...data[p]} />
    ))}
    


    
  </>
)