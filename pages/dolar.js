import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import Dollar from '@/components/Dollar';

export default function Cientifica() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Descubra o câmbio mais barato - Dolar para Real</title>

        <meta name="description" content="Insira uma expressão matemática e descubra o resultado." />

        <meta property="og:title" content="Descubra o câmbio mais barato - Dolar para Real" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Insira uma expressão matemática e descubra o resultado." />
        <meta property="og:url" content="https://calculepramim.com/dolar" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Descubra o câmbio mais barato - Dolar para Real" />
        <meta name="twitter:description" content="Insira uma expressão matemática e descubra o resultado." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faDollar} />} title={"Dolar para Real"} isHome={false}></TopBar>
      <Dollar></Dollar>
      <Footer></Footer>
    </div>
  )
}
