import React, { useState, useEffect } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [isDark]);

  return (
    <div className="app-container">
      <nav style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', borderBottom: 'var(--sketch-border-sm)', position: 'sticky', top: 0, backgroundColor: 'var(--bg-color)', zIndex: 10, transition: 'background-color 0.3s' }}>
        <a href="#about" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Skills</a>
        <a href="#experience" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Experience</a>
        <a href="#projects" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Projects</a>
        <a href="#contact" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Contact</a>
        <button 
          onClick={() => setIsDark(!isDark)} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)', display: 'flex', alignItems: 'center' }}
          title="Toggle Dark Mode"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;