import React from 'react';
import styles from './CertificationsSection.module.css';

const certifications = [
  {
    name: 'Google Data Analytics Professional Certificate',
    date: '2025/04',
    logo: '/google.png',
  },
  {
    name: 'Google Advanced Data Analytics Professional Certificate',
    date: '2025/05',
    logo: '/google.png',
  },
  {
    name: 'Machine Learning by Stanford University',
    date: '2021/07',
    logo: '/stanford.png',
  },
  {
    name: 'PCAP™ – Certified Associate Python Programmer',
    date: '2025/06',
    logo: '/pcap.png',
  },
  {
    name: 'ALX Data Analytics Certificate',
    date: '2025/07',
    logo: '/alx.png',
  },
  {
    name: 'ALX AI Career Essentials Certificate',
    date: '2025/03',
    logo: '/alx.png',
  },
];

export default function CertificationsSection() {
  return (
    <section className={styles.certificationsSection}>
      <h2 className={styles.heading}>
        Certifications
      </h2>
      <ul className={styles.certificationsList}>
        {certifications.map((cert, idx) => (
          <li key={cert.name + cert.date} className={styles.certificationRow}>
            <span className={styles.certNum}>{idx + 1}.</span>
            <span className={styles.certMain}>
              <img src={cert.logo} alt={cert.name + ' logo'} className={styles.certLogo} />
              <span className={styles.certName}>{cert.name}</span>
            </span>
            <span className={styles.certDate}>{cert.date}</span>
            <span className={styles.certTooltip}>click to check the authenticity</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
