import React, { useRef,useEffect,useState } from 'react'

function UseRef2(){
    const [timer, setTimer] = useState(0)

    const intervalRef = useRef(null)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return(
        <div>
            <h1>Timer - {timer}</h1>
            <button onClick = {() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}
export default UseRef2