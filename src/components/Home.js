import React from 'react'
import './Home.css'
import Project from './Project'

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <h1>Laureano Vera</h1>
        <p>Programador | Humano | Poco mas</p>
      </div>
      <div className="home__content" id="proyectos">
        {/* CREAR COMPONENTES DE PROYECTO */}
        <div className="home__content-title">
          <h3>Proyectos</h3>
        </div>
        <div className="home__content-clusters">
         <Project name="Graphic" url="https://github.com/LaureanoVera/graphic-portfolio" />
         <Project name="PintClon" url="https://github.com/LaureanoVera/pinterest-clone" />
         <Project name="GameJS" url="https://github.com/LaureanoVera/gamejs-piedra-papel-tijeras" />
         <Project name="ChatApp" url="https://github.com/LaureanoVera/chat-app" />
         <Project name="PlatziConf" url="https://github.com/LaureanoVera/platziconf-hawaii" />
         <Project name="Starbucks" url="https://github.com/LaureanoVera/landing-page-de-starbucks" />
        </div>
      </div>
    </div>
  )
}

export default Home
