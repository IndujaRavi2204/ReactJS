import React from "react";
import emojipedia from "../emojipedia";

function Details(props){
    return(
        <div className = "term">
            <dt>
                <span>{props.name}</span>
            </dt>
            <dd>
                {props.meaning}   
            </dd>
        </div>
    );
}

export default Details;