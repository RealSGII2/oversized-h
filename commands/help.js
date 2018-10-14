const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, client, message, args) => {
  // This is what code runs when the command is ran.
  fs.readdir("./commands", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`../commands/${f}`);
		if (props.help.category === "Utility") {
			embedutility = embedutility + ` \n ;${props.help.name} - ${props.help.description}`
		} else if (props.help.category === "Moderation") {
			embedmoderation = embedmoderation + ` \n ;${props.help.name} - ${props.help.description}`
		}
	});
 })

const command = args.shift();

if (command && `../commands/` + command + `.js`) {
	fs.readdir("./commands", (err, files) => {
		let props = require(`../commands/${command}`);
		message.channel.send({embed: {
    			color: 1752220,
    			author: {
      			name: bot.user.username,
      			icon_url: bot.user.avatarURL
    			},
    		title: "Commands",
    		description: "Commands for Dart Bot",
    	fields: [{
        	name: "Name",
        	value: props.help.name,
		inline: true
      	},
	{
        	name: "Usage",
        	value: "`;" + props.help.usage + "`",
		inline: true
      	},
	{
        	name: "Required Permission",
        	value: props.help.mentionedperm,
		inline: true
      	},
	{
		name: "Category",
		value: props.help.category,
		inline: true
	},
	{
        	name: "Description",
        	value: props.help.longdes,
		inline: true
      	},
    	],
    	timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});})
} else {
message.author.send({embed: {
    color: 1752220,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Commands",
    description: "Commands for Dart Bot",
    fields: [{
        name: "Moderation",
        value: "`;warn` - Warns the member mentioned in the command. \n`;purge` - Deletes the amount of messages provided. \n`;kick` - Kicks mentioned user in the specific guild command was ran in. \n`;ban` - Bans mentioned user in the specific guild command was ran in. \n`;nick` - Sets the nickname for the desired user given."
      },
      {
        name: "Utility",
        value: "`;ping` - Replies with the bots ping. \n`;say` - Sends a message as the bot. \n`;help` - Shows this help menu."
      },
      {
        name: "Developer Commands",
        value: "Developer commands are not shown to the public right now."
      },
      {
        name: "Command Descriptions",
        value: "Type `;help <command>` here in this DM to get information on a command."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
}).then(() => {message.channel.send("I sent you a direct message of all the commands!");}).catch(err => {message.reply("I was unable to send you the list of commands. Enable direct messages and try again.");});

 /* if (client.developers.find(message.author.id)) {
 message.author.send({embed: {
    color: 15158332,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Developer",
    description: "You can see this because you are a developer of the bot.",
    fields: [{
        name: "Nil",
        value: "Nothing set to be here yet."
      },
      {
        name: "Commands",
        value: "Working on them! ;)"
        },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By SGII2, Lxphere, and Dart"
    }
  }
});} */
}

}

module.exports.help = {
  name: "help",
  usage: "help [command],
  description: "Gives info on all commands or a single command",
  longdes: "Gives information on a command or gives a list of all commands.",
  mentionedperm: "None",
  category: "Utility"
}
