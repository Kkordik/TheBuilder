const mineflayer = require('mineflayer');
const { SERVER_IP, BOTUSERNAME, AUTH } = require('../config.js');
console.log(SERVER_IP, BOTUSERNAME, AUTH );

// Create mineflayer (minecraft) bot on the server
const mineflayerBot = mineflayer.createBot({
    host: SERVER_IP, // Replace with your Minecraft server IP
    port: 25565,
    username: BOTUSERNAME, // Replace with your bot username
    auth: AUTH
});


module.exports = {mineflayerBot};