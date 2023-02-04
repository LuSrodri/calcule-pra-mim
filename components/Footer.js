import Link from "next/link";
import styles from '@/styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className={styles.Footer}><Link href={"https://lusrodri.me"} target="_blank">Desenvolvido por LuSRodri <FontAwesomeIcon icon={faUpRightFromSquare}/></Link></footer>
    );
}