
import './App.css';
import { useState } from 'react';
 
function App() {
   const [userInput,setUserInput]=useState( "");
   const input = ( e ) => {
    setUserInput(e.target.value);
  }
  const buttonPrint = () => {
    alert(userInput)
    console.log(userInput)
  }
  return (
    <div>
      <input type="text" name="user" onClick={input} placeholder="input something" />
      <button onClick={buttonPrint}>Print</button>
    </div>
   
  );
}

export default App;
