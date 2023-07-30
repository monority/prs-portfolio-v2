import './sass/main.scss';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import TechPage from './pages/TechPage';
import ContactPage from './pages/ContactPage'
const Home = () => {

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
      <div id="tech-page" className='block'>
        <div className="container-content">
          <div className="wraps">
            <TechPage />
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
      <div id="contact-page" className='block'>
        <div className="container-content">
          <div className="wraps">
            <ContactPage />
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Home;
