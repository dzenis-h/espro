import React from "react";
import Footer from "./layout/FooterComponent";
import Toggle from "./darkMode/ToggleContainer";
import { useTheme } from "./darkMode/useTheme";
import { Wrapper } from "./darkMode/Wrapper";

const Contact = props => {
  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");


return (
  <>
<Wrapper>
<main id="contact">
<Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
      <h1 class="lg-heading">
        Contact {' '}
        <span class="text-secondary">Us</span>
      </h1>
      <h2 class="sm-heading">
        This is how you can reach us:<br />
        <small class="text-secondary"
          >For convenience, the contact info is clickable</small
        >
      </h2>

      <div class="boxes">
        <div class="xsm .diff-text-2">
          <i class="fab fa-linkedin-in"></i>
          <a href="https://www.linkedin.com/in/dzenis-h/" target="_blank">
            LinkedIn</a
          >
        </div>

        <div class="xsm .diff-text-2">
          <address>
            Email us <i class="fas fa-at"></i>
            <a href="mailto:bigga.test.2018@gmail.com">Dzenis H.</a><br />
          </address>
        </div>

        <div class="xsm .diff-text-2">
          <i class="fas fa-mobile-alt"></i>
          <a href="tel:00387603311015">Phone: (+387) 60-44-55-66</a><br />
        </div>

        <div class="xsm .diff-text-2">
          <i class="fab fa-skype"></i>
          <a href="skype:dzenis.hankusic?call">Call us via Skype</a>
        </div>

        <div class="xsm .diff-text-2">
          <i class="fas fa-map-marker-alt"></i>
          <a
            href="https://maps.google.com/?q=44.696107, 18.299074"
            target="_blank"
          >
            Address: Patriotske Lige 37, Gracanica, 75320, BiH</a
          ><br />
        </div>
      </div>
      </main>

      <Footer />
      </Wrapper>
      </>
      
)}
export default Contact;
