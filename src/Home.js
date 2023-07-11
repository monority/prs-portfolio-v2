import './sass/main.scss';
import SkillPage from './Pages/SkillPage';
import ProjectPage from './Pages/ProjectPage';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';

function Home() {

  return (

    <div className="main">
      <div id="landing-page" className='block'>
        <div className="container-content">
          <div className="wraps">
            <LandingPage />
          </div>
        </div>
      </div>

      <div id="about-page" className='block'>
        <div className="container-content">
          <div className="wraps">
            <AboutPage />
          </div>
        </div>
      </div>

      <div id="focus-page" className='block'>
        <div className="container-content">
          <div className="wraps">
            <SkillPage />
          </div>
        </div>
      </div>

      <div id="project-page" className='block'>
        <div className="container-content">
          <div className="wraps">
            <ProjectPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
