import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.errorMessage}>
        Page was not found. Try one more time.
      </div>
      <Link to="/" className={styles.homeLink}>
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;