import {useState} from 'react'

function useInput(initialInput){
    const [input, setInput] = useState(initialInput)
    const reset = () => {
        setInput(initialInput)
    }
    const bind = {
        input,
        onChange : e => {
            setInput(e.target.value)
        }
    }
    return [input, bind, reset]
}
export default useInput