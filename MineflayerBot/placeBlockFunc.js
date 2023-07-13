 function placeBlockFunc (bot, myItem, sourcePosVec, faceVec) {
  /**
   * Place block or delete old block and place new one.
   * @param bot mineflayer bot
   * @param myItem prismarine-item, doesnt have to be in the hand
   * @param sourcePosVec vector, added to the bot's position, new coordinates will be sourceBlock, on which new block will be placed 
   * @param faceVec vector, added to the sourceBlock position and where new block is placed 
   * (in minecraft we place new block on another block, this vec is a side of sourceBlock, on which new block is placed)
   */
  bot.updateHeldItem();
  if (bot.heldItem == null || bot.heldItem.type !== myItem.type){
    console.log('taking another');
    const itemSlot = 36;

    bot.creative.clearSlot(itemSlot)
    .then(_ => {
      bot.creative.setInventorySlot(itemSlot, myItem)
      .then(_ => {
        let inventoryItem = bot.inventory.findInventoryItem(myItem.type);
        bot.equip(inventoryItem, 'hand')
        .then(_ => {
          let sourcePosition = bot.entity.position.plus(sourcePosVec);
          let sourceBlock = bot.blockAt(sourcePosition);
        
          const dest = sourceBlock.position.plus(faceVec);
          const oldBlock = bot.blockAt(dest);
        
          if (oldBlock.displayName != 'Air'){
            bot.dig(oldBlock)  
            .then(_ => {

              bot.placeBlock(sourceBlock, faceVec)
              .then(_ => {})  
          
              .catch (err => {
                console.log(`Can not place '${inventoryItem.displayName}' block on ${dest}:     `, err);
                bot.chat(`Can not place '${inventoryItem.displayName}' block on ${dest}`);
              })
            })
            .catch (err => {
              console.log(`Can not dig block on ${dest}:     `, err);
              bot.chat(`Can not dig block on ${dest}`);
            })
          }else {
            bot.placeBlock(sourceBlock, faceVec)
            .then(_ => {})  
        
            .catch (err => {
              console.log(`Can not place '${inventoryItem.displayName}' block on ${dest}:     `, err);
              bot.chat(`Can not place '${inventoryItem.displayName}' block on ${dest}`);
            })
          }     
        })
        .catch(err => {
          console.log(`Can not equip ${inventoryItem}:     `, err);
          bot.chat(`Can not equip ${inventoryItem}`);
        })
      })
      .catch(err => {
        console.log(`Can not set inventory item ${myItem} on slot ${itemSlot}:     `, err);
        bot.chat(`Can not set inventory item ${myItem} on slot ${itemSlot}`);
      })
    }) 
    .catch(err => {
      console.log(`Can not clear slot ${itemSlot}:     `, err);
      bot.chat(`Can not clear slot ${itemSlot}`);
    })
    

  }else{
    console.log('continue with old');
    var inventoryItem = bot.inventory.findInventoryItem(myItem.type);
    let sourcePosition = bot.entity.position.plus(sourcePosVec);
    let sourceBlock = bot.blockAt(sourcePosition);
  
    const dest = sourceBlock.position.plus(faceVec);
    const oldBlock = bot.blockAt(dest);
  
    if (oldBlock.displayName != 'Air'){
      bot.dig(oldBlock)  
      .then(_ => {

        bot.placeBlock(sourceBlock, faceVec)
        .then(_ => {})  
    
        .catch (err => {
          console.log(`Can not place '${inventoryItem.displayName}' block on ${dest}:     `, err);
          bot.chat(`Can not place '${inventoryItem.displayName}' block on ${dest}`);
        })
      })
      .catch (err => {
        console.log(`Can not dig block on ${dest}:     `, err);
        bot.chat(`Can not dig block on ${dest}`);
      })
    } else {
      bot.placeBlock(sourceBlock, faceVec)
      .then(_ => {})  
  
      .catch (err => {
        console.log(`Can not place '${inventoryItem.displayName}' block on ${dest}:     `, err);
        bot.chat(`Can not place '${inventoryItem.displayName}' block on ${dest}`);
      })
    } 
  }
}

  
module.exports = { placeBlockFunc };
