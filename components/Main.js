import styles from '@/styles/Main.module.css';
import Card from './Card';

export default function Main() {
    return (
        <main className={styles.Main}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </main>
    );
}