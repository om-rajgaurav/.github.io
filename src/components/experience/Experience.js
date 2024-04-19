import "./Experience.css";

import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { expData, skills } from "../../utils/expData";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend1">
          {expData.map((experience, index) => {
            return (
              <div className="exp-Container" key={index}>
                <BsPatchCheckFill className="experience__details-icon" />
                <>
                  <div className="experience__content">
                    <h2 className="profile">{experience.profile}</h2>
                    <article className="experience__details">
                      <div className="experience__details-deg">
                        <div>
                          <h4>{experience.degnisation}</h4>
                          <h5>{experience.company}</h5>
                        </div>

                        <small className="text-light">
                          {experience.To} to {experience.From}
                        </small>
                      </div>
                    </article>
                    <div className="desc">
                      {experience.Desc.map((desc, i) => (
                        <p key={i} className="text-Desc">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              </div>
            );
          })}
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__frontend">
          <h3> Skill's</h3>
          {skills.map((skill, index) => {
            return (
              <article
                className="experience__details directionFlex"
                key={index}
              >
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}%</small>
                  <div className="level-container">
                    <div
                      className="level-line"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
