import React from 'react';
import styles from './EducationSection.module.css';

const educationList = [
  {
    school: 'University of Haute-Alsace',
    years: '2015-2018',
    country: 'France',
    degree: 'Applied Computer Science for Business',
  },
  {
    school: 'Supinfo International University',
    years: '2018-2020',
    country: 'France',
    degree: 'Information Technology',
  },
  {
    school: 'IGA Casablanca',
    years: '2015-2018',
    country: 'Maroc',
    degree: 'Ingénieur des Systèmes Informatiques',
  },
];

export default function EducationSection() {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.heading}>
        Education
      </h2>
      <ul className={styles.educationList}>
        {educationList.map((edu, i) => (
          <li key={edu.school + edu.years} className={styles.timelineRow}>
            <div className={styles.timelineYear}>{edu.years.split('-')[0]}</div>
            <div className={styles.timelineLine} />
            <div className={styles.timelineContent}>
              <div className={styles.timelineSchool}><strong>{edu.school}</strong></div>
              <div className={styles.timelineDegree}>{edu.degree}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.diplomasContainer}>
        <img src="/diploma1.jpg" alt="Diploma 1" className={styles.diploma} />
        <img src="/diploma2.jpg" alt="Diploma 2" className={styles.diploma} />
        <img src="/diploma3.jpg" alt="Diploma 3" className={styles.diploma} />
      </div>
    </section>
  );
}
