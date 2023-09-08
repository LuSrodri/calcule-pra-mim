import styles from '@/styles/DiferencaDatas.module.css';
import { faCalendar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function DatasCalculator() {
    const [dataInicial, setDataInicial] = useState(new Date(0));
    const [dataFinal, setDataFinal] = useState(new Date(0));
    const [diffData, setDiffData] = useState((dataFinal.getTime() - dataInicial.getTime()));
    const [ano, setAno] = useState(0);
    const [mes, setMes] = useState(0);
    const [dia, setDia] = useState(0);

    useEffect(() => {
        setDiffData((dataFinal.getTime() - dataInicial.getTime()));
        if (diffData > 0) {
            calculateDateDiff();
        }
    });

    function onInputDataInicial(e) {
        setDataInicial(new Date(e.target.value));
    }

    function onInputDataFinal(e) {
        setDataFinal(new Date(e.target.value));
    }

    function calculateDateDiff() {
        setAno(0);
        setMes(0);
        setDia(0);
        let diffDateAux = diffData;
        let umano = (1000 * 3600 * 24 * 365);
        let ummes = (1000 * 3600 * 24 * 365 / 12);
        let umdia = (1000 * 3600 * 24);

        if (diffDateAux >= umano) {
            setAno(Math.round((diffDateAux / (1000 * 3600 * 24 * 365))));
            diffDateAux = (diffDateAux - (umano * ano));
        }
        if (diffDateAux > ummes) {
            setMes(Math.round((diffDateAux / (1000 * 3600 * 24 * 365 / 12))));
            diffDateAux = (diffDateAux - (ummes * mes));
        }
        if (diffDateAux > umdia) {
            setDia(Math.round((diffDateAux / (1000 * 3600 * 24))));
        }
    }

    return (
        <div className={styles.JurosCompostosCalculator}>
            <div className={styles.Calculator} style={{alignItems: "center"}}>
                <h2><FontAwesomeIcon icon={faCalendar} /> Calculadora</h2>
                <p>Entre com a data inicial e a data final e encontre a distância entre os dois tempos em dias, meses e anos.</p>
                <div className={styles.Inputs}>
                    <div className={styles.Input}>
                        <p><FontAwesomeIcon icon={faCalendar} /> Insira a data inicial</p>
                        <input style={{width: "unset", marginLeft: "20px"}} onInput={onInputDataInicial} id={"dataInicial"} type={'date'}></input>
                    </div>
                </div>
                <div className={styles.Inputs}>
                    <div className={styles.Input}>
                        <p><FontAwesomeIcon icon={faCalendar} /> Insira a data final</p>
                        <input style={{width: "unset", marginLeft: "20px"}} onInput={onInputDataFinal} id={"dataFinal"} type={'date'}></input>
                    </div>
                </div>
                {diffData > 0 &&
                    <p>
                        A diferença entre as duas datas é de aproximadamente <strong>{ano} ano&#40;s&#41;</strong>, <strong>{mes} mes&#40;es&#41;</strong> e <strong>{dia} dia&#40;s&#41;</strong>.
                    </p>
                }
                {diffData <= 0 &&
                    <p>
                        A data final deve ser maior que a data inicial.
                    </p>
                }
            </div>
            <div className={styles.Infos}>
                <h2><FontAwesomeIcon icon={faExclamationCircle} /> Curiosidades</h2>
                <p>O calendário é um sistema usado para medir o tempo e organizar os dias, meses e anos. <strong>O calendário Gregoriano é o mais amplamente utilizado em todo o mundo</strong> e foi adotado em 1582 pelo Papa Gregório XIII. Ele se baseia em um ano com <strong>365 dias</strong> e adiciona um dia extra a cada quatro anos para compensar o erro acumulado ao longo dos anos.<br></br> Além disso, há outros calendários como o <strong>calendário Maia</strong>, que era baseado em ciclos de 365 dias, e o <strong>calendário lunar</strong>, que é baseado na fase da lua e tem cerca de 354 dias.<br></br> <strong>A semana, composta por 7 dias</strong>, é uma unidade de tempo fundamental na vida cotidiana e cada dia tem seu próprio nome e significado histórico. O calendário é essencial para marcar datas importantes como aniversários, feriados e eventos especiais.</p>
            </div>
        </div>
    );
}