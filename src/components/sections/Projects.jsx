import React from 'react';
import SketchyBox from '../SketchyBox';
import SketchyButton from '../SketchyButton';

const Projects = () => {
  const projects = [
    { title: "AI-Powered Habit Tracker 📅", tech: "Python, AI", desc: "Hackathon finalist project at Digital Summit 2024. Provides personalized recommendations and visualizes user progress.", link: "https://github.com/saithilakM6/habit_tracker" },
    { title: "Event-Driven Sales ETL 📊", tech: "GCP, BigQuery, Looker Studio", desc: "Automated ETL pipeline triggered by file uploads, transforming data with Dataflow and creating an interactive dashboard." },
    { title: "Network Intrusion Detection 🕵️‍♂️", tech: "Python, Scikit-learn", desc: "ML-based intrusion detection system using Random Forest and XGBoost to detect network attacks in real time.", link: "https://github.com/saithilakM6/IDS" },
    { title: "Inventory Management 📦", tech: "Java, Spring Boot, React", desc: "Full-stack system for managing products, inventory, stock validation, and low-stock alerts.", link: "https://github.com/saithilakM6/inventory-management-system" },
    { title: "AI Voice Assistant 🤖", tech: "Python, APIs", desc: "Voice assistant integrating with third-party APIs for real-time information retrieval.", link: "https://github.com/saithilakM6/Luna-AI" },
    { title: "Web Reconnaissance Tool 🌐", tech: "Python, Kali Linux", desc: "Conducted reconnaissance on web infrastructure to identify open ports and vulnerabilities." }
  ];

  return (
    <section id="projects" className="container" style={{ padding: '4rem 1.5rem' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Projects 💡</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((proj, idx) => (
          <SketchyBox key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{proj.title}</h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--secondary-accent)', fontWeight: 'bold' }}>{proj.tech}</span>
            <p style={{ flex: 1, fontSize: '1.05rem' }}>{proj.desc}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noreferrer" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                <SketchyButton style={{ fontSize: '1rem' }}>View on GitHub</SketchyButton>
              </a>
            )}
          </SketchyBox>
        ))}
      </div>
    </section>
  );
};
export default Projects;