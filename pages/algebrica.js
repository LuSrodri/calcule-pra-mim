import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlgebraCalculator from '@/components/AlgebraCalculator';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function Algebrica() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Use a calculadora algébrica e encontre resultados para expressões algébricas - Calculadora Algébrica</title>

        <meta name="description" content="Insira uma expressão algébrica e encontre os resultados de x, y e z." />

        <meta property="og:title" content="Use a calculadora algébrica e encontre resultados para expressões algébricas - Calculadora Algébrica" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Insira uma expressão algébrica e encontre os resultados de x, y e z." />
        <meta property="og:url" content="https://calculepramim.com/algebrica" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Use a calculadora algébrica e encontre resultados para expressões algébricas - Calculadora Algébrica" />
        <meta name="twitter:description" content="Insira uma expressão algébrica e encontre os resultados de x, y e z." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faX} />} title={"Calculadora Algébrica"} isHome={false}></TopBar>
      <AlgebraCalculator></AlgebraCalculator>
      <Footer></Footer>
    </div>
  )
}
