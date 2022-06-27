import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <article id="wrap" className="text-center">
          <div className="footer-text">
            <p className="textShadow">Best coffee ever </p>
            <p className="textShadow">
              E s p r o{" "}
              <span role="img" aria-label="Coffee logo">
                ☕
              </span>{" "}
            </p>
            <p className="textShadow">
              {" "}
              Copyright © {new Date().getFullYear()}
            </p>
          </div>

          <article id="lightings">
            <section id="one">
              <section id="two">
                <section id="three">
                  <section id="four">
                    <section id="five" />
                  </section>
                </section>
              </section>
            </section>
          </article>
        </article>
      </footer>
    </Fragment>
  );
};

export default Footer;
