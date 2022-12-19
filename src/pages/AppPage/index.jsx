import { useState } from 'react';
import InsertEmailField from '../../components/EmailComponent';
import SuffixDropdownList from '../../components/SuffixDropdownListComponent';
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
        <InsertEmailField email={email} handleEmailChange={onEmailChange} />
        <SuffixDropdownList/>
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
