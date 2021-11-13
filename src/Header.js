import { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-scroll";

const Header = () => {
  const [navMenu, setnavMenu] = useState(null);
  const [navToggle, setnavToggle] = useState(null);
  const [navClose, setnavClose] = useState(null);
  const [navLink, setnavLink] = useState(null);

  useEffect(() => {
    setnavMenu(document.getElementById("nav-menu"));
    setnavToggle(document.getElementById("nav-toggle"));
    setnavClose(document.getElementById("nav-close"));
    setnavLink(document.querySelectorAll(".nav__link"));
  }, []);

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  const linkAction = () => {
    navMenu.classList.remove("show-menu");
  };

  if (navLink) {
    navLink.forEach((element) => {
      element.addEventListener("click", linkAction);
    });
  }
  const [themeButton, setthemeButton] = useState(null);

  const [textField, setTextField] = useState("");

  const currentElementIdContent = " woqomoqo_beta ";

  useEffect(() => {
    var i = 0;
    var id = setInterval(() => {
      if (i === currentElementIdContent.length) {
        clearInterval(id);
      } else {
        setthemeButton(document.getElementById("theme-button"));
        const text = currentElementIdContent.slice(0, i++);
        text !== currentElementIdContent && setTextField(text);
      }
    }, 100);
  }, []);

  const selectedTheme = localStorage.getItem("selected-theme");

  if (themeButton) {
    const getCurrentTheme = () =>
      document.body.classList.contains("dark-theme") ? "dark" : "light";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
    }

    themeButton.addEventListener("click", () => {
      var para = document.createElement("p");

      document.getElementById("lll").appendChild(para);
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("selected-theme", getCurrentTheme());
    });
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        {/* <a href="/" className="nav__logo"> */}
        <div className="nav__logo">
          <span className="typeing">
            {textField}
            <span className="blinker"></span>
          </span>
        </div>
        {/* </a> */}
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav__link active-link home-id"
                to="section1"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Unicons.UilEstate className="nav__icon" />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav__link about-id"
                to="section2"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Unicons.UilUser className="nav__icon" />
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav__link skills-id"
                to="section3"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Unicons.UilFileAlt className="nav__icon" />
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav__link services-id"
                to="section4"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Unicons.UilBriefcaseAlt className="nav__icon" />
                Sevices
              </Link>
            </li>
            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav__link portfolio-id"
                to="section5"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Unicons.UilScenery className="nav__icon" />
                Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav__link contact-id"
                to="section6"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Unicons.UilMessage className="nav__icon" />
                Contact
              </Link>
            </li>
          </ul>
          <Unicons.UilTimes className="nav__close" id="nav-close" />
        </div>
        <div className="nav__btns">
          {/* Theme change button */}
          <div id="lll">
            <Unicons.UilMoon
              className="change-theme uil-moon"
              id="theme-button"
            />
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <Unicons.UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
