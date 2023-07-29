import styles from '@/styles/Main.module.css';
import { faAppleWhole, faCalculator, faCalendar, faEllipsisVertical, faPercent, faStar, faUpRightFromSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import Link from 'next/link';

export default function Main() {
    return (
        <main className={styles.Main}>
            <h1>Calculadoras</h1>

            <div className={styles.menu}>
                <Card icon={<FontAwesomeIcon icon={faCalculator} />} title={"Calculadora Científica"} path={"/cientifica"}></Card>
                <Card icon={<FontAwesomeIcon icon={faX} />} title={"Calculadora Algébrica"} path={"/algebrica"}></Card>
                <Card icon={<FontAwesomeIcon icon={faAppleWhole} />} title={"IMC e Peso Ideal"} path={"/imc"}></Card>
                <Card icon={<FontAwesomeIcon icon={faPercent} />} title={"Juros compostos"} path={"/juroscompostos"}></Card>
                <Card icon={<FontAwesomeIcon icon={faCalendar} />} title={"Diferença entre datas"} path={"/diferencadatas"}></Card>
            </div>

            <hr></hr>

            <h1>Documentação</h1>

            <h2>Use a calculadora científica e encontre resultados para expressões matemáticas</h2>
            <p>
                As calculadoras científicas são ferramentas essenciais para estudantes e profissionais das áreas da ciência, matemática e engenharia.
                Com funções complexas e avançadas, esses dispositivos são capazes de realizar cálculos que vão além das capacidades das calculadoras básicas.
                Você pode calcular expressões matemáticas como: 2^3, log(100), sin(45), sqrt(25), 5!, abs(-7), round(3.14), random() e atan2(1,2).
            </p>
            <p>
                Uma das principais funcionalidades das calculadoras científicas é a capacidade de executar operações matemáticas complexas, como cálculos trigonométricos (seno, cosseno, tangente), exponenciais, logarítmicas e raízes quadradas.
                Essas funções são especialmente úteis para resolver equações e realizar análises numéricas em áreas como cálculo, física e estatística.
            </p>
            <p>
                Em resumo, as calculadoras científicas são instrumentos poderosos que auxiliam estudantes e profissionais em suas atividades acadêmicas e profissionais.
                Com funcionalidades avançadas, essas calculadoras são capazes de realizar cálculos complexos, converter unidades, armazenar valores frequentemente utilizados e até mesmo representar graficamente dados numéricos.
                Portanto, são ferramentas indispensáveis para aqueles que lidam com cálculos e análises quantitativas.
            </p>
            <Link href="cientifica">Ver mais e usar <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

            <hr></hr>

            <h2>Use a calculadora algébrica e encontre resultados para expressões algébricas</h2>
            <p>
                A calculadora algébrica é uma poderosa ferramenta para resolver expressões matemáticas de forma rápida e precisa.
                Com ela, é possível simplificar e encontrar resultados para equações e expressões algébricas complexas.
                Você pode resolver expressões algébricas como: 2x - 3 = 4, (7/2)z = 1/4, y = (1/12)x + 73/60, x^2 + (17/4)x - 15/4 = 0 e 2x^2 + 5xy - 3y^2 = 0.
            </p>
            <p>
                Uma expressão algébrica é uma combinação de números, variáveis e operações matemáticas, como adição, subtração, multiplicação e divisão.
                Elas podem envolver termos positivos e negativos, assim como potências e raízes.
            </p>
            <p>
                Com a calculadora algébrica, basta inserir a expressão desejada e apertar o botão de calcular para obter o resultado.
                Ela é capaz de realizar múltiplas operações de forma simultânea, respeitando as regras da matemática.
            </p>
            <Link href="algebrica">Ver mais e usar <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

            <hr></hr>

            <h2>Calcule o índice de massa corporal e descubra o peso ideal</h2>
            <p>
                O índice de massa corporal (IMC) é uma medida que relaciona o peso de uma pessoa com sua altura, fornecendo uma indicação do seu estado de saúde e do peso ideal.
                Calcular o IMC é uma maneira simples e eficaz de avaliar se uma pessoa está abaixo do peso, com peso normal, sobrepeso ou obesa.
            </p>
            <p>
                Para calcular o IMC, basta utilizar a fórmula: IMC = peso (em quilogramas) dividido pelo quadrado da altura (em metros).
                Após realizar essa operação, é possível consultar uma tabela de classificação para entender em qual faixa de peso a pessoa se encontra.
            </p>
            <p>
                Uma vez que o IMC tenha sido calculado, é importante interpretar os resultados de forma correta.
                O IMC varia entre as seguintes categorias: abaixo do peso (IMC menor que 18,5), peso normal (IMC entre 18,5 e 24,9), sobrepeso (IMC entre 25 e 29,9) e obesidade (IMC igual ou superior a 30).
            </p>
            <p>
                É válido ressaltar que o IMC é uma medida geral e não considera outros fatores importantes, como a composição corporal e a distribuição de gordura.
                Portanto, para uma avaliação mais completa, é recomendado consultar um profissional de saúde, como um médico ou nutricionista.
            </p>
            <p>
                A partir do cálculo do IMC, é possível obter uma ideia aproximada do peso ideal para uma determinada altura.
                Entretanto, cada pessoa é única e outros fatores individuais devem ser considerados, como a idade, o sexo e a atividade física praticada.
            </p>
            <p>
                Em resumo, calcular o índice de massa corporal é uma maneira simples e eficaz de avaliar o estado de saúde e o peso ideal de uma pessoa.
                Porém, é importante lembrar que o IMC é apenas um indicador geral e não substitui a orientação e o acompanhamento de profissionais de saúde.
            </p>
            <Link href="imc">Ver mais e usar <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

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

            <h2><FontAwesomeIcon icon={faEllipsisVertical} /></h2>

            <h2><FontAwesomeIcon icon={faStar} /> Acompanhe as novidades <FontAwesomeIcon icon={faStar} /></h2>
        </main>
    );
}