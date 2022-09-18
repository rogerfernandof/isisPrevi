import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'Sarah'

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Olá, meu nome é Sarah, sou consultora virtual da Isis Previ.Se você chegou até aqui, você pode receber o Salário Maternidade!`, {
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
