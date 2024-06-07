import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const[firstName,setFirst]=useState("");
  const[lastName,setSecond]=useState("")
  const[submit,isSubmited]=useState(false);

  function first(e) {
    setFirst(e.target.value);
  }
  function second(e) {
    setSecond(e.target.value);
  }
  function handlingfullname(e){
    e.preventDefault();
      if(firstName.trim !=="" && lastName.trim !==""){
      isSubmited(true)
      }
    }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handlingfullname}>      
        <label htmlFor="fn">First Name:</label>
        <input type="text" name="fn" id="fn" onChange={first} required value={firstName}/>
        <label htmlFor="ln">Last Name:</label>
        <input type="text" name="ln" id="ln" onChange={second} required value={lastName}/>
        <button type='submit'> Submit</button>
      </form>
      {submit ? <p>Full Name:{firstName} {lastName}</p> : null}
    </div>
  );
}

export default App;
