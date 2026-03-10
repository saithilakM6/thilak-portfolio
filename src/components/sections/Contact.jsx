import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SketchyBox from '../SketchyBox';

const Contact = () => {
  return (
    <footer id="contact" style={{ borderTop: 'var(--sketch-border-md)', padding: '4rem 1.5rem', marginTop: '2rem', backgroundColor: 'var(--bg-color)', transition: 'background-color 0.3s' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse', justifyContent: 'space-between', alignItems: 'center', gap: '4rem' }}>
        
        {/* Left Side: Form */}
        <SketchyBox style={{ flex: '1', minWidth: '300px', maxWidth: '500px', padding: '2rem' }}>
          <form action="https://formsubmit.co/saithilakmaroju@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'left' }}>Send a Message ✉️</h3>
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <input type="text" name="name" placeholder="Your Name" required className="sketchy-btn" style={{ fontSize: '1rem', textAlign: 'left', cursor: 'text' }} />
            <input type="email" name="email" placeholder="Your Email" required className="sketchy-btn" style={{ fontSize: '1rem', textAlign: 'left', cursor: 'text' }} />
            <textarea name="message" placeholder="Your Message" required className="sketchy-btn" rows="4" style={{ fontSize: '1rem', textAlign: 'left', cursor: 'text', resize: 'vertical' }}></textarea>
            
            <button type="submit" className="sketchy-btn sketchy-btn-accent" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>
        </SketchyBox>

        {/* Right Side: Info */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '3rem', margin: 0 }}>Let's Connect 🤝</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
            <a href="mailto:saithilakmaroju@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold' }}>
              <Mail size={28} /> saithilakmaroju@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sai-thilak-maroju-12542020b/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold' }}>
              <Linkedin size={28} /> LinkedIn
            </a>
            <a href="https://github.com/saithilakM6" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold' }}>
              <Github size={28} /> GitHub
            </a>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#888', fontWeight: '500' }}>
            Designed by Sai Thilak Maroju &copy; 2026
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Contact;