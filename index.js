const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client;

client.on("ready", async () => {
   console.log("I have started!");
}

client.on("message", async message => {

   const cont = message.content;
   
   if (cont === "Ping") {
      message.channel.send("Pong!");
   }
   
   if (cont === "Hello") {
      message.reply("hello!");
   }
   
})

client.login(process.env.token);
