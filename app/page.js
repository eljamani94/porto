import styles from './page.module.css';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>
  );
}
