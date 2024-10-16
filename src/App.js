import './App.css';
import Info from "./info.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem/>
    </div>
  );
}

class AddItem extends React.Component{
  render(){
    const ph="Input Here"
    return(
      <form>
        <label for="input-text">Enter your Input: </label>
        <input type="text" placeholder={ph} id="input-text"  />
      </form>
    );
  }
}

export default App;
