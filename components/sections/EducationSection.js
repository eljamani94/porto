import React from 'react';
import styles from './EducationSection.module.css';
import Image from 'next/image';
import getConfig from 'next/config';

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
  const { publicRuntimeConfig } = getConfig() || {};
  const basePath = publicRuntimeConfig?.basePath || '';
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
      <div className={styles.diplomaImages}>
        <div className={styles.diplomaContainer}>
          <Image
            src={`${basePath}/diploma1.jpg`}
            alt="Diploma 1"
            className={styles.diploma}
            width={300}
            height={200}
            priority
          />
        </div>
        <div className={styles.diplomaContainer}>
          <Image
            src={`${basePath}/diploma2.jpg`}
            alt="Diploma 2"
            className={styles.diploma}
            width={300}
            height={200}
            priority
          />
        </div>
        <div className={styles.diplomaContainer}>
          <Image
            src={`${basePath}/diploma3.jpg`}
            alt="Diploma 3"
            className={styles.diploma}
            width={300}
            height={200}
            priority
          />
        </div>
      </div>
    </section>
  );
}
