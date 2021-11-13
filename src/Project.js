import * as Unicons from "@iconscout/react-unicons";
import project from "./images/project.png";
import { Link } from "react-scroll";

const Project = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">Do you have a project?</h2>
            <p className="project__description">Feel free to contact me!</p>
            <Link
              className="button button--flex button--white"
              style={{ cursor: "pointer" }}
              to="section6"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Me
              <Unicons.UilMessage className="project__icon button__icon" />
            </Link>
          </div>
          <img src={project} alt="Project" className="project__img" />
        </div>
      </div>
    </section>
  );
};

export default Project;
