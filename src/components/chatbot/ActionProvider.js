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
    const message = this.createChatBotMessage(`Qual a data de nascimento do seu bebê:`, {
      payload: 'nascimento'
    })
    this.addMessageToState(message);
  };

  ifNascimento = () => {
    const message = this.createChatBotMessage(`Muito obrigada pelas informações, já consultei aqui no sistema, e está tudo certo.`, {
      payload: 'nascimento'
    })
    this.addMessageToState(message);
    this.addMessageToState(this.createChatBotMessage(`Fique atenta ao seu Whatsapp, nossa equipe vai entrar em contato para prosseguir com o seu benefício. A equipe Isis Previ agradece desde já.`, {
      payload: 'nascimento'
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
