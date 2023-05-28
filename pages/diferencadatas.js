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
      <DatasCalculator></DatasCalculator>
      <Footer></Footer>
    </div>
  )
}
