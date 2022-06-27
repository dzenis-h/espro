import React from "react";

const HighlightedDescription = () => {
  return (
    <div className="item-description">
      <h4
        className="textShaddow"
        style={{ letterSpacing: "4px", textAlign: "center" }}
      >
        <span className="text-secondary" aria-label="dash">
          <b>
            <span role="img" aria-label="A dash">
              ➖
            </span>{" "}
            <i>About Us</i>{" "}
            <span role="img" aria-label="A dash">
              ➖
            </span>
          </b>
        </span>{" "}
      </h4>

      <h5>
        Since 1997 we have served over 60000 happy customers. We have selected
        the best choice of home espresso coffee machines, grinders and
        accessories for you. We will be glad to answer all your questions to
        ensure your choice will fit with your needs and your budget. Even after
        the sale our technical staff will provide you with the best technical
        support if needed. Prompt delivery, money back guarantee no question.
      </h5>
    </div>
  );
};

export default HighlightedDescription;
