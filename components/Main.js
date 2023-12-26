import styles from '@/styles/Main.module.css';
import { faAnglesRight, faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import Showdown from 'showdown';

const converter = new Showdown.Converter()

export default function Main() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const [madeQuestion, setMadeQuestion] = useState("");

    useEffect(() => {
        document.getElementById("textarea").focus();
    }, []);

    useEffect(() => {
        document.getElementById("textarea").value = question;
    }, [question]);

    useEffect(() => {
        if(document.getElementById("resultado")) document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });
    }, [answer]);

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
        setMadeQuestion("");
        setLoading(true);
        const response = await axios.post("https://text-magic-api-fmpgthqtdq-uc.a.run.app/math-assistant", { input: theQuestion });
        setAnswer(converter.makeHtml(response.data.output.value));
        setLoading(false);
        setMadeQuestion(theQuestion);
    }

    return (
        <main className={styles.Main}>
            <div>
                <h1>A calculadora para o que der e vier!</h1>
                <h3>Use o nosso assistente para aprender e obter as melhores respostas sobre questões matemáticas.</h3>
                <div className={styles.Dicas}>
                    <h3>Como funciona?</h3>
                    <p>
                        Nós usamos uma inteligência artificial para entender a sua pergunta e te dar a melhor resposta possível.
                        Basta inserir uma pergunta matemática e clicar em &quot;Fazer pergunta&quot;.
                        Pegaremos a pergunta, analisaremos através de um modelo de linguagem natural e tentaremos rodar um código em Python para obter a melhor resposta para você.
                    </p>
                </div>
                <div className={styles.Dicas}>
                    <h3>Comece agora!</h3>
                    <p style={{ textAlign: "initial" }}>
                        Faça perguntas como:
                    </p>
                    <ul>
                        <li>
                            <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como resolver equações quadráticas? </strong><FontAwesomeIcon icon={faComputerMouse} />
                        </li>
                        <li>
                            <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como calcular a integral definida de uma função? </strong><FontAwesomeIcon icon={faComputerMouse} />
                        </li>
                        <li>
                            <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Explique a diferença entre média, mediana e moda. </strong><FontAwesomeIcon icon={faComputerMouse} />
                        </li>
                        <li>
                            <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como encontrar a inversa de uma função? </strong><FontAwesomeIcon icon={faComputerMouse} />
                        </li>
                        <li>
                            <strong onClick={(e) => setQuestion(e.target.innerHTML)}>Como encontrar o X da seguinte equação: 2x - 1 = 7? </strong><FontAwesomeIcon icon={faComputerMouse} />
                        </li>
                    </ul>
                </div>
                <div className={styles.Inputs} style={{ width: "100%" }}>
                    {loading &&
                        <div className={styles.Loading}></div>
                    }
                    <div className={styles.Input} style={{ width: "100%" }}>
                        <textarea placeholder='Insira uma questão matemática e obtenha uma resposta.' id="textarea" disabled={loading} onKeyDown={onEnter} />
                    </div>
                    <button disabled={loading} onClick={() => makingTheQuestion(question)}><FontAwesomeIcon icon={faAnglesRight} /> Fazer pergunta</button>
                </div>
                <hr></hr>
                {madeQuestion == "" &&
                    < h3 > A resposta irá aparecer aqui :)</h3>
                }
                {madeQuestion !== "" && <h3 id="pergunta" style={{ fontSize: "1.25rem" }} dangerouslySetInnerHTML={{ __html: madeQuestion }}></h3>
                }
                {answer !== "" && (
                    <>
                        <h3>Resposta:</h3>
                        <p id="resultado" style={{ fontSize: "1.25rem" }} dangerouslySetInnerHTML={{ __html: answer }}></p>
                    </>
                )}
            </div>
        </main >
    );
}