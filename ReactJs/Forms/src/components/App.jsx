import React, {useState} from "react";

function App() {
  
  const [contact ,setContact] = useState({
    firstName : "",
    lastName : "",
    email : ""
  })
  const [changeColor, setchangeColor] = useState(false)
  function handleChange(event){
    const {value , name , email} = event.target
    setContact(prevValue => {
      if(name === "fname"){
        return{
          firstName : value,
          lastName : prevValue.lastName,
          email : prevValue.email
        };
      }
      else if(name === "lname"){
        return{
          firstName : prevValue.firstName,
          lastName : value,
          email : prevValue.email
        };
      }
      else if(name === "email"){
        return{
          firstName : prevValue.firstName,
          lastName : prevValue.lastName,
          email : value
        };
      }
    })
  }
  function handleClick(event){
    event.preventDefault();
  }
  function handleMouseOver(event){
    setchangeColor(true)
  }
  function handleMouseOut(event){
    setchangeColor(false)
  }
  return (
    <div className="container">
      <h1>Hello {contact.firstName} {contact.lastName} !</h1>
      <p>{contact.email}</p>
      <form onSubmit = {handleClick}>
      <input 
        onChange = {handleChange}
        name = "fname"
        type="text" 
        placeholder="Firstname"
        value = {contact.firstName} 
      />
      <input 
        onChange = {handleChange}
        type="text"
        name = "lname" 
        placeholder="Lastname"
        value = {contact.lastName}
       />
      <input 
        onChange = {handleChange}
        type="text"
        name = "email" 
        placeholder= "Email id"
        value = {contact.email}
      />
      <button 
        style = {{backgroundColor : changeColor ? "black": "white" }}
        onMouseOver = {handleMouseOver}
        onMouseOut = {handleMouseOut}
        onClick ={handleClick}
      >
        Submit
      </button>
      </form>
    </div>
  );
}

export default App;
