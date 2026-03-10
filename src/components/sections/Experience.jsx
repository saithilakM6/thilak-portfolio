import React from 'react';
import SketchyBox from '../SketchyBox';

const Experience = () => {
  const jobs = [
    { title: "Cloud Intern ☁️", company: "Miracle Software Systems", date: "Mar 2025 - Aug 2025", desc: "Built event-driven ETL pipelines on GCP for scalable data analytics using Cloud Storage, Dataflow, and BigQuery." },
    { title: "Java Developer Intern ☕", company: "SkillDzire", date: "Dec 2024 - Mar 2025", desc: "Developed Java components using OOP and clean backend design. Improved performance and business logic." },
    { title: "Cybersecurity Intern 🛡️", company: "Aimer Society", date: "Jul 2024 - Sep 2024", desc: "Applied secure coding practices and vulnerability analysis. Exposed to AI voice assistant projects." }
  ];

  return (
    <section id="experience" className="container" style={{ padding: '4rem 1.5rem' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>Experience 🚀</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {jobs.map((job, idx) => (
          <SketchyBox key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{job.title}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-color)', fontWeight: 'bold', borderBottom: '1px dashed var(--text-color)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
              <span>{job.company}</span>
              <span>{job.date}</span>
            </div>
            <p style={{ fontSize: '1.1rem' }}>{job.desc}</p>
          </SketchyBox>
        ))}
      </div>
    </section>
  );
};
export default Experience;