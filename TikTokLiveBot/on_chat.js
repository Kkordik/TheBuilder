const tiktokBot = require('../TikTokLiveBot/start_bot.js').tiktokBot;
const mineflayerBot = require('../MineflayerBot/start_bot.js').mineflayerBot;
const Item = require('prismarine-item')('1.19');
const placeSign = require('../MineflayerBot/placeSign').placeSign;
const { ITEMIDS, SOURCEPOSVEC, FACEVEC, COMMENTTIMEOUT } = require('../config.js');

let last_time = Math.floor((new Date()).getTime()/1000);

tiktokBot.on('chat',  data => {
  console.log(last_time);

  if (Math.random() > 0.1 && Math.floor((new Date()).getTime()/1000) - last_time <= COMMENTTIMEOUT) return 
  last_time = Math.floor((new Date()).getTime()/1000);
  
  console.log(`${last_time} ${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);

  let textUsrComment = `${data.uniqueId}: ${data.comment}`;
  let signItem = new Item(ITEMIDS['comment'], 1);

  placeSign(mineflayerBot, signItem, SOURCEPOSVEC, FACEVEC, textUsrComment);
}) 
