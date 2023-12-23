import styles from '@/styles/JurosCompostosCalculator.module.css';
import { faAnglesRight, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter()

export default function MathAssistent() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.getElementById("textarea").value = question;
    }, [question]);

    function onEnter(e) {
        if (e.key === "Enter") {
            makingTheQuestion(question);
        }
        else {
            setQuestion(e.target.value);
        }
    }

    async function makingTheQuestion(theQuestion) {
        if (theQuestion === "") return;
        setAnswer("");
        setLoading(true);
        const response = await axios.post("https://text-magic-api-fmpgthqtdq-uc.a.run.app/math-assistant", { input: theQuestion });
        setAnswer(converter.makeHtml(response.data.output.value));
        setLoading(false);
    }

    return (
        <div className={styles.JurosCompostosCalculator}>
            <div className={styles.Calculator} style={{ width: "100%", alignItems: "center", justifyContent: "center", margin: "10px" }}>
                <h2 style={{ textAlign: "center" }}><FontAwesomeIcon icon={faRobot} /> Assistente de Matemática</h2>
                <p>Insira uma questão matemática e obtenha uma resposta.</p>
                <div className={styles.Inputs} style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    {loading &&
                        <div className={styles.Loading}></div>
                    }
                    <div className={styles.Input} style={{ width: "100%" }}>
                        <textarea id="textarea" disabled={loading} onKeyDown={onEnter} style={{ width: "100%" }}/>
                    </div>
                    <button disabled={loading} onClick={() => makingTheQuestion(question)}><FontAwesomeIcon icon={faAnglesRight} /> Fazer pergunta</button>
                </div>

                {answer !== "" && (
                    <p id="resultado" style={{ fontSize: "1.25rem" }} dangerouslySetInnerHTML={{__html: answer}}>
                    </p>
                )}

                <p className={styles.examples}>
                    <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como resolver equações quadráticas?</strong>
                    <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como calcular a integral definida de uma função?</strong>
                    <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Explique a diferença entre média, mediana e moda.</strong>
                    <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como encontrar a inversa de uma função?</strong>
                    <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como encontrar o X da seguinte equação: 2x - 1 = 7?</strong>
                </p>
            </div>
        </div>
    );
}
