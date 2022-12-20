import { useState } from "react";
import InsertDescriptionField from "../../components/Description";
import EmailField from "../../components/CustomerEmail";
import SubmitButton from "../../components/SubmitButton";
import SuffixDropdownList from "../../components/SuffixDropdownListComponent";
import "./app.css";
import { v4 as uuidv4 } from "uuid";
import CustomerMessage from "../../components/EmailAndDescriptionMessageList";


function App() {
  const [email, setEmail] = useState("");
  const [descriptionRequest, setDescriptionRequest] = useState("");
  const [emailAndDescriptionRequestList, setEmailAndDescriptionRequestList] =
    useState([]);
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onDescriptionRequestChange = (event) => {
    setDescriptionRequest(event.target.value);
  };

  const onSubmitRequestClick = () => {
    setEmailAndDescriptionRequestList([
      ...emailAndDescriptionRequestList,
      {
        id: uuidv4(),
        email: email,
        descriptionRequest: descriptionRequest,
      },
    ]);
    setEmail("");
    setDescriptionRequest("");

    console.log("myResultList", emailAndDescriptionRequestList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Contact Us</h1>
      </header>

      <div className="contact-form-main-container">
        <EmailField email={email} handleEmailChange={onEmailChange} />
        <SuffixDropdownList />
        <InsertDescriptionField
          descriptionRequest={descriptionRequest}
          handleDescriptionRequestChange={onDescriptionRequestChange}
        />
        <SubmitButton handleSubmitRequestClick={onSubmitRequestClick} />
        <CustomerMessage
          emailAndDescriptionRequestList={emailAndDescriptionRequestList}
        />
      </div>
    </div>
  );
}

export default App;
