import { data } from './MessageParser';

import emailjs from 'emailjs-com'

function sendEmail() {

  (function() {
    emailjs.init("MKn4YFk2qO1exD-lT"); //please encrypted user id for malicious attacks
  })();
  console.log(data);
  const params = {
    LeadName: data.name,
    LeadWhatsApp: data.whatsApp,
    LeadCity: data.cidade,
    LeadRamo: data.ramo,
    LeadNascimento: data.nascimento,
    LeadSaida: data.saida,
    LeadMotivo: data.motivo,
    LeadSeguro: data.seguro,
    LeadAvo: data.avo,
    LeadNascimentomae: data.nascimentomae,
    LeadCpf: data.cpf,
    LeadRg: data.rg,
    LeadRua: data.rua
  }
  emailjs.send('service_4kfvh8w', 'template_5a690lk', params).then(function (res) {/*alert('Success! ' + res.status)*/})
}

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Olá, tudo bem?");
    this.addMessageToState(message);
  };

  ifName = () => {
    const message = this.createChatBotMessage(`Certo, qual o número do seu telefone com WhatsApp?`, {
      payload: 'whatsApp'
    })
    this.addMessageToState(message);
  };

  ifWhatsApp = () => {
    const message = this.createChatBotMessage(`Qual a sua cidade e estado?`, {
      payload: 'cidade'
    })
    this.addMessageToState(message);
  };

  ifCidade = () => {
    const message = this.createChatBotMessage(`Digite qual a modadalidade em que você se enquadra: 
    -Contribuinte Individual (MEI) 
    -Carteira Registrada 
    -Trabalhadora Rural 
    -Nunca Trabalhou`, {
      payload: 'ramo'
    })
    this.addMessageToState(message);
  };

  ifRamo = () => {
    const message = this.createChatBotMessage(`Digite a data de nascimento do bebê ou a data prevista para o parto, caso o bebê ainda não tenha nascido:`, {
      payload: 'nascimento'
    })
    this.addMessageToState(message);
  };

  ifNascimento = () => {
    const message = this.createChatBotMessage(`Digite agora a data de saída do seu último trabalho ou da sua última contribuição para o INSS:`, {
      payload: 'saida'
    })
    this.addMessageToState(message);
  };

  ifSaida = () => {
    const message = this.createChatBotMessage(`Em caso de contribuinte, digite foi o motivo da saída do emprego:`, {
      payload: 'motivo'
    })
    this.addMessageToState(message);
  };
  
  ifMotivo = () => {
    const message = this.createChatBotMessage(`Você recebeu o seguro desemprego quando saiu do trabalho, como contribuinte?`, {
      payload: 'seguro'
    })
    this.addMessageToState(message);
  };

  ifSeguro = () => {
    const message = this.createChatBotMessage(`Qual o nome completo da avó materna da criança?`, {
      payload: 'avo'
    })
    this.addMessageToState(message);
  };
  
  ifAvo = () => {
    const message = this.createChatBotMessage(`Digite agora a sua data de nascimento. Dia, Mês e Ano:`, {
      payload: 'nascimentomae'
    })
    this.addMessageToState(message);
  };
  
  ifNascimentomae = () => {
    const message = this.createChatBotMessage(`Estamos quase terminando. Digite o seu CPF, por gentileza.`, {
      payload: 'cpf'
    })
    this.addMessageToState(message);
  };
  
  ifCpf = () => {
    const message = this.createChatBotMessage(`Agora digite o seu número de RG:`, {
      payload: 'rg'
    })
    this.addMessageToState(message);
  };
  
  ifRg = () => {
    const message = this.createChatBotMessage(`Para finalizar, digite o nome da sua Rua e o número da sua residência:`, {
      payload: 'rua'
    })
    this.addMessageToState(message);
  };
  
  ifRua = () => {
    const message = this.createChatBotMessage(`Muito obrigada pelas informações.`, {
      payload: 'rua'
    })
    this.addMessageToState(message);
    this.addMessageToState(this.createChatBotMessage(`Fique atenta ao seu Whatsapp. A nossa equipe de profissionais irá entrar em contato para prosseguir com o seu atendimento. `, {
      payload: 'rua'
    }));
    sendEmail()

    /*
    setTimeout(() => {
      clearInterval(handle)
    }, 5500)
    */
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Ótima escolha",
      {
        widget: "javascriptQuiz",
      }
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    if (message !== '') {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
    }));
    }

  };
}

export default ActionProvider;
