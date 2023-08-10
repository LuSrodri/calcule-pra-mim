import styles from '@/styles/Footer.module.css';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
require('dotenv').config();

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.plink} dangerouslySetInnerHTML={{__html: process.env.NEXT_PUBLIC_LINK}}></p>
            <p className={styles.plink}><Link href="https://donate.stripe.com/cN24gMexc71aakgaEF" target='_blank'>O Calcule Pra Mim ajuda você? Se sim, considere ajudar a gente! <FontAwesomeIcon icon={faUpRightFromSquare} /></Link></p>
            <p className={styles.plink}><Link href="https:lusrodri.me" target='_blank'>Desenvolvido por LuSRodri <FontAwesomeIcon icon={faUpRightFromSquare} /></Link></p>
        </footer>
    );
}