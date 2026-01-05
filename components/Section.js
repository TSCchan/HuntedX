import styles from './Section.module.css';

export default function Section({ title, actions, children }) {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {actions && <div className={styles.actions}>{actions}</div>}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}
