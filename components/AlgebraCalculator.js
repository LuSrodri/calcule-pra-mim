import styles from '@/styles/JurosCompostosCalculator.module.css';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import algebra from 'algebra.js';

export default function AlgebraCalculator() {
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

    function calculate() {
        try {
            const equation = algebra.parse(translateMathExp(mathExp));
            let x = "";
            let y = "";
            let z = "";
            if (equation.toString().includes("x")) x = equation.solveFor("x");
            if (equation.toString().includes("y")) y = equation.solveFor("y");
            if (equation.toString().includes("z")) z = equation.solveFor("z");

            let response = "";
            if (x !== "") response += `| <strong>x</strong> = ${x} |`;
            if (y !== "") response += `| <strong>y</strong> = ${y} |`;
            if (z !== "") response += `| <strong>z</strong> = ${z} |`;

            if (response.includes("function")) throw new Error();
            setMathExpResult(response);
        } catch (error) {
            console.log(error);
            setMathExpResult("Erro na expressão matemática");
        }
    }

    function translateMathExp(exp) {
        let translatedExp = exp;

        translatedExp = translatedExp.replace(/pi/g, eval("Math.PI"));
        translatedExp = translatedExp.replace(/π/g, eval("Math.PI"));
        translatedExp = translatedExp.replace(/e/g, eval("Math.E"));

        return translatedExp;
    }

    return (
        <div className={styles.JurosCompostosCalculator} style={{ width: "90%" }}>
            <div className={styles.Calculator} style={{ width: "100%", alignItems: "center", justifyContent: "center", margin: "10px" }}>
                <h2 style={{ textAlign: "center" }}><FontAwesomeIcon icon={faX} /> Calculadora Algébrica</h2>
                <p>Insira uma expressão algébrica e encontre os resultados de <strong>x, y e z</strong> (se tiver). Valores decimais são separados por ponto (.).</p>
                <div className={styles.Inputs} style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <div className={styles.Input} style={{ width: "100%" }}>
                        <input style={{ width: "100%" }} value={mathExp} onInput={onInputMathExp} type="text" />
                    </div>
                </div>

                <p id="resultado" style={{ fontSize: "1.25rem" }} dangerouslySetInnerHTML={{ __html: mathExpResult }}></p>

                <p className={styles.examples}>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>2x - 3 = 4</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>(7/2)z = 1/4</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>y = (1/12)x + 73/60</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>x^2 + (17/4)x - 15/4 = 0</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>(1/2)x - 4 = 6</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>5(y - 2) = 15</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>(3/5)z = 2/3</strong>
                    <strong onClick={(e) => setMathExp(e.target.innerHTML)}>2x^2 + 5xy - 3y^2 = 0</strong>
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
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>Divisão</td>
                            <td>/</td>
                        </tr>
                        <tr>
                            <td>Elevar à potência</td>
                            <td>^</td>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}
