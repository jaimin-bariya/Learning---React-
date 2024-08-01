import { useState } from 'react'
import './App.css'
import { Heading, Mode } from './Components'
import { allSVGS, modesAll } from './assets/SVGs'
import translateMe from './CHooks/translation'



function App() {
  
  const [text, setText]  = useState("Hello JP")
  const [translatedText, settranslatedText] = useState("Translation")
  const [from, setFrom] = useState("English")
  const [to, setTo] = useState("Hindi")
  
  
  const answer = translateMe('Привет, мир! Как дела?', 'en')


 

  return (
    <>
    <Heading />
    
    

    <div className="flex flex-col items-center justify-start min-h-screen mt-4">


      
        <div className="w-9/12 flex gap-4 ">
          
          {modesAll.map((mode, index) => (
            <Mode key={index} title={mode}/>
          ))}

        </div>


          <div className='flex'>
            
            <form
            
              onSubmit={(e) => {
                e.preventDefault;
                Translate()

              }}

            >




            </form>

          </div>


      </div>


    <button> {answer} </button>
    

    </>
  )
}

export default App
