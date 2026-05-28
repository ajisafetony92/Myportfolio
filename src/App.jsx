import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './portfolio.css';
import './Footer.css';
import FAQ from './FAQ';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

// Homepage Component
function HomePage() {
  return (
    <>
      <nav>
        <div className="logo">Nexus Craft</div>
        <img className="logo-image" src="/src/assets/My logo.png" alt="Logo" />
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#Skills">My Skills</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div id="home" className="Shillalo">
        <img className="Mee" src="/src/assets/Olayinka .jpg" alt="My picture" />
        <h2>Hello! I'm Anthony Olayinka</h2>
        <p>A passionate Web developer, I turn ideas into fast, responsive, and user-friendly web experiences. 
          With a focus on clean code, thoughtful design, and real-world functionality, 
          I help brands and individuals build a strong digital presence, from sleek landing pages to full-featured web applications.</p>
        <button type="submit" className="send-btn">View Projects</button>
        <button type="submit" className="send-btn">Contact Me</button>
      </div>

      <div id="contact">
        <a href="mailto:anthonyolaola@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="Contactus" src="/src/assets/images(1).png" alt="Contact" />
        </a>
        <a href="https://wa.me/2348131593974" target="_blank" rel="noopener noreferrer">
          <img className="WhatsApp" src="/src/assets/images(8).jpg" alt="WhatsApp" />
        </a>
      </div>

      <div id="about" className="content">
        <h2 className="mark1">About us.</h2> <br /><br />
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
            <img className="skillLogo" src="/src/assets/HTML.jpg" alt="Html Logo" />
            <h3>HTML</h3>
            <p><b>90%</b></p>
          </div>
          <div className="skillcard">
            <div className="pskills" style={{ width: '90%' }}></div>
          </div>
          <div className="skillslist">
            <img className="skillLogo" src="/src/assets/css-logo-02.webp" alt="CSS Logo" />
            <h3>CSS</h3>
            <p><b>70%</b></p>
          </div>
          <div className="skillcard">
            <div className="pskills" style={{ width: '70%' }}></div>
          </div>
          <div className="skillslist">
            <img className="skillLogo" src="/src/assets/Javascript.jpg" alt="JS Logo" />
            <h3>JS</h3>
            <p><b>80%</b></p>
          </div>
          <div className="skillcard">
            <div className="pskills" style={{ width: '80%' }}></div>
          </div>
          <div className="skillslist">
            <img className="skillLogo" src="/src/assets/Makeshiftpythonlogo.png" alt="Python Logo" />
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
          <img className="Meee" src="/src/assets/coding.jpg" alt="image" />
          <h3>Frontend Master- Advanced React</h3> <br />
          Frontend Master <br />
          2023
        </div>
        <div className="box">
          <img className="Meee" src="/src/assets/Webguy.jpg" alt="foto" />
          <h3>AWS Certified Developer</h3> <br />
          Amazon Web Service <br />
          2023
        </div>
        <div className="box box-3">
          <img className="Meee" src="/src/assets/Google.png" alt="fhoto" />
          <h3>Google Analytics Certification</h3> <br />
          Google <br />
          2023
        </div>
        <div className="box">
          <img className="Meee" src="/src/assets/Mongo.jpg" alt="fpoto" />
          <h3>MongDB Basics</h3> <br />
          MongDB University <br />
          2023
        </div>
      </div>

      <div id="service" className="Service-container">
        <div className="Service-card card-1"><h2 className="awl">Services</h2></div>
        <div className="Service-card">Web Development</div>
        <div className="Service-card">Frontend React Development</div>
        <div className="Service-card">Next Full Stack Apps</div>
        <div className="Service-card">Cybersecurity Testing</div>
        <div className="Service-card">API & Database Setup</div>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-name">Crypto Dashboard</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Movie Site</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Property App</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">E-Commerce Store</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Chat App</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Task Manager</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Portfolio Website</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Blog Platform</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Weather App</div>
          <span className="detail-btn">View Details</span>
        </div>
        <div className="project-card">
          <div className="project-name">Learning Management System</div>
          <span className="detail-btn">View Details</span>
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