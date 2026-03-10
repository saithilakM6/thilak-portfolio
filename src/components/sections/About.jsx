import React from 'react';
import SketchyBox from '../SketchyBox';

const About = () => {
  const skills = [
    { category: "Languages 👌", items: "Java, C#, Python, OOP, DS, SQL, HTML, CSS, JS, shell" },
    { category: "Frameworks 🥱", items: "Spring Boot, React, REST API, Streamlit, Flask" },
    { category: "Tools 🫠️", items: "Git, Linux, Nmap, Burp Suite, Wireshark, Nessus, Metasploit" },
    { category: "Cloud & Sec ☁️", items: "GCP, ETL, BigQuery, Cloud Storage" }
  ];


  return (
    <section id="about" className="container" style={{ padding: '4rem 1.5rem' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Skills & Technologies ⚡</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {skills.map((skill, i) => (
          <SketchyBox key={i}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>{skill.category}</h3>
            <p style={{ fontSize: '1.1rem' }}>{skill.items}</p>
          </SketchyBox>
        ))}
      </div>
    </section>
  );
};
export default About;