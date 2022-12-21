module.exports = (client) => {
const Discord = require("discord.js");
let config = require("../config.json");
	console.log("Bot Giriş Yaptı");
	client.user.setActivity(config.durum || "Hocam burası 9/F");
}