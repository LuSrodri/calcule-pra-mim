import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import stylesMain from '@/styles/Artigos.module.css';
import Footer from '@/components/Footer';
import ImcCalculator from '@/components/ImcCalculator';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Default() {
    return (
        <div className={styles.main}>
            <Head>
                <title>Compreendendo o Índice de Massa Corporal e a Busca pelo Peso Ideal.</title>

                <meta name="description" content="Atualmente, a saúde e o bem-estar estão em voga, e o conceito de um estilo de vida saudável se tornou mais popular e essencial do que nunca. Dietas saudáveis, exercícios regulares, hidratação adequada e sono regular são alguns dos aspectos dessa equação complexa. No centro deste debate, ganham destaque os conceitos de Índice de Massa Corporal (IMC) e 'peso ideal'." />

                <meta property="og:title" content="Compreendendo o Índice de Massa Corporal e a Busca pelo Peso Ideal." />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Atualmente, a saúde e o bem-estar estão em voga, e o conceito de um estilo de vida saudável se tornou mais popular e essencial do que nunca. Dietas saudáveis, exercícios regulares, hidratação adequada e sono regular são alguns dos aspectos dessa equação complexa. No centro deste debate, ganham destaque os conceitos de Índice de Massa Corporal (IMC) e 'peso ideal'." />
                <meta property="og:url" content="https://calculepramim.com/artigos/imc-pesoideal" />
                <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

                <meta name="twitter:title" content="Compreendendo o Índice de Massa Corporal e a Busca pelo Peso Ideal." />
                <meta name="twitter:description" content="Atualmente, a saúde e o bem-estar estão em voga, e o conceito de um estilo de vida saudável se tornou mais popular e essencial do que nunca. Dietas saudáveis, exercícios regulares, hidratação adequada e sono regular são alguns dos aspectos dessa equação complexa. No centro deste debate, ganham destaque os conceitos de Índice de Massa Corporal (IMC) e 'peso ideal'." />
                <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/calcule-pra-mim-logo.png" />
            </Head>
            <TopBar isHome={false}></TopBar>
            <main className={stylesMain.Main}>
                <div className={stylesMain.all}>
                    <h1>Compreendendo o Índice de Massa Corporal e a Busca pelo Peso Ideal.</h1>

                    <p>
                        Atualmente, a saúde e o bem-estar estão em voga, e o conceito de um estilo de vida saudável se tornou mais popular e essencial do que nunca. Dietas saudáveis, exercícios regulares, hidratação adequada e sono regular são alguns dos aspectos dessa equação complexa. No centro deste debate, ganham destaque os conceitos de Índice de Massa Corporal (IMC) e &quot;peso ideal&quot;.
                    </p>

                    <p>
                        O IMC, ou Índice de Massa Corporal, é uma medida largamente utilizada que busca avaliar se uma pessoa está dentro do peso considerado normal, abaixo ou acima dele, com base na relação entre o peso em kg e altura em metros. Calculado pela fórmula: IMC = peso(kg) / (altura(m))^2, o resultado desse cálculo define se um indivíduo está dentro da faixa de peso considerada saudável, subnutrido, sobrepeso ou com obesidade – de acordo com parâmetros estabelecidos pela Organização Mundial da Saúde (OMS).
                    </p>

                    <p>
                        O peso ideal, por outro lado, é um conceito muito mais subjetivo e pode variar dependendo de vários fatores, como genética, idade, sexo, composição corporal, nível de atividade física e até mesmo preferências pessoais. Embora o IMC seja uma ferramenta útil, ele não considera fatores como massa muscular ou distribuição de gordura corporal, e portanto, nem sempre é a melhor medida para determinar a saúde de um indivíduo. Um atleta musculoso, por exemplo, pode ter um IMC alto, mas não necessariamente estar com sobrepeso ou ser considerado insalubre.
                    </p>

                    <p>
                        É importante ressaltar, nesse ponto, que a OMS estabelece, no cálculo do IMC, que um índice entre 18,5 e 24,9 é considerado saudável para a maior parte da população. Entretanto, esses valores não são absolutos e podem variar conforme a população e as características individuais. Além disso, o peso ideal não deve ser interpretado exclusivamente como um número na balança, mas sim como um estado de saúde e bem-estar.
                    </p>

                    <p>
                        Ao buscar o peso ideal, é essencial ter uma visão holística da saúde. Afinal, a saúde vai muito além do peso corporal, incluindo também fatores como força muscular, condição cardiovascular, função metabólica, saúde mental e emocional. O peso saudável corresponderá ao peso que pode ser mantido sem imposição restritiva excessiva na dieta e sem um regime de exercícios físicos exagerado ou prejudicial ao corpo.
                    </p>

                    <p>
                        Em nossos esforços para alcançar e manter um peso saudável, devemos prestar atenção aos sinais e necessidades de nossos corpos. Isto significa comer uma dieta equilibrada e nutritiva que satisfaça nossa fome, manter um nível adequado de exercícios físicos que seja ao mesmo tempo desafiador e prazeroso, e permitir um descanso adequado para recuperação e revitalização.
                    </p>

                    <p>
                        Em resumo, o IMC e a noção de peso ideal são ferramentas úteis na busca por um estilo de vida saudável, mas não podem ser interpretados como medidas absolutas de saúde. Cada indivíduo é único e suas necessidades podem variar. Portanto, ao avaliar a saúde e o bem-estar, é essencial olhar além do peso na balança e considerar uma variedade de fatores, incluindo o nível de atividade física, a dieta, o sono e, o mais importante, como você se sente em seu corpo. Um estilo de vida saudável é aquele que permite a você se sentir bem e ter energia para desfrutar da vida - e é este o verdadeiro peso ideal.
                    </p>

                    <p>
                        Mantenham em mente que todas as mudanças no estilo de vida e na rotina de exercícios devem ser acompanhadas por um profissional de saúde, para garantir que estão sendo feitas de forma saudável e segura.
                    </p>

                    <p>
                        <strong>Escrito por Lucas Santos Rodrigues. Em 09/08/2023.</strong>
                    </p>

                    <hr></hr>
                </div>

                <div className={stylesMain.all}>
                    <h2>Buscando por uma calculadora de imc e peso ideal? Utilize a nossa!</h2>
                    <ImcCalculator></ImcCalculator>
                </div>
                
                {process.env.NEXT_PUBLIC_LINK &&
                    <div className={stylesMain.all}>
                        <h2>Procurando por uma oferta quentinha?</h2>
                        <p>
                            Se você está procurando por uma oferta quentinha, então você está no lugar certo! Acesse o site da Amazon e encontre as melhores ofertas em eletrônicos. Aproveite!
                        </p>
                        <span dangerouslySetInnerHTML={{ __html: process.env.NEXT_PUBLIC_LINK }}></span>
                    </div>
                }

                <div className={stylesMain.all}>
                    <h2>Quer fazer parte do maior site de Matemática e Ciência do Brasil e do Mundo?</h2>
                    <p>
                        Nós somos o maior site de Matemática e Ciência do Brasil e do Mundo. Ajudamos milhões de pessoas, mas isso tem um custo! Se você gosta do nosso trabalho e quer fazer parte dele, considere nos ajudar com uma doação. Qualquer valor é bem-vindo!
                    </p>
                    <Link href="https://donate.stripe.com/cN24gMexc71aakgaEF" target='_blank'>Faça parte do Calcule Pra Mim e doe qualquer valor para ajudar! <FontAwesomeIcon icon={faUpRightFromSquare} /></Link>
                </div>

            </main>
            <Footer></Footer>
        </div>
    )
}
