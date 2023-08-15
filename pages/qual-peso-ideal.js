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
        <title>Qual Peso Ideal?</title>

        <meta name="description" content="Entre com o seu peso e altura, calcule o índice de massa corporal, encontre o seu peso ideal e descubra o quão longe da meta você está." />

        <meta property="og:title" content="Qual Peso Ideal?" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Entre com o seu peso e altura, calcule o índice de massa corporal, encontre o seu peso ideal e descubra o quão longe da meta você está." />
        <meta property="og:url" content="https://calculepramim.com/qual-peso-ideal" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Qual Peso Ideal?" />
        <meta name="twitter:description" content="Entre com o seu peso e altura, calcule o índice de massa corporal, encontre o seu peso ideal e descubra o quão longe da meta você está." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar icon={<FontAwesomeIcon icon={faAppleWhole} />} title={"Qual Peso Ideal?"} isHome={false}></TopBar>
      <ImcCalculator></ImcCalculator>
      <Footer></Footer>
    </div>
  )
}
