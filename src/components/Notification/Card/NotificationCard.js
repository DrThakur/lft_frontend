import React from "react";
import PropTypes from "prop-types";
import Card from "./Card"; // Import the existing Card component

const NotificationCard = ({ data }) => {
  const { image, message, receivedTime, detailPage } = data;

  return (
    <Card
      image={image}
      message={message}
      receivedTime={receivedTime}
      detailPage={detailPage}
    />
  );
};

NotificationCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    message: PropTypes.any,
    receivedTime: PropTypes.string,
    detailPage: PropTypes.string,
  }),
};

export default NotificationCard;
