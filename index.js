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
  const nameAuthor = msg.from.first_name;
  const text = msg.text;

  switch (text) {
    case 'Hi':
        bot.sendMessage(chatId, `Hey ${nameAuthor}`);
        break;

    case 'Hello':
        bot.sendMessage(chatId, `Hello ${nameAuthor}`);
        break;
    
    case 'Hey':
        bot.sendMessage(chatId, `Hi ${nameAuthor}`);
        break;

    default:
        bot.sendMessage(chatId, `${nameAuthor}, We will reply to your message "${msg.text}" in five minutes`)
      break;
  }
});