import styles from '@/styles/Footer.module.css';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
require('dotenv').config();

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.plink} dangerouslySetInnerHTML={{__html: process.env.NEXT_PUBLIC_LINK}}></p>
            <p>Índice de massa corporal, peso ideial, juros compostos e diferenças entre duas datas - Calcule pra mim!</p>
            <p><Link href="https:lusrodri.me" target='_blank'>Desenvolvido por LuSRodri <FontAwesomeIcon icon={faUpRightFromSquare} /></Link></p>
        </footer>
    );
}