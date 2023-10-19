// to raise the level of robot accounts | رفع لفل حسابات بروبوت
const Discord = require("discord.js-selfbot-v13"); 
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).leveling({
    channel: '1106012486412537926',
    randomLetters: false, 
    time: '4000', //الوقت 
    type: 'eng' //الغةا 
});
client.login(process.env.token);

const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});