var moment = require('moment');
const Discord = require("discord.js");

const commandArrays = ["dojotimes", "rental", "leveling", "vault"]
const commandCounter = 4;

const commandHandler = (command) => {
    var commandBool = false
    var commandDet = 0
    const nudeCommand = command.content.substring(1)
    const nudeCommands = nudeCommand.split(" ")
    const rentalChannel = command.member.guild.channels.cache.find(i => i.name === 'club-services');
    for (i = 0; i < commandCounter; i++) {
        if (nudeCommands[0] === commandArrays[i]) {
            commandDet = i
            commandBool = true
        }
    }

    if (commandBool === false) {
        return
    } else if (commandDet === 0 && nudeCommands.length === 1) {
        dojoTimes(command)
    } else if (commandDet === 1 && nudeCommands.length === 2) {
        if (command.channel.id === rentalChannel.id) {
            rental(command, nudeCommands)
        } else {
            return
        }
    } else if (commandDet === 2 && nudeCommands.length === 3) {
        if (command.channel.id === rentalChannel.id) {
            leveling(command, nudeCommands)
        } else {
            return
        }
    } else if (commandDet === 3 && nudeCommands.length > 2) {
        if (command.channel.id === rentalChannel.id) {
            vault(command, nudeCommands)
        } else {
            return
        }
    }
}

const vault = (message, commandString) => {
    const user = message.author.username
    const inboundChannel = message.member.guild.channels.cache.find(i => i.name === 'services-inbound');
    message.delete()
    var reasonString = ""
    for (i = 2; i != commandString.length; i++) {
        reasonString += " " + commandString[i]
    }
    message.author.send("*Bzzzzt*\n\n\nWe have recieved your request! \n\nSomeone will be reaching out to you shortly <a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
    inboundChannel.send({
        content: "---------------------------------------------------------------\n" + user + " has requested " + commandString[1] + " from the vault with reason: " + reasonString + "\n\n\n Please react with a checkmark if you want to take the request"
        });

}

const leveling = (message, commandString) => {
    const user = message.author.username
    const inboundChannel = message.member.guild.channels.cache.find(i => i.name === 'services-inbound');
    message.delete()
    if (commandString[1] === "normal" && commandString[2] > 0 && commandString[2] < 9) {
        message.author.send("*Bzzzzt*\n\n\nWe have recieved your request! \n\nSomeone will be reaching out to you shortly <a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        inboundChannel.send({
            content: "---------------------------------------------------------------\n" + user + " has requested a normal leveling package for " + commandString[2] + " Tems\n\n\n Please react with a checkmark if you want to take the request"
            });
    } else if (commandString[1] === "rush" && commandString[2] > 0 && commandString[2] < 5) {
        message.author.send("*Bzzzzt*\n\n\nWe have recieved your request! \n\nSomeone will be reaching out to you shortly <a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        inboundChannel.send({
            content: "---------------------------------------------------------------\n" + user + " has requested a rush leveling package for " + commandString[2] + " Tems\n\n\n Please react with a checkmark if you want to take the request"
            });
    } else {
        message.author.send("*Bzzzzt*\n\n\nYou might have entered the command in wrong<a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        return
    }
}

const rental = (message, commandString) => {
    const user = message.author.username
    const inboundChannel = message.member.guild.channels.cache.find(i => i.name === 'services-inbound');
    message.delete()
    if (commandString[1] === "radar") {
        message.author.send("*Bzzzzt*\n\n\nWe have recieved your request! \n\nSomeone will be reaching out to you shortly <a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        inboundChannel.send({
            content: "---------------------------------------------------------------\n" + user + " has requested a radar package\n\n\n Please react with a checkmark if you want to take the request"
            });
    } else if (commandString[1] === "full") {
        console.log("message")
        message.author.send("*Bzzzzt*\n\n\nWe have recieved your request! \n\nSomeone will be reaching out to you shortly <a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        inboundChannel.send({
            content: "---------------------------------------------------------------\n" + user + " has requested a full package\n\n\n Please react with a checkmark if you want to take the request"
            });
    } else if (commandString[1] === "plain") {
        message.author.send("*Bzzzzt*\n\n\nWe have recieved your request! \n\nSomeone will be reaching out to you shortly <a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        inboundChannel.send({
            content: "---------------------------------------------------------------\n" + user + " has requested a plain package\n\n\n Please react with a checkmark once the rental team has been rented out"
            });
    } else {
        message.author.send("*Bzzzzt*\n\n\nYou might have entered the command in wrong<a:lumaChubeePat:964325660803858452>\n\n\n*Bzzzzt*")
        return
    }
}


const dojoTimes = (message) => {


    //find current time and then put it in the YYYY-MM-DD HH:mm:ss format
   
    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
   
    
    var hours = date_ob.getHours();
    
    var denizDay = day
    var omniDay = day
    var tucmaDay = day
    var kisiwaDay = day
    var cipankuDay = day
    var arburyDay = day

    if (hours > 8) {
        denizDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 12) {
        omniDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 16) {
        tucmaDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 20) {
        kisiwaDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 24) {
        cipankuDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 4) {
        arburyDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }


    var denizDT = year + "-" + month + "-" + denizDay + " " + 8 + ":" + "00" + ":" + "00";
    var omniDT = year + "-" + month + "-" + omniDay + " " + 12 + ":" + "00" + ":" + "00";
    var tucmaDT = year + "-" + month + "-" + tucmaDay + " " + 16 + ":" + "00" + ":" + "00";
    var kisiwaDT = year + "-" + month + "-" + kisiwaDay + " " + 20 + ":" + "00" + ":" + "00";
    var cipankuDT = year + "-" + month + "-" + cipankuDay + " " + 24 + ":" + "00" + ":" + "00";
    var arburyDT = year + "-" + month + "-" + arburyDay + " " + 4 + ":" + "00" + ":" + "00";


    //get unix for each island
    const deniz = moment(denizDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const omni = moment(omniDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const tucma = moment(tucmaDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const kisiwa = moment(kisiwaDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const cipanku = moment(cipankuDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const arbury = moment(arburyDT, 'YYYY-MM-DD HH:mm:ss').unix()

    //create embed to send
    const dojoEmbed = new Discord.MessageEmbed()
            .setColor('#304281').setTitle('Dojo War Times')
            .setThumbnail('https://i.imgur.com/mCnedBW.jpg')
            .addField("Deniz Dojo", "<t:" + deniz + ":R> (<t:" + deniz + ":F>)")
            .addField("Omninesia Dojo", "<t:" + omni + ":R> (<t:" + omni + ":F>)")
            .addField("Tucma Dojo", "<t:" + tucma + ":R> (<t:" + tucma + ":F>)")
            .addField("Kisiwa Dojo", "<t:" + kisiwa + ":R> (<t:" + kisiwa + ":F>)")
            .addField("Cipanku Dojo", "<t:" + cipanku + ":R> (<t:" + cipanku + ":F>)")
            .addField("Arbury Dojo", "<t:" + arbury + ":R> (<t:" + arbury + ":F>)")

    message.channel.send({ embeds: [dojoEmbed] });
}

module.exports = commandHandler;