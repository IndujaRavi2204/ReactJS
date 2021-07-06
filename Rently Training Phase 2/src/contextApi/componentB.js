import React, { useContext } from 'react'
import ComponentC from './componentC'
import {Context,Context2} from './contextApp'

function ComponentB(){
    const name = useContext(Context)
    const lastName = useContext(Context2)

    return(
        <div>
            <h4>Component B</h4>
            <p>{name} {lastName}</p>
            <ComponentC />
        </div>
    )
}
export default ComponentB