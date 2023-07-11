import styles from '@/styles/Main.module.css';
import { faAppleWhole, faCalculator, faCalendar, faPercent, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';

export default function Main() {
    return (
        <main className={styles.Main}>
            <Card icon={<FontAwesomeIcon icon={faCalculator}/>} title={"Calculadora Científica"} description={"Use a calculadora científica e encontre resultados para expressões matemáticas."} path={"/cientifica"}></Card>
            <Card icon={<FontAwesomeIcon icon={faX}/>} title={"Calculadora Algébrica"} description={"Use a calculadora algébrica e encontre resultados para expressões algébricas."} path={"/algebrica"}></Card>
            <Card icon={<FontAwesomeIcon icon={faAppleWhole}/>} title={"IMC e Peso Ideal"} description={"Calcule o índice de massa corporal e descubra o peso ideal."} path={"/imc"}></Card>
            <Card icon={<FontAwesomeIcon icon={faPercent}/>} title={"Juros compostos"} description={"Calcule investimentos com base em juros compostos."} path={"/juroscompostos"}></Card>
            <Card icon={<FontAwesomeIcon icon={faCalendar}/>} title={"Diferença entre datas"} description={"Calcule a diferença de tempo entre duas datas."} path={"/diferencadatas"}></Card>
        </main>
    );
}