import { useState } from 'react';
import InsertEmailField from '../../components/EmailComponent';
import './App.css';

function App() {

   const [email, setEmail] = useState("");

   const onEmailChange = (event) => {
     setEmail(event.target.value);
   };
   
  return (
    <div className="App">
      <header className="App-header">
        <h1> Contact Us</h1>
      </header>

      <div className="contact-form-main-container">
        <InsertEmailField 
        email={email}
        handleEmailChange = {onEmailChange}
        />

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
