import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <h3 className={styles.aboutHeading}>About Me.</h3>
      <div style={{ maxWidth: '100%', width: '100%', color: '#cfe5e7', fontSize: 18, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p className={styles.body}>
          I'm a Junior Data Analyst with a strong foundation in Python, Excel, SQL, and data visualization tools like Tableau and Power BI. I recently completed a relevant course/certification, e.g., the Google Data Analytics Professional Certificate, where I worked on hands-on projects involving real-world datasets.
        </p>
      </div>
    </div>
  );
}
