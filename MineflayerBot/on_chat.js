const { mineflayerBot } = require('./start_bot.js');
const Item = require('prismarine-item')('1.19');
const Vec3 = require('vec3').Vec3;
const placeBlockFunc = require('./placeBlockFunc').placeBlockFunc;
const placeSign = require('../MineflayerBot/placeSign').placeSign;
const OPERATORS = require('../config').OPERATORS;


mineflayerBot.on('chat',  (username, message) => {

    if (username === mineflayerBot.username || !OPERATORS.includes(username)) return
  
    if (message.includes('place')){
      console.log('place ')
      try {
        const variablesList = message.split(' ');
        const varsSourcePos = variablesList[2].split('.');
        const varsFacePos = variablesList[3].split('.');
  
        try {
          const itemToPlace = new Item(parseInt(variablesList[1]), 1);
          const sourcePosVec = new Vec3(parseInt(varsSourcePos[0]), parseInt(varsSourcePos[1]), parseInt(varsSourcePos[2]));
          const faceVec = new Vec3(parseInt(varsFacePos[0]), parseInt(varsFacePos[1]), parseInt(varsFacePos[2]));
          
           placeBlockFunc(mineflayerBot, itemToPlace, sourcePosVec, faceVec);
  
        } catch (err) {
          console.log(`Error,   Check all values, all must be int`, err);
          mineflayerBot.chat(`Error,   Check all values, all must be int'`);
        }
          
      } catch (err) {
        console.log(`Error,   Command must be in format 'place <block_id> x.y.z x.y.z'     `, err);
        mineflayerBot.chat(`Error,   Command must be in format 'place <block_id> x.y.z x.y.z'`);
      }
    }
    else if (message.includes('sign')){
      console.log('sign ')
      try {
        const variablesList = message.split(' ');
        const varsSourcePos = variablesList[2].split('.');
        const varsFacePos = variablesList[3].split('.');
        const signText = message.split("'")[1];
  
        try {
          const itemToPlace = new Item(parseInt(variablesList[1]), 1);
          const sourcePosVec = new Vec3(parseInt(varsSourcePos[0]), parseInt(varsSourcePos[1]), parseInt(varsSourcePos[2]));
          const faceVec = new Vec3(parseInt(varsFacePos[0]), parseInt(varsFacePos[1]), parseInt(varsFacePos[2]));
  
           placeSign(mineflayerBot, itemToPlace, sourcePosVec, faceVec, signText);
  
        } catch (err) {
          console.log(`Error,   Check all values, all must be int`, err);
          mineflayerBot.chat(`Error,   Check all values, all must be int'`);
        }
          
      } catch (err) {
        console.log(`Error,   Command must be in format 'sign <block_id> x.y.z x.y.z <message>'     `, err);
        mineflayerBot.chat(`Error,   Command must be in format 'sign <block_id> x.y.z x.y.z <message>'`);
      }
    } 
    else if (message.includes('look')){
      console.log('look ')
      try {
        const varsLookPos = message.split(' ')[1].split('.');
        const lookPosVec = new Vec3(parseInt(varsLookPos[0]), parseInt(varsLookPos[1]), parseInt(varsLookPos[2]));
        mineflayerBot.lookAt(lookPosVec, true);
  
      } catch (err) {
        console.log(`Error,   Command must be in format 'look x.y.z'     `, err);
        mineflayerBot.chat(`Error,   Command must be in format 'look x.y.z'`);
      }
    }
  })