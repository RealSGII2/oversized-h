# Command Layout
This is what the command file defaults look like. Make sure to name the file `<name>.js`!

```js
const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, client, message, args) => {
  // This is what code runs when the command is ran.
}

module.exports.help = {
  name: "name of the command",
  usage: "usage of the command",
  description: "short description of the command",
  longdes: "Long description of the command.",
  mentionedperm: "REQUIRED_PERMISSION_FOR_COMMAND",
  category: "Category of the command"
}

```
Example:
```js
const Discord = require("discord.js");
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
}
