import React, { useState, useRef, useEffect } from 'react';
import SketchyBox from '../SketchyBox';
import SketchyButton from '../SketchyButton';
import Modal from '../Modal';

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const isHovered = useRef(false);

  const certs = [
    { title: "Professional Data Engineer", issuer: "Google", date: "Aug 2025", link: "https://drive.google.com/file/d/1g6pMULjqZD1fEP5G3RMpR2sct5nVCyi1/preview" },
    { title: "Full Stack Java", issuer: "SkillDzire", date: "Mar 2025", link: "https://drive.google.com/file/d/1_WbVYR1RgIqRNE9fJ5gkdHSOnUGvItTF/preview" },
    { title: "24hr Hackathon", issuer: "Miracle Software Systems", date: "Dec 2024", link: "https://drive.google.com/file/d/1vIbRbdBN6MupebDT7jCyzsWAxUJRZ9fB/preview" },
    { title: "Cybersecurity Analyst", issuer: "Tata / Forage", date: "Oct 2024", link: "https://drive.google.com/file/d/18UPboikrSmaIrH8YFbGKZIO9WVfCr8mM/preview" },
    { title: "Cybersecurity Analyst", issuer: "Jp Morgan Chase", date: "Sep 2024", link: "https://drive.google.com/file/d/1WAHHcnKy9Um1gHbXME5XbViePHCmCM4Q/preview" },
    { title: "GenAI Job Simulation", issuer: "BCG / Forage", date: "Sep 2024", link: "https://drive.google.com/file/d/1eh6i6AjWcODzeQ_6LKh8oauDovQ9RxGs/preview" },
    { title: "Android Bug Bounty Hunting", issuer: "EC Council", date: "Jun 2024", link: "https://drive.google.com/file/d/1H3Jw_LLF2PGge1dH1IGlXfDtfngX8rUU/preview" },
    { title: "Ethical Hacking", issuer: "tutedude.com", date: "Aug 2023", link: "https://drive.google.com/file/d/1xnvcO_AP3XDDeh_kuPHocBOLvkpFBF68/preview" },
    { title: "Cyber Hygiene Practices", issuer: "ISEA MeitY by C-DAC", date: "Dec 2022", link: "https://drive.google.com/file/d/1qqTHDupJ6rAYLsX6v1xFgAVDPGel94O4/preview" }
  ];

  // Duplicate the list 4 times so the buffer is large enough for rapid manual sliding or continuous looping
  const infiniteCerts = [...certs, ...certs, ...certs, ...certs];

  useEffect(() => {
    const scroller = scrollRef.current;
    let animationId;
    const play = () => {
      // We check if it has more than 9 children to avoid index out of bounds
      if (scroller && !isDown && !isHovered.current && scroller.children.length > certs.length) {
        scroller.scrollLeft += 1;
        
        // Exact pixel width of one full set
        const shiftAmount = scroller.children[certs.length].offsetLeft - scroller.children[0].offsetLeft;
        
        if (scroller.scrollLeft >= shiftAmount) {
          scroller.scrollLeft -= shiftAmount;
        }
      }
      animationId = requestAnimationFrame(play);
    };
    animationId = requestAnimationFrame(play);
    return () => cancelAnimationFrame(animationId);
  }, [isDown, certs.length]);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsDown(false);
    isHovered.current = false;
  };
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section id="certifications" style={{ padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Certifications 🥇</h2>
      </div>
      
      <style>
        {`
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          .hide-scroll.grabbing { cursor: grabbing; cursor: -webkit-grabbing; }
          .hide-scroll { cursor: grab; cursor: -webkit-grab; }
        `}
      </style>

      <div 
        ref={scrollRef}
        className={`hide-scroll ${isDown ? 'grabbing' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => { isHovered.current = true; }}
        onTouchStart={() => { isHovered.current = true; setIsDown(true); }}
        onTouchEnd={() => { isHovered.current = false; setIsDown(false); }}
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '2rem', 
          paddingBottom: '2rem', 
          paddingTop: '1rem',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 'max(1.5rem, calc((100% - 1100px) / 2))',
          paddingRight: 'max(1.5rem, calc((100% - 1100px) / 2))',
        }}
      >
        {infiniteCerts.map((cert, idx) => (
          <div key={idx} style={{ minWidth: '320px', flexShrink: 0 }}>
            <SketchyBox style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <h3 style={{ fontSize: '1.35rem', margin: 0 }}>{cert.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.95rem' }}>
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              {cert.link && (
                <SketchyButton onClick={() => setActiveCert(cert)} style={{ marginTop: 'auto', alignSelf: 'flex-start', fontSize: '0.9rem', padding: '0.4rem 1rem' }}>
                  View Certificate
                </SketchyButton>
              )}
            </SketchyBox>
          </div>
        ))}
      </div>

      <Modal isOpen={!!activeCert} onClose={() => setActiveCert(null)} title={activeCert?.title || "Certificate"}>
        {activeCert && (
          <iframe 
            src={activeCert.link} 
            allow="autoplay"
            style={{ width: '100%', height: '100%', border: 'none' }} 
            title={activeCert.title} 
          />
        )}
      </Modal>
    </section>
  );
};
export default Certifications;