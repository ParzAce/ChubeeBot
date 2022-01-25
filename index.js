const Discord = require('discord.js');
const { Client, Intents, messageCreate, guildMemberAdd } = require('discord.js');
require("dotenv").config();
const jsonfile = require('jsonfile');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const generateImage = require('./generateImage');

//pull stats from json file
var stats = {};
if (fs.existsSync('stats.json')) {
    stats = jsonfile.readFileSync('stats.json');
}

//function for finding a random int in a range
function between(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }


//bot tasks when someone sends a message
client.on('messageCreate', (msg) => {
    if (msg.author.id == client.user.id){
        return;
    }
    //if (msg.author.id == '186972544832765952') {
        //msg.delete();
    //}

    //set up roles for level system
    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee Follower')) {
        msg.guild.roles.create({
                name:'Chubee Follower',
                color: 'GREY',
                reason: 'Set the role initially if it isnt already in the server',
        });
    }

    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee Disciple')) {
        msg.guild.roles.create({
                name:'Chubee Disciple',
                color: 'DARK_GREEN',
                reason: 'Set the role initially if it isnt already in the server',
        });
    }

    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee Priest')) {
        msg.guild.roles.create({
                name:'Chubee Priest',
                color: 'GREEN',
                reason: 'Set the role initially if it isnt already in the server',
        });
    }

    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee Lector')) {
        msg.guild.roles.create({
                name:'Chubee Lector',
                color: 'GOLD',
                reason: 'Set the role initially if it isnt already in the server',
        });
    }

    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee Warrior Priest')) {
        msg.guild.roles.create({
                name:'Chubee Warrior Priest',
                color: 'DARK_ORANGE',
                reason: 'Set the role initially if it isnt already in the server',
        });
    }

    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee Holy Vocation')) {
        msg.guild.roles.create({
                name:'Chubee Holy Vocation',
                color: 'ORANGE',
                reason: 'Set the role initially if it isnt already in the server',
        });
    }

    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee Arch Lector')) {
        msg.guild.roles.create({
                name:'Chubee Arch Lector',
                color: 'DARK_PURPLE',
                reason: 'Set the role initially if it isnt already in the server',
        });
    }

    if (!msg.guild.roles.cache.find((r) => r.name === 'Chubee High Priest')) {
        msg.guild.roles.create({
                name:'Chubee High Priest',
                color: 'DARK_VIVID_PINK',
                reason: 'Set the role initially if it isnt already in the server',
        });
    } //end setup roles

    //get role IDs to set roles for the level system
    const chubee_follower = msg.guild.roles.cache.find((r) => r.name === 'Chubee Follower');
    const chubee_disciple = msg.guild.roles.cache.find((r) => r.name === 'Chubee Disciple');
    const chubee_priest = msg.guild.roles.cache.find((r) => r.name === 'Chubee Priest');
    const chubee_lector = msg.guild.roles.cache.find((r) => r.name === 'Chubee Lector');
    const chubee_warrior_priest = msg.guild.roles.cache.find((r) => r.name === 'Chubee Warrior Priest');
    const chubee_holy_vocation = msg.guild.roles.cache.find((r) => r.name === 'Chubee Holy Vocation');
    const chubee_arch_lector = msg.guild.roles.cache.find((r) => r.name === 'Chubee Arch Lector');
    const chubee_high_priest = msg.guild.roles.cache.find((r) => r.name === 'Chubee High Priest');

    const message = msg.content;
    const messageLower = message.toLowerCase();
    //add user to guild
    if (msg.guild.id in stats === false) {
        stats[msg.guild.id] = {};
    }
    //set base stats for user
    const guildStats = stats[msg.guild.id];
    if (msg.author.id in guildStats === false) {
        guildStats[msg.author.id] = {
            xp: 0,
            level: 0,
            last_message: 0,
            reached_level_1: 0,
            reached_level_5: 0,
            reached_level_10: 0,
            reached_level_15: 0,
            reached_level_20: 0,
            reached_level_25: 0,
            reached_level_30: 0,
            reached_level_50: 0,
        };
    }
    //add xp for messages and set last message
    const userStats = guildStats[msg.author.id];
    const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
    if (Date.now() - userStats.last_message > 60000) {
        userStats.xp += between(15, 25);
        userStats.last_message = Date.now();
        //setup what xp needs for levels and reseting/setting levels and xp and adding roles for certain levels
        if (userStats.xp >= xpToNextLevel) {
            userStats.level++;
            userStats.xp = userStats.xp - xpToNextLevel;
            msg.channel.send(msg.author.username + ' has increased their chubee faith level to ' + userStats.level + ' <a:pepesimp:881812231208181790> \n');
            if (userStats.level >= 1 && userStats.reached_level_1 === 0) {
                userStats.reached_level_1 = 1;
                if (msg.member) msg.member.roles.add(chubee_follower.id);
                msg.channel.send(msg.author.username + ' is now a chubee follower. Welcome <a:chubee_pat:881808870681481216>');
            } else if (userStats.level >= 5 && userStats.reached_level_5 === 0) {
                userStats.reached_level_5 = 1;
                if (msg.member) msg.member.roles.remove(chubee_follower.id);
                if (msg.member) msg.member.roles.add(chubee_disciple.id);
                msg.channel.send(msg.author.username + ' has been initiated as an official chubee disciple <:FlushingSoBad:922700411838808104>');
            } else if (userStats.level >= 10 && userStats.reached_level_10 === 0) {
                userStats.reached_level_10 = 1;
                if (msg.member) msg.member.roles.remove(chubee_disciple.id);
                if (msg.member) msg.member.roles.add(chubee_priest.id);
                msg.channel.send(msg.author.username + ' has promoted to a chubee priest <a:Poooooog:922704264164429884>');
            } else if (userStats.level >= 15 && userStats.reached_level_15 === 0) {
                userStats.reached_level_15 = 1;
                if (msg.member) msg.member.roles.remove(chubee_priest.id);
                if (msg.member) msg.member.roles.add(chubee_lector.id);
                msg.channel.send(msg.author.username + ' has been risen to the rank of chubee lector <a:dance:881812239856832512>');
            } else if (userStats.level >= 20 && userStats.reached_level_20 === 0) {
                userStats.reached_level_20 = 1;
                if (msg.member) msg.member.roles.remove(chubee_lector.id);
                if (msg.member) msg.member.roles.add(chubee_warrior_priest.id);
                msg.channel.send(msg.author.username + ' has been endorsed to become a chubee warrior priest <a:PeppeHype:922704263568834581>');
            } else if (userStats.level >= 25 && userStats.reached_level_25 === 0) {
                userStats.reached_level_25 = 1;
                if (msg.member) msg.member.roles.remove(chubee_warrior_priest.id);
                if (msg.member) msg.member.roles.add(chubee_holy_vocation.id);
                msg.channel.send(msg.author.username + ' has upheld their reputation to become a chubee holy vocation <:PogBee:927483798688514048>');
            } else if (userStats.level >= 30 && userStats.reached_level_30 === 0) {
                userStats.reached_level_30 = 1;
                if (msg.member) msg.member.roles.remove(chubee_holy_vocation.id);
                if (msg.member) msg.member.roles.add(chubee_arch_lector.id);
                msg.channel.send(msg.author.username + ' has shown immense dedication and is now a chubee arch lector <a:crackingup:881812240435654676>');
            } else if (userStats.level >= 50 && userStats.reached_level_50 === 0) {
                userStats.reached_level_50 = 1;
                if (msg.member) msg.member.roles.remove(chubee_arch_lector.id);
                if (msg.member) msg.member.roles.add(chubee_high_priest.id);
                msg.channel.send(msg.author.username + ' has championed their faith to the highest rank, a chubee high priest <a:ExcuseMe:922704264764207134>');
            }
        }

        //save stats to json file
        jsonfile.writeFileSync('stats.json', stats);

        //log every message xp up and level to xp
        console.log(msg.author.username + ' now has ' + userStats.xp);
        console.log(xpToNextLevel + ' XP needed for next level');
    }
    //Chubee pat start
    if (between(1, 100) === 1 && (messageLower === 'need pats!' || messageLower === 'need pats')) {
        msg.reply('No <a:rickroll:881812240100114472><:HappyGun:922702232682627103>')
    } else if (messageLower.includes('may i get a prayer')) {
        msg.reply('Our Queen\nWho art in Miyako\nHallowed be thy chubee\nThy Waspeen come\nThy will be done on Arissola as it is in Miyako\n Give us this day our daily pansun\n And forgive us our breedjects\nAs we forgive those who never become perfect\nAnd lead us not into saipats, but deliver us from evil');
    } else if (messageLower === 'need pats!') {
        msg.reply('<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216>' + '\n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n Pats delivered! <:LumaChubee:921287077017055253>');
    } else if (messageLower === 'need pats') {
        msg.reply('<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216>' + '\n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n Pats delivered! <:LumaChubee:921287077017055253>');
    } else if ((messageLower).includes('saipats') || (messageLower).includes('saipat')){
        msg.reply("Saipat will never amount to anything <a:PeppoHammer:922703155542782002> just like you if you keep typing that dreaded name in this server <:HappyGun:922702232682627103>");
    } else if ((messageLower).includes('spats')) {
        msg.reply('Are you spitting on me?');
    } else if ((messageLower).includes('pats')) {
        msg.reply('Did someone say pats <a:kek:881812233913520169> \n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216>' + '\n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216> \n<a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216><a:chubee_pat:881808870681481216>');
    } else if (messageLower.includes('lord chubee') && messageLower.includes('bless me with my stats') && messageLower.includes('i pray to you')) {
        msg.reply('your prayer is answered, ' + msg.author.username + " <a:crackingup:881812240435654676>. \nYour current level is " + userStats.level + " \nYour current XP is " + userStats.xp + ", and you need to reach " + xpToNextLevel + " XP to level up");
    }
    //chubee pat ends
  });//end message events

//welcome message 
client.on('guildMemberAdd', async (member) => {
    const img = await generateImage(member);
    const welcomeMessage = '<@' + member.user.id + '>  welcome to my cul-, I mean club!';
    const channel = member.guild.channels.cache.find(i => i.name === 'welcome');
    channel.send({
        content: welcomeMessage,
        files: [img]
        });
}); //end welcome message


//actions to be done on bot first online
client.once('ready', () => {
    console.log('Chubee is online!');
    client.user.setActivity('your prayers', { type: 'LISTENING' });
});
//end logon message

//must be at the end
client.login(process.env.TOKEN);