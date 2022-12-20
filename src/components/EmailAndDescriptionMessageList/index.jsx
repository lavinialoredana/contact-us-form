const CustomerMessage = ({ emailAndDescriptionRequestList }) => {
  return emailAndDescriptionRequestList.map((request) => {
    return (
      <div className="customer-request-container" key={request.id}>
        <ul>
          <li>
            {request.email} {request.descriptionRequest}
          </li>
        </ul>
      </div>
    );
  });
};
export default CustomerMessage;
