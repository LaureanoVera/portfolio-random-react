import React from "react";
import './Project.css'

const Project = ({name, url}) => {
  return (
    <div className="project">
      <h3 className="project__title">{name}</h3>
      <a href={url} className="project__link" target="blank">
        Code
      </a>
    </div>
  );
};

export default Project;
