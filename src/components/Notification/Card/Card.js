import React from "react";
import PropTypes from "prop-types";

const Card = ({
  imagePosition,
  classNamePrefix,
  cardOption,
  renderImage,
  data,
}) => {
  const { image, message, receivedTime, detailPage } = data;

  const classNameGenerator = () => {
    const prefix = classNamePrefix ? `${classNamePrefix}-` : "";
    const classes = {
      card: `${prefix}card`,
      content: `${prefix}content`,
      image: `${prefix}image`,
      options: `${prefix}options`,
      option: `${prefix}option`,
      message: `${prefix}message`,
      text: `${prefix}text`,
      time: `${prefix}time`,
    };
    return classes;
  };

  const classes = classNameGenerator();

  return (
    <div
      className={`flex border-b-2 justify-between bg-blue-100 text-sm cursor-pointer p-2 hover:bg-gray-200 ${classes.card}`}
    >
      <a href={detailPage} className="card-link">
        <div
          className={`flex ${
            imagePosition === "right" ? "flex-row-reverse" : ""
          } ${classes.content}`}
        >
          {renderImage && (
            <div className={classes.image}>
              <img src={image} alt="Person" className="h-10 rounded-full" />
            </div>
          )}
          <div className={classes.message}>
            <div className={classes.text}>{message}</div>
            {receivedTime && <div className={classes.time}>{receivedTime}</div>}
          </div>
        </div>
      </a>
      <div className={classes.options}>
        {cardOption && (
          <div className={classes.option} onClick={() => cardOption(data)}>
            &hellip;
          </div>
        )}
      </div>
    </div>
  );
};

Card.defaultProps = {
  renderImage: true,
  imagePosition: "left",
  data: null,
  classNamePrefix: null,
  cardOption: null,
};

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    message: PropTypes.any,
    receivedTime: PropTypes.string,
    detailPage: PropTypes.string,
  }),
  renderImage: PropTypes.bool,
  cardOption: PropTypes.func,
  imagePosition: PropTypes.oneOf(["left", "right"]),
  classNamePrefix: PropTypes.string,
};

export default Card;
