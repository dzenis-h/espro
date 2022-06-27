import React, { Fragment, useEffect } from "react";

import Toggle from "./darkMode/ToggleContainer";
import { useTheme } from "./darkMode/useTheme";
import { Wrapper } from "./darkMode/Wrapper";

import Footer from "../components/layout/FooterComponent";

const About = () => {
  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  useEffect(() => {
    document.title = "About Us"; // making the document title dynamic
  }, []);

  return (
    <Fragment>
        <Wrapper>
          <main id="about" className="parallax Row Expand">
            <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
            <h1 className="lg-heading textShadow">
              <span className={darkMode === "true" ? "white" : "heading-about"}>
                About
              </span>
              <i className="text-secondary textShadow"> Us</i>
            </h1>
            <h2 className="sm-heading animate__animated animate__backInLeft">
              Coffee made for your life on the go
            </h2>
            <div className="about-info">
            <div class="container">
  <div class="bar">
    <div class="bold">
      <h3>Bold</h3>
    </div>
    <div class="circle top"></div>
    <div class="circle middle"></div>
    <div class="circle bottom"></div>
    <div class="creamy">
      <h3>Creamy</h3>
    </div>
  </div>
  <div class="coffee-cups">
    <div class="cup-small doppio">
      <div class="handle"></div>
    </div>
    <div class="cup americano">
      <div class="handle"></div>
    </div>
    <div class="cup-small macchiato">
      <div class="handle"></div>
    </div>
    <div class="cup-small flatwhite">
      <div class="handle"></div>
    </div>
    <div class="cup cappuccino">
      <div class="handle"></div>
    </div>
    <div class="cup-long latte">
      <div class="handle"></div>
      <div class="bottom-handle"></div>
    </div>
  </div>
  <div class="info">
    <div class="first">
      <h1>doppio</h1>
      <p>Double shot of espresso. Straight.</p>
    </div>
    <div class="second">
      <h1>americano</h1>
      <p>Shots of espresso diluted with water</p>
    </div>
    <div class="third">
      <h1>Macchiato</h1>
      <p>Espresso with a dash of frothy foamed milk.</p>
    </div>
    <div class="fourth">
      <h1>Flat White</h1>
      <p>Double shot of espresso with steamed milk.</p>
    </div>
    <div class="fifth">
      <h1>Cappuccino</h1>
      <p>Double shot of espresso topped with an airy thick layer of foamed milk.</p>
    </div>
    <div class="sixth">
      <h1>Caffe Latte</h1>
      <p>A shot of espresso in steamed milk lightly topped with foam.</p>
    </div>
  </div>
</div>


              <div className="bio">
                <h3
                  className={
                    darkMode === "true"
                      ? "text-secondary textShadow"
                      : "black textShadow"
                  }
                >
                  Coffee Grinders for Espresso
                </h3>
                <small className="about-parts">
                  We use Laboratorio di Torrefazione Giamaica Caffe. It is one
                  of Italy's top premium coffee roasters. The company is ran by
                  Simone Fumagalli, Gianni Frasi successor. He stays true to the
                  tradition taught to him by Gianni himself and his uncle,
                  Giovanni Erbisti, who began roasting coffee in 1947. He still
                  uses his Erbisti's original roasting machine, making him
                  almost certainly the last roasters in the world to roast his
                  beans directly with an open flame. The family philosophy
                  remains the same, eschewing dark roasts in order to preserve
                  even the subtlest aromas of the coffee. Simone is obsessive
                  about sourcing his beans and insists on specifying the exact
                  means of production at every stage of the process.
                </small>
                <small>
                  <blockquote
                    className={
                      darkMode === "true"
                        ? "sunflower sunflower__reverse"
                        : "sunflower"
                    }
                  >
                    The Best Single Dosing Coffee Grinders
                  </blockquote>
                  <p className="about-parts">
                    A coffee grinder that has definitely seen a boost in
                    popularity in the past years is the single dose coffee
                    grinder. If you associate brewing coffee as a ritual, then
                    you are gonna love this. The key word for these coffee
                    grinders is “Retention” which should be equal to zero to
                    fully enjoy the pre-weighted coffee you have prepared for
                    your single dose coffee shot. Typically you will find a pump
                    system on top that will ensure that not even the smallest
                    residuals of weighted coffee is retained.
                  </p>
                  <hr />
                  <blockquote
                    className={
                      darkMode === "true"
                        ? "sunflower sunflower__reverse"
                        : "sunflower"
                    }
                  >
                    We make the best coffee for on the Go{" "}
                  </blockquote>
                  <p
                    className="text-secondary textShadow"
                    style={{ fontSize: "1.25rem" }}
                  ></p>
                  <p className="about-parts">
                    Proident nulla officia minim dolor cillum mollit sit ad sint
                    tempor veniam. Nulla tempor elit quis eu minim. Labore Lorem
                    amet non culpa sit magna exercitation. Duis in aliquip
                    aliquip et dolore voluptate fugiat et consectetur. Ad elit
                    ut aute eiusmod. Amet ullamco culpa sit non ipsum fugiat
                    aute cupidatat. Consequat magna culpa exercitation consequat
                    dolor nisi Lorem do laboris.
                  </p>
                  <blockquote
                    className={
                      darkMode === "true"
                        ? "sunflower sunflower__reverse"
                        : "sunflower"
                    }
                  >
                    Our Mission
                  </blockquote>
                  <p className="about-parts">
                    <p className="text-secondary textShadow">E s p r o</p> is on
                    a mission to make health and wellness accessible to all. We
                    have been dedicated to offering Earth’s best-curated
                    selection of health and wellness products, at the best
                    possible value, delivered with the most convenient
                    experience. We believe that health and wellness should be a
                    universal right made possible through compassion and our
                    collective action. This belief will continue to guide us as
                    we endeavor to make our mission a reality.
                  </p>
                  <p
                    className={
                      darkMode === "true"
                        ? "list text-secondary textShadow"
                        : "list black textShadow"
                    }
                  >
                    Top 5 reasons to make iHerb your #1 choice for Natural
                    Products!
                  </p>
                  <ul>
                    <li>
                      World's best value for over 32,000 brand name products
                    </li>
                    <li>No membership or yearly subscription fees</li>
                    <li>Authentic reviews from purchasing customers</li>
                    <li>Assurance of freshness and quality</li>
                    <li>Air-conditioned and super clean warehouses</li>
                  </ul>
                </small>
              </div>
            </div>
          </main>
        </Wrapper>
        <Footer className="Row" />
    </Fragment>
  );
};

export default About;