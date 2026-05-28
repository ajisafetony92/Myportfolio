import React from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">Everything you need to know about working with me</p>

        <div className="faq-section">
          <div className="faq-item">
            <h3>📍 How do I get started with a project?</h3>
            <p>Simply reach out via email at <strong>anthonyloola@gmail.com</strong> or WhatsApp me at <strong>+234 813 159 3974</strong>. We'll schedule a free consultation to discuss your goals, timeline, and budget.</p>
          </div>

          <div className="faq-item">
            <h3>💰 What is your pricing structure?</h3>
            <p>I offer flexible pricing based on project scope. Small websites start from <strong>$500</strong>, while complex web applications are quoted individually. I provide transparent, upfront quotes with no hidden fees.</p>
          </div>

          <div className="faq-item">
            <h3>⏱️ How long does a typical project take?</h3>
            <p>A standard portfolio or business website takes <strong>2-4 weeks</strong>. Larger e-commerce or web applications can take <strong>6-12 weeks</strong>. I'll provide a detailed timeline during our consultation.</p>
          </div>

          <div className="faq-item">
            <h3>🛠️ What technologies do you specialize in?</h3>
            <p>I specialize in <strong>React, JavaScript, HTML5, CSS3, Python, Node.js, MongoDB, and Next.js</strong>. I also handle API integrations, database setup, and basic cybersecurity testing.</p>
          </div>

          <div className="faq-item">
            <h3>🔧 Do you offer ongoing maintenance?</h3>
            <p>Yes! I offer monthly maintenance packages starting at <strong>$100/month</strong>, which includes updates, backups, security patches, and 24/7 monitoring.</p>
          </div>

          <div className="faq-item">
            <h3>📱 Will my website be mobile-friendly?</h3>
            <p>Absolutely! Every website I build is <strong>100% responsive</strong> and works seamlessly on desktops, tablets, and smartphones.</p>
          </div>

          <div className="faq-item">
            <h3>🔒 Is my website secure?</h3>
            <p>Yes, I implement industry-standard security protocols including <strong>SSL certificates, secure authentication, data encryption, and protection against common vulnerabilities</strong>.</p>
          </div>

          <div className="faq-item">
            <h3>✏️ Can I make changes after the site is live?</h3>
            <p>Of course! I provide a <strong>30-day free support period</strong> after launch for minor changes. For ongoing updates, we can discuss a maintenance retainer.</p>
          </div>

          <div className="faq-item">
            <h3>📄 Who owns the final code and design?</h3>
            <p>You do! After full payment, you retain <strong>complete ownership</strong> of all code, designs, and assets created for your project.</p>
          </div>

          <div className="faq-item">
            <h3>🚀 What if I'm not satisfied with the result?</h3>
            <p>Your satisfaction is my priority. I offer <strong>revisions throughout the development process</strong> and won't consider a project complete until you're 100% happy.</p>
          </div>
        </div>

        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Feel free to reach out anytime. I'd love to help!</p>
          <div className="faq-contact-buttons">
            <a href="mailto:anthonyolaola@gmail.com" className="faq-btn email-btn">📧 Email Me</a>
            <a href="https://wa.me/2348131593974" className="faq-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">💬 WhatsApp Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;