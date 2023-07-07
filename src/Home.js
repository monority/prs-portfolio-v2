import './sass/main.scss';
import Focus from './Pages/FocusPage';
import Project from './Pages/ProjectPage';
import LandingPage from './Pages/LandingPage';
import About from './Pages/AboutPage';

function Home() {

  return (

    <div className="main">

        <div id="landing-page" className='block'>

          <div className="container-content">

            <div className="wrappers">
              <LandingPage />
            </div>

          </div>
        </div>

        <div id="about-page" className='block'>
          <div className="container-content">
            <div className="wrappers">
              <About />
            </div>
          </div>
        </div>
   
        <div id="focus-page" className='block'>

          <div className="container-content">
            <div className="wrappers">
              <Focus />
            </div>

          </div>
        </div>
        <div id="project-page" className='block'>

          <div className="container-content">
            <div className="wrappers">
              <Project />
            </div>

          </div>
        </div>
 
    </div>
  );
}

export default Home;
