const InsertDescriptionField = ({
  descriptionRequest,
  handleDescriptionRequestChange
}) => {

    console.log("onDescriptionRequest", descriptionRequest);
  return (
    <div className="request-description-container">
      <textarea
        rows="4"
        cols="50"
        label="request-description"
        value={descriptionRequest}
        onChange={handleDescriptionRequestChange}
      />
    </div>
  );
};

export default InsertDescriptionField;