import React from "react"
import '../styles/Nav.css'

function Home(props) { // functional component
    return(
        <div className="grid-item"><h2>{props.title}</h2><p>Releases on : {props.release}</p></div>    
    )
}
export default Home