import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPass] = useState("HellloJP")

  const passRef = useRef(null)






  const handleSliderChange = (event) => {
    setLength(event.target.value)
  }


  const handleNum = () => {
    setNumAllowed(!numAllowed)
  }


  const handleChar = () => {
    setCharAllowed(!charAllowed)
  }



  const passGenerator = useCallback(() => {


    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


    if (numAllowed) str+= "0123456789"
    if (charAllowed) str+= "~!@#$^&*(){}/[]<>?"


    for (let i = 0; i < length; i++) {
      
      let c = str.charAt(Math.floor(Math.random() * str.length ))
      pass += c;

      
    }

    console.log(password)
    setPass(pass)


  }, [length, numAllowed, charAllowed, setPass])



  useEffect(() => {passGenerator()}, [length, charAllowed, numAllowed, passGenerator])



  const copyToClip = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])

  return (
      <>

        <div className='flex  flex-col justify-center items-center h-screen w-full'>

          
        <h1 className='text-4xl text-center text-white  mb-10'  >PassWord Generator</h1>


        
          <div className=' grid grid-rows-2 grid-cols-5  gap-1 px-3 py-2 rounded-lg bg-white w-1/2 h-fit' >

            <input placeholder='Generate' readOnly  ref={passRef} value={password} className=' text-orange-600  col-span-4  border border-black rounded-lg  py-2 px-3'   />
            <button type='button' className='border border-black rounded-lg  py-2 px-3' onClick={copyToClip}> Copy </button>
            
 
            <div className='col-span-3 flex flex-row justify-center  items-center'>
            <input type='range' min={8} max={20} value={length}  onChange={handleSliderChange} className=' cursor-pointer w-2/3'  />
            <output className='  ml-10 text-center  items-center ' >Length: {length}</output>
            </div>


            <div className='col-span-1 flex flex-row justify-center  items-center  '>
              <input type='checkbox' onChange={handleNum} checked={numAllowed} className='mx-2'  />
              <label >Numbers</label>
            </div>

            <div className='col-span-1 flex flex-row justify-center  items-center  '>
              <input type='checkbox' onChange={handleChar} checked={charAllowed} className='mx-2'  />
              <label >Special Character</label>
            </div>

          </div>


        </div>
        
      </>
  )
}

export default App
