import {Route, Switch} from 'react-router-dom';

import Navigation from "./components/Navigation";
import Homepage from './components/Homepage.js';

import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ShowData from './components/ShowData';
import cvcApp from './images/cvc-app.jpg';
import cinemaApp from './images/cinema-app.jpg';
import lyricsApp from './images/lyrics.jpg';




function App() {

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/' exact>
            <Homepage />
      
            <div className="up">
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="29" cy="29" r="29" fill="#F81783"/>
              <path d="M30.0607 22.9393C29.4749 22.3536 28.5251 22.3536 27.9393 22.9393L18.3934 32.4853C17.8076 33.0711 17.8076 34.0208 18.3934 34.6066C18.9792 35.1924 19.9289 35.1924 20.5147 34.6066L29 26.1213L37.4853 34.6066C38.0711 35.1924 39.0208 35.1924 39.6066 34.6066C40.1924 34.0208 40.1924 33.0711 39.6066 32.4853L30.0607 22.9393ZM30.5 26L30.5 24L27.5 24L27.5 26L30.5 26Z" fill="white"/>
              </svg>
            </div>

            <Footer title="Contact"/>
  
        </Route>  

        <Route path='/about' exact>
          <About title='Curriculum Vitae' />
          <Footer title="Contact"/>
        </Route> 

        <Route path='/portfolio' exact >
            <Portfolio title="Portfolio" />
            <Footer title="Contact"/>
        </Route> 

        <Route path='/contact' exact>
            <Contact title='Contact' />
        </Route> 

        {/* <Route path='/showData/:id' component={ShowData} /> */}
         
        <Route path={'/showData/1'}>
          <ShowData title='Covid Vaccine Company' desc="Phasellus consectetur, nisi ornare viverra dapibus, lectus libero gravida urna, nec finibus erat odio eget enim. Phasellus vestibulum nec tellus id semper. Donec convallis magna in ante gravida fermentum. Vivamus ut arcu ligula. " img={cvcApp} color1='56ADFD' color2='20C276' color3='FFFFFF' color4='5A5A5A' />
          <Footer title="Contact"/>
        </Route>

        <Route path={'/showData/2'}>
          <ShowData title='Cinema app' desc="Phasellus consectetur, nisi ornare viverra dapibus, lectus libero gravida urna, nec finibus erat odio eget enim. Phasellus vestibulum nec tellus id semper. Donec convallis magna in ante gravida fermentum. Vivamus ut arcu ligula. " img={cinemaApp} color1='56ADFD' color2='20C276' color3='FFFFFF' />
          <Footer title="Contact"/>
        </Route>

        <Route path={'/showData/3'}>
          <ShowData title='Lyrics' desc="Phasellus consectetur, nisi ornare viverra dapibus, lectus libero gravida urna, nec finibus erat odio eget enim. Phasellus vestibulum nec tellus id semper. Donec convallis magna in ante gravida fermentum. Vivamus ut arcu ligula. " img={lyricsApp} color1='56ADFD' color2='20C276' color3='FFFFFF' />
          <Footer title="Contact"/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
