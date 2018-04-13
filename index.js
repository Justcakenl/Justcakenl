const Discord = require("discord.js");

const TOKEN = "(process.env.BOT_TOKEN)";

const PREFIX = "*";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("im ready bitchh");
});

bot.on("message", function(message) {
   if (message.author.equals(bot.user)) return;

   if (!message.content.startsWith(PREFIX)) return;

   var args = message.content.substring(PREFIX.length).split(" ");

   switch (args[0].toLowerCase()) {
    case "info":
        message.channel.sendMessage("made by Justcakenl;/");
        break;
    case "ping":
        message.channel.sendMessage("Pong!")
        break;
    case "help":
        message.channel.sendMessage("mds ping info");
    break;
    case "mds":
        message.channel.sendMessage("http://bit.ly/2H3ojuk");
    break;
    default:
        message.channel.sendMessage("invalid command do *help");

        

    }
});

bot.login(TOKEN);
