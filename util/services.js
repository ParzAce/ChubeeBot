
const Discord = require("discord.js")

const commandArrays = [ "rental", "leveling"]
const commandCounter = 2

const commandHandler = (command) => {
    var commandBool = false
    var commandDet = 0
    const nudeCommand = command.content.substring(1)
    const nudeCommands = nudeCommand.split(" ")
    const rentalChannel = command.member.guild.channels.cache.find(i => i.name === 'club-services')
    for (i = 0; i < commandCounter; i++) {
        if (nudeCommands[0] === commandArrays[i]) {
            commandDet = i
            commandBool = true
        }
    }

    if (commandDet === 0 && nudeCommands.length === 2) {
        if (command.channel.id === rentalChannel.id) {
            rental(command, nudeCommands)
        } else {
            return
        }
    } else if (commandDet === 1 && nudeCommands.length === 3) {
        if (command.channel.id === rentalChannel.id) {
            leveling(command, nudeCommands)
        } else {
            return
        }
    }
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

module.exports = commandHandler;