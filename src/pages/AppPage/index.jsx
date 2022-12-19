import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Contact Us</h1>
      </header>

      <div className="contact-form-main-container">
        <div className="email-container">
          <input 
          type="text" 
          label="E-mail" 
          value=''
          />
        </div>

        <div className="suffix-dropdown-list">
          <select name="" id="">
            <option selected disabled hidden>
              Select an option
            </option>
            <option>Mr.</option>
            <option> Mrs.</option>
            <option> Miss</option>
          </select>
        </div>

        <div className="request-description-container">
          <input type="text" label="request-description" value=""></input>
        </div>

        <div className="submit-request-button">
          <button> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default App;
