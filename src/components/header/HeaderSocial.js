import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import React from "react";
const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/omrajgaurav/"
        target="https://www.linkedin.com/in/omrajgaurav/"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/om-rajgaurav"
        target="https://github.com/om-rajgaurav"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
