import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  render() {
    const SEO = {
      title: 'solicite seu Salário Maternidade - Isis Previ Assessoria',
      description: 'A Isis Previ é uma empresa especializada em garantir que você receba seu Salário Maternidade',
      keywords: 'Salário Maternidade, Auxilio Maternidade, como faço para receber o auxílio maternidade, auxilio gestante inss, cadastro auxilio maternidade, como saber se tenho direito ao auxílio maternidade, inss maternidade, receber auxílio maternidade, inss salario maternidade',
    }
    return (
      <Html>
        <title>{SEO.title}</title>
        <Head>
          <meta
            name="google-site-verification"
            content="ela7vKMReSjJEI5z8CDpYiLaKjszv435gzcOjO-8j-Y"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/star.png" />
          <meta
            name="description"
            content={SEO.description}
          />
          <meta name="keywords" content={SEO.keywords} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
