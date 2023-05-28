import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JurosCompostosCalculator from '@/components/JurosCompostosCalculator';
import { faPercent } from '@fortawesome/free-solid-svg-icons';

export default function JurosCompostos() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Calcule os juros compostos e descobra o quanto você pode ganhar ou perder com os juros sobre juros - Calcule pra mim!</title>

        <meta name="description" content="Entre com o montante inicial, a taxa de juros e com o período de tempo e veja o montante final que o juros no tempo provê." />

        <meta property="og:title" content="Calcule os juros compostos e descobra o quanto você pode ganhar ou perder com os juros sobre juros - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Entre com o montante inicial, a taxa de juros e com o período de tempo e veja o montante final que o juros no tempo provê." />
        <meta property="og:url" content="https://calculepramim.com/juroscompostos" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Calcule os juros compostos e descobra o quanto você pode ganhar ou perder com os juros sobre juros - Calcule pra mim!" />
        <meta name="twitter:description" content="Entre com o montante inicial, a taxa de juros e com o período de tempo e veja o montante final que o juros no tempo provê." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faPercent} />} title={"Calcule juros compostos"} isHome={false}></TopBar>
      <JurosCompostosCalculator></JurosCompostosCalculator>
      <Footer></Footer>
    </div>
  )
}
