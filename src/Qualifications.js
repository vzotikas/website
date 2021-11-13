import { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

const Qualifications = () => {
  const [tabs, settabs] = useState(null);
  const [tabContents, settabContents] = useState(null);

  useEffect(() => {
    settabs(document.querySelectorAll("[data-target]"));
    settabContents(document.querySelectorAll("[data-content]"));
  }, []);

  if (tabs && tabContents) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        console.log(tab.dataset.target);
        console.log(target);
        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualifications__active");
        });
        target.classList.add("qualifications__active");

        tabs.forEach((tab) => {
          tab.classList.remove("qualifications__active");
        });
        tab.classList.add("qualifications__active");
      });
    });
  }

  return (
    <section className="qualifications section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualifications__container container">
        <div className="qualifications__tabs">
          <div
            className="qualifications__button button--flex qualifications__active"
            data-target="#education"
          >
            <Unicons.UilGraduationCap className="qualifications__icon" />
            Education
          </div>
          <div
            className="qualifications__button button--flex"
            data-target="#work"
          >
            <Unicons.UilBriefcaseAlt className="qualifications__icon" />
            Work
          </div>
        </div>

        <div className="qualifications__sections">
          {/* ---QUALIFICATIONS CONTENT 1--- */}
          <div
            className="qualifications__content qualifications__active"
            data-content
            id="education"
          >
            {/* ---QUALIFICATION 1  --- */}
            <div className="qualifications__data qualifications__data-left">
              <div>
                <h3 className="qualifications__title">XR Development</h3>
                <span className="qualifications__subtitle">Nackademin</span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2019 - 2021
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            {/* ---QUALIFICATION 2  --- */}
            <div className="qualifications__data qualifications__data-right">
              <div></div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
              <div>
                <h3 className="qualifications__title">
                  Theoretical and Mathematical Physics
                </h3>
                <span className="qualifications__subtitle">
                  Stockholm University
                </span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2014 - 2017
                </div>
              </div>
            </div>

            {/* ---QUALIFICATION 3  --- */}
            <div className="qualifications__data qualifications__data-left">
              <div>
                <h3 className="qualifications__title">
                  Studies in Natural Sciences
                </h3>
                <span className="qualifications__subtitle">
                  Hellenic Open University
                </span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2007 - 2011
                </div>
              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            {/* ---QUALIFICATION 4  --- */}
            <div className="qualifications__data qualifications__data-right">
              <div></div>

              <div>
                <span className="qualifications__rounder"></span>
                {/* <span className="qualifications__line"></span> */}
              </div>

              <div>
                <h3 className="qualifications__title">
                  Multimedia Development
                </h3>
                <span className="qualifications__subtitle">Omiros College</span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2005 - 2007
                </div>
              </div>
            </div>
          </div>

          {/* ---QUALIFICATIONS CONTENT 2--- */}
          <div className="qualifications__content " data-content id="work">
            {/* ---QUALIFICATION 1  --- */}
            <div className="qualifications__data qualifications__data-left">
              <div>
                <h3 className="qualifications__title">VR/AR Developer</h3>
                <span className="qualifications__subtitle">
                  Vobling Europe / Studio3D
                </span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            {/* ---QUALIFICATION 2  --- */}
            <div className="qualifications__data qualifications__data-right">
              <div></div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div>
                <h3 className="qualifications__title">Web Developer</h3>
                <span className="qualifications__subtitle">
                  IT Consultant / Freelancer
                </span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2018 - 2020
                </div>
              </div>
            </div>

            {/* ---QUALIFICATION 3  --- */}
            <div className="qualifications__data qualifications__data-left">
              <div>
                <h3 className="qualifications__title">iOS Developer</h3>
                <span className="qualifications__subtitle">
                  IT Consultant / Freelancer
                </span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2014 - 2018
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>
            </div>

            {/* ---QUALIFICATION 4  --- */}
            <div className="qualifications__data qualifications__data-right">
              <div></div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

              <div>
                <h3 className="qualifications__title">Software Engineer</h3>
                <span className="qualifications__subtitle">FDS SA</span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2010 - 2014
                </div>
              </div>
            </div>

            {/* ---QUALIFICATION 5  --- */}
            <div className="qualifications__data qualifications__data-left">
              <div>
                <h3 className="qualifications__title">Web Designer</h3>
                <span className="qualifications__subtitle">Ipng Group SA</span>
                <div className="qualifications__calendar">
                  <Unicons.UilCalendarAlt className="uil" />
                  2005 - 2009
                </div>
              </div>
              <div>
                <span className="qualifications__rounder"></span>
                {/* <span className="qualifications__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
