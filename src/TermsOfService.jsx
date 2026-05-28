import React from 'react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Terms of Service</h1>
        <p className="last-updated">Effective Date: January 2026</p>

        <div className="terms-section">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing my portfolio website or hiring my services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use my services.</p>
        </div>

        <div className="terms-section">
          <h2>2. Services Provided</h2>
          <p>I offer web development services including but not limited to:</p>
          <ul>
            <li>Frontend and full-stack web development</li>
            <li>Website design and implementation</li>
            <li>API development and integration</li>
            <li>Database setup and management</li>
            <li>Website maintenance and support</li>
            <li>Cybersecurity testing and consultation</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>3. Project Process</h2>
          <ul>
            <li><strong>Discovery Phase:</strong> Initial consultation to understand requirements</li>
            <li><strong>Quote & Agreement:</strong> Detailed proposal with timeline and pricing</li>
            <li><strong>Deposit:</strong> 50% upfront payment required to start work</li>
            <li><strong>Development:</strong> Regular updates and milestone reviews</li>
            <li><strong>Testing & Revisions:</strong> Quality assurance and client feedback</li>
            <li><strong>Launch:</strong> Final deployment after remaining payment</li>
            <li><strong>Support:</strong> 30-day free post-launch support period</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>4. Payment Terms</h2>
          <ul>
            <li><strong>Deposit:</strong> 50% non-refundable deposit required before work begins</li>
            <li><strong>Final Payment:</strong> Remaining 50% due before final launch</li>
            <li><strong>Late Payments:</strong> Projects may be paused for payments overdue by 14+ days</li>
            <li><strong>Refunds:</strong> No refunds for completed work. Partial refunds may be considered for unstarted phases</li>
            <li><strong>Additional Work:</strong> Changes outside original scope will be quoted separately</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>5. Intellectual Property</h2>
          <ul>
            <li><strong>Your Content:</strong> You retain ownership of all content, images, and text you provide</li>
            <li><strong>Custom Code:</strong> After full payment, you own the custom code I create for your project</li>
            <li><strong>My Work:</strong> I retain the right to showcase your project in my portfolio unless you request otherwise</li>
            <li><strong>Third-Party Assets:</strong> Licensed assets (themes, plugins, fonts) may have their own terms</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>6. Project Timeline</h2>
          <p>Estimated timelines are provided in good faith but are not guaranteed. Delays may occur due to:</p>
          <ul>
            <li>Client feedback or asset delays</li>
            <li>Technical challenges or scope changes</li>
            <li>Unforeseen circumstances (illness, emergencies)</li>
          </ul>
          <p>I will communicate any significant delays promptly.</p>
        </div>

        <div className="terms-section">
          <h2>7. Client Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide timely feedback and approvals</li>
            <li>Supply all necessary content, images, and assets</li>
            <li>Cover costs for third-party services (hosting, domains, SSL certificates)</li>
            <li>Maintain backups of your website after project completion</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>8. Warranties & Disclaimers</h2>
          <p>I warrant that:</p>
          <ul>
            <li>My work will conform to agreed specifications</li>
            <li>Custom code will be original and not infringe on third-party rights</li>
          </ul>
          <p>However, I provide services <strong>"as is"</strong> and do not guarantee:</p>
          <ul>
            <li>Error-free or uninterrupted operation</li>
            <li>Compatibility with all browsers or devices</li>
            <li>Future performance or SEO rankings</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, I am not liable for:</p>
          <ul>
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of profits, data, or business opportunities</li>
            <li>Third-party claims against you</li>
          </ul>
          <p>My total liability is limited to the amount you paid for the specific service in question.</p>
        </div>

        <div className="terms-section">
          <h2>10. Termination</h2>
          <p>Either party may terminate a project with written notice:</p>
          <ul>
            <li><strong>By You:</strong> Deposit is non-refundable. Payment due for work completed up to termination</li>
            <li><strong>By Me:</strong> For non-payment, breach of terms, or unethical requests</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>11. Confidentiality</h2>
          <p>I will keep your business information confidential and will not share proprietary details with third parties without your consent, except as required by law.</p>
        </div>

        <div className="terms-section">
          <h2>12. Governing Law</h2>
          <p>These terms are governed by the laws of Nigeria. Any disputes shall be resolved through good-faith negotiation or, if necessary, binding arbitration in Lagos, Nigeria.</p>
        </div>

        <div className="terms-section">
          <h2>13. Changes to Terms</h2>
          <p>I may update these terms periodically. Continued use of my services after changes constitutes acceptance. Material changes will be communicated directly to active clients.</p>
        </div>

        <div className="terms-section">
          <h2>14. Contact Information</h2>
          <p>For questions about these terms:</p>
          <ul>
            <li><strong>Email:</strong> anthonyolaola@gmail.com</li>
            <li><strong>Phone/WhatsApp:</strong> +234 813 159 3974</li>
          </ul>
        </div>

        <div className="terms-footer">
          <p>© {new Date().getFullYear()} Anthony Olayinka | Nexus Craft. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;