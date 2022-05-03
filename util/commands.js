var moment = require('moment');
const Discord = require("discord.js");

const commandArrays = ["dojotimes"]
const commandCounter = 1;

const commandHandler = (command, bot) => {
    var commandBool = false
    var commandDet = 0
    const nudeCommand = command.content.substring(1)
    const nudeCommands = nudeCommand.split(" ")
    for (i = 0; i < commandCounter; i++) {
        if (nudeCommands[0] == commandArrays[i]) {
            commandDet = i
            commandBool = true
        }
    }

    if (commandBool === false) {
        return
    } else if (commandDet === 0 && nudeCommands.length === 1) {
        dojoTimes(command)
    }



}


const dojoTimes = (message) => {

    console.log("2");

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

    if (hours > 3) {
        denizDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 7) {
        omniDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 11) {
        tucmaDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 15) {
        kisiwaDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 19) {
        cipankuDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 23) {
        arburyDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }


    var denizDT = year + "-" + month + "-" + denizDay + " " + 3 + ":" + "00" + ":" + "00";
    var omniDT = year + "-" + month + "-" + omniDay + " " + 7 + ":" + "00" + ":" + "00";
    var tucmaDT = year + "-" + month + "-" + tucmaDay + " " + 11 + ":" + "00" + ":" + "00";
    var kisiwaDT = year + "-" + month + "-" + kisiwaDay + " " + 15 + ":" + "00" + ":" + "00";
    var cipankuDT = year + "-" + month + "-" + cipankuDay + " " + 19 + ":" + "00" + ":" + "00";
    var arburyDT = year + "-" + month + "-" + arburyDay + " " + 23 + ":" + "00" + ":" + "00";


    //find unix for each island
    const deniz = moment(denizDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const omni = moment(omniDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const tucma = moment(tucmaDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const kisiwa = moment(kisiwaDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const cipanku = moment(cipankuDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const arbury = moment(arburyDT, 'YYYY-MM-DD HH:mm:ss').unix()


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