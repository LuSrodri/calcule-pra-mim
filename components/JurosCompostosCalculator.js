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
    const [adicaoPeriodica, setAdicaoPeriodica] = useState(0);

    const [taxaIntervalo, setTaxaIntervalo] = useState("ao ano");
    const [tempoIntervalo, setTempoIntervalo] = useState("anos");
    const [adicaoIntervalo, setAdicaoIntervalo] = useState("por ano");

    useEffect(() => {
        if (firstRender) {
            document.getElementById("montante").focus();
            firstRender = false;
        }

        if (montante !== 0 && !isNaN(montante) && taxa !== 0 && !isNaN(taxa) && tempo !== 0 && !isNaN(tempo) && adicaoPeriodica !== 0 && !isNaN(adicaoPeriodica)) {
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
                document.getElementById("adicaoPeriodica").focus();
            }
            if (e.target.id === "adicaoPeriodica") {
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

    function onInputAdicaoPeriodica(e) {
        if (!isNaN(e.target.value) && e.target.value !== "") {
            setAdicaoPeriodica(e.target.value);
            return;
        }
        setAdicaoPeriodica(0);
    }

    function calculateJurosCompostos() {
        if (Number(taxa) === 0 || Number(tempo) === 0) {
            setMontanteFinal(Number(montante).toFixed(2));
            return;
        }

        let taxaPeriodo = taxa;
        let tempoPeriodo = tempo;
        let adicaoPeriodicaPeriodo = adicaoPeriodica;

        if (taxaIntervalo === "ao mês") {
            taxaPeriodo /= 100; // Convertendo para decimal
        } else {
            taxaPeriodo = Math.pow(1 + taxaPeriodo / 100, 1 / 12) - 1; // Convertendo taxa anual para taxa mensal
        }

        if (tempoIntervalo === "meses") {
            // Não é necessário fazer nenhuma conversão
        } else {
            tempoPeriodo *= 12; // Convertendo anos para meses
        }

        if (adicaoIntervalo === "por mês") {
            // Não é necessário fazer nenhuma conversão
        } else {
            adicaoPeriodicaPeriodo /= 12; // Convertendo valor anual para valor mensal
        }

        const montanteFinalCalculado =
            montante * Math.pow(1 + taxaPeriodo, tempoPeriodo) +
            adicaoPeriodicaPeriodo *
            ((Math.pow(1 + taxaPeriodo, tempoPeriodo) - 1) / taxaPeriodo);

        setMontanteFinal(Number(montanteFinalCalculado).toFixed(2));
    }

    return (
        <div className={styles.JurosCompostosCalculator}>
            <div className={styles.Calculator}>
                <h2><FontAwesomeIcon icon={faPercent} /> Calculadora</h2>
                <p>Entre com o montante inicial, a taxa de juros e com o período de tempo e veja o montante final que o juros no tempo provê.</p>
                <div className={styles.Inputs}>
                    <p><FontAwesomeIcon icon={faDollarSign} /> Montante inicial em reais</p>
                    <div className={styles.Input}>
                        <input onInput={onInputMontante} onKeyUp={onEnter} id={"montante"} type={'number'}></input>
                    </div>
                </div>
                <div className={styles.Inputs}>
                    <p><FontAwesomeIcon icon={faPercent} />  Taxa de juros em porcentagem</p>
                    <div className={styles.Input}>
                        <input onInput={onInputTaxa} onKeyUp={onEnter} id={"taxa"} type={'number'}></input>
                        <select
                            defaultValue={taxaIntervalo}
                            onChange={(e) => setTaxaIntervalo(e.target.value)}
                        >
                            <option value="ao ano">ao ano</option>
                            <option value="ao mês">ao mês</option>
                        </select>
                    </div>
                </div>
                <div className={styles.Inputs}>
                    <p><FontAwesomeIcon icon={faCalendar} /> Período de tempo</p>
                    <div className={styles.Input}>
                        <input onInput={onInputTempo} onKeyUp={onEnter} id={"tempo"} type={'number'}></input>
                        <select
                            defaultValue={tempoIntervalo}
                            onChange={(e) => setTempoIntervalo(e.target.value)}
                        >
                            <option value="anos">anos</option>
                            <option value="meses">meses</option>
                        </select>
                    </div>
                </div>
                <div className={styles.Inputs}>
                    <p><FontAwesomeIcon icon={faDollarSign} /> Valor que será adicionado periodicamente</p>
                    <div className={styles.Input}>
                        <input onInput={onInputAdicaoPeriodica} onKeyUp={onEnter} id={"adicaoPeriodica"} type={'number'}></input>
                        <select
                            defaultValue={adicaoIntervalo}
                            onChange={(e) => setAdicaoIntervalo(e.target.value)}
                        >
                            <option value="por ano">por ano</option>
                            <option value="por mês">por mês</option>
                        </select>
                    </div>
                </div>
                {(montanteFinal !== 0 && !isNaN(montanteFinal)) &&
                    <p id={"resultado"}>
                        O montante final depois do período de tempo de <strong>{tempo} {tempoIntervalo}</strong> a uma taxa de juros de <strong>{Number(taxa).toLocaleString('pt-BR')}% {taxaIntervalo}</strong> e com adição de <strong>{Number(adicaoPeriodica).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} {adicaoIntervalo}</strong> é de <strong>{Number(montanteFinal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>.
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