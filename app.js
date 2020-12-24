const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, './env.token')});

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('ER:BS DISCORD BOT IS READY NOW!');
});

client.login("NzkxNzQ5ODY5NzMxMDUzNTc4.X-Tshg.4Gfx8SBdlFK_x2SJK79SONJoXfE");

client.on('message', ({ content, channel }) => {
    if(content === '!command') {
        channel.setTopic('테스트')
    };
});