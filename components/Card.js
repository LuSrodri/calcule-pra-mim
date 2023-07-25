import styles from '@/styles/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Card({ title, icon, path }) {
    return (
        <div className={styles.Card}>
            <Link href={path || "/"}>
                <h3>{icon || <FontAwesomeIcon icon={faIcons} />} {title || "title"} <FontAwesomeIcon icon={faUpRightFromSquare} /></h3>
            </Link>
        </div>
    );
}