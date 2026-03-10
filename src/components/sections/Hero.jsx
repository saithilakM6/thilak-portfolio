import React, { useState, useRef, useEffect } from 'react';
import SketchyBox from '../SketchyBox';
import SketchyButton from '../SketchyButton';
import Modal from '../Modal';
import { ChevronDown, FileText, Download } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="container" style={{ padding: '6rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ marginBottom: '2rem', position: 'relative' }}>
        <SketchyBox noHover style={{ padding: '0.5rem', display: 'inline-block' }}>
          <img 
            src="/src/assets/20260222_180039.jpg" 
            alt="Sai Thilak Maroju" 
            style={{ width: '180px', height: '180px', objectFit: 'cover', objectPosition: 'center 15%', borderRadius: 'var(--sketch-br-3)', border: 'var(--sketch-border-sm)' }} 
            onError={(e) => { e.target.src = 'https://fakeimg.pl/180x180/FDFCF0/2A2A2A?text=Photo' }}
          />
        </SketchyBox>
      </div>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>Hi, I'm Sai Thilak Maroju 👋</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem', color: 'var(--text-color)' }}>
        A motivated Computer Science graduate aiming to build scalable, innovative, and customer-focused software systems. 💻✨
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <a href="#projects"><SketchyButton accent>View Projects</SketchyButton></a>
        
        {/* Dropdown Wrapper */}
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <SketchyButton onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Resume 📄 <ChevronDown size={20} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
          </SketchyButton>
          
          {isDropdownOpen && (
            <div style={{ 
              position: 'absolute', top: '120%', left: '50%', transform: 'translateX(-50%)', 
              backgroundColor: 'var(--bg-color)', border: 'var(--sketch-border-sm)', borderRadius: 'var(--sketch-br-3)', 
              boxShadow: 'var(--sketch-shadow)', display: 'flex', flexDirection: 'column', gap: '0.5rem', 
              padding: '0.5rem', zIndex: 10, minWidth: '180px' 
            }}>
              <button onClick={() => { setIsModalOpen(true); setIsDropdownOpen(false); }} className="sketchy-btn" style={{ fontSize: '1rem', padding: '0.5rem', width: '100%', justifyContent: 'flex-start', border: 'none', boxShadow: 'none' }}>
                <FileText size={18} /> View
              </button>
              <a href="/Sai Thilak Maroju.pdf" download="Sai_Thilak_Resume.pdf" onClick={() => setIsDropdownOpen(false) } className="sketchy-btn" style={{ fontSize: '1rem', padding: '0.5rem', width: '100%', justifyContent: 'flex-start', border: 'none', boxShadow: 'none' }}>
                <Download size={18} /> Download PDF
              </a>
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Sai Thilak Maroju - Resume">
        <iframe src="/Sai Thilak Maroju.pdf" style={{ width: '100%', height: '100%', border: 'none' }} title="Resume PDF"></iframe>
      </Modal>
    </section>
  );
};
export default Hero;