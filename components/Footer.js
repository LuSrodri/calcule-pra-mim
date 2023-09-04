import styles from '@/styles/Footer.module.css';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.plink}><Link href="https:lusrodri.me" target='_blank'>Desenvolvido por LuSRodri <FontAwesomeIcon icon={faUpRightFromSquare} /></Link></p>
        </footer>
    );
}