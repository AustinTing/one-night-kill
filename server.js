
var linebot = require('linebot')
require('dotenv').config()

var bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  });
console.log(process.env)
bot.on('message', function (event) {
    event.reply(event.message.text).then(function (data) {
      // success
    }).catch(function (error) {
      // error
    });
  });
  
  bot.listen('/', 3978);
