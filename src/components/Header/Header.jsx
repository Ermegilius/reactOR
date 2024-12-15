import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Employee dashboard</h1>
            <div>
                <nav>
                    <ul>
                        <li className={styles.li}>
                            <Link to="employees">Employees</Link>
                        </li>
                        <li className={styles.li}>
                            <Link to="new">Add new</Link>
                        </li>
                    </ul>
                </nav>
            </div>     
        </header>
    );
}

export default Header;