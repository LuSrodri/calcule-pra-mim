import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScientificCalculator from '@/components/ScientificCalculator';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

export default function Cientifica() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Use a calculadora científica e encontre resultados para expressões matemáticas. - Calcule pra mim!</title>

        <meta name="description" content="Insira uma expressão matemática e descubra o resultado." />

        <meta property="og:title" content="Use a calculadora científica e encontre resultados para expressões matemáticas. - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Insira uma expressão matemática e descubra o resultado." />
        <meta property="og:url" content="https://calculepramim.com/cientifica" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Use a calculadora científica e encontre resultados para expressões matemáticas. - Calcule pra mim!" />
        <meta name="twitter:description" content="Insira uma expressão matemática e descubra o resultado." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faCalculator} />} title={"Calculadora Científica"} isHome={false}></TopBar>
      <ScientificCalculator></ScientificCalculator>
      <Footer></Footer>
    </div>
  )
}
