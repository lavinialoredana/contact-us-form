const InsertDescriptionField = ({
  descriptionRequest,
  handleDescriptionRequestChange
}) => {

    console.log("onDescriptionRequest", descriptionRequest);
  return (
    <div className="request-description-container">
      <input
        type="text"
        label="request-description"
        value={descriptionRequest}
        onChange={handleDescriptionRequestChange}
      />
    </div>
  );
};

export default InsertDescriptionField;