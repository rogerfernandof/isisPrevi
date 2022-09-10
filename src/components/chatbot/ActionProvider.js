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
    const message = this.createChatBotMessage(`Estamos quase terminando, em qual cidade você mora?`, {
      payload: 'cidade'
    })
    this.addMessageToState(message);
  };

  ifCidade = () => {
    const message = this.createChatBotMessage(`Muito obrigada pelas informações, já consultei aqui no sistema, e está tudo certo.`, {
      payload: 'cidade'
    })
    this.addMessageToState(message);
    this.addMessageToState(this.createChatBotMessage(`Fique atenta ao seu Whatsapp, nossa equipe vai entrar em contato para prosseguir com o seu benefício. A equipe Isis Previ agradece desde já.`, {
      payload: 'cidade'
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
