import { useState } from 'react';
import InsertDescriptionField from '../../components/DescriptionRequestComponent';
import InsertEmailField from '../../components/EmailComponent';
import SuffixDropdownList from '../../components/SuffixDropdownListComponent';
import './App.css';

function App() {

   const [email, setEmail] = useState("");
   const [descriptionRequest, setDescriptionRequest] = useState('');

   const onEmailChange = (event) => {
     setEmail(event.target.value);
   };
   
   const onDescriptionRequestChange =(event)=>{
      setDescriptionRequest(event.target.value);
   }
   
  return (
    <div className="App">
      <header className="App-header">
        <h1> Contact Us</h1>
      </header>

      <div className="contact-form-main-container">
        <InsertEmailField 
        email={email} 
        handleEmailChange={onEmailChange} 
        />
        <SuffixDropdownList />
        <InsertDescriptionField
          descriptionRequest={descriptionRequest}
          handleDescriptionRequestChange = {onDescriptionRequestChange}
        />

        <div className="submit-request-button">
          <button> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default App;
