import styles from './ExperienceSection.module.css';

const experiences = [
  {
    company: 'PixelForge Studios',
    role: 'Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.',
    period: 'Jan 2020 – Present',
  },
  {
    company: 'BlueWave Innovators',
    role: 'Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.',
    period: 'Jun 2017 – Dec 2019',
  },
  {
    company: 'TrendCraft Solutions',
    role: 'Designed user interfaces for e-commerce platforms, focusing on enhancing usability and conversion rates.',
    period: 'Mar 2013 – May 2017',
  },
];

export default function ExperienceSection() {
  return (
    <div className={styles.experience}>
      <h2 className={styles.heading}>Other Experience</h2>
      <div className={styles.expList}>
        {experiences.map((exp) => (
          <div key={exp.company} className={styles.expItem}>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <span className={styles.period}>{exp.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
