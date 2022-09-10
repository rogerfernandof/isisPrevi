import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const botName = 'Sarah'

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Olá, meu nome é Sarah, sou consultora virtual da Isis Previ e estou aqui para ajudar a preencher o seu cadastro.`),
    createChatBotMessage(`Em menos de 2 minutos já vamos iniciar o processo do seu Salário Maternidade. Então, vamos começar!`, {
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
