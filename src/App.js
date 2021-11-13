import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Main from "./Main";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Qualifications from "./Qualifications";
import Scroll from "./Scroll";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import styled from "styled-components";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const SectionStyled = styled.div``;

function App() {
  const [sections, setSections] = useState(null);
  useEffect(() => {
    setSections(document.querySelectorAll("section[id]"));
  }, []);

  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    if (sections) {
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const test1 = document.querySelector("." + sectionId + "-id");
          if (test1) {
            test1.classList.add("active-link");
          }
        } else {
          const test2 = document.querySelector("." + sectionId + "-id");
          if (test2) {
            test2.classList.remove("active-link");
          }
        }
      });
    }
  };
  window.addEventListener("scroll", scrollActive);

  const scrollHeader = () => {
    const nav = document.getElementById("header");
    if (nav) {
      if (window.scrollY > 80) {
        nav.classList.add("scroll-header");
      } else {
        nav.classList.remove("scroll-header");
      }
    }
  };
  window.addEventListener("scroll", scrollHeader);
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path="/" exact> */}
      <Header />

      <Main>
        <SectionStyled id="section1">
          <Home />
        </SectionStyled>

        <SectionStyled id="section2">
          <About />
        </SectionStyled>

        <SectionStyled id="section3">
          <Skills />
        </SectionStyled>

        <Qualifications />

        <SectionStyled id="section4">
          <Services />
        </SectionStyled>

        <SectionStyled id="section5">
          <Portfolio />
        </SectionStyled>

        <Project />

        <Testimonials />

        <SectionStyled id="section6">
          <Contact />
        </SectionStyled>
      </Main>
      <Footer />
      <Scroll />
      {/* </Route>
          <Route path="/about" component={About} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
