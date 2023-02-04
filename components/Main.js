import styles from '@/styles/Main.module.css';
import { faAppleWhole, faPercent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';

export default function Main() {
    return (
        <main className={styles.Main}>
            <Card icon={<FontAwesomeIcon icon={faAppleWhole}/>} title={"IMC e Peso Ideal"} description={"Calcule o índice de massa corporal e descubra o peso ideal."} path={"/imc"}></Card>
            <Card icon={<FontAwesomeIcon icon={faPercent}/>} title={"Juros compostos"} description={"Calcule investimentos com base em juros compostos."} path={"/juroscompostos"}></Card>
            <Card></Card>
        </main>
    );
}