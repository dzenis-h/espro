import React, { Fragment } from "react";

const HighlightedList = ({ openVideo }) => {
  return (
    <Fragment>
      <ul className="highlightedList">
        <p>
          {" "}
          <span className="text-secondary" style={{ fontWeight: "bold" }}>
            GENERAL INFO:
          </span>
          <ul>
            <li>E S P R O Coffee Shop srl</li>
            <li>Via San Benedetto 45/B</li>
            <li>35037 Teolo -ITALY-</li>
            <li>Phone: +39-049-9904445</li>
            <li>Fax: +39-049-9902024</li>
            <li
              onClick={() => (window.location = "mailto:yourmail@gmail.com")}
              style={{ cursor: "pointer" }}
            >
              info@espro.com
            </li>
          </ul>{" "}
        </p>
        <button
          onClick={() => (window.location = "mailto:yourmail@gmail.com")}
          className="contact-us"
        >
          Contact Us
        </button>
        <hr />
        <div className="highlightedList__icons">
          <li style={{ listStyleType: "none", paddingBottom: ".5rem" }}>
            <a
              href="#!"
              id="video"
              className="icons textShadow"
              onClick={openVideo}
              aria-label="Open the video demonstration"
            >
              <i className="fab fa-youtube fa-2x" />
              <span style={{ marginBottom: "1rem" }}>Watch Our Commercial</span>
            </a>
          </li>
        </div>
      </ul>
    </Fragment>
  );
};

export default HighlightedList;
