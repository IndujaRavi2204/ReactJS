import React from 'react'
import {Context,Context2} from './contextApp'

function ComponentC(){
    return(
        <div>
            <h4>Component C</h4>
            <Context.Consumer>
            {
                name => {
                    return (
                        <Context2.Consumer>
                        {
                            lastName => {
                                return <div>Context value: {name} , Context2 value: {lastName}</div>
                            }
                        }
                        </Context2.Consumer>
                        
                    )
                }
            }
            </Context.Consumer>
        </div>
    )
}
export default ComponentC