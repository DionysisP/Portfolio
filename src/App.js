import { Route, Switch } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Homepage from './components/Homepage'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Project from './components/Project'

import projectsData from '../src/json/projects.json'

import mykonos from './images/mykonos.jpg';
import dpDesk from './images/dpDesktop.jpg';


export default function App() {

  return (
    <div className="App">
      <Navigation />
      <ScrollToTop />
      
      <Switch>
        <Route path='/' exact>
          <Homepage />
          {/*
          <div className="up">
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="29" cy="29" r="29" fill="#F81783" />
              <path d="M30.0607 22.9393C29.4749 22.3536 28.5251 22.3536 27.9393 22.9393L18.3934 32.4853C17.8076 33.0711 17.8076 34.0208 18.3934 34.6066C18.9792 35.1924 19.9289 35.1924 20.5147 34.6066L29 26.1213L37.4853 34.6066C38.0711 35.1924 39.0208 35.1924 39.6066 34.6066C40.1924 34.0208 40.1924 33.0711 39.6066 32.4853L30.0607 22.9393ZM30.5 26L30.5 24L27.5 24L27.5 26L30.5 26Z" fill="white" />
            </svg>
          </div>
          */}
          <Footer />
        </Route>

        <Route path='/about' exact>
          <About />
          <Footer />
        </Route>

        <Route path='/portfolio' exact >
          <Portfolio />
          <Footer />
        </Route>

        <Route path='/contact' exact>
          <Contact />
          
        </Route>

          {projectsData.map(show => {
              return (
                <Route key={show.id} path={'/project/' + show.id} exact>
                  <Project 
                    title = {show.title}
                    desc = {show.description}
                    url = {show.url}
                    technologies = {show.technologies}
                    git = {show.github}
                    websiteImg = {show.image}
                  />
                </Route>
              );
          })}


       


      </Switch>
      
      
    </div>
  );
}


