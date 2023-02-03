import styles from '@/styles/TopBar.module.css'
import Link from 'next/link';

export default function TopBar({title, icon, isHome = false}) {
    return (
        <header className={styles.TopBar}>
            <h1>{icon || <i className="fa-solid fa-calculator"></i>} <span className={styles.title}>{title || "Calculadoras que ajudam você!"}</span></h1>
            {!isHome || <Link href={"/"}><i class="fa-solid fa-caret-left"></i> Voltar para home</Link>}
        </header>
    );
}