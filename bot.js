const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'm-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`m-help | BlueMusic 💙✨`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', msg => {
  if (msg.content === 'm-support') {
          msg.react("🎶")    
let embed = new Discord.RichEmbed()
      .setColor("BLUE")
.setTitle(`🎶 BlueBot Support Server 🎶`)
   .setDescription(` 
https://discord.gg/p4xQ6jv **| 🎶 BlueBot Support Server 🎶**
`)
.setFooter(`${msg.guild.name}™`)



msg.channel.sendEmbed(embed);        
  }   
 });




client.login(process.env.BOT_TOKEN);
