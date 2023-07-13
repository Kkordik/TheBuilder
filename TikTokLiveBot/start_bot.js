const { WebcastPushConnection } = require('tiktok-live-connector');
const { TIKTOKUSERNAME } = require('../config.js');

const tiktokBot = new WebcastPushConnection(TIKTOKUSERNAME);

// Connect to the tiktok live
tiktokBot.connect().then(state => {
  console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
  console.error('Failed to connect', err);
});

module.exports = { tiktokBot };
