import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {


    const [start, setStart] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {

        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setStart((prevTime) => prevTime + 10);
            }, 10);

        } else if (!isRunning && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }


        return () => clearInterval(intervalRef.current)

    }, [isRunning])


    const handleStart = () => {
        setIsRunning(true)
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    const handleReset = () => {
        setIsRunning(false)
        setStart(0)
    }


    const formatTime = (ms) => {

        const hours = String(Math.floor(ms / 3600000 )).padStart(2, '0')
        const minutes = String(Math.floor( (ms % 3600000) / 60000  )).padStart(2, '0')
        const seconds = String(Math.floor( (ms % 60000) / 1000 )).padStart(2, '0')
        const milliseconds =String(Math.floor(( ms % 1000) / 10)).padStart(2, '0')


        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }

  return (
    <>
      <h3>Stopwatch : {formatTime(start)} </h3>


        <div style={{display:"flex", gap:"10px", justifyContent:"center"} }>
            <button onClick={handleStart} >Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>

        </div>
    </>
  );
};

export default Stopwatch;