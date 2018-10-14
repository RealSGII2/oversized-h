# Command Layout
This is what the command file defaults look like. Make sure to name the file `<name>.js`!

```const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, client, message, args) => {
    const m = await message.channel.send("Pinging...");
    m.edit(`Pong! Latency is **${m.createdTimestamp - message.createdTimestamp}ms**! API Latency is **${Math.round(client.ping)}ms**!`);
}

module.exports.help = {
	name: "ping",
	usage: "ping",
	description: "pings the bot",
	longdes: "Pings the bot.",
	mentionedperm: "None",
  category: "Utility"
}```
