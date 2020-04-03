const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
    if (message.content.toLowerCase().contains("clkbot")) {
       if (message.content.toLowerCase().contains("who did")) {

       message.reply('@Propolis did it!');

     } elseif(message.content.toLowerCase().contains("hi")){
       message.reply('Hey there! '+message.sender+' :)');
     }

});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret