import React from "react";
import emojipedia from "../emojipedia";
import Details from "./Details";
import {useState} from "react";

function Emoji(props){
    const [openDetails,setOpenDetails] = useState(false)
    return(
        <div className="term">
          <dt>
            <button className="emoji" onClick={() => setOpenDetails(true)}>
              {props.emoji}
            </button>
          </dt>
          {
            openDetails && <Details 
            name = {emojipedia[props.id].name}
            meaning = {emojipedia[props.id].meaning}
          />
          }
          
        </div>
    );
}
export default Emoji;