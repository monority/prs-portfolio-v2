import './sass/main.scss';
import Focus from './components/FocusPage';
import Project from './components/ProjectPage.js';
import LandingPage from './components/LandingPage';
function Home() {

  return (
    <div className="main">
      <div id="landing-page">

        <div className="container-content">

          <div className="wrappers">
            <LandingPage />
          </div>

        </div>
      </div>

      <div id="focus-page">

        <div className="container-content">
          <div className="wrappers">
            <Focus />
          </div>

        </div>
      </div>
      <div id="project-page">

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
