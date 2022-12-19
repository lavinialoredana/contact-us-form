const InsertEmailField = ({ email, handleEmailChange }) => {
    console.log("my email", email);
  return (
    <div className="email-container">
      <input
        type="text"
        label="E-mail"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default InsertEmailField;
