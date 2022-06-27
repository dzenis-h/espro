import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/FooterComponent";

const Home = () => {
  useEffect(() => {
    document.title = "E S P R O"; // making the document title dynamic
  }, []);

  setTimeout(() => {
    (() => {
      // Cloning divs where particles go in order not to put 300 of them in the markup :)
      const node = document.querySelector(".parts");
      [...Array(300)].forEach((_) =>
        node.parentNode.insertBefore(node.cloneNode(true), node)
      );
    })();
  }, 256);

  return (
    <Fragment>
      <main id="home">
        <div className="particles">
          <div className="parts"></div>
        </div>
        <div className="wrapper animate__animated animate__backInUp">
          <h1 className="specialFont text textShadow ">
            <Link to="./about" className="explore">
              E x p l o r e
            </Link>
          </h1>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
