import { useCallback, useEffect, useMemo, useState } from "react";
import InsertDescriptionField from "../../components/Description";
import EmailField from "../../components/CustomerEmail";
import SubmitButton from "../../components/SubmitButton";
import SuffixDropdownList from "../../components/SuffixDropdownListComponent";
import "./app.css";
import { v4 as uuidv4 } from "uuid";
import CustomerMessage from "../../components/EmailAndDescriptionMessageList";
import Axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [descriptionRequest, setDescriptionRequest] = useState("");
  const [emailAndDescriptionRequestList, setEmailAndDescriptionRequestList] =
    useState([]);
  const [data, setData] = useState();


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

    // console.log("myResultList", emailAndDescriptionRequestList);
  };

  const fetchRandomBeer = useCallback(async () => {
    const response = await Axios.get("https://api.punkapi.com/v2/beers/192");
    console.log("fetchRandomBeer");
    setData(response.data[0]);
  }, []);

  useEffect(() => {
    fetchRandomBeer();
    console.log("rerender", email, descriptionRequest)
  }, []);

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
        {data && data.image_url && <img src={data.image_url} alt="beer"></img>}
      </div>
    </div>
  );
}

export default App;
