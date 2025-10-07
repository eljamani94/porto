import styles from './ProjectsSection.module.css';

const projects = [
  {
    name: 'Hospital Emergency Department Analysis',
    image: '/project1.jpg',
    desc: 'Analyzed emergency department data to uncover patterns in patient admission times, staff availability, and wait times. Built interactive visualizations to support healthcare decision-makers in improving scheduling and resource allocation.',
    skills: [
      'Python (Pandas, Matplotlib, Seaborn)',
      'SQL',
      'Excel',
      'Data Cleaning',
      'Data Visualization',
      'Storytelling',
    ],
    deliverables: [
      'Exploratory Data Analysis report',
      'Dashboard showing peak hours and staff shortages',
      'Insights on improving patient flow',
    ],
    link: 'https://kaggle.com/',
  },
  {
    name: 'Moroccan Public Transport Survey Analysis',
    image: '/project2.jpg',
    desc: 'Conducted a mock survey of commuter satisfaction in Casablanca. Cleaned and analyzed the data to identify factors impacting commuter satisfaction. Suggested improvements using data-driven insights.',
    skills: [
      'Data Wrangling',
      'Survey Design',
      'Data Visualization',
      'Statistical Analysis',
      'Excel',
      'Python',
    ],
    deliverables: [
      'Cleaned and structured survey data',
      'Correlation heatmaps',
      'Recommendations report',
    ],
    link: 'https://github.com/',
  },
  {
    name: 'Sales Performance Dashboard for a Retail Store',
    image: '/project3.jpg',
    desc: 'Simulated monthly sales data for a small retail business. Created a dynamic dashboard that tracks KPIs like total sales, best-selling products, and sales by region. Enabled management to make quick and informed decisions.',
    skills: [
      'Excel',
      'Power BI or Tableau',
      'Data Modeling',
      'KPIs',
      'Dashboard Design',
    ],
    deliverables: [
      'Power BI or Excel dashboard',
      'Summary PDF with key insights',
      'Sales trend analysis',
    ],
    link: 'https://github.com/',
  },
];

import React, { useState } from 'react';

export default function ProjectsSection() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, idx: null });

  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Recent Projects</h2>
      <div className={styles.projectList}>
        {projects.map((proj, idx) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
            onMouseMove={e => setTooltip({ visible: true, x: e.clientX, y: e.clientY, idx })}
            onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
            onMouseEnter={e => setTooltip({ visible: true, x: e.clientX, y: e.clientY, idx })}
          >
            <div style={{ flex: 1 }}>
              <h3>{proj.name}</h3>
              <p style={{ marginBottom: 10 }}>{proj.desc}</p>
              <div style={{ marginBottom: 8 }}>
                <strong>Key Skills:</strong>
                <ul style={{ margin: '6px 0 0 16px', padding: 0 }}>
                  {proj.skills.map((skill) => (
                    <li key={skill} style={{ fontSize: 14, color: '#5d7b80', marginBottom: 2 }}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Deliverables:</strong>
                <ul style={{ margin: '6px 0 0 16px', padding: 0 }}>
                  {proj.deliverables.map((item) => (
                    <li key={item} style={{ fontSize: 14, color: '#b5c7c9', marginBottom: 2 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              src={proj.image}
              alt={proj.name}
              className={styles.projectImg}
              style={{ width: 170, height: 120, objectFit: 'cover', borderRadius: 12 }}
            />
            <span className={styles.projectTooltip}>Click for more details</span>
          </a>
        ))}
      </div>
    </div>
  );
}
