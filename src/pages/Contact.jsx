import React from 'react'
import './contact.css';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

function Contact({ reference }) {
  return (
    <section id="contact" className="contact" ref={reference}>
      <div className="container contact ">
        <SectionTitle title="Contact" subtitle="Contactez Moi" />
        <div className="row mt-2">
          <div className="col-md-12 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Réseaux Sociaux</h3>
              <div className="social-links">
                <a href="https://twitter.com/Mamath1998" target="_blank" rel="noopener noreferrer" className="twitter-x">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com/MathieuStamm" target="_blank" rel="noopener noreferrer" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/mathieu_stamm/" target="_blank" rel="noopener noreferrer" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://github.com/Mamath68" target="_blank" rel="noopener noreferrer" className="github">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mathieu-stamm-680885224/" target="_blank" rel="noopener noreferrer" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact