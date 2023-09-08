import styles from '@/styles/JurosCompostosCalculator.module.css';
import { faArrowsLeftRight, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Dollar() {
    const [dolarPreco, setDolarPreco] = useState(0);
    const [dolar, setDolar] = useState(1);
    const [real, setReal] = useState(1);

    const [dolarCompra, setDolarCompra] = useState(0);
    const [dolarVenda, setDolarVenda] = useState(0);
    const [maiorValor, setMaiorValor] = useState(0);
    const [menorValor, setMenorValor] = useState(0);
    const [variacao, setVariacao] = useState(0);
    const [variacaoPorcentagem, setVariacaoPorcentagem] = useState(0);

    useEffect(() => {
        fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
            .then(res => res.json())
            .then(data => {
                setDolarPreco(data.USDBRL.ask);
                setReal(real * data.USDBRL.ask);

                setDolarCompra(data.USDBRL.bid);
                setDolarVenda(data.USDBRL.ask);
                setMaiorValor(data.USDBRL.high);
                setMenorValor(data.USDBRL.low);
                setVariacao(data.USDBRL.varBid);
                setVariacaoPorcentagem(data.USDBRL.pctChange);
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
                <p>Valor de <strong>Dolar para compra</strong> é de <strong>R${dolarCompra}</strong></p>
                <p>Valor de <strong>Dolar para venda</strong> é de <strong>R${dolarVenda}</strong></p>
                <p>Valor <strong>máximo do Dolar hoje</strong> é de <strong>R${maiorValor}</strong></p>
                <p>Valor <strong>mínimo do Dolar hoje</strong> é de <strong>R${menorValor}</strong></p>
                <p>Variação de Dolar é de <strong>R${variacao}</strong></p>
                <p>Variação de Dolar em porcentagem é de <strong>{variacaoPorcentagem}%</strong></p>
            </div>
        </div>
    );
}
