import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skillsContent, setskillsContent] = useState(null);
  const [skillsHeader, setskillsHeader] = useState(null);
  // const [skillsClickArea, setskillsClickArea] = useState(null);
  useEffect(() => {
    setskillsContent(document.getElementsByClassName("skills__content"));
    setskillsHeader(document.querySelectorAll(".skills__header"));
  }, []);

  const toggleSkills = (e) => {
    // console.log(e.target);

    if (e.target.className === "skills__title") {
      let itemClass =
        e.target.parentElement.parentElement.parentElement.className;
      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
      }

      if (itemClass === "skills__content skills__close") {
        e.target.parentElement.parentElement.parentElement.className =
          "skills__content skills__open";
      }
    }

    //
    else if (e.target.className === "skills__subtitle") {
      let itemClass =
        e.target.parentElement.parentElement.parentElement.className;
      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
      }

      if (itemClass === "skills__content skills__close") {
        e.target.parentElement.parentElement.parentElement.className =
          "skills__content skills__open";
      }
    }

    //
    else if (e.target.className === "skills__header") {
      let itemClass = e.target.parentElement.className;
      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
      }

      if (itemClass === "skills__content skills__close") {
        e.target.parentElement.className = "skills__content skills__open";
      }
    }

    //
    // else if (e.target.className === "skills__icon") {
    //   console.log("icon");

    //   let itemClass = e.target.parentElement.parentElement.className;
    //   for (let i = 0; i < skillsContent.length; i++) {
    //     skillsContent[i].className = "skills__content skills__close";
    //   }

    //   if (itemClass === "skills__content skills__close") {
    //     e.target.parentElement.parentElement.className =
    //       "skills__content skills__open";
    //   }
    // }

    // //
    // else if (e.target.className === "skills__arrow") {
    //   console.log("arrow");
    //   let itemClass = e.target.parentElement.parentElement.className;
    //   for (let i = 0; i < skillsContent.length; i++) {
    //     skillsContent[i].className = "skills__content skills__close";
    //   }

    //   if (itemClass === "skills__content skills__close") {
    //     e.target.parentElement.parentElement.className =
    //       "skills__content skills__open";
    //   }
    // }

    //
    else {
      let itemClass = e.target.parentElement.parentElement.className;

      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
      }

      if (itemClass === "skills__content skills__close") {
        e.target.parentElement.parentElement.className =
          "skills__content skills__open";
      }
    }
  };

  if (skillsHeader) {
    // console.log(skillsHeader);
    // const listArray = Array.from(skillsHeader);
    // listArray.forEach((item) => {
    //   console.log(item);
    //   item.addEventListener("click", toggleSkills);
    // });
    skillsHeader.forEach((element) => {
      element.addEventListener("click", toggleSkills);
    });
  }

  // if (skillsClickArea) {
  //   skillsClickArea.forEach((element) => {
  //     // for (var i = 0; i < slides.length; i++) {
  //     console.log(skillsClickArea);
  //     element.addEventListener("click", toggleSkills);
  //     // }
  //     // console.log(element);

  //   });
  // }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {/* ---Section 1--- */}

        <div className="skills__content skills__open">
          <div className="skills__header">
            <Unicons.UilDatabase className="skills__icon" />
            <div>
              <h1 className="skills__title">Web Developer</h1>
              <span className="skills__subtitle">More than 4 years</span>
            </div>
            <Unicons.UilAngleDown className="skills__arrow" />
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">95%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript - TypeScript</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React - Redux - Next.js</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node.js - PHP</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">GraphQL - Rest API</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>
          </div>
        </div>

        {/* ---Section 2--- */}

        <div className="skills__content skills__close">
          <div className="skills__header">
            <Unicons.UilEye className="skills__icon" />
            <div>
              <h1 className="skills__title">XR Developer</h1>
              <span className="skills__subtitle">More than 4 years</span>
            </div>
            <Unicons.UilAngleDown className="skills__arrow" />
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Unity</h3>
                <span className="skills__number">95%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Unreal Engine</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C# - Three.js - OpenGL</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">ARCore - ARKit</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Steam SDK - Oculus SDK</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CAD - BIM - Archviz</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>
          </div>
        </div>

        {/* ---Section 3--- */}

        <div className="skills__content skills__close">
          <div className="skills__header">
            <Unicons.UilAppleAlt className="skills__icon" />
            <div>
              <h1 className="skills__title">iOS Developer</h1>
              <span className="skills__subtitle">More than 4 years</span>
            </div>
            <Unicons.UilAngleDown className="skills__arrow" />
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Swift</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Objective-C</h3>
                <span className="skills__number">65%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">SwiftUI - UIKit - ARKit</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React Native</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>
          </div>
        </div>

        {/* ---Section 4--- */}

        <div className="skills__content skills__close">
          <div className="skills__header">
            <Unicons.UilCube className="skills__icon" />
            <div>
              <h1 className="skills__title">UI / UX - 3D Designer </h1>
              <span className="skills__subtitle">More than 4 years</span>
            </div>
            <Unicons.UilAngleDown className="skills__arrow" />
          </div>

          <div className="skills__list grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Adobe Creative Cloud</h3>
                <span className="skills__number">95%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Maya - Blender - 3D Max</h3>
                <span className="skills__number">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Figma - Sketch - XD</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Substance Suite</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
