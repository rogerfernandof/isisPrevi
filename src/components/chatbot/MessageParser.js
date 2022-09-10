export let data = {
  name: '',
  whatsApp: '',
}

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider
    this.state = state
  }

  parse(message) {
    this.state = {messages: this.state.messages.filter(obj => obj.message)}

    if ({ message }.message !== '') {

      const lowercase = message.toLowerCase()

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'name'
      ) {
        data.name = { message }.message
        this.actionProvider.ifName()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'whatsApp'
      ) {
        data.whatsApp = { message }.message
        this.actionProvider.ifWhatsApp()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'cidade'
      ) {
        data.cidade = { message }.message
        this.actionProvider.ifCidade()
      }
    } else {
      alert('Digite uma mensagem correta')
    }
  }
}

export default MessageParser
