// index.js
'use strict';
const BootBot = require('bootbot');

const verifyToken = 'pusher-bot';

const bot = new BootBot({
  accessToken: 'a6cc2f7cc1a753fad0ed97954408693f',
  verifyToken,
  appSecret: '825f0c9c4294a85f908075b957a38426'
});

bot.on('message', (payload, chat) => {
	const text = payload.message.text;
	console.log(`The user said: ${text}`);
});
bot.start(3005);
