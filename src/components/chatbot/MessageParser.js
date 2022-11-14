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

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'ramo'
      ) {
        data.ramo = { message }.message
        this.actionProvider.ifRamo()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'nascimento'
      ) {
        data.nascimento = { message }.message
        this.actionProvider.ifNascimento()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'saida'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifSaida()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'motivo'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifMotivo()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'seguro'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifSeguro()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'avo'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifAvo()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'nascimentomae'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifNascimentomae()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'cpf'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifCpf()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'rg'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifRg()
      }

      if (
        this.state.messages[this.state.messages.length - 1]
          .payload === 'rua'
      ) {
        data.saida = { message }.message
        this.actionProvider.ifRua()
      }
      
    } else {
      alert('Digite uma mensagem correta')
    }
  }
}

export default MessageParser
