import React from 'react';
import styles from './SkillsSection.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const skills = [
  { name: 'Python', logo: 'python.png' },
  { name: 'R', logo: 'r.png' },
  { name: 'SQL', logo: 'sql.png' },
  { name: 'Excel', logo: 'excel.png' },
  { name: 'Google Sheets', logo: 'google-sheets.png' },
  { name: 'Tableau', logo: 'tableau.png' },
  { name: 'Looker', logo: 'looker.png' },
  { name: 'Power BI', logo: 'power-bi.png' },
  { name: 'Git', logo: 'git.png' },
  { name: 'Linux', logo: 'linux.png' },
  { name: 'Cloud', logo: 'cloud.png' },
  { name: 'API', logo: 'api.png' },
];

export default function SkillsSection() {
  const basePath = process.env.NODE_ENV === 'production' ? '/aymen_portfolio' : '';
  
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>
        Technical Skills
      </h2>
      <div className={styles.skillsList}>
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className={
              idx % 2 === 0
                ? `${styles.skillItem} ${styles.skillItemBlack}`
                : `${styles.skillItem} ${styles.skillItemWhite}`
            }
          >
            <img
              src={`${basePath}/${skill.logo}`}
              alt={skill.name + ' logo'}
              className={styles.skillLogo}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
