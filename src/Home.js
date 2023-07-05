import './sass/main.scss';
import Focus from './components/FocusPage';
import Project from './components/ProjectPage';
import LandingPage from './components/LandingPage';
import About from './components/About';
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
          <About/>
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
