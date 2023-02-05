import styles from '@/styles/JurosCompostosCalculator.module.css';
import { faCalendar, faDollarSign, faExclamationCircle, faPercent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

let firstRender = true;

export default function JurosCompostosCalculator() {
    const [montante, setMontante] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [montanteFinal, setMontanteFinal] = useState(0);

    useEffect(() => {
        if (firstRender) {
            document.getElementById("montante").focus();
            firstRender = false;
        }

        if (montante !== 0 && !isNaN(montante) && taxa !== 0 && !isNaN(taxa) && tempo !== 0 && !isNaN(tempo)) {
            calculateJurosCompostos();
            return;
        }
        setMontanteFinal(0);
    });

    function onEnter(e) {
        if (e.key === "Enter") {
            if (e.target.id === "montante") {
                document.getElementById("taxa").focus();
            }
            if (e.target.id === "taxa") {
                document.getElementById("tempo").focus();
            }
            if (e.target.id === "tempo") {
                document.getElementById("resultado").scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    function onInputMontante(e) {
        if (!isNaN(e.target.value) && e.target.value !== "") {
            setMontante(e.target.value);
            return;
        }
        setMontante(0);
    }

    function onInputTaxa(e) {
        if (!isNaN(e.target.value) && e.target.value !== "") {
            setTaxa(e.target.value);
            return;
        }
        setTaxa(0);
    }

    function onInputTempo(e) {
        if (!isNaN(e.target.value) && e.target.value !== "") {
            setTempo(e.target.value);
            return;
        }
        setTempo(0);
    }

    function calculateJurosCompostos() {
        if (Number(taxa) === 0 || Number(tempo) === 0) {
            setMontanteFinal(Number(montante).toFixed(2));
            return;
        }
        setMontanteFinal(Number((montante * ((1 + (taxa / 100))) * tempo)).toFixed(2));
    }

    return (
        <div className={styles.JurosCompostosCalculator}>
            <div className={styles.Calculator}>
                <h2><FontAwesomeIcon icon={faPercent} /> Calculadora</h2>
                <div className={styles.Inputs}>
                    <div className={styles.Input}>
                        <p><FontAwesomeIcon icon={faDollarSign} /> Insira o montante inicial em reais</p>
                        <input onInput={onInputMontante} onKeyUp={onEnter} id={"montante"} type={'number'}></input>
                    </div>
                </div>
                <div className={styles.Inputs}>
                    <div className={styles.Input}>
                        <p><FontAwesomeIcon icon={faPercent} />  Insira a taxa de juros em porcentagem</p>
                        <input onInput={onInputTaxa} onKeyUp={onEnter} id={"taxa"} type={'number'}></input>
                    </div>
                </div>
                <div className={styles.Inputs}>
                    <div className={styles.Input}>
                        <p><FontAwesomeIcon icon={faCalendar} /> Insira o período de tempo em meses ou anos</p>
                        <input onInput={onInputTempo} onKeyUp={onEnter} id={"tempo"} type={'number'}></input>
                    </div>
                </div>
                {(montanteFinal !== 0 && !isNaN(montanteFinal)) &&
                    <p id={"resultado"}>
                        O montante final depois do período de tempo de <strong>{tempo} U.T.</strong> a uma taxa de juros de <strong>{Number(taxa).toLocaleString('pt-BR')}%</strong> é de <strong>{Number(montanteFinal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</strong>
                    </p>
                }
            </div>
            <div className={styles.Infos}>
                <h2><FontAwesomeIcon icon={faExclamationCircle} /> Informações</h2>
                <p>O <strong>juro composto</strong> é importante porque permite que uma pequena quantia de dinheiro cresça ao <strong>longo do tempo</strong>. Ao invés de calcular juros sobre o montante original, o juro composto calcula juros sobre o montante total, incluindo juros acumulados ao longo do tempo.<br></br> Isso significa que os juros acumulados ao longo do tempo são <strong>reinvestidos</strong> e geram mais juros, tornando o crescimento do montante <strong>muito mais rápido do que o juro simples.</strong><br></br> Devido a isso, o juro composto é uma <strong>ferramenta valiosa</strong> para investidores e pessoas que <strong>desejam economizar dinheiro a longo prazo.</strong></p>
            </div>
        </div>
    );
}