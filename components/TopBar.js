import styles from '@/styles/TopBar.module.css'
import Link from 'next/link';

export default function TopBar({title, icon, isHome = true}) {
    return (
        <header className={styles.TopBar}>
            <h1>{icon || <i className="fa-solid fa-calculator"></i>} <span className={isHome || styles.show}>{title || "Calculadoras que ajudam você!"}</span></h1>
            {isHome || <Link href={"/"}><i className="fa-solid fa-house"></i> <span className={styles.show}>Voltar para home</span></Link>}
        </header>
    );
}