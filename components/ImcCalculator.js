import styles from '@/styles/ImcCalculator.module.css';
import { faAppleWhole, faExclamationCircle, faPerson, faUpRightFromSquare, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

let firstRender = true;

export default function ImcCalculator() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
    const [pesoIdealMin, setPesoIdealMin] = useState(0);
    const [pesoIdealMax, setPesoIdealMax] = useState(0);
    const [classificacao, setClassificacao] = useState("");

    useEffect(() => {
        if (firstRender) {
            document.getElementById("altura").focus();
            firstRender = false;
        }

        if (altura !== 0 && !isNaN(altura) && peso !== 0 && !isNaN(peso)) {
            calculateImc();
            return;
        }
        setImc(0);
    });

    function onEnter(e) {
        if (e.key === "Enter") {
            if (e.target.id === "altura") {
                document.getElementById("peso").focus();
            }
            if (e.target.id === "peso") {
                document.getElementById("resultado").scrollIntoView({behavior: 'smooth'});
            }
        }
    }

    function onInputAltura(e) {
        if (!isNaN(e.target.value) && e.target.value !== "") {
            setAltura(e.target.value);
            return;
        }
        setAltura(0);
    }

    function onInputPeso(e) {
        if (!isNaN(e.target.value) && e.target.value !== "") {
            setPeso(e.target.value);
            return;
        }
        setPeso(0);
    }

    function calculateImc() {
        setImc(Number((peso / ((altura / 100) * (altura / 100))).toFixed(1)));
        if (imc < 18.5) {
            setClassificacao("abaixo do peso");
        }
        else if (imc < 25) {
            setClassificacao("peso normal");
        }
        else if (imc < 30) {
            setClassificacao("sobrepeso");
        }
        else if (imc < 35) {
            setClassificacao("obesidade nível 1");
        }
        else if (imc < 40) {
            setClassificacao("obesidade nível 2");
        }
        else {
            setClassificacao("obesidade nível 3");
        }
        setPesoIdealMin(Number((18.5 * (altura / 100 * altura / 100)).toFixed(1)));
        setPesoIdealMax(Number((24.9 * (altura / 100 * altura / 100)).toFixed(1)));
    }

    return (
        <div className={styles.ImcCalculator}>
            <div className={styles.Calculator}>
                <h2><FontAwesomeIcon icon={faAppleWhole} /> Calculadora</h2>
                <p>Entre com o seu peso e altura, calcule o índice de massa corporal e encontre o seu peso ideal.</p>
                <div className={styles.Inputs}>
                    <div className={styles.Input}>
                        <p><FontAwesomeIcon icon={faPerson} /> Insira a altura em centímetros</p>
                        <input onInput={onInputAltura} onKeyUp={onEnter} id={"altura"} type={'number'}></input>
                    </div>
                    <div className={styles.Input}>
                        <p><FontAwesomeIcon icon={faWeightScale} />  Insira o peso em quilogramas</p>
                        <input onInput={onInputPeso} onKeyUp={onEnter} id={"peso"} type={'number'}></input>
                    </div>
                </div>
                {(imc !== 0 && !isNaN(imc)) &&
                    <p id={"resultado"}>
                        O índice de massa corporal é de <strong>{imc} kg/m²</strong>, considerado <strong>{classificacao}</strong>. O peso ideal deve ser entre <strong>{pesoIdealMin}</strong> e <strong>{pesoIdealMax} kg</strong>.
                    </p>
                }
            </div>
            <div className={styles.Infos}>
                <h2><FontAwesomeIcon icon={faExclamationCircle} /> Observações</h2>
                <p>
                    As informações aqui dispostas não refletem necessariamente a realidade, devendo somente serem encaradas em caráter de curiosidade.
                    Para tratar desse assunto é importante o acompanhamento médico.<br></br>
                    O índice de massa corporal é classificado em: <strong>Abaixo do peso</strong>, <strong>peso normal</strong>, <strong>sobrepeso</strong>, <strong>obesidade nível 1</strong>, <strong>obesidade nível 2</strong> e <strong>obesidade nível 3</strong>.
                </p>
                <Link target="_blank" href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations">Para mais informações acesse o site da OMS <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>
            </div>
        </div>
    );
}