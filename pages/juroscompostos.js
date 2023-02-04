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
        <title>Calcule investimentos em juros compostos - Calcule pra mim!</title>

        <meta name="description" content="Calcule investimentos em juros compostos e descubra o poder do tempo." />
        <meta name="keywords" content="calcule, calculadora, calculadoras, juros, compostos, tempo, investimento, poder, lusrodri, ajudar, pra, mim, ajudam" />

        <meta property="og:title" content="Calcule investimentos em juros compostos - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Calcule investimentos em juros compostos e descubra o poder do tempo." />
        <meta property="og:url" content="https://calculepramim.com/juroscompostos" />
        <meta property="og:image" content="/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Calcule investimentos em juros compostos - Calcule pra mim!" />
        <meta name="twitter:description" content="Calcule investimentos em juros compostos e descubra o poder do tempo." />
        <meta name="twitter:image" content="/calcule-pra-mim-logo.png" />
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
