import { useState } from 'react';
import InsertDescriptionField from '../../components/DescriptionRequestComponent';
import InsertEmailField from '../../components/EmailComponent';
import SubmitRequestButton from '../../components/SubmitRequestButtonComponent';
import SuffixDropdownList from '../../components/SuffixDropdownListComponent';
import './App.css';
import { v4 as uuidv4 } from "uuid";

function App() {

   const [email, setEmail] = useState("");
   const [descriptionRequest, setDescriptionRequest] = useState('');
   const [emailAndDescriptionRequestList, setEmailAndDescriptionRequestList] = useState([]);
   const onEmailChange = (event) => {
     setEmail(event.target.value);
   };
   
   const onDescriptionRequestChange = (event)=>{
      setDescriptionRequest(event.target.value);
   }

   const onSubmitRequestClick = ()=>{
    setEmailAndDescriptionRequestList(
      [...emailAndDescriptionRequestList, {
      email: email,
      descriptionRequest: descriptionRequest,
      id:uuidv4(),
    }]); setEmail(''); setDescriptionRequest('');
   
  console.log("myResultList", emailAndDescriptionRequestList)
   }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Contact Us</h1>
      </header>

      <div className="contact-form-main-container">
        <InsertEmailField email={email} handleEmailChange={onEmailChange} />
        <SuffixDropdownList />
        <InsertDescriptionField
          descriptionRequest={descriptionRequest}
          handleDescriptionRequestChange={onDescriptionRequestChange}
        />
        <SubmitRequestButton handleSubmitRequestClick={onSubmitRequestClick}/>
      </div>
    </div>
  );
}

export default App;
