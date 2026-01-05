import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>HuntedX</div>
                <nav className={styles.nav}>
                    <a href="#" className={styles.link}>Launches</a>
                    <a href="#" className={styles.link}>Products</a>
                    <a href="#" className={styles.link}>News</a>
                </nav>
            </div>
        </header>
    );
}
