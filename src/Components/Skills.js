import React from "react";
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {SiMaterialUi} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {DiGit} from 'react-icons/di'
import {SiFirebase} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'

const Skills = () => {
 
  return (
    <section id="skills">
      <div className="skillsGrid">
        <div className="skillsGridItem">
          <h1>HTML</h1>
          <AiFillHtml5
            size="8rem"
            color="#FFA500"/>
        </div>
        <div className="skillsGridItem">
          <h1>CSS</h1>
          <DiCss3
            size="8rem"
            color="#2B60DE"/>
        </div>
        <div className="skillsGridItem">
          <h1>SASS</h1>
          <DiSass
            size="8rem"
            color="#CD6799"/>
        </div>
        <div className="skillsGridItem">
          <h1>Bootstrap</h1>
          <BsFillBootstrapFill
            size="8rem"
            color="#6f42c1"/>
        </div>
        <div className="skillsGridItem">
          <h1>Material-UI</h1>
          <SiMaterialUi
            size="8rem"
            color="#4791db"/>
        </div>
        <div className="skillsGridItem">
          <h1>Javascript</h1>
          <SiJavascript
            size="8rem"
            color="#F0DB4F"/>
        </div>
        <div className="skillsGridItem">
          <h1>React</h1>
          <DiReact
            size="8rem"
            color="#61DBFB"/>
        </div>
        <div className="skillsGridItem">
          <h1>Git</h1>
          <DiGit
            size="8rem"
            color="#F1502F"/>
        </div>
        <div className="skillsGridItem">
          <h1>Firebase</h1>
          <SiFirebase
            size="8rem"
            color="#FFA500"/>
        </div>
        <div className="skillsGridItem">
          <h1>Node JS</h1>
          <FaNodeJs
            size="8rem"
            color="#3c873a"/>
        </div>
      </div>
    </section>
  );
};

export default Skills;