import styles from '@/styles/Main.module.css';
import { faAppleWhole, faCalculator, faCalendar, faDollar, faPercent, faRobot, faUpRightFromSquare, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import Link from 'next/link';

export default function Main() {
    return (
        <main className={styles.Main}>
            <div className={styles.session}>
                <h1>Acesso rápido</h1>

                <div className={styles.menu}>
                    <Card icon={<FontAwesomeIcon icon={faRobot} />} title={"Assistente de Matemática"} path={"/assistente-matematica"}></Card>
                    <Card icon={<FontAwesomeIcon icon={faCalculator} />} title={"Calculadora Científica"} path={"/cientifica"}></Card>
                    <Card icon={<FontAwesomeIcon icon={faX} />} title={"Calculadora Algébrica"} path={"/algebrica"}></Card>
                    <Card icon={<FontAwesomeIcon icon={faAppleWhole} />} title={"IMC e Peso Ideal"} path={"/qual-peso-ideal"}></Card>
                    <Card icon={<FontAwesomeIcon icon={faPercent} />} title={"Juros Compostos"} path={"/juroscompostos"}></Card>
                    <Card icon={<FontAwesomeIcon icon={faCalendar} />} title={"Diferença entre Datas"} path={"/diferencadatas"}></Card>
                    <Card icon={<FontAwesomeIcon icon={faDollar} />} title={"Dolar para Real"} path={"/dolar"}></Card>
                </div>
            </div>

            <div className={styles.session}>
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

                <h2>A Arte de Ganhar Dinheiro com Juros Compostos.</h2>
                <p>
                    Começaremos com uma pergunta simples: O que são juros compostos? Juros Compostos são um método de cálculo do juros que incidem sobre uma quantia de dinheiro, onde o valor do juros é somado ao montante original para calcular os juros do próximo período. Este ciclo continua até o final do período de investimento. A regra é fundamental para o funcionamento de muitos produtos financeiros, incluindo poupanças, créditos e investimentos. Mas como podemos usar isso para ganhar dinheiro?...
                </p>
                <Link href="artigos/juros-compostos">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

                <hr></hr>

                <h2>A Fascinante Evolução dos Calendários, Datas e Cálculos</h2>
                <p>
                    O calendário é uma das mais antigas ferramentas de cálculo e mensuração de tempo desenvolvidas pela humanidade, evoluindo ao longo dos séculos para adaptar-se as necessidades das sociedades. Mais do que apenas uma lista ordenada de dias, semanas e meses, os calendários são representações refinadas do tempo vivenciado por humanos e possuem um papel primordial em nossas vidas. O entendimento de datas e cálculos, por sua vez, figura uma seção chave desse entendimento e uso efetivo dos calendários...
                </p>
                <Link href="artigos/calendarios-datas-calculos">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

                <hr></hr>

                <h2>Ganhar Dinheiro com Câmbio: Um Guia para Lucrar com a Troca de Moedas</h2>
                <p>
                    O mercado de câmbio, também conhecido como Forex, é um dos maiores e mais líquidos mercados financeiros do mundo. Trilhões de dólares são negociados entre um grande número de bancos centrais, bancos comerciais, empresas internacionais, governos e instituições financeiras. Este artigo lhe informará sobre como você pode ganhar dinheiro com a troca de moedas...
                </p>
                <Link href="artigos/cambio-lucrar-trocas-moedas">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

                <hr></hr>
            </div>

            <div className={styles.session}>
                <h1>Outros artigos</h1>

                <h2>Como ganhar dinheiro na internet: Do jeito verdadeiro, confiável e duradouro.</h2>
                <p>
                    A era digital abriu novas possibilidades de trabalho e renda, possibilitando que milhões de pessoas ao redor do mundo consigam ganhar dinheiro sem sair de casa. Contudo, essa mesma abertura também possibilitou a proliferação de esquemas fraudulentos e práticas desleais. Para os iniciantes no mundo digital, encontrar formas legítimas de ganhar dinheiro pela internet pode ser um desafio. Neste artigo, iremos apresentar cinco maneiras seguras e duradouras de ganhar dinheiro online que não envolvem investimentos de alto risco...
                </p>
                <Link href="artigos/como-ganhar-dinheiro-internet">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

                <hr></hr>

                <h2>Ganhe Dinheiro com Domínios Web: Uma Oportunidade Lucrativa na Era Digital.</h2>
                <p>
                    Os domínios web tornaram-se uma das muitas maneiras pelas quais as pessoas podem ganhar dinheiro na era digital. Com a proliferação da internet e o crescimento das empresas online, os domínios web transformaram-se em propriedades virtuais muito valorizadas. Este artigo elucidará o conceito de ganhar dinheiro com domínios web e as diversas formas práticas de se fazer isso...
                </p>
                <Link href="artigos/dominios-web">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

                <hr></hr>

                <h2>Entendimento de Precedências nos Cálculos: Uma Escalada na Resolução de Problemas Matemáticos</h2>
                <p>
                    A Matemática é uma linguagem precisa e rigorosa que segue uma série de regras estabelecidas para garantir que determinado cálculo ou sequência de operações produza um resultado correto e único. Uma dessas regras primordiais é a precedência de operações, uma norma de execução que estabelece a ordem em que os cálculos devem ser realizados. Entender estas regras é fundamental para a resolução correta de problemas matemáticos e científicos...
                </p>
                <Link href="artigos/como-fazer-calculos">Continue lendo <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>

                <hr></hr>
            </div>

            {process.env.NEXT_PUBLIC_LINK &&
                <div className={styles.session}>
                    <h2>Procurando por uma oferta quentinha?</h2>
                    <p>
                        Se você está procurando por uma oferta quentinha, então você está no lugar certo! Acesse o site da Amazon e encontre as melhores ofertas. Aproveite!
                    </p>
                    <span dangerouslySetInnerHTML={{ __html: process.env.NEXT_PUBLIC_LINK }}></span>
                </div>
            }

            <div className={styles.session}>
                <h2>Quer fazer parte do maior site de Matemática e Ciência do Brasil e do Mundo?</h2>
                <p>
                    Nós somos o maior site de Matemática e Ciência do Brasil e do Mundo. Ajudamos milhões de pessoas, mas isso tem um custo! Se você gosta do nosso trabalho e quer fazer parte dele, considere nos ajudar com uma doação. Qualquer valor é bem-vindo!
                </p>
                <Link href="https://donate.stripe.com/cN24gMexc71aakgaEF" target='_blank'>Faça parte do Calcule Pra Mim e doe qualquer valor para ajudar! <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>
            </div>

        </main>
    );
}