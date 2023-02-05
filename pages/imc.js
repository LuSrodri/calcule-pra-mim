import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import ImcCalculator from '@/components/ImcCalculator';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Calcule o IMC e o peso ideal - Calcule pra mim!</title>

        <meta name="description" content="Calcule o IMC, Índice de Massa Corporal, e descubra o Peso Ideal." />
        <meta name="keywords" content="calcule, calculadora, calculadoras, imc, peso, ideal, massa, corporal, índice, lusrodri, ajudar, ajudarem, altura, kg, saúde, pra, mim, ajudam" />

        <meta property="og:title" content="Calcule o IMC e o peso ideal - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Calcule o IMC, Índice de Massa Corporal, e descubra o Peso Ideal." />
        <meta property="og:url" content="https://calculepramim.com/imc" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Calcule o IMC e o peso ideal - Calcule pra mim!" />
        <meta name="twitter:description" content="Calcule o IMC, Índice de Massa Corporal, e descubra o Peso Ideal." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faAppleWhole} />} title={"Calcule o IMC e Peso ideal"} isHome={false}></TopBar>
      <ImcCalculator></ImcCalculator>
      <Footer></Footer>
    </div>
  )
}
