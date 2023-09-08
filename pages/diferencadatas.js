import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import stylesMain from '@/styles/Artigos.module.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faCalendar, faDollar, faPercent, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import DatasCalculator from '@/components/DatasCalculator';
import Card from '@/components/Card';
import Link from 'next/link';

export default function DiferencaDatas() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Calcule a diferença entre duas datas - Calcule pra mim!</title>

        <meta name="description" content="Entre com a data inicial e a data final e encontre a distância entre os dois tempos em dias, meses e anos." />

        <meta property="og:title" content="Calcule a diferença entre duas datas - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Entre com a data inicial e a data final e encontre a distância entre os dois tempos em dias, meses e anos." />
        <meta property="og:url" content="https://calculepramim.com/diferencadatas" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Calcule a diferença entre duas datas - Calcule pra mim!" />
        <meta name="twitter:description" content="Entre com a data inicial e a data final e encontre a distância entre os dois tempos em dias, meses e anos." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faCalendar} />} title={"Diferença entre datas"} isHome={false}></TopBar>
      <main className={stylesMain.Main}>
        <div className={stylesMain.all}>
          <DatasCalculator></DatasCalculator>
        </div>
        <div className={stylesMain.all}>
          <h2>Veja mais!</h2>

          <div className={styles.menu}>
            <Card icon={<FontAwesomeIcon icon={faAppleWhole} />} title={"IMC e Peso Ideal"} path={"/artigos/imc-pesoideal"}></Card>
            <Card icon={<FontAwesomeIcon icon={faPercent} />} title={"Juros Compostos"} path={"/artigos/juros-compostos"}></Card>
            <Card icon={<FontAwesomeIcon icon={faDollar} />} title={"Dolar para Real"} path={"/artigos/cambio-lucrar-trocas-moedas"}></Card>
          </div>
        </div>

        {process.env.NEXT_PUBLIC_LINK &&
          <div className={stylesMain.all}>
            <h2>Procurando por uma oferta quentinha?</h2>
            <p>
              Se você está procurando por uma oferta quentinha, então você está no lugar certo! Acesse o site da Amazon e encontre as melhores ofertas. Aproveite!
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
