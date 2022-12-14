import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'Sarah'

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Olá, meu nome é Sarah, sou consultora virtual da Isis Previ. Podemos ajudar você a receber o Auxílio Maternidade.`),
    createChatBotMessage(`Em 3 minutos já vamos iniciar o processo do seu benefício, com agilidade e segurança. Tenha em mãos o seu CPF e RG!`, {
      delay: 800,
    }),
    createChatBotMessage(`Qual o seu nome completo?`, {
      delay: 1700,
      payload: 'name'
    }),
  ],
  state: {
    airports: []
  },

};

export default config;
