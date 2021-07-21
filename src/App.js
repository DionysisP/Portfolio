import { Route, Switch } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Homepage from './components/Homepage'
import ScrollToTop from './components/ScrollToTop'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ProjectPage from './components/ProjectPage'

import projectsData from '../src/json/projects.json'



export default function App() {

  return (
    <div className="App">
      <Navigation />
      <ScrollToTop />

      <Switch>
        <Route path='/' component={Homepage} exact />
        <Route path='/about' component={About} exact />
        <Route path='/portfolio' component={Portfolio} exact />
        <Route path='/contact' component={Contact} exact />

    
        {projectsData.map(show => {
          return (
            <Route key={show.id} path={'/project/' + show.id} exact>
              <ProjectPage
                title={show.title}
                desc={show.description}
                url={show.url}
                technologies={show.technologies}
                git={show.github}
                websiteImg={show.desktop_image}
              />
            </Route>
          );
        })}
      </Switch>

    </div>
  );
}


