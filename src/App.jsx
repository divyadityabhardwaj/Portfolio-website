import React, { useEffect } from 'react';
import './App.css';
import TechIcon from './techIcon';
import DivLine from './DivLine';
import '@fortawesome/fontawesome-free/css/all.min.css';





function App() {
  useEffect(() => {
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight';
    document.body.appendChild(spotlight);

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      spotlight.style.background = `radial-gradient(600px at ${x}px ${y}px,  rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(spotlight);
    };
  }, []);

  return (
    <div className="container">
    <div className="left-column">
      
      <h1>Divyaditya Bhardwaj</h1>
      <p>AI/ML DL enthusiast , Web development </p>
      <nav>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
        </ul>

        <div className="social-icons">
        <a href="https://www.linkedin.com/in/divyaditya-bhardwaj/">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 310 310" xml:space="preserve">
          <g id="XMLID_801_">
	          <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"/>
	          <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
	          <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"/>
          </g>
        </svg>
      </a>

      <a href="https://github.com/divyadityabhardwaj">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.6 2.6 1.1 3.3.8.1-.8.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.2-3 0 0 1-.3 3.3 1.2 1-.3 2.1-.5 3.2-.5s2.2.2 3.2.5c2.3-1.5 3.3-1.2 3.3-1.2.7 1.5.2 2.7.1 3 1.1 1.1 1.8 2.7 1.8 3.6 0 4.6-2.8 5.5-5.5 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"/>
        </svg>
      </a>

      <a href="https://www.instagram.com/adinothere/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg>
      </a>

      <a href="https://x.com/adino_there">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" class="h-5 w-5" aria-hidden="true"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" ></path></svg>
      </a>
      

      
        </div>
      </nav>



      
    </div>

      <div className="right-column">
        <section id="about">
          <p>As an aspiring programmer, I am honing skills in Python, Java, and C++. With experience in HTML, CSS, JavaScript, 
             React, and exposure to Machine Learning, Deep Learning. I am dedicated to continuous learning 
             and problem-solving. I bring adaptability and a keen interest in innovation to contribute effectively to 
             team environments.</p>
        </section>

        <section id="projects">
          <div className="project-1">
            <div className="image-container-1">
              <img src="/Default_a_vibrant_logo_for_Sentify_a_sentiment_classification_1.jpg" alt="Project Image" />
            </div>
            <div className="content-container">
              <div className="description-1">
              <div className="header-with-arrow">
            
            <h1>Sentify</h1>


            <a href="https://your-target-url.com" target="_blank" rel="noopener noreferrer" className="arrow-link">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
               
                <p>Sentify employs deep learning to classify sentiments in YouTube comments, providing accurate insights into audience reactions and sentiment trends for content creators and analysts.</p>
              </div>
              <div className='tech-icon-main-1'>
                <TechIcon name="React"></TechIcon>
                <TechIcon name="Python"></TechIcon>
                <TechIcon name="HTML"></TechIcon>
                <TechIcon name="CSS"></TechIcon>
                <TechIcon name="JS"></TechIcon>
                <TechIcon name="AIML"></TechIcon>
                <TechIcon name="Deep Learning"></TechIcon>
              </div>
            </div>
          </div>

        </section>

        <section id="experience">
          <div className="project-1">
            <div className="image-container-1">
              <p className='tenure-1'>2022 - PRESENT</p>
            </div>
            <div className="exp-1">
              <h1>--------</h1>
              <p> i will add to experience when I get some :)</p>
            </div>
            





          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
