import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Scroll = () => {
  const [scrollTop, setscrollTop] = useState(null);
  useEffect(() => {
    setscrollTop(document.getElementById("scroll-up"));
  }, [scrollTop]);

  const scrollUp = () => {
    if (scrollTop) {
      if (window.scrollY >= 560) {
        scrollTop.classList.add("show-scroll");
      } else {
        scrollTop.classList.remove("show-scroll");
      }
    }
  };

  window.addEventListener("scroll", scrollUp);

  return (
    <Link
      style={{ cursor: "pointer" }}
      className="scrollup"
      id="scroll-up"
      to="section1"
      spy={true}
      smooth={true}
      duration={500}
    >
      <Unicons.UilArrowUp className="scrollup__icon" />
    </Link>
  );
};

export default Scroll;
