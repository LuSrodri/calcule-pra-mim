import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import DatasCalculator from '@/components/DatasCalculator';

export default function DiferencaDatas() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Diferença entre datas - Calcule pra mim!</title>

        <meta name="description" content="Calcule a diferença de tempo entre duas datas." />
        <meta name="keywords" content="calcule, calculadora, calculadoras, data, datas, duas, diferenca, diferenças, lusrodri, tempo, ajudar, pra, mim, ajudam" />

        <meta property="og:title" content="Diferença entre datas - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Calcule a diferença de tempo entre duas datas." />
        <meta property="og:url" content="https://calculepramim.com/diferencadatas" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Calcule investimentos em juros compostos - Calcule pra mim!" />
        <meta name="twitter:description" content="Calcule a diferença de tempo entre duas datas." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faCalendar} />} title={"Diferença entre datas"} isHome={false}></TopBar>
      <DatasCalculator></DatasCalculator>
      <Footer></Footer>
    </div>
  )
}
