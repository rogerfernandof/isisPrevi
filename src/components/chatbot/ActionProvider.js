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
    LeadNascimento: data.nascimento,
    LeadSaida: data.saida,
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
    const message = this.createChatBotMessage(`Em qual cidade você mora?`, {
      payload: 'cidade'
    })
    this.addMessageToState(message);
  };

  ifCidade = () => {
    const message = this.createChatBotMessage(`Digite a data de nascimento do bebê ou a data prevista para o parto:`, {
      payload: 'nascimento'
    })
    this.addMessageToState(message);
  };

  ifNascimento = () => {
    const message = this.createChatBotMessage(`Certo, estamos quase acabando. Digite agora a data de saída do seu último trabalho ou da sua última contribuição:`, {
      payload: 'saida'
    })
    this.addMessageToState(message);
  };

  ifSaida = () => {
    const message = this.createChatBotMessage(`Muito obrigada pelas informações.`, {
      payload: 'saida'
    })
    this.addMessageToState(message);
    this.addMessageToState(this.createChatBotMessage(`Fique atenta ao seu Whatsapp, nossa equipe vai entrar em contato para prosseguir com o seu atendimento.`, {
      payload: 'saida'
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
