import styles from '@/styles/JurosCompostosCalculator.module.css';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';

export default function ScientificCalculator() {
    const [mathExp, setMathExp] = useState("");
    const [mathExpResult, setMathExpResult] = useState("");

    useEffect(() => {
        if (mathExp !== "") {
            calculate();
        } else {
            setMathExpResult("");
        }
    }, [mathExp]);

    function onInputMathExp(e) {
        setMathExp(e.target.value);
    }

    function onEnter(e) {
        if (e.key === "Enter") {
            calculate();
        }
    }

    function calculate() {
        try {
            const translatedExp = translateMathExp(mathExp);
            const result = evaluate(translatedExp).toString();
            if (result.includes("function")) throw new Error();
            setMathExpResult(result);
        } catch (error) {
            setMathExpResult("Erro na expressão matemática");
        }
    }

    function translateMathExp(exp) {
        let translatedExp = exp;

        translatedExp = translatedExp.replace(/pi/g, eval("Math.PI"));
        translatedExp = translatedExp.replace(/π/g, eval("Math.PI"));
        translatedExp = translatedExp.replace(/e/g, eval("Math.E"));
        translatedExp = translatedExp.replace(/x/g, "*");

        return translatedExp;
    }

    return (
        <div className={styles.JurosCompostosCalculator} style={{ width: "90%" }}>
            <div className={styles.Calculator} style={{ width: "100%", alignItems: "center", justifyContent: "center", margin: "10px" }}>
                <h2 style={{ textAlign: "center" }}><FontAwesomeIcon icon={faCalculator} /> Calculadora Científica</h2>
                <p>Insira uma expressão matemática e encontre o resultado. Valores decimais são separados por ponto (.). Funções trigonométricas recebem valores em radianos.</p>
                <div className={styles.Inputs} style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <div className={styles.Input} style={{ width: "100%" }}>
                        <input onKeyDown={onEnter} style={{ width: "100%" }} value={mathExp} onInput={onInputMathExp} type="text" />
                    </div>
                </div>

                {mathExpResult !== "" && (
                    <p id="resultado" style={{fontSize: "1.25rem"}}>
                        <strong>Resultado:</strong> {mathExpResult}
                    </p>
                )}

                <p className={styles.examples}>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>2^3</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>log(100)</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>sin(45)</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>sqrt(25)</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>5!</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>abs(-7)</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>round(3.14)</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>random()</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>atan2(1,2)</strong>
                </p>

                <table className={styles.table} style={{ margin: "20px auto" }}>
                    <thead>
                        <tr>
                            <th>Operação</th>
                            <th>Símbolo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Adição</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <td>Subtração</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Multiplicação</td>
                            <td>*, x</td>
                        </tr>
                        <tr>
                            <td>Divisão</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>Módulo</td>
                            <td>x%y</td>
                        </tr>
                        <tr>
                            <td>Elevar à potência</td>
                            <td>^</td>
                        </tr>
                        <tr>
                            <td>y elevado a x</td>
                            <td>y^x</td>
                        </tr>
                        <tr>
                            <td>Raiz quadrada</td>
                            <td>sqrt(x)</td>
                        </tr>
                        <tr>
                            <td>Raiz cúbica</td>
                            <td>cbrt(x)</td>
                        </tr>
                        <tr>
                            <td>Raiz n-ésima</td>
                            <td>nthRoot(x, n)</td>
                        </tr>
                        <tr>
                            <td>Função seno</td>
                            <td>sin(x)</td>
                        </tr>
                        <tr>
                            <td>Função seno inversa</td>
                            <td>asin(x)</td>
                        </tr>
                        <tr>
                            <td>Função cosseno</td>
                            <td>cos(x)</td>
                        </tr>
                        <tr>
                            <td>Função cosseno inversa</td>
                            <td>acos(x)</td>
                        </tr>
                        <tr>
                            <td>Função tangente</td>
                            <td>tan(x)</td>
                        </tr>
                        <tr>
                            <td>Função tangente inversa</td>
                            <td>atan(x)</td>
                        </tr>
                        <tr>
                            <td>Logaritmo de base e</td>
                            <td>log(x)</td>
                        </tr>
                        <tr>
                            <td>Logaritmo de base 10</td>
                            <td>log10(x)</td>
                        </tr>
                        <tr>
                            <td>Logaritmo de base qualquer</td>
                            <td>log(x, base)</td>
                        </tr>
                        <tr>
                            <td>Parênteses que indicam a ordem das operações</td>
                            <td>()</td>
                        </tr>
                        <tr>
                            <td>PI</td>
                            <td>π, pi</td>
                        </tr>
                        <tr>
                            <td>Número de Euler</td>
                            <td>e</td>
                        </tr>
                        <tr>
                            <td>n Fatorial</td>
                            <td>n!</td>
                        </tr>
                        <tr>
                            <td>Valor absoluto</td>
                            <td>abs(x)</td>
                        </tr>
                        <tr>
                            <td>Valor arrendondado</td>
                            <td>round(x)</td>
                        </tr>
                        <tr>
                            <td>Seno hiperbólico</td>
                            <td>sinh(x)</td>
                        </tr>
                        <tr>
                            <td>Cosseno hiperbólico</td>
                            <td>cosh(x)</td>
                        </tr>
                        <tr>
                            <td>Tangente hiperbólica</td>
                            <td>tanh(x)</td>
                        </tr>
                        <tr>
                            <td>Arco seno hiperbólico</td>
                            <td>asinh(x)</td>
                        </tr>
                        <tr>
                            <td>Arco cosseno hiperbólico</td>
                            <td>acosh(x)</td>
                        </tr>
                        <tr>
                            <td>Arco tangente hiperbólica</td>
                            <td>atanh(x)</td>
                        </tr>
                        <tr>
                            <td>Retornar o sinal do número</td>
                            <td>sign(x)</td>
                        </tr>
                        <tr>
                            <td>Número aleatório entre 0 e 1</td>
                            <td>random()</td>
                        </tr>
                        <tr>
                            <td>Arco tangente de dois argumentos</td>
                            <td>atan2(y, x)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
