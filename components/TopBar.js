import styles from '@/styles/TopBar.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function TopBar({title, icon, isHome = true}) {
    return (
        <header className={styles.TopBar}>
            <h1>{icon || <FontAwesomeIcon icon={faCalculator} />} <span className={isHome ? "" : styles.show}>{title || "Calculadoras que ajudam você!"}</span></h1>
            {isHome || <Link href={"/"}><FontAwesomeIcon icon={faHouse} /> <span className={styles.show}>Voltar para a home</span></Link>}
        </header>
    );
}