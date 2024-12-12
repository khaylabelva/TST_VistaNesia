'use client';

import styles from './homepage.module.css';
import { useRouter } from 'next/navigation';

const Header = ({ user }: { user: any }) => {
  const router = useRouter();

  const handleHistoryClick = () => {
    router.push('/history');
  };

  return (
    <div className={styles.header}>
        <p className={styles.greeting}>Hello, {user.name}!</p>
        <div className={styles.discover}>
            <h1 className={styles.title}>Discover Indonesia’s Hidden Gems</h1>
            <button onClick={handleHistoryClick} className={styles.historyButton}>
                See History
            </button>
        </div>
    </div>
  );
};

export default Header;