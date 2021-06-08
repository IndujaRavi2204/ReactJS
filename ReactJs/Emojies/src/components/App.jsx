import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";


function emojies(emoji){
  return(
    <Emoji 
          id = {emoji.id}
          emoji = {emoji.emoji}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(emojies)}
      </dl>
    </div>
  );
}

export default App;
