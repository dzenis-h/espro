import React, { Fragment } from "react";

const HighlightedHeader = () => {
  const darkMode = localStorage.getItem("dark");
  // specialFont bold textShadow
  return (
    <Fragment>
      <div className="text-secondary otherApps">
        <hr />
        <h3
          className={
            darkMode === "true"
              ? "white specialFont bold textShadow animate__animated animate__backInRight"
              : "black specialFont bold textShadow animate__animated animate__backInRight"
          }
        >
          We make every cup an experience.
        </h3>
        <hr />
      </div>

      <p className="header-note">
        <span className="text-secondary" aria-label="dash">
          <b className={darkMode === "true" ? "note__reverse" : "note"}>
            <i>M O T T O:</i>➖{" "}
          </b>
        </span>
        <b
          className={darkMode === "true" ? "diff-text" : "dark"}
          style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
        >
          {" "}
          "Coffee made for your life on the go"
        </b>{" "}
      </p>
    </Fragment>
  );
};

export default HighlightedHeader;
