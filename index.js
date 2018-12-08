const TelegramBot = require('node-telegram-bot-api');

const token = '796112143:AAEjmGhV85CYlC0LmfT6tGnXkB-2k4pya0I';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg.text);
  
  bot.sendMessage(chatId, `We will reply to your message "${msg.text}" in five minutes`);
});