const placeBlockFunc = require('./placeBlockFunc').placeBlockFunc;

 function placeSign(mineflayerBot, itemToPlace, sourcePosVec, faceVec, textUsrComment){
    let textsList = textUsrComment.match(/.{1,15}/g);
  
    if (textsList.length < 4){
      textsList.push.apply(textsList, new Array(4 - textsList.length).fill(''));
    } else if (textsList.length > 4) {
      textsList.length = 4;
    }
  
    try {
      if (!itemToPlace.name.includes('sign')) {
        console.log('Error, Item doesnt look to be a sign') 
        return
      }
      
      placeBlockFunc(mineflayerBot, itemToPlace, sourcePosVec, faceVec);
  
      const signPos = mineflayerBot.entity.position.plus(sourcePosVec).plus(faceVec);  // Position of the block(sign), we've just placed
      const signBlock = mineflayerBot.blockAt(signPos);
  
      mineflayerBot._client.write('update_sign', {
        editable: true,
        location: signBlock.position,
        text1: textsList[0],
        text2: textsList[1],
        text3: textsList[2],
        text4: textsList[3]});
  
    } catch (err) {
      console.log(`Error with placing sign `, err);
    }
}

module.exports = { placeSign }