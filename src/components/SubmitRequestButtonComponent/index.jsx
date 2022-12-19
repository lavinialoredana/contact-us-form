const SubmitRequestButton = ({ handleSubmitRequestClick }) => {
  return (
    <div className="submit-request-button">
      <button onClick={handleSubmitRequestClick}> Submit </button>
    </div>
  );
};

export default SubmitRequestButton;