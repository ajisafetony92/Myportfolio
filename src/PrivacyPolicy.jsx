import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: January 2026</p>

        <div className="privacy-section">
          <h2>1. Information I Collect</h2>
          <p>When you contact me or use my services, I may collect:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and project details you provide.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with my portfolio website.</li>
            <li><strong>Communication Data:</strong> Records of our conversations via email, WhatsApp, or contact forms.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>2. How I Use Your Information</h2>
          <p>I use your information to:</p>
          <ul>
            <li>Respond to your inquiries and provide quotes</li>
            <li>Deliver and manage your web development projects</li>
            <li>Send important updates about your project</li>
            <li>Improve my services and website experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. Data Security</h2>
          <p>I take data security seriously. I implement industry-standard security measures including:</p>
          <ul>
            <li>Encrypted communication channels</li>
            <li>Secure servers and databases</li>
            <li>Regular security audits</li>
            <li>Limited access to personal data</li>
          </ul>
          <p>However, no method of transmission over the internet is 100% secure. I cannot guarantee absolute security.</p>
        </div>

        <div className="privacy-section">
          <h2>4. Data Retention</h2>
          <p>I retain your personal information only as long as necessary to:</p>
          <ul>
            <li>Fulfill the purposes outlined in this policy</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p>Typically, project-related data is kept for <strong>3 years</strong> after project completion.</p>
        </div>

        <div className="privacy-section">
          <h2>5. Third-Party Services</h2>
          <p>I may use trusted third-party services including:</p>
          <ul>
            <li><strong>Email services</strong> (Gmail, Outlook)</li>
            <li><strong>Communication tools</strong> (WhatsApp, Zoom)</li>
            <li><strong>Project management tools</strong> (Trello, Notion)</li>
          </ul>
          <p>These services have their own privacy policies and data handling practices.</p>
        </div>

        <div className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data I hold about you</li>
            <li>Request corrections to inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise these rights, contact me at <strong>anthonyloola@gmail.com</strong>.</p>
        </div>

        <div className="privacy-section">
          <h2>7. Cookies</h2>
          <p>My website uses cookies to enhance your browsing experience. Cookies are small files stored on your device. You can disable cookies in your browser settings, but this may affect functionality.</p>
        </div>

        <div className="privacy-section">
          <h2>8. Children's Privacy</h2>
          <p>My services are not intended for individuals under 13 years of age. I do not knowingly collect personal information from children under 13.</p>
        </div>

        <div className="privacy-section">
          <h2>9. Changes to This Policy</h2>
          <p>I may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of my services after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div className="privacy-section">
          <h2>10. Contact Me</h2>
          <p>If you have questions about this privacy policy or my data practices, please contact me:</p>
          <ul>
            <li><strong>Email:</strong> anthonyolaola@gmail.com</li>
            <li><strong>Phone/WhatsApp:</strong> +234 813 159 3974</li>
          </ul>
        </div>

        <div className="privacy-footer">
          <p>© {new Date().getFullYear()} Anthony Olayinka | Nexus Craft. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;