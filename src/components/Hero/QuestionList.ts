export const QuestionList = [
  {
    question:  'Você já trabalhou de carteira assinada antes de ganhar o seu filho?',
    answersList: [
      { answer: 'SIM', isCorrect: true, color: '#018204' },
      { answer: 'NÃO', isCorrect: false, color: '#a60101' },
    ],
    errorMessage: 'Não podemos dar andamento a sua solicitação pois esse benefício é requerido juntamente ao INSS (Previdência Social) e a mãe precisa ter contribuído ou trabalhado de carteira assinada antes de ter a criança!'
  },
  {
    question:  'Você já recebeu a Licença Maternidade para este bebê? (Salário que você recebe quando está empregada durante o nascimento do bebê)',
    answersList: [
      { answer: 'SIM', isCorrect: false, color: '#018204' },
      { answer: 'NÃO', isCorrect: true, color: '#a60101' },
    ],
    errorMessage: 'Você não tem direito ao Salário Maternidade do INSS, pois já recebeu a Licença Maternidade. Caso tenha outro filho(a) o qual você não recebeu a Licença Maternidade, reinicie o teste. '
  },
  {
    question:  'A criança já completou 5 anos?',
    answersList: [
      { answer: 'SIM', isCorrect: false, color: '#018204' },
      { answer: 'NÃO', isCorrect: true, color: '#a60101' },
    ],
    errorMessage: 'Infelizmente você não tem direito por que esse benefício só tem direito até a criança completar cinco anos! Caso tenha algum menor de cinco anos, reinicie o cadastro e coloque apenas os menores de cinco anos!'
  },
]