import styles from '@/styles/JurosCompostosCalculator.module.css';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function JurosCompostosCalculator() {
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
            const translatedExp = translateMathExp(mathExp);
            const result = eval(translatedExp);
            setMathExpResult(result);
        } catch (error) {
            setMathExpResult("Erro na expressão matemática");
        }
    }

    function translateMathExp(exp) {
        let translatedExp = exp;

        translatedExp = translatedExp.replace(/π/g, eval(Math.PI));
        translatedExp = translatedExp.replace(/pi/g, eval(Math.PI));
        translatedExp = translatedExp.replace(/e/g, eval(Math.E));

        translatedExp = translatedExp.replace(/sqrt\(([^)]+)\)/g, "Math.sqrt($1)");
        translatedExp = translatedExp.replace(/sin-1\(([^)]+)\)/g, "Math.asin($1)");
        translatedExp = translatedExp.replace(/cos-1\(([^)]+)\)/g, "Math.acos($1)");
        translatedExp = translatedExp.replace(/tan-1\(([^)]+)\)/g, "Math.atan($1)");
        translatedExp = translatedExp.replace(/ln\(([^)]+)\)/g, "Math.log($1)");
        translatedExp = translatedExp.replace(/log\(([^)]+)\)/g, "Math.log10($1)");

        translatedExp = translatedExp.replace(/x/g, "*");
        translatedExp = translatedExp.replace(/÷/g, "/");

        translatedExp = translatedExp.replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, "Math.pow($1, $2)");

        translatedExp = translatedExp.replace(/sin\(([^)]+)\)/g, "Math.sin($1)");
        translatedExp = translatedExp.replace(/cos\(([^)]+)\)/g, "Math.cos($1)");
        translatedExp = translatedExp.replace(/tan\(([^)]+)\)/g, "Math.tan($1)");

        return translatedExp;
    }

    return (
        <div className={styles.JurosCompostosCalculator} style={{ width: "90%" }}>
            <div className={styles.Calculator} style={{ width: "100%", alignItems: "center", justifyContent: "center", margin: "10px" }}>
                <h2 style={{ textAlign: "center" }}><FontAwesomeIcon icon={faCalculator} /> Calculadora Científica</h2>
                <p>Insira uma expressão matemática e encontre o resultado. Valores decimais são separados por ponto (.). Funções trigonométricas recebem valores em radianos.</p>
                <div className={styles.Inputs} style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    <div className={styles.Input} style={{ width: "100%" }}>
                        <input style={{ width: "100%" }} value={mathExp} onInput={onInputMathExp} type="text" />
                    </div>
                </div>

                {mathExpResult !== "" && (
                    <p id="resultado">
                        <strong>Resultado:</strong> {mathExpResult}
                    </p>
                )}

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
                            <td>Subtração (somente valores positivos)</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Multiplicação (muitas calculadoras também incluem a tecla x para variáveis)</td>
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
                            <td>y elevado a x</td>
                            <td>y^x</td>
                        </tr>
                        <tr>
                            <td>Raiz quadrada</td>
                            <td>sqrt(x)</td>
                        </tr>
                        <tr>
                            <td>Função seno</td>
                            <td>sin(x)</td>
                        </tr>
                        <tr>
                            <td>Função seno inversa</td>
                            <td>sin-1(x)</td>
                        </tr>
                        <tr>
                            <td>Função cosseno</td>
                            <td>cos(x)</td>
                        </tr>
                        <tr>
                            <td>Função cosseno inversa</td>
                            <td>cos-1(x)</td>
                        </tr>
                        <tr>
                            <td>Função tangente</td>
                            <td>tan(x)</td>
                        </tr>
                        <tr>
                            <td>Função tangente inversa</td>
                            <td>tan-1(x)</td>
                        </tr>
                        <tr>
                            <td>Logaritmo de base e</td>
                            <td>ln(x)</td>
                        </tr>
                        <tr>
                            <td>Logaritmo de base 10</td>
                            <td>log(x)</td>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}
