require('dotenv').config();
const settings = {
  packname: 'ɢʀᴏᴏᴇ-ᴋɪᴛᴛʏ', // e.g., "My Awesome Bot"
  author: '✰ᵀᴷᴹᴍᴏᴅs✰', // e.g., "John Doe"
  botName: 'ɢʀᴏᴏᴇ-ᴋɪᴛᴛʏ', // e.g., "My Bot"
  version: '1.0.0', // e.g., "1.0.0"
  botOwner: '✰ᵀᴷᴹᴍᴏᴅs✰', // e.g., "John Doe"
  imageUrl: 'PUT YOUR IMAGE URL HERE', // e.g., "https://example.com/image.jpg"
  ownerNumber: process.env.OWNER_NUMBER || '263789336694', // e.g., "+1234567890"
  giphyApiKey: process.env.GIPHY_API_KEY || '6e181b09b8e5cf8b20c57b0ff7f721e2-83cf4c2f-6f95-4ce3-97ea-67a2e7911c60', // e.g., "qnl7ssQChTdPjsKta2Ax2LMaGXz303tq"
  commandMode: 'public', // or 'private'
  description: 'PUT YOUR BOT DESCRIPTION HERE', // e.g., "This is a bot for managing group commands and automating tasks."
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || 'true', // Automatically view WhatsApp statuses
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || 'true', // Automatically react to WhatsApp statuses with random emoji
  SESSION_ID: process.env.SESSION_ID || 'PUT YOUR SESSION ID HERE' // make sure it starts with the required prefix
};
global.SESSION_ID = settings.SESSION_ID;
module.exports = settings;
