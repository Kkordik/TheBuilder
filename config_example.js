const Vec3 = require('vec3').Vec3;


// mineflayer bot
const SERVER_IP = '';
const BOTUSERNAME = 'TheBuilder';
const AUTH = 'offline';
const ITEMIDS = {
    'comment': 806,
    'small_gift': 812,
    'medium_gift': 808,
    'big_gift': 806
};
const SOURCEPOSVEC = new Vec3(3, 1, 0); // vectors for placing a central sing
const FACEVEC = new Vec3(-1, 0, 0);
const OPERATORS = ['']; // Minecraft username of players, who are able to send command to TheBuilder bot through the chat 
const COMMENTTIMEOUT = 3; // seconds

// tiktoklive bot
const TIKTOKUSERNAME = ""; // Replace with username of tiktok live streamer


module.exports = {SERVER_IP, BOTUSERNAME, AUTH, ITEMIDS, SOURCEPOSVEC, FACEVEC, TIKTOKUSERNAME, OPERATORS, COMMENTTIMEOUT};