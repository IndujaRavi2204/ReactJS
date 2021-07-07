import React from 'react'
import useInput from './customHook'

function UserInput(){
    const [firstName, bindFirstName, resetFirstName ] = useInput(' ')
    const [lastName, bindLastName, resetLastName ] = useInput(' ')
    const handleSubmit = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Firstname: </label>
                <input {...bindFirstName} type = "text"></input>
                </div>
                <div>
                <label>Lastname: </label>
                <input {...bindLastName} type = "text"></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UserInput