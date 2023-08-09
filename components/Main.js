import styles from '@/styles/Main.module.css';
import { faAppleWhole, faCalculator, faCalendar, faEllipsisVertical, faPercent, faStar, faUpRightFromSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import Link from 'next/link';

export default function Main() {
    return (
        <main className={styles.Main}>
            <h1>Acesso rápido</h1>

            <div className={styles.menu}>
                <Card icon={<FontAwesomeIcon icon={faCalculator} />} title={"Calculadora Científica"} path={"/cientifica"}></Card>
                <Card icon={<FontAwesomeIcon icon={faX} />} title={"Calculadora Algébrica"} path={"/algebrica"}></Card>
                <Card icon={<FontAwesomeIcon icon={faAppleWhole} />} title={"IMC e Peso Ideal"} path={"/imc"}></Card>
                <Card icon={<FontAwesomeIcon icon={faPercent} />} title={"Juros compostos"} path={"/juroscompostos"}></Card>
                <Card icon={<FontAwesomeIcon icon={faCalendar} />} title={"Diferença entre datas"} path={"/diferencadatas"}></Card>
            </div>

            <hr></hr>

            <h1>Principais artigos</h1>

            <h2>A Calculadora Científica: Uma Indispensável Ferramenta Matemática.</h2>
            <p>
                O avanço do conhecimento humano muitas vezes nos apresenta cálculos matemáticos que vão além da simples adição ou subtração. Da ciência à engenharia, referência em cálculos complexos e árduos é a calculadora científica. Considerada uma ferramenta indispensável, seu uso não se restringe apenas ao ambiente acadêmico, mas também em vários campos profissionais...
            </p>
            <Link href="artigos/cientifica">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

            <hr></hr>

            <h2>Descobrindo a Calculadora Algébrica e o Cálculo Algébrico.</h2>
            <p>
                Ao nos aventuramos no âmbito da matemática, descobrimos que seu campo de estudo amplia-se com o aumento do nível de complexidade. Um desses domínios é a álgebra, a qual fez surgir ferramentas especializadas como a calculadora algébrica...
            </p>
            <Link href="artigos/algebrica">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

            <hr></hr>

            <h2>Compreendendo o Índice de Massa Corporal e a Busca pelo Peso Ideal.</h2>
            <p>
                Atualmente, a saúde e o bem-estar estão em voga, e o conceito de um estilo de vida saudável se tornou mais popular e essencial do que nunca. Dietas saudáveis, exercícios regulares, hidratação adequada e sono regular são alguns dos aspectos dessa equação complexa. No centro deste debate, ganham destaque os conceitos de Índice de Massa Corporal (IMC) e &quot;peso ideal&quot;...
            </p>
            <Link href="artigos/imc-pesoideal">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

            <hr></hr>

            <h2>Calcule investimentos com base em juros compostos</h2>
            <p>
                Os juros compostos são uma forma de cálculo de retorno financeiro que leva em consideração não apenas o montante inicial investido, mas também os juros acumulados ao longo do tempo.
                Basicamente, a ideia é reinvestir os rendimentos obtidos, gerando assim um crescimento exponencial do capital aplicado.
            </p>
            <p>
                Para calcular investimentos com base em juros compostos, é importante conhecer algumas informações fundamentais, como o montante inicial investido, a taxa de juros e o período de tempo em que o investimento será mantido.
            </p>
            <p>
                A fórmula utilizada para calcular o montante final de um investimento com juros compostos é a seguinte: M = P * (1 + i)^n, onde M é o montante final, P é o montante principal, i é a taxa de juros e n é o número de períodos de tempo.
            </p>
            <p>
                É importante ressaltar que os juros compostos são muito poderosos quando o investimento é feito em longo prazo.
                Isso ocorre porque a reinvestimento dos rendimentos ajuda a acelerar o crescimento do patrimônio.
            </p>
            <p>
                Por fim, é importante destacar que conhecer e entender o poder dos juros compostos é fundamental para o sucesso de qualquer investidor.
                Com esse conhecimento, é possível tomar melhores decisões financeiras e aproveitar ao máximo o potencial do crescimento dos investimentos.
                Ter uma estratégia sólida e realizar cálculos precisos são passos fundamentais para uma trajetória de sucesso no mundo dos negócios e das finanças.
            </p>
            <Link href="juroscompostos">Ver mais e usar <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

            <hr></hr>

            <h2>Calcule a diferença de tempo entre duas datas</h2>
            <p>
                Calcular a diferença de tempo entre duas datas pode ser útil em diversas situações, como planejamento de viagens, determinar a idade de alguém ou acompanhar o tempo decorrido desde um evento específico.
                Felizmente, existem ferramentas e métodos que facilitam esse cálculo.
            </p>
            <p>
                Uma forma simples de calcular a diferença entre duas datas é subtrair a data mais antiga da data mais recente. Para isso, é importante ter as datas no formato correto, geralmente no formato dia/mês/ano.
            </p>
            <p>
                Em resumo, calcular a diferença de tempo entre duas datas pode ser feito de diversas maneiras, desde cálculos manuais até o uso de ferramentas tecnológicas.
                Independentemente do método escolhido, essa habilidade é útil para diversas situações e pode fornecer informações precisas e relevantes.
            </p>
            <Link href="diferencadatas">Ver mais e usar <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

            <hr></hr>

            <h1>Outros artigos</h1>
            <h2>Em breve!</h2>
        </main>
    );
}