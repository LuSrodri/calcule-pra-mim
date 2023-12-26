import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Error() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Calculadoras para o que der e vier - Calcule pra mim!</title>

        <meta name="description" content='Nós usamos uma inteligência artificial para entender a sua pergunta e te dar a melhor resposta possível.
                    Basta inserir uma pergunta matemática e clicar em "Fazer pergunta".
                    Pegaremos a pergunta, analisaremos através de um modelo de linguagem natural e tentaremos rodar um código em Python para obter a melhor resposta para você.' />

        <meta property="og:title" content="Calculadoras para o que der e vier - Calcule pra mim!" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content='Nós usamos uma inteligência artificial para entender a sua pergunta e te dar a melhor resposta possível.
                    Basta inserir uma pergunta matemática e clicar em "Fazer pergunta".
                    Pegaremos a pergunta, analisaremos através de um modelo de linguagem natural e tentaremos rodar um código em Python para obter a melhor resposta para você.' />
        <meta property="og:url" content="https://calculepramim.com" />
        <meta property="og:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />

        <meta name="twitter:title" content="Calculadoras para o que der e vier - Calcule pra mim!" />
        <meta name="twitter:description" content='Nós usamos uma inteligência artificial para entender a sua pergunta e te dar a melhor resposta possível.
                    Basta inserir uma pergunta matemática e clicar em "Fazer pergunta".
                    Pegaremos a pergunta, analisaremos através de um modelo de linguagem natural e tentaremos rodar um código em Python para obter a melhor resposta para você.' />
        <meta name="twitter:image" content="https://calculepramim.com/calcule-pra-mim-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calcule-pra-mim-logo.png" />
      </Head>
      <h1 style={{ textAlign: "center" }}>Ocorreu um erro 😔</h1>
    </div>
  )
}
