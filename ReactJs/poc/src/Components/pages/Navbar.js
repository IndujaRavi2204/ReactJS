import React from "react"
import { NavLink } from 'react-router-dom';
import "../styles/Nav.css"

function Navbar1(){
    return(
        
        <div>
        <ul>
            <li>
                <NavLink to="/" exact activeStyle={{color:"black"}}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/search" exact activeStyle={{color:"black"}}>Search</NavLink>
            </li>
            <li>
                <NavLink to="/filter" exact activeStyle={{color:"black"}}>Filter</NavLink>
            </li>
        </ul>
        
        </div>
        
    )}
export default Navbar1



