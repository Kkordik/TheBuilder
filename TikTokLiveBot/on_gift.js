const tiktokBot = require('./start_bot.js').tiktokBot;
const mineflayerBot = require('../MineflayerBot/start_bot.js').mineflayerBot;
const Item = require('prismarine-item')('1.19');
const placeSign = require('../MineflayerBot/placeSign').placeSign;
const { ITEMIDS, SOURCEPOSVEC, FACEVEC } = require('../config.js');

// Later can be remade with a new class
let bigSourcePosVec = SOURCEPOSVEC.offset(0, 0, -1);
let big_dz = 0;
let big_stepz = 2;
let big_modz = 4;

let mediumSourcePosVec = SOURCEPOSVEC.offset(0, 1, -1);
let medium_dz = 0;
let medium_stepz = 1;
let medium_modz = 3;

let smallSourcePosVec = SOURCEPOSVEC.offset(0, -1, -1);
let small_dz = 0;
let small_stepz = 1;
let small_modz = 3;

tiktokBot.on('gift',  data => {
  if (data.giftType === 1 && !data.repeatEnd) {
      // Streak in progress => show only temporary
      console.log(`${data.uniqueId} is sending gift ${data.giftName} x${data.repeatCount}=${data.diamondCount}`);
  } else {
      // Streak ended or non-streakable gift => process the gift with final repeat_count
      console.log(`${data.uniqueId} has sent gift ${data.giftName} x${data.repeatCount}=${data.diamondCount}`);
      if (data.repeatCount * data.diamondCount >= 20){

        let textUsrNickname = `${data.uniqueId}`;
        let signItem = new Item(ITEMIDS['big_gift'], 1);

        big_dz += big_stepz;
        big_dz %= big_modz;
        console.log(big_dz)

         placeSign(mineflayerBot, signItem, bigSourcePosVec.offset(0, 0, big_dz), FACEVEC, textUsrNickname);
      }
      else if (data.repeatCount * data.diamondCount >= 5){

        let textUsrNickname = `${data.uniqueId}`;
        let signItem = new Item(ITEMIDS['medium_gift'], 1);

        medium_dz += medium_stepz;
        medium_dz %= medium_modz;
        console.log(medium_dz)

         placeSign(mineflayerBot, signItem, mediumSourcePosVec.offset(0, 0, medium_dz), FACEVEC, textUsrNickname);
      }
      else if (data.repeatCount * data.diamondCount == 1){

        let textUsrNickname = `${data.uniqueId}`;
        let signItem = new Item(ITEMIDS['small_gift'], 1);

        small_dz += small_stepz;
        small_dz %= small_modz;
        console.log(small_dz)

         placeSign(mineflayerBot, signItem, smallSourcePosVec.offset(0, 0, small_dz), FACEVEC, textUsrNickname);
      }
  }
})