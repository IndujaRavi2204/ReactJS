import React, { useRef,useEffect } from 'react'

function UseRef(){
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [])
    return(
        <div>
            <h1>UseRef Hook</h1>
            <input type="text" ref={ref} />
        </div>
    )
}
export default UseRef