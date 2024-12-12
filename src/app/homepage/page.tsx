import { getUser } from '@/lib/lucia';
import styles from './homepage.module.css';
import { redirect } from 'next/navigation';
import Header from './Header';
import ClientForm from './ClientForm';

export default async function Homepage() {
  const user = await getUser();
  if (!user) {
    redirect('/auth/sign-in');
  }

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <Header user={user} />
      </div>
      <ClientForm user={user} />
    </div>
  );
}