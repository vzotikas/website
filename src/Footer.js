import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Vasilis Zotikas</h1>
            {/* <span className="footer__subtitle">Web | XR | iOs Developer</span> */}

            <span className="footer__subtitle">
              Web <span className="footer__dot"></span> XR{" "}
              <span className="footer__dot"></span> iOS Developer
            </span>
          </div>
          <ul className="footer__links">
            <li>
              <Link
                style={{ cursor: "pointer" }}
                className="footer__link"
                to="section4"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                className="footer__link"
                to="section5"
                spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                className="footer__link"
                to="section6"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="footer__social"
            >
              <Unicons.UilFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="footer__social"
            >
              <Unicons.UilInstagram />
            </a>
            <a
              href="https://www.twitter.com/"
              target="blank"
              className="footer__social"
            >
              <Unicons.UilTwitterAlt />
            </a>
          </div>
        </div>
        <p className="footer__copy">
          &#169; Woqomoqo 2021. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
