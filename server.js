//Here is the file where you add stuff.
var dclient;
const db = require('./discordbot.js');
db.init(function(){
  dclient = db.client;
  dclient.on('ready', () => {
        console.log(`Logged in as ${dclient.user.tag}!`);
  });

  dclient.on('message', msg => {
        if (msg.author.id === dclient.user.id) return;
        if (msg.channel.type === 'dm'){
          //Dont do anything.
          msg.user.addRole(msg.user.guild.roles.find(role => role.name === "ARAMaster"));
          console.log('Not doing anything')
          return;
        }
        if (msg.content === 'ping') {
  	      //msg.reply('pong');
        }
  });
});
