import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/TopBar';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Calculadoras que ajudam você - Calcule pra mim!</title>

        <meta name="description" content="Entre e use calculadoras para que você precisar. Calculadora Científica. Calculadora Algébrica. Calcular IMC e Peso Ideal. Calcular Juros Compostos. E calcular diferença entre datas." />

        <meta property="og:title" content="Calculadoras que ajudam você - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Entre e use calculadoras para que você precisar. Calculadora Científica. Calculadora Algébrica. Calcular IMC e Peso Ideal. Calcular Juros Compostos. E calcular diferença entre datas." />
        <meta property="og:url" content="https://calculepramim.com" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Calculadoras que ajudam você - Calcule pra mim!" />
        <meta name="twitter:description" content="Entre e use calculadoras para que você precisar. Calculadora Científica. Calculadora Algébrica. Calcular IMC e Peso Ideal. Calcular Juros Compostos. E calcular diferença entre datas." />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <TopBar></TopBar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
