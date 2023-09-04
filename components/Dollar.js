import styles from '@/styles/JurosCompostosCalculator.module.css';
import { faArrowsLeftRight, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Dollar() {
    const [dolarPreco, setDolarPreco] = useState(0);
    const [dolar, setDolar] = useState(1);
    const [real, setReal] = useState(1);
    
    useEffect(() => {
        fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
            .then(res => res.json())
            .then(data => {
                setDolarPreco(data.USDBRL.ask);
                setReal(real * data.USDBRL.ask);
            });
    }, []);

    function calculaReal(e) {
        setDolar(e.target.value);
        setReal((e.target.value * dolarPreco).toFixed(3));
    }

    function calculaDolar(e) {
        setReal(e.target.value);
        setDolar((e.target.value / dolarPreco).toFixed(3));
    }

    return (
        <div className={styles.JurosCompostosCalculator} style={{ width: "90%" }}>
            <div className={styles.Calculator} style={{ width: "800px", maxWidth: 'calc(90% - 20px)', alignItems: "center", justifyContent: "center", margin: "10px" }}>
                <h2 style={{ textAlign: "center" }}><FontAwesomeIcon icon={faDollar} /> Dolar para Real</h2>
                <p>Descubra o melhor valor do Dolar no momento.</p>
                <div className={styles.Inputs} style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <div className={styles.Input} style={{ width: "100%", justifyContent: 'space-evenly' }}>
                        <label><h4>Dolar</h4> <input onInput={calculaReal} value={dolar} type="number" /></label>
                        <h1><FontAwesomeIcon icon={faArrowsLeftRight} /></h1>
                        <label><h4>Real</h4> <input onInput={calculaDolar} value={real} type="number" /></label>
                    </div>
                </div>
            </div>
        </div>
    );
}
