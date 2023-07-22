import styles from '@/styles/Footer.module.css';
require('dotenv').config();

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.plink} dangerouslySetInnerHTML={{__html: process.env.NEXT_PUBLIC_LINK}}></p>
            <p>Índice de massa corporal, peso ideial, juros compostos e diferenças entre duas datas - Calcule pra mim!</p>
        </footer>
    );
}