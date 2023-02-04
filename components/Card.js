import styles from '@/styles/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Card({ title, icon, description, path }) {
    return (
        <div className={styles.Card}>
            <Link href={path || "/"}>
                <h3>{icon || <FontAwesomeIcon icon={faIcons} />} {title || "title"}</h3>
                <hr></hr>
                <p>{description || "description."}</p>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
        </div>
    );
}