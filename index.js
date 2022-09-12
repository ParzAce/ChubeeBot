const Discord = require('discord.js');
const { Client, Intents, partials, messageCreate, guildMemberUpdate, guildMemberAdd } = require('discord.js');
require("dotenv").config();
const jsonfile = require('jsonfile');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],  partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER", "USER"]});
const commandHandler = require('./util/services.js')
const dojoTimes = require('./util/dojotimes.js')
const gamble = require('./util/gamble.js')
const random = require('random')

//command handler
let bot = {
    client,
    prefix: '^',
    owners: ['173216366847852544']
}

//pull stats from json file
var stats = {};
if (fs.existsSync('stats.json')) {
    stats = jsonfile.readFileSync('stats.json');
}

var beeBucks = {};
if (fs.existsSync('beeBucks.json')) {
    beeBucks = jsonfile.readFileSync('beeBucks.json');
}

//function for finding a random int in a range
function between(min, max) {
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

//bot tasks when a guild member is updated
client.on('guildMemberUpdate', (oldMember, newMember) => {
    console.log("Here")
    //recruit messages when someone is given the recruit role
    const oldMemberRecruitID = oldMember.roles.cache.some((r) => r.name === 'Recruit')
    const newMemberRecruitID = newMember.roles.cache.some((r) => r.name === 'Recruit')
    const oldMemberClubID = oldMember.roles.cache.some((r) => r.name === 'Club Member')
    const newMemberClubID = newMember.roles.cache.some((r) => r.name === 'Club Member')
    const genChannel = newMember.guild.channels.cache.find(i => i.name === 'general')
    const clubChannel = newMember.guild.channels.cache.find(i => i.name === 'club-chat')
    if (newMemberRecruitID) {
        console.log(oldMemberRecruitID)
        if (!oldMemberRecruitID) {
            genChannel.send('WELCOME <@' + newMember.user.id + '> to the ~~cult~~ club as a recruit <a:pepesimp:881812231208181790>')
        } else {
            return
        }
    } else if (newMemberClubID) {
        if (!oldMemberClubID) {
            clubChannel.send('WELCOME <@' + newMember.user.id + '> as a new ~~cult~~ club member <a:pepesimp:881812231208181790>')
        } else {
            return
        }
    }
});







//bot tasks when someone sends a message
client.on('messageCreate', (msg) => {
    const rentalChannel = msg.member.guild.channels.cache.find(i => i.name === 'club-services');
    if (msg.author.id == client.user.id){
        return;
    }
    
    if (msg.content.substring(0, 1) === '^') {
        commandHandler(msg)
        return
    }

    if (msg.channel.id === rentalChannel.id) {
        msg.delete()
        msg.author.send("*Bzzzzt*\n\n\nThis channel is for rental requests only <a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        return
    }


    //get role IDs to set roles for the level system
    const chubee_follower = msg.guild.roles.cache.find((r) => r.name === 'Chubee Follower')
    const chubee_disciple = msg.guild.roles.cache.find((r) => r.name === 'Chubee Disciple')
    const chubee_priest = msg.guild.roles.cache.find((r) => r.name === 'Chubee Priest')
    const chubee_lector = msg.guild.roles.cache.find((r) => r.name === 'Chubee Lector')
    const chubee_warrior_priest = msg.guild.roles.cache.find((r) => r.name === 'Chubee Warrior Priest')
    const chubee_holy_vocation = msg.guild.roles.cache.find((r) => r.name === 'Chubee Holy Vocation')
    const chubee_arch_lector = msg.guild.roles.cache.find((r) => r.name === 'Chubee Arch Lector')
    const chubee_high_priest = msg.guild.roles.cache.find((r) => r.name === 'Chubee High Priest')

    const message = msg.content;
    const messageLower = message.toLowerCase()
    //add user to guild
    if (msg.guild.id in stats === false) {
        stats[msg.guild.id] = {};
    }
    if (msg.guild.id in beeBucks === false) {
    beeBucks[msg.guild.id] = {};
    }
    //set base bee bucks for user
    const guildbucks = beeBucks[msg.guild.id]
    if (msg.author.id in guildbucks === false) {
        guildbucks[msg.author.id] = {
            Bee_Bucks: 0,
            last_message: 0
        };

        jsonfile.writeFileSync('beeBucks.json', beeBucks)
    }

    //set base stats for user
    const guildStats = stats[msg.guild.id]
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
    //add xp for messages and set last message and for bee bucks
    const userStats = guildStats[msg.author.id]
    const userBucks = guildbucks[msg.author.id]
    const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
    if (Date.now() - userBucks.last_message > 43200000) {
        userBucks.last_message = Date.now()
        userBucks.Bee_Bucks += 100
        jsonfile.writeFileSync('beeBucks.json', beeBucks)
    }
    if (Date.now() - userStats.last_message > 60000) {
        userStats.xp += between(15, 25)
        //userStats.xp += 1000;
        userStats.last_message = Date.now()
        //setup what xp needs for levels and reseting/setting levels and xp and adding roles for certain levels
        if (userStats.xp >= xpToNextLevel) {
            userStats.level++;
            userStats.xp = userStats.xp - xpToNextLevel
            buckGain = userStats.level * 25
            userBucks.Bee_Bucks += buckGain
            jsonfile.writeFileSync('beeBucks.json', beeBucks)
            const levelUpEmbed = new Discord.MessageEmbed()
            .setColor('#304281').setTitle('Level Up!')
            .setURL('https://www.youtube.com/channel/UCVpvUT4E0PLG4v5cgoGPG-A')
            .setDescription(msg.author.username + ' has increased their chubee faith level to ' + userStats.level + ' <a:pepesimp:881812231208181790> \n')
            .setThumbnail('https://i.imgur.com/mCnedBW.jpg')
            .addField('Bee Bucks Gained', '<:BeeBuck:982008803308486656>' + buckGain + '<:BeeBuck:982008803308486656>');
            msg.channel.send({ embeds: [levelUpEmbed] });
            //levelUpEmbed.setDescription(msg.author.username + ' has increased their chubee faith level to ' + userStats.level + ' <a:pepesimp:881812231208181790> \n');
            if (userStats.level >= 1 && userStats.reached_level_1 === 0) {
                userStats.reached_level_1 = 1;
                if (msg.member) msg.member.roles.add(chubee_follower.id);
                levelUpEmbed.setDescription(msg.author.username + ' is now a chubee follower. Welcome <a:chubee_pat:881808870681481216>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            } else if (userStats.level >= 5 && userStats.reached_level_5 === 0) {
                userStats.reached_level_5 = 1;
                if (msg.member) msg.member.roles.remove(chubee_follower.id);
                if (msg.member) msg.member.roles.add(chubee_disciple.id);
                levelUpEmbed.setDescription(msg.author.username + ' has been initiated as an official chubee disciple <:cursedpog1:968942514117677116>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            } else if (userStats.level >= 10 && userStats.reached_level_10 === 0) {
                userStats.reached_level_10 = 1;
                if (msg.member) msg.member.roles.remove(chubee_disciple.id);
                if (msg.member) msg.member.roles.add(chubee_priest.id);
                levelUpEmbed.setDescription(msg.author.username + ' has promoted to a chubee priest <a:Poooooog:922704264164429884>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            } else if (userStats.level >= 15 && userStats.reached_level_15 === 0) {
                userStats.reached_level_15 = 1;
                if (msg.member) msg.member.roles.remove(chubee_priest.id);
                if (msg.member) msg.member.roles.add(chubee_lector.id);
                levelUpEmbed.setDescription(msg.author.username + ' has been risen to the rank of chubee lector <a:dance:881812239856832512>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            } else if (userStats.level >= 20 && userStats.reached_level_20 === 0) {
                userStats.reached_level_20 = 1;
                if (msg.member) msg.member.roles.remove(chubee_lector.id);
                if (msg.member) msg.member.roles.add(chubee_warrior_priest.id);
                levelUpEmbed.setDescription(msg.author.username + ' has been endorsed to become a chubee warrior priest <a:PeppeHype:922704263568834581>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            } else if (userStats.level >= 25 && userStats.reached_level_25 === 0) {
                userStats.reached_level_25 = 1;
                if (msg.member) msg.member.roles.remove(chubee_warrior_priest.id);
                if (msg.member) msg.member.roles.add(chubee_holy_vocation.id);
                levelUpEmbed.setDescription(msg.author.username + ' has upheld their reputation to become a chubee holy vocation <:PogBee:927483798688514048>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            } else if (userStats.level >= 30 && userStats.reached_level_30 === 0) {
                userStats.reached_level_30 = 1;
                if (msg.member) msg.member.roles.remove(chubee_holy_vocation.id);
                if (msg.member) msg.member.roles.add(chubee_arch_lector.id);
                levelUpEmbed.setDescription(msg.author.username + ' has shown immense dedication and is now a chubee arch lector <:SHEEESH:950132785144815646>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            } else if (userStats.level >= 50 && userStats.reached_level_50 === 0) {
                userStats.reached_level_50 = 1;
                if (msg.member) msg.member.roles.remove(chubee_arch_lector.id);
                if (msg.member) msg.member.roles.add(chubee_high_priest.id);
                levelUpEmbed.setDescription(msg.author.username + ' has championed their faith to the highest rank, a chubee high priest <a:ExcuseMe:922704264764207134>');
                levelUpEmbed.fields = [];
                msg.channel.send({ embeds: [levelUpEmbed] });
            }
        }

        //save stats to json file
        jsonfile.writeFileSync('stats.json', stats);

        //log every message xp up and level to xp
        console.log(msg.author.username + ' now has ' + userStats.xp);
        console.log(xpToNextLevel + ' XP needed for next level');
        console.log('<:BeeBuck:982008803308486656>' + userBucks.Bee_Bucks + '<:BeeBuck:982008803308486656>' + ' Bee bucks for user ' + msg.author.username);
    }


    //command handler


    //Chubee text start
    if (messageLower.includes('may i get a prayer')) {
        msg.reply('Our Queen\nWho art in Miyako\nHallowed be thy chubee\nThy Waspeen come\nThy will be done on Arissola as it is in Miyako\n Give us this day our daily pansun\n And forgive us our breedjects\nAs we forgive those who never become perfect\nAnd lead us not into saipats, but deliver us from evil');   
    } else if ((messageLower).includes('saipats') || (messageLower).includes('saipat')){
        msg.reply("Saipat will never amount to anything <a:PeppoHammer:922703155542782002> just like you if you keep typing that dreaded name in this server <:HappyGun:922702232682627103>");
    } else if ((messageLower).includes('pats')) {

        var hasLuma = 0;
        var lumaCount = 0;
        var lumaOdds = [];
        for (i = 0; i < 16; i++) {
            const odds = random.int((min = 1), (max = 16))
            console.log(odds)
            const odds2 = random.int((min = 1), (max = 16))
            console.log(odds2)
            if (odds === 5 && odds2 === 5) {
                lumaOdds[i] = '<a:lumaChubeePat:964325660803858452>'
                hasLuma = 1;
                lumaCount++;
            } else {
                lumaOdds[i] = '<a:chubee_pat:881808870681481216>'
            }
        }


        msg.reply('Did someone say pats? \n'+ 
        lumaOdds[0] + lumaOdds[1] + lumaOdds[2] + lumaOdds[3] + 
        '\n' + lumaOdds[12] + lumaOdds[13] + lumaOdds[14] + lumaOdds[15] + 
        '\n' + lumaOdds[4] + lumaOdds[5] + lumaOdds[6] + lumaOdds[7] + 
        '\n' + lumaOdds[8] + lumaOdds[9] + lumaOdds[10] + lumaOdds[11])

        if (hasLuma === 1) {
            if (lumaCount === 1) {
                msg.reply("Wow <a:ExcuseMe:922704264764207134>, You found a luma <a:lumaChubeePat:964325660803858452>! \n\n\n" 
                + "Here's <:BeeBuck:982008803308486656>1000<:BeeBuck:982008803308486656> Bee Bucks for your accomplishment")
                userBucks.Bee_Bucks += 1000
            } else {
                msg.reply("Wow <a:ExcuseMe:922704264764207134>, You found " + lumaCount + " luma <a:lumaChubeePat:964325660803858452>! \n\n\n" 
                + "Here's <:BeeBuck:982008803308486656>" + (1000 * lumaCount) + "<:BeeBuck:982008803308486656> Bee Bucks for your accomplishment")
                userBucks.Bee_Bucks += (1000 * lumaCount)
            }

            jsonfile.writeFileSync('beeBucks.json', beeBucks)

        }


    } else if (messageLower.includes('lord chubee') && messageLower.includes('bless me with my stats') && messageLower.includes('i pray to you')) {
        const levelsEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle(msg.author.username + ' Player Stats')
            .setDescription('Your prayer has been answered')
            .setThumbnail('https://i.imgur.com/mCnedBW.jpg')
            .addField('Level', '' + userStats.level, true)
            .addField('Current XP', '' + userStats.xp, true)
            .addField('XP needed for next level', '' + xpToNextLevel, true)
            .addField('\u200B', '\u200B')
            .addField('Bee bucks', '<:BeeBuck:982008803308486656>' + userBucks.Bee_Bucks + '<:BeeBuck:982008803308486656>', true)
        msg.reply({ embeds: [levelsEmbed] })
    }
    //chubee pat ends

    console.log(userBucks.Bee_Bucks)

  });//end message events


client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }


    const { commandName, options } = interaction

    //dojotimes command
    if (commandName === 'dojotimes') {
        const dojotimesEmbed = dojoTimes()
        const messageId = await interaction.reply({ embeds: [ dojotimesEmbed ] })

        //gamble command
    } else if (commandName === 'gamble') {

        const guildbucks = beeBucks[interaction.guild.id]
        const userBucks = guildbucks[interaction.user.id]
        const gambleNumber = options.getInteger('gambleamount')

        if (gambleNumber === 0 || gambleNumber === null || gambleNumber > userBucks.Bee_Bucks) {
            interaction.reply({
                content: 'Please enter a valid number, you have ' + userBucks.Bee_Bucks + ' Bee bucks.',
                ephemeral: true,
            })
        } else {
            const winner = gamble()
            if (winner == 0) {
                userBucks.Bee_Bucks= userBucks.Bee_Bucks - gambleNumber
                jsonfile.writeFileSync('beeBucks.json', beeBucks)
                interaction.reply({
                    content: '*Bzzzzt* unfortunately, I have decided to take your Bee bucks <a:badcat:968943095657943041> you have ' + userBucks.Bee_Bucks + ' Bee bucks left *Bzzzzt*',
                    ephemeral: true,
                })
            } else {
                userBucks.Bee_Bucks += gambleNumber
                jsonfile.writeFileSync('beeBucks.json', beeBucks)
                interaction.reply({
                    content: '*Bzzzzt* It seems you are worthy <:LumaChubee:921287077017055253> you have ' + userBucks.Bee_Bucks + ' Bee bucks now *Bzzzzt*',
                    ephemeral: true,
                })
            }
        }
    }
})



client.on('ready', () => {
    console.log('Chubee is online!');
    bot.client.user.setActivity('your prayers', { type: 'LISTENING' });

    const guildTestID = '934725647266357288'
    const guildID = '834466510322794496'
    const guild = client.guilds.cache.get(guildID)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }


    commands?.create({
        name: 'dojotimes',
        description: 'Display the dojo war times for each dojo',
    })

    commands?.create({
        name: 'gamble',
        description: 'Gamble your bee bucks away',
        options: [ 
            {
                name: 'gambleamount',
                description: 'How many bee bucks to gamble',
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.INTEGER,
            }
        ]
    })

})



//must be at the end
client.login(process.env.TOKEN);