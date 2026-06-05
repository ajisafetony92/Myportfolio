import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './portfolio.css';
import './Footer.css';
import FAQ from './FAQ';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

import logoImage from './assets/My logo.png';
import myPicture from './assets/Olayinka .jpg';
import contactImage from './assets/images(1).png';
import whatsappImage from './assets/images(8).jpg';
import htmlLogo from './assets/HTML.jpg';
import cssLogo from './assets/css-logo-02.webp';
import jsLogo from './assets/Javascript.jpg';
import pythonLogo from './assets/Makeshiftpythonlogo.png';
import codingImage from './assets/coding.jpg';
import webguyImage from './assets/Webguy.jpg';
import googleImage from './assets/Google.png';
import mongoImage from './assets/Mongo.jpg';
import InstagramImg from './assets/Instagram.jpeg';
import TiktokImg from './assets/Tiktok.png';
import FacebookImg from './assets/Facebook.jpeg';

// Homepage Component
function HomePage() {
  return (
    <>
      <nav>
        <div className="logo">Nexus Craft</div>
        <img className="logo-image" src={logoImage} alt="Logo" />
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#Skills">My Skills</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div id="home" className="Shillalo">
        <img className="Mee" src={myPicture} alt="My picture" />
        <h2>Hello! I'm Anthony Olayinka</h2>
        <p>A passionate Web developer, I turn ideas into fast, responsive, and user-friendly web experiences. 
          With a focus on clean code, thoughtful design, and real-world functionality, 
          I help brands and individuals build a strong digital presence, from sleek landing pages to full-featured web applications.</p>
        <button type="submit" className="send-btn">View Projects</button>
        <button type="submit" className="send-btn">Contact Me</button>
      </div>

      <div id="contact">
  <a href="mailto:anthonyolaola@gmail.com" target="_blank" rel="noopener noreferrer">
    <img className="Contactus" src={contactImage} alt="Contact" />
  </a>
  <a href="https://wa.me/2348131593974" target="_blank" rel="noopener noreferrer">
    <img className="WhatsApp" src={whatsappImage} alt="WhatsApp" />
  </a>
  
  {/* New Social Media Links */}
  <a href="https://instagram.com/hamster.6853" target="_blank" rel="noopener noreferrer">
    <img className="Contactus" src={InstagramImg} alt="Instagram" />
  </a>
  <a href="https://tiktok.com/@anthonyolayinka" target="_blank" rel="noopener noreferrer">
    <img className="Contactus" src={TiktokImg} alt="TikTok" />
  </a>
  <a href="https://facebook.com/ifeoluwaajisafe92" target="_blank" rel="noopener noreferrer">
    <img className="Contactus" src={FacebookImg} alt="Facebook" />
  </a>
</div>

      <div id="about" className="content">
      <center> <h2 className="mark1">About us.</h2></center> <br /><br />
        I believe a website should be more than a digital business card, it should be an engine for growth. I'm a Frontend Developer who focuses on bridging the gap between complex technical problems and intuitive user experiences.
        I don't just write code; I build tools that solve problems. Whether it's optimizing a database for speed or crafting a pixel-perfect UI, my goal is always the same: making the web work better for you.
      </div>

      <div className="container">
        <div className="card">
          <h3>Agile Delivery</h3> <br />
          Time is your most valuable asset. I've streamlined my workflow to provide quick feedback, project estimates, and milestone approvals, ensuring your project moves from "concept" to "live" without unnecessary bottlenecks.
        </div>
        <div className="card">
          <h3>No Hidden Fees</h3> <br />
          No "tech-speak" surcharges or surprise invoices. You'll receive a clear, comprehensive breakdown of costs upfront. Whether it's a fixed-price project or an hourly rate, what we agree on is what you pay.
        </div>
        <div className="card">
          <h3>Secure & Private</h3> <br />
          Your data and intellectual property are treated with the highest level of integrity. I implement industry-standard security protocols and clean, audited code to ensure your users' information and your proprietary ideas stay protected.
        </div>
      </div>
      <br />

      <div id="Skills">
        <h2>My Skills</h2>
        <div className="skillscontent">
          <div className="skillslist">
            <img className="skillLogo" src={htmlLogo} alt="Html Logo" />
            <h3>HTML</h3>
            <p><b>90%</b></p>
          </div>
          <div className="skillcard">
            <div className="pskills" style={{ width: '90%' }}></div>
          </div>
          <div className="skillslist">
            <img className="skillLogo" src={cssLogo} alt="CSS Logo" />
            <h3>CSS</h3>
            <p><b>70%</b></p>
          </div>
          <div className="skillcard">
            <div className="pskills" style={{ width: '70%' }}></div>
          </div>
          <div className="skillslist">
            <img className="skillLogo" src={jsLogo} alt="JS Logo" />
            <h3>JS</h3>
            <p><b>80%</b></p>
          </div>
          <div className="skillcard">
            <div className="pskills" style={{ width: '80%' }}></div>
          </div>
          <div className="skillslist">
            <img className="skillLogo" src={pythonLogo} alt="Python Logo" />
            <h3>Python</h3>
            <p><b>70%</b></p>
          </div>
          <div className="skillcard">
            <div className="pskills" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>

      <div className="containerwateva">
        <div className="box">
          <img className="Meee" src={codingImage} alt="image" />
          <h3>Frontend Master- Advanced React</h3> <br />
          Frontend Master <br />
          2023
        </div>
        <div className="box">
          <img className="Meee" src={webguyImage} alt="foto" />
          <h3>AWS Certified Developer</h3> <br />
          Amazon Web Service <br />
          2023
        </div>
        <div className="box box-3">
          <img className="Meee" src={googleImage} alt="fhoto" />
          <h3>Google Analytics Certification</h3> <br />
          Google <br />
          2023
        </div>
        <div className="box">
          <img className="Meee" src={mongoImage} alt="fpoto" />
          <h3>MongDB Basics</h3> <br />
          MongDB University <br />
          2023
        </div>
      </div>


 <div className="serv1"><h2 className="awl">Services</h2>
 </div>
      
      
      
        <div id="service" className="Service-container">        
        <div className="Service-card">Web Development</div>
        <div className="Service-card">Frontend React Development</div>
        <div className="Service-card">Next Full Stack Apps</div>
        <div className="Service-card">Cybersecurity Testing</div>
        <div className="Service-card">API & Database Setup</div>
      </div>
<div className="projects-grid">
  
  {/* Project 1 - Crypto Dashboard */}
  <div className="project-card">
    <div className="project-name">Crypto Dashboard</div>
    <p className="project-desc">Real-time cryptocurrency prices, charts, and market data</p>
    <div className="project-tech">React • API • Chart.js</div>
    <a href="https://your-crypto-app.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 2 - Movie Site */}
  <div className="project-card">
    <div className="project-name">Movie Site</div>
    <p className="project-desc">Browse movies, search, view details and trailers</p>
    <div className="project-tech">React • TMDB API • CSS</div>
    <a href="https://your-movie-site.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 3 - Property App */}
  <div className="project-card">
    <div className="project-name">Property App</div>
    <p className="project-desc">Find and list properties for rent or sale</p>
    <div className="project-tech">React • Map API • Firebase</div>
    <a href="https://your-property-app.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 4 - E-Commerce Store */}
  <div className="project-card">
    <div className="project-name">E-Commerce Store</div>
    <p className="project-desc">Online shopping with cart, checkout and payments</p>
    <div className="project-tech">React • Redux • Stripe</div>
    <a href="https://your-ecommerce.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 5 - Chat App */}
  <div className="project-card">
    <div className="project-name">Chat App</div>
    <p className="project-desc">Real-time messaging with rooms and private chats</p>
    <div className="project-tech">React • Socket.io • Node.js</div>
    <a href="https://your-chat-app.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 6 - Task Manager */}
  <div className="project-card">
    <div className="project-name">Task Manager</div>
    <p className="project-desc">Todo app with categories, search, filter and dark mode</p>
    <div className="project-tech">React • LocalStorage • CSS</div>
    <a href="https://todo-app1-opal.vercel.app/" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 7 - Portfolio Website */}
  <div className="project-card">
    <div className="project-name">Portfolio Website</div>
    <p className="project-desc">Personal portfolio showcasing my work and skills</p>
    <div className="project-tech">React • CSS • Vercel</div>
    <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 8 - Blog Platform */}
  <div className="project-card">
    <div className="project-name">Blog Platform</div>
    <p className="project-desc">Create, edit and share blog posts</p>
    <div className="project-tech">React • Markdown • Firebase</div>
    <a href="https://your-blog.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 9 - Weather App */}
  <div className="project-card">
    <div className="project-name">Weather App</div>
    <p className="project-desc">Check weather forecasts for any city worldwide</p>
    <div className="project-tech">React • Weather API • CSS</div>
    <a href="https://your-weather-app.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

  {/* Project 10 - Learning Management System */}
  <div className="project-card">
    <div className="project-name">LMS Platform</div>
    <p className="project-desc">Online courses, quizzes and progress tracking</p>
    <div className="project-tech">React • Node.js • MongoDB</div>
    <a href="https://your-lms.com" target="_blank" rel="noopener noreferrer" className="detail-btn">
      🔗 View Project
    </a>
  </div>

</div>

      <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3>Nexus Craft</h3>
      <p>
        Passionate web developer, creating clean, functional, and modern web experiences.
        Let's build something great together.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Skills">My Skills</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Resources</h3>
      <ul>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
      </ul>
    </div>

    <div className="footer-section contact-info">
      <h3>Get in Touch</h3>
      <p>📧 <a href="mailto:anthonyolaola@gmail.com">anthonyolaola@gmail.com</a></p>
      <p>📞 <a href="tel:+2348131593974">+234 813 159 3974</a></p>
      <p>🕒 Mon-Fri: 9AM - 6PM EST</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Anthony Olayinka | Nexus Craft. All rights reserved.</p>
  </div>
</footer>
    </>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;